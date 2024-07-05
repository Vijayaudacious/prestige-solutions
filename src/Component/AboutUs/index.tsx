import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Row, Col, Typography, Divider, Space } from "antd";
import styles from "./style.module.less";

const { Title, Paragraph } = Typography;

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container} id="about">
      <Divider className={styles.customDivider}>About Us</Divider>

      <div className={styles.section}>
        <Row justify="center" gutter={[16, 16]} className={styles.cardRow}>
          <Col xs={24} md={8} className={styles.textCol} data-aos="fade-right">
            <Title level={3} className={styles.heding}>
              Prestige consultant, a renowned and leading Job Placement
              Consultancy, now makes your job search simple and easy.
            </Title>
            <Paragraph className={styles.leadDescription}>
              We are the recruitment agency supporting employers from various
              domains to find their qualified candidates and fill the jobs
              within the required timeline. Our Manpower recruitment consultancy
              services encompass all levels of professional expertise ranging
              broadly across all companies and industries. We are a young and
              dynamic firm with core expertise in fulfilling any kind of
              recruitment & staffing requirements.
            </Paragraph>
            <Paragraph className={styles.leadDescription}>
              Although we started primarily as a recruitment-oriented firm, our
              natural progression has been into Human Resource Consulting &
              Business / Management Consulting areas.
            </Paragraph>
          </Col>
          <Col xs={24} md={12} className={styles.imageCol} data-aos="fade-left">
            <img
              src="https://i.insider.com/5e46cc154b661b186311de02?width=700"
              alt="HRM Solution"
              className={styles.image}
            />
          </Col>
        </Row>
      </div>

      <div className={styles.section}>
        <Row justify="center" gutter={[16, 16]} className={styles.cardRow}>
          <Col xs={24} md={8} className={styles.imageCol} data-aos="fade-right">
            <img
              src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/921054574BusinessSpecialist.jpg=ws1280x960"
              alt="Our Team"
              className={styles.image}
            />
          </Col>
          <Col xs={24} md={7} className={styles.textCol} data-aos="fade-left">
            <Title level={3} className={styles.heding}>
              Job placement services
            </Title>
            <Paragraph className={styles.leadDescription}>
              We provide top-tier job placement services to help individuals
              find their perfect match in the job market. Our team ensures that
              you get the best opportunities tailored to your skills and
              aspirations.
            </Paragraph>
          </Col>
        </Row>
      </div>

      <div className={styles.section}>
        <Row justify="center" gutter={[16, 16]} className={styles.cardRow}>
          <Col xs={24} md={8} className={styles.textCol} data-aos="fade-right">
            <Title level={3} className={styles.heding}>
              Staffing solutions for companies
            </Title>
            <Paragraph className={styles.leadDescription}>
              We assist companies in finding the right talent quickly and
              efficiently. Whether you need temporary staffing or permanent
              hires, our expertise helps fill your roles with qualified
              candidates.
            </Paragraph>
          </Col>
          <Col xs={24} md={10} className={styles.imageCol} data-aos="fade-left">
            <img
              src="https://businessconsultingagency.com/wp-content/uploads/2023/09/impact-of-consulting-services.jpg"
              alt="Our Mission"
              className={styles.image}
            />
          </Col>
        </Row>
        <Divider orientation="left">
          <h1 className={styles.heding}>Lead Generation​</h1>
        </Divider>
        <Space
          style={{ width: "10%", alignItems: "start", alignContent: "start" }}
          align="start"
        ></Space>

        <Paragraph className={styles.leadDescription}>
          Lead generation is not a matter of spending Money on ads. The​ Divine
          Solutions make it easy for people looking for jobs​ Recruitment
          services to find your site. We will craft a lead​ generation strategy
          that’s just for you and then we will execute​ it Through.​
        </Paragraph>
      </div>
      <Paragraph>
        <ul className={styles.arrowList}>
          <li>Job Portals​</li>
          <li>Job Hunting​</li>
          <li>Vast Database​</li>
          <li>Sub Vendors​</li>
          <li>Social Media ​</li>
          <li>Freelancers​</li>
          <li>Print Media ​</li>
        </ul>
      </Paragraph>
    </div>
  );
};

export default AboutUs;
