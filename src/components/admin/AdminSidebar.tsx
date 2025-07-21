import React from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  TagsOutlined
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={({ key }) => navigate(key)}  
      style={{ height: "100%", borderRight: 0 }}
      items={[
        {
          key: "/admin",
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
        {
          key: "/admin/products",
          icon: <AppstoreOutlined />,
          label: "Quản lý sản phẩm",
        },
        {
          key: "/admin/categories",
          icon: <TagsOutlined />,
          label: "Quản lý danh mục",
        },
      ]}
    />
  );
};

export default AdminSidebar; 