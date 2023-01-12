import LoginForm from "../components/Login/LoginForm";
import LoginImage from "../components/Login/LoginImage";
import LeadSqrLogo from "../components/Logo/LeadSqrLogo";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <LeadSqrLogo />
      <main className="login">
        <LoginImage />
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
