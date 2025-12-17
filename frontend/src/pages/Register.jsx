import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f5f6fa;
        }

        .center-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .auth-box {
          width: 100%;
          max-width: 400px;
          background: white;
          padding: 35px 30px;
          border-radius: 12px;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        }

        .auth-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
          color: #222;
        }

        .auth-input {
          width: 90%;
          padding: 12px 14px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 15px;
          margin-bottom: 15px;
          outline-color: #0066ff;
        }

        .auth-btn {
          width: 100%;
          padding: 12px;
          background: #0066ff;
          color: #fff;
          font-size: 17px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .auth-btn:hover {
          background: #004fcc;
        }

        .auth-footer {
          margin-top: 15px;
          text-align: center;
          color: #555;
        }

        .auth-footer a {
          color: #0066ff;
          font-weight: 600;
          text-decoration: none;
        }

        .auth-footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="center-page">
        <div className="auth-box">
          <h2 className="auth-title">Create Account</h2>

          <input type="text" placeholder="Full Name" className="auth-input" />
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />

          <button className="auth-btn">Register</button>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
