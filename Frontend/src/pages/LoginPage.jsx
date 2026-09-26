import BrandingPanel from "../components/auth/BrandingPanel";
import LoginCard from "../components/auth/LoginCard";

import "../styles/login.css";

function LoginPage() {
  return (
    <div className="login-page">
      <BrandingPanel />
      <LoginCard />
    </div>
  );
}

export default LoginPage;