// SignUp.js

import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="signup">
            <div className="container-signup">
                <h2 className='text-center'>Sign Up</h2>
                <form action="/signup" method="post">
                    <input type="email" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" required />
                    <input type="submit" value="Sign Up" />
                </form>

                <div className="oauth-divider">
                    <span></span>
                </div>
                <div className="oauth-buttons">
                    <button className="google"><i className="fab fa-google"></i> Sign Up with Google</button>
                    <button className="twitter"><i className="fab fa-twitter"></i> Sign Up with Twitter</button>
                </div>
                <div className="login-link">
                    <Link to={`/login`}>Already have an account? Log In</Link>
                </div>
            </div>
        </div>

    );
}

export default SignUp;
