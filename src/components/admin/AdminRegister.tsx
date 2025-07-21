import React, { useState } from 'react';

const AdminRegister: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/admins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        setMessage('Đăng ký thành công!');
        setUsername('');
        setPassword('');
      } else {
        setMessage('Đăng ký thất bại!');
      }
    } catch (err) {
      setMessage('Lỗi kết nối server!');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Đăng ký Admin</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Tên đăng nhập:</label>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminRegister; 