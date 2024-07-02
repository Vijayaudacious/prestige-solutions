import React from "react";
import { Button } from "antd";
import styles from "./styles.module.less";

const Home: React.FC = () => {
  return (
    <div
      id="home"
      className={styles.homeContainer}
      //   style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <h2>Find your job</h2>
        <h1>Build your career</h1>
        <ul className="features">
          <li>
            We understand this for you, it's never just a job. it's your
            business.{" "}
          </li>
          <p>
            Thats why we possionate about not only finding you a quality
            employee.
          </p>
          <p>But also the perfect fit.</p>
        </ul>
        <Button type="primary" className={styles.purchaseButton}>
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default Home;
