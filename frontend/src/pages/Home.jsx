import { Link } from "react-router-dom";

const Home = () => {
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

        .home-container {
          text-align: center;
          max-width: 500px;
        }

        .home-title {
          font-size: 38px;
          font-weight: 700;
          color: #222;
        }

        .home-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }

        .home-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .btn-primary,
        .btn-outline {
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
          text-decoration: none;
        }

        .btn-primary {
          background: #0066ff;
          color: white;
        }

        .btn-primary:hover {
          background: #004fcc;
        }

        .btn-outline {
          border: 2px solid #0066ff;
          color: #0066ff;
          background: transparent;
        }

        .btn-outline:hover {
          background: #e9f1ff;
        }
      `}</style>

      <div className="center-page">
        <div className="home-container">
          <h1 className="home-title">Welcome to AuthApp</h1>
          <p className="home-subtitle">
            Login or create an account to continue.
          </p>

          <div className="home-buttons">
            <Link to="/login" className="btn-primary">Login</Link>
            <Link to="/register" className="btn-outline">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
