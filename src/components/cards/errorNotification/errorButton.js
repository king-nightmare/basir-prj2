import { useEffect, useState } from "react";
import faild from "../../../assets/img/faild.png";
import Classes from "./errorButton.module.css";
const ErrorButton = (props) => {
  const [notifed, setNotifed] = useState(props.error);
  const buttonHnadler = () => {
    setNotifed(false);
    props.setError(true);
  };
  useEffect(() => {
    setNotifed(true);
  }, []);
  if (notifed) {
    return (
      <div className={Classes.errorCard}>
        <div>
          <img className={Classes.cardImg} src={faild} alt="Fiald card "></img>
        </div>
        <div>
          <p>{props.message}</p>
        </div>
        <button className={Classes.button} onClick={buttonHnadler}>
          OK
        </button>
      </div>
    );
  }
};
export default ErrorButton;
