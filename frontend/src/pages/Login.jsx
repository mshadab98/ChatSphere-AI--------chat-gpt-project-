import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setMsg("Please enter email and password");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("https://api.azroxie.com/api/login", {
        email,
        password
      });

      console.log("Login Success:", res.data);
      setMsg("Login successful!");

      // Example: navigate after success (if router used)
      // navigate("/dashboard");

    } catch (error) {
      console.log("Error:", error);
      setMsg(error?.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

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

        .error-msg {
          color: red;
          text-align: center;
          margin-bottom: 10px;
        }

        .success-msg {
          color: green;
          text-align: center;
          margin-bottom: 10px;
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
          <h2 className="auth-title">Login</h2>

          {msg && (
            <p className={msg.includes("successful") ? "success-msg" : "error-msg"}>
              {msg}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleLogin} disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </button>

          <p className="auth-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
