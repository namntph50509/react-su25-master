import React from "react";
import { Layout } from "antd";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const { Sider, Header, Content } = Layout;

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={220} style={{ background: "#222" }}>
        <AdminSidebar />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <AdminHeader />
        </Header>
        <Content style={{ margin: 24, background: "#fff", padding: 24, minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout; 