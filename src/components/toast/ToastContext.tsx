import { ComponentProps, PropsWithChildren, createContext, useRef, useContext, useState, useCallback } from "react"
import { Toast } from "./Toast";
import { AnimatePresence, motion } from "framer-motion";

type Params = ComponentProps<typeof Toast> & { duration?: number };
type ToastItem = ComponentProps<typeof Toast> & { id: number };

const defaultPush = (toast: Params) => { };

const defaultValue = {
  pushToastRef: { current: defaultPush }
}

const ToastContext = createContext(defaultValue);

export function ToastContextProvider({ children }: PropsWithChildren) {
  const pushToastRef = useRef(defaultPush);
  return <ToastContext.Provider value={{ pushToastRef }}>
    <Toasts />
    {children}
  </ToastContext.Provider>
}

export function useToasts() {
  const { pushToastRef } = useContext(ToastContext);
  return {
    pushToast: useCallback((toast: Params) => {
      pushToastRef.current(toast)
    }, [pushToastRef])
  }
}

function Toasts() {
  const [toasts, setToasts] = useState([] as ToastItem[])
  const { pushToastRef } = useContext(ToastContext);

  pushToastRef.current = ({ duration, ...props }: Params) => {
    const toast = { ...props, id: Date.now() }
    setToasts(initialValue => [...initialValue, toast]);
    if (duration) {
      setTimeout(() => {
        setToasts((initialValue) => initialValue.filter((t) => t !== toast));
      }, (duration ?? 5) * 1000)
    }
  }

  // const onRemove = (toast: ToastItem) => {
  //   setToasts((initialValue) => initialValue.filter((t) => t !== toast));
  // };

  return (
    <div className="toast-container">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            // onClick={onRemove(toast)}
            key={toast.id}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
          >
            <Toast {...toast} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}