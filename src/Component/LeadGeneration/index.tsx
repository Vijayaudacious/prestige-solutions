import { Layout, Row, Col, Typography, List, Space, Card } from "antd";
import { RightOutlined } from "@ant-design/icons";
import styles from "./styles.module.less";
import HeaderTitle from "../HeaderTitle";

const {  Content } = Layout;
const { Title, Paragraph } = Typography;

const LeadGeneration = () => {
  const data = [
    "Job Portals",
    "Job Hunting",
    "Vast Database",
    "Sub Vendors",
    "Social Media",
    "Freelancers",
    "Print Media",
  ];

  return (
    <Layout className={styles.mainContainer}>
      <HeaderTitle title={"Lead Generation"} />
      <Content style={{ padding: "20px" }}>
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Card
              bordered={false}
              style={{ backgroundColor: "#e6f7ff", borderRadius: "10px" }}
            >
              <Title
                level={4}
                style={{ textAlign: "center", color: "#8e8e8e" }}
              >
                Lead generation is not a matter of spending money on ads. The
                Divine Solutions make it easy for people looking for jobs
                Recruitment services to find your site. We will craft a lead
                generation strategy that’s just for you and then we will execute
                it Through.
              </Title>
              <Paragraph style={{ textAlign: "center", marginTop: "20px" }}>
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Space>
                        <RightOutlined style={{ color: "#1890ff" }} />
                        {item}
                      </Space>
                    </List.Item>
                  )}
                  style={{ listStyleType: "none", paddingLeft: 0 }}
                />
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LeadGeneration;
