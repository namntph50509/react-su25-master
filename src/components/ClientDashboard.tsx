import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

import {
  ShoppingOutlined,
  AppstoreOutlined,
  UserOutlined,
  TagsOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import ProductList from './ProductList';
import CategoryList from './CategoryList';
import UserList from './UserList';
import BrandList from './BrandList';
import OrderList from './OrderList';

const { Title } = Typography;

const ClientDashboard: React.FC = () => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
        🖥️ Client Dashboard
      </Title>

      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card title={<><ShoppingOutlined /> Sản phẩm</>} bordered hoverable>
            <ProductList />
          </Card>
        </Col>

        <Col span={24}>
          <Card title={<><AppstoreOutlined /> Danh mục</>} bordered hoverable>
            <CategoryList />
          </Card>
        </Col>

        {/* <Col span={24}>
          <Card title={<><UserOutlined /> Người dùng</>} bordered hoverable>
            <UserList />
          </Card>
        </Col> */}

        {/* <Col span={24}>
          <Card title={<><TagsOutlined /> Thương hiệu</>} bordered hoverable>
            <BrandList />
          </Card>
        </Col>

        <Col span={24}>
          <Card title={<><ShoppingCartOutlined /> Đơn hàng</>} bordered hoverable>
            <OrderList />
          </Card>
        </Col> */}
      </Row>
    </div>
  );
};

export default ClientDashboard;
