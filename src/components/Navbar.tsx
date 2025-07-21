import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          NTN
          <div className="logo-subtitle">LIMITED EDITION</div>
        </Link>
      </div>
      <div className="navbar-menu">
        <button className="nav-btn">VN</button>
        <button className="nav-btn">ENG</button>
        <button className="nav-btn">
          <i className="fa fa-search"></i>
        </button>
        <button className="nav-btn">
          <i className="fa fa-shopping-bag"></i>
          <span className="cart-count">0</span>
        </button>
        <button className="nav-btn menu-btn">
          <span>MENU</span>
        </button>
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 60px;  /* Tăng padding */
          background: white;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
        }

        .logo {
          text-decoration: none;
          color: #000;
          font-size: 32px;  /* Tăng font size logo */
          font-weight: bold;
          letter-spacing: 2px;
        }

        .logo-subtitle {
          font-size: 14px;  /* Tăng font size subtitle */
          font-weight: normal;
          letter-spacing: 3px;
          margin-top: 6px;
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 25px;  /* Tăng khoảng cách giữa các nút */
        }

        .nav-btn {
          background: none;
          border: none;
          padding: 10px;  /* Tăng padding cho nút */
          cursor: pointer;
          font-size: 16px;  /* Tăng font size cho nút */
          position: relative;
        }

        .nav-btn:hover {
          opacity: 0.7;
        }

        .cart-count {
          position: absolute;
          top: 0;
          right: 0;
          background: #000;
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 50%;
        }

        .menu-btn {
          font-weight: 500;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 15px 20px;
          }
          
          .logo {
            font-size: 20px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 