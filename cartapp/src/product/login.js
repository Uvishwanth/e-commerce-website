import { Link } from "react-router-dom";


function Login() {
    return (
        <div className="login">
            <div className="container-login ">
                <h2 className="text-center">Login</h2>
                <form action="/login" method="post">
                    <input type="text" placeholder="Username" name="username" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <input type="submit" value="Login" />
                </form>

                <div className="oauth-divider">
                    <span></span>
                </div>
                <div className="oauth-buttons">
                    <button className="google"><i className="fab fa-google"></i> Login with Google</button>
                    <button className="twitter"><i className="fab fa-twitter"></i> Login with Twitter</button>
                </div>
                <div className="create-account">
                    <Link to={`/signup`}>are you a new us! Create Account</Link>
                </div>
            </div>
        </div>

    );
}

export default Login;
