import LoginForm from "../components/Login/LoginForm";
import LoginImage from "../components/Login/LoginImage";
import LeadSqrLogo from "../components/Logo/LeadSqrLogo";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <LeadSqrLogo />
      <section className="login">
        <LoginImage />
        <LoginForm />
      </section>
    </>
  );
};

export default Login;
