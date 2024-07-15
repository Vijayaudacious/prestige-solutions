import { Button, Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-scroll";
import "./Header.css"; // Import your CSS file

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header className="header">
      <div className="logo">Ciseco.</div>
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="home">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </Menu.Item>

        <Menu.Item key="processing">
          <Link to="processing" smooth={true} duration={2000}>
            Our Processing
          </Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="services" smooth={true} duration={500}>
            Our Services
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </Menu.Item>
      </Menu>
      <Button className="contactBtn" type="primary">
        Contact
      </Button>
    </Header>
  );
};

export default AppHeader;
