import { Layout, Row, Col, Typography, Card } from "antd";
import styles from "./styles.module.less";
import HeaderTitle from "../HeaderTitle";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const VisionMission = () => {
  return (
    <Layout
      style={{ minHeight: "80vh", backgroundColor: "#f0f2f5" }}
      className={styles.mainContainer}
    >
      <Content style={{ padding: "20px",minHeight:"100vh" }} >
        <HeaderTitle title={"Our Vision & Mission"} />

        <Row
          gutter={[20, 20]}
          justify="center"
          className={styles.contentSection}
        >
         
          <Col xs={24} md={11} className={styles.slideRight}>
            <Card className={styles.missionCard} hoverable>
              <Title level={4}>Vision</Title>
              <Paragraph className={styles.description}>
                Our vision is to position the Intellnet family as a leading and
                trusted one-stop solution for all HR staffing needs, recognized
                for our expertise, reliability, and exceptional service. We aim
                to create a world where businesses can seamlessly find the right
                talent and where professionals can connect with opportunities
                that align with their career aspirations. By fostering a culture
                of excellence and innovation, we aspire to set new standards in
                the HR industry and be a catalyst for success in our clients'
                endeavors.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={11} className={styles.slideLeft}>
            <Card className={styles.missionCard} hoverable>
              <Title level={4}>Mission</Title>
              <Paragraph className={styles.description}>
                Our Mission is to go beyond the traditional role of a service
                provider and establish ourselves as a committed business
                partner. We strive to build lasting relationships with our
                clients by understanding their unique needs and delivering
                tailored solutions that drive mutual growth. Our motto, "Because
                Success lies in perfect combination," embodies our belief that
                true success is achieved through collaboration, innovation, and
                a commitment to excellence.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default VisionMission;
