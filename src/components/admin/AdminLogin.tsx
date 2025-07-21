import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/admins?username=${username}&password=${password}`);
      const data = await res.json();
      if (data.length > 0) {
        // Đăng nhập thành công
        localStorage.setItem('admin_logged_in', 'true');
        setMessage('Đăng nhập thành công!');
        setTimeout(() => {
          navigate('/admin'); // Chuyển hướng sang trang admin (bạn có thể đổi route này)
        }, 1000);
      } else {
        setMessage('Sai tên đăng nhập hoặc mật khẩu!');
      }
    } catch (err) {
      setMessage('Lỗi kết nối server!');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Đăng nhập Admin</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Tên đăng nhập:</label>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminLogin; 