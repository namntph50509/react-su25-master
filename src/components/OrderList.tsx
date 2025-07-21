import React, { useEffect, useState } from 'react';

interface OrderItem {
  productId: number;
  quantity: number;
}

interface Order {
  id: string;
  userId: number;
  date: string;
  status: string;
  items: OrderItem[];
}

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div>
      <h3>Danh sách đơn hàng</h3>
      <table border="1" cellPadding={8} style={{ width: '100%', marginTop: 8 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Ngày</th>
            <th>Trạng thái</th>
            <th>Sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.userId}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <ul>
                  {order.items.map((item, idx) => (
                    <li key={idx}>Sản phẩm #{item.productId} x {item.quantity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList; 