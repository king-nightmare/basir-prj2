import Logo from "../../assets/img/logo.png";
import Classes from "./header.module.css";
import { useEffect,useState } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const iranTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tehran"}));
      setCurrentTime(iranTime.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, []);

  if(Logo&&currentTime){

    return(
      <div className={Classes.headerContainor}>
        <img className={Classes.headerImage} src={Logo} alt="logo of company" />
        <div className={Classes.headerTime}>{currentTime}</div>
      </div>
    );
  }
};
export default Header;
