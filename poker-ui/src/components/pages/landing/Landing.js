import landingImg from "../../../image/landing.jpg";
import Button from "../../atoms/button/Button";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const navigate = useNavigate();

  const joinHandler = ()=>{
    navigate("/join")
  }
  const startHandler = ()=>{
    navigate("/start")
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${landingImg})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className={styles.btn_wrapper}>
          <Button
            onClick={joinHandler}
          >
            JOIN
          </Button>
          <Button
            onClick={startHandler}
          >
            START
          </Button>
        </div>
      </div>
    </>
  );
};

export default Landing;
