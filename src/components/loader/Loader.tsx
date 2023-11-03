import { useEffect, useState } from "react"

export default function Loader(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="loaderContainer">
      <span />
      <span />
      <span />
      <h2>Redirection dans {timeLeft}</h2>
    </div>
  )
}