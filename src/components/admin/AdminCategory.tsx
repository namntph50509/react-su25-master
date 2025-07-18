import React, { useEffect, useState } from "react";
import { Typography, Table, Button, Modal, Input, Space, Popconfirm, message, Form } from "antd";

interface Category {
  id: number;
  name: string;
}

const AdminCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [current, setCurrent] = useState<Category | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [form] = Form.useForm();

  // Fetch categories from API
  const fetchCategories = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:3001/categories");
    const data = await res.json();
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Thêm danh mục
  const showAddModal = () => {
    setIsEdit(false);
    setInputValue("");
    setIsModalOpen(true);
  };
  const handleAdd = async () => {
    if (!inputValue.trim()) {
      message.error("Tên danh mục không được để trống");
      return;
    }
    const res = await fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: inputValue.trim() })
    });
    if (res.ok) {
      message.success("Thêm danh mục thành công");
      setIsModalOpen(false);
      setInputValue("");
      fetchCategories();
    } else {
      message.error("Thêm danh mục thất bại");
    }
  };

  // Sửa danh mục
  const showEditModal = (cat: Category) => {
    setIsEdit(true);
    setCurrent(cat);
    setInputValue(cat.name);
    setIsModalOpen(true);
  };
  const handleEdit = async () => {
    if (!inputValue.trim() || !current) {
      message.error("Tên danh mục không được để trống");
      return;
    }
    const res = await fetch(`http://localhost:3001/categories/${current.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...current, name: inputValue.trim() })
    });
    if (res.ok) {
      message.success("Cập nhật danh mục thành công");
      setIsModalOpen(false);
      setCurrent(null);
      setInputValue("");
      fetchCategories();
    } else {
      message.error("Cập nhật danh mục thất bại");
    }
  };

  // Xóa danh mục
  const handleDelete = async (id: number) => {
    const res = await fetch(`http://localhost:3001/categories/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      message.success("Đã xóa danh mục");
      fetchCategories();
    } else {
      message.error("Xóa danh mục thất bại");
    }
  };

  const columns = [
    { title: 'Tên danh mục', dataIndex: 'name', key: 'name' },
    {
      title: 'Hành động',
      key: 'action',
      render: (_: any, record: Category) => (
        <Space>
          <Button type="link" onClick={() => showEditModal(record)}>Sửa</Button>
          <Popconfirm
            title="Bạn có chắc muốn xóa?"
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
      <Typography.Title level={2}>Quản lý danh mục</Typography.Title>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={showAddModal}>
        Thêm danh mục
      </Button>
      <Table dataSource={categories.map(c => ({ ...c, key: c.id }))} columns={columns} loading={loading} pagination={false} />
      <Modal
        title={isEdit ? "Sửa danh mục" : "Thêm danh mục"}
        open={isModalOpen}
        onOk={isEdit ? handleEdit : handleAdd}
        onCancel={() => setIsModalOpen(false)}
        okText={isEdit ? "Cập nhật" : "Thêm"}
        cancelText="Hủy"
      >
        <Input
          placeholder="Nhập tên danh mục"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={isEdit ? handleEdit : handleAdd}
        />
      </Modal>
    </div>
  );
};

export default AdminCategory; 