"use client";

import { Layout } from "antd";

const { Content } = Layout;

const MainMenu = ({ children }) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};
export default MainMenu;
