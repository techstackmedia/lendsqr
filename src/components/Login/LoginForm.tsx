import Button from "../shared/Button";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="loginForm">
      <h1>Welcome!</h1>
      <p>Enter details to login.</p>
      <form>
        <div>
          <input type="email" name="" id="name" placeholder="Email" />
        </div>

        <div>
          <input type="password" name="" id="password" placeholder="Password" />
          <p>Show</p>
        </div>
      </form>
      <p>Forgot Password?</p>
      <Button text="Log in" />
    </div>
  );
};

export default LoginForm;
