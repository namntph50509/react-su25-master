import React, { useEffect, useState } from "react";
import { Typography, Table, Button, Image, Tag, Modal, Form, Input, InputNumber, Select, message, Popconfirm, Space } from "antd";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
  description: string;
  stock: number;
}

interface Category {
  id: number;
  name: string;
}

const AdminProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Fetch data
  const fetchData = async () => {
    setLoading(true);
    const [prodRes, catRes] = await Promise.all([
      fetch("http://localhost:3001/products"),
      fetch("http://localhost:3001/categories"),
    ]);
    const prodData = await prodRes.json();
    const catData = await catRes.json();
    setProducts(prodData);
    setCategories(catData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getCategoryName = (id: number) => {
    const cat = categories.find((c) => c.id === id);
    return cat ? cat.name : "";
  };

  // Thêm sản phẩm
  const showAddModal = () => {
    form.resetFields();
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleAdd = async () => {
    try {
      const values = await form.validateFields();
      const res = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        message.success("Thêm sản phẩm thành công");
        setIsModalOpen(false);
        fetchData();
      } else {
        message.error("Thêm sản phẩm thất bại");
      }
    } catch (err) {
      // validateFields sẽ báo lỗi
    }
  };

  // Sửa sản phẩm
  const showEditModal = (product: Product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  const handleEdit = async () => {
    try {
      const values = await form.validateFields();
      if (!editingProduct) return;
      const res = await fetch(`http://localhost:3001/products/${editingProduct.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingProduct, ...values }),
      });
      if (res.ok) {
        message.success("Cập nhật sản phẩm thành công");
        setIsModalOpen(false);
        setEditingProduct(null);
        fetchData();
      } else {
        message.error("Cập nhật sản phẩm thất bại");
      }
    } catch (err) {
      // validateFields sẽ báo lỗi
    }
  };

  // Xóa sản phẩm
  const handleDelete = async (id: number) => {
    const res = await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      message.success("Đã xóa sản phẩm");
      fetchData();
    } else {
      message.error("Xóa sản phẩm thất bại");
    }
  };

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (url: string) => <Image src={url} alt="product" width={60} />,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `${price.toLocaleString()}₫`,
    },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (id: number) => <Tag color="blue">{getCategoryName(id)}</Tag>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Tồn kho",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: Product) => (
        <Space>
          <Button type="link" onClick={() => showEditModal(record)}>Sửa</Button>
          <Popconfirm
            title="Bạn có chắc muốn xóa sản phẩm này?"
            onConfirm={() => handleDelete(record.id)}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button type="link" danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Typography.Title level={2}>Quản lý sản phẩm</Typography.Title>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={showAddModal}>
        Thêm sản phẩm
      </Button>
      <Table
        dataSource={products.map((p) => ({ ...p, key: p.id }))}
        columns={columns}
        loading={loading}
        pagination={false}
      />
      <Modal
        title={editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        open={isModalOpen}
        onOk={editingProduct ? handleEdit : handleAdd}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        okText={editingProduct ? "Cập nhật" : "Thêm"}
        cancelText="Hủy"
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ stock: 0, price: 0 }}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Giá"
            name="price"
            rules={[{ required: true, message: "Vui lòng nhập giá" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Ảnh (URL)"
            name="image"
            rules={[{ required: true, message: "Vui lòng nhập link ảnh" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Danh mục"
            name="categoryId"
            rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
          >
            <Select placeholder="Chọn danh mục">
              {categories.map((cat) => (
                <Select.Option value={cat.id} key={cat.id}>
                  {cat.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item
            label="Tồn kho"
            name="stock"
            rules={[{ required: true, message: "Vui lòng nhập tồn kho" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProduct; 