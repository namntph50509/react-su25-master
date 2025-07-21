import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-col">
          <p><i className="fa fa-map-marker footer-icon"></i> <b>Head office:</b> No. 173, Group 6, Nguyen Van Troi, Ha Dong Ward, Hanoi</p>
          <p><i className="fa fa-envelope footer-icon"></i> <b>Email:</b> cskh@whiteant.vn</p>
          <p><i className="fa fa-phone footer-icon"></i> <b>Hotline to buy:</b> 0985674818</p>
          <p><i className="fa fa-user footer-icon"></i> <b>Agent:</b> 0369071457</p>
          <div style={{ margin: '12px 0 0 0' }}>
            <b>Payment Methods</b><br />
            <img src="https://img.vietqr.io/image/visa-master-jcb.png" alt="payment" style={{ height: 28, marginRight: 8 }} />
            <img src="https://img.vietqr.io/image/napas.png" alt="napas" style={{ height: 28, marginRight: 8 }} />
            <img src="https://img.vietqr.io/image/cod.png" alt="cod" style={{ height: 28, marginRight: 8 }} />
            <img src="https://img.vietqr.io/image/vnpay.png" alt="vnpay" style={{ height: 28 }} />
          </div>
        </div>
        <div className="footer-col">
          <b>Company</b><br />
          Introduce<br />
          Shop<br />
          Contact
        </div>
        <div className="footer-col">
          <b>Policy</b><br />
          Exchange<br />
          Guarantee<br />
          Security
        </div>
        <div className="footer-col">
          <b>Service</b><br />
          Transport<br />
          Pay
        </div>
        <div className="footer-col">
          <b>Sign up for new information</b><br />
          <input type="email" placeholder="Enter your email" className="footer-input" />
          <button className="footer-btn">Register</button>
          <div style={{ margin: '18px 0 0 0' }}>
            <b>Follow on social media</b><br />
            <span className="footer-socials">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-map-marker"></i></a>
              <a href="#"><i className="fa fa-phone"></i></a>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" alt="zalo" style={{ height: 32, marginRight: 8, verticalAlign: 'middle' }} />
          <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png" alt="fb" style={{ height: 32, marginRight: 8, verticalAlign: 'middle' }} />
          <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-circle-512.png" alt="ig" style={{ height: 32, verticalAlign: 'middle' }} />
        </div>
        <div style={{ marginTop: 8 }}>
          <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-check-circle-512.png" alt="bct" style={{ height: 32, verticalAlign: 'middle' }} />
        </div>
        <div style={{ marginTop: 8, fontSize: 13, color: '#888' }}>
          © Copyright belongs to Kien Trang Joint Stock Company | Design by ECOMCX<br />
          Business registration number: 0500554260<br />
          First registration: December 20, 2006; last registration change: April 8, 2015
        </div>
      </div>
      <style>{`
        .footer-main {
          background: #f7f7f7;
          padding: 40px 40px 0 40px;
          margin-top: 60px;
          font-size: 15px;
        }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          /* max-width: 1200px; */
          /* margin: 0 auto; */
          gap: 32px;
          justify-content: space-between;
        }
        .footer-col {
          flex: 1 1 180px;
          min-width: 180px;
          margin-bottom: 24px;
        }
        .footer-input {
          width: 70%;
          padding: 8px;
          margin: 8px 0 0 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .footer-btn {
          padding: 8px 18px;
          margin-left: 8px;
          background: #222;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .footer-socials a {
          margin-right: 10px;
          color: #222;
          font-size: 20px;
        }
        .footer-bottom {
          border-top: 1px solid #e0e0e0;
          margin-top: 32px;
          padding: 24px 0 16px 0;
          text-align: center;
        }
        .footer-col p {
          margin-bottom: 8px;
        }
        .footer-icon {
          margin-right: 10px;
          width: 15px;
          text-align: center;
        }
        @media (max-width: 900px) {
          .footer-content {
            flex-direction: column;
            gap: 0;
          }
          .footer-col {
            margin-bottom: 18px;
          }
        }
      `}</style>
      {/* FontAwesome CDN cho icon */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </footer>
  );
};

export default Footer; 