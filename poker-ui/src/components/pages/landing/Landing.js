import landingImg from "../../../image/landing.jpg";
import Button from "../../button/Button";
import styles from "./Landing.module.css";

const Landing = () => {
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
            onClick={() => {
              alert("Join button clicked");
            }}
          >
            JOIN
          </Button>
          <Button
            onClick={() => {
                alert("Start button clicked");
            }}
          >
            START
          </Button>
        </div>
      </div>
    </>
  );
};

export default Landing;
