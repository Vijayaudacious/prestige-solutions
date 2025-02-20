import React from "react";
import { Menu } from "antd";
import { Link } from "react-scroll";
import styles from "./sryles.module.less";

const Header: React.FC = () => {
  return (
    <>
      <Menu mode="horizontal" theme="dark" className={styles.header}>
        <Menu.Item key="home">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="about" className={styles.title}>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </Menu.Item>

        <Menu.Item key="processing" className={styles.title}>
          <Link to="processing" smooth={true} duration={2000}>
            Our Processing
          </Link>
        </Menu.Item>
        <Menu.Item key="services" className={styles.title}>
          <Link to="services" smooth={true} duration={500}>
            Our Services
          </Link>
        </Menu.Item>
        <Menu.Item key="contact" className={styles.title}>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
