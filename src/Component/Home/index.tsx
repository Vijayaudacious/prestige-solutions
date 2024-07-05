import React, { useEffect, useState } from "react";
import { Row, Col, Button, Space } from "antd";
import styles from "./styles.module.less";
import useTypingEffect from "../../Hook/useTypingEffect/useTypingEffect";

const phrases = ["future", "goal", "dream", "life"];

const Home: React.FC = () => {
  const typedText = useTypingEffect(phrases);

  return (
    <div id="home" className={styles.homeContainer}>
      <Row justify="center" align="middle">
        <Col xs={24} md={16} className={styles.contentCol}>
          <Space direction="vertical">
            <h2 className={styles.subtitle}>Find your job</h2>
            <h1 className={styles.title}>
              <Space>
                Build your
                {typedText}
              </Space>
              <span className={styles.cursor}></span>
            </h1>
            <p className={styles.features}>
              <p>
                We understand this for you, it's never just a job. it's your
                business.
              </p>
              <p>
                That’s why we are passionate about not only finding you a
                quality employee.
              </p>
              <p>But also the perfect fit.</p>
            </p>
          </Space>
          <Button type="primary" className={styles.purchaseButton}>
            Contact Now
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
