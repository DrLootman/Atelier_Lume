import { createPortal } from "react-dom";

type Props = {
  open?: boolean;
  title?: string;
  content?: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  title,
  content,
  onConfirm,
  onCancel,
  open
}: Props) {
  return createPortal(
    <>
      <dialog className="confirm-dialog" open={open} onCancel={onCancel}>
        <form action="" onSubmit={onConfirm} method="dialog">
          <h2>{title ?? "Confirmation"}</h2>
          <p>{content ?? "Voulez-vous vraiment confirmer cette action ?"}</p>
          <p>
            <button value="Cancel" type="button" onClick={onCancel}>
              Annuler
            </button>
            <button type="submit">Confirmer</button>
          </p>
        </form>
      </dialog>
    </>, document.body
  )
}