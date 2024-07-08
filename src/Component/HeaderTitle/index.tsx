import { Layout, Typography } from "antd";
import styles from "./styles.module.less";

const { Header } = Layout;
const { Title } = Typography;

const HeaderTitle = ({ title }: any) => {
  return (
    <div className={styles.mainContainer}>
      <Header
        style={{
          backgroundColor: "rgb(237 246 255 / 6%)",
          padding: "0 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Title
          level={3}
          style={{ color: "black", lineHeight: "64px", margin: 0 }}
        >
          {title}
        </Title>
      </Header>
    </div>
  );
};
export default HeaderTitle;
