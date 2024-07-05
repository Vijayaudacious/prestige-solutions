import React from "react";
import { Layout } from "antd";
import Header from "./Component/Header";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import OurServices from "./Component/OurServices";
import Footer from "./Component/Footer";

import "./App.less";


const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ marginTop: "50px" }}>
        <Home />
        <AboutUs />
        {/* <ContactUs />
        <OurServices />
        <Footer /> */}
        </Content>
    </Layout>
  );
};

export default App;
