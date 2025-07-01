import "../css/LoginPage.css";
import Logo from "../assets/img/Frame 1 (1).png"

function LoginPage() {
    return (
        <div className="wrapper">
            <div className="card">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <h2>Login</h2>
                    <p>Access your account</p>
                </div>
                <form className="form">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                    <div className="footer">
                        <a href="#">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
      
    );
}

export default LoginPage;
