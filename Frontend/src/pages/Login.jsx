import {useState} from "react";
import {useLogin} from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        contact: '',
        password: '',
    });

    const {login, error, isLoading} = useLogin();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(
            formData.contact,
            formData.password
        );
    }

    return(
        <div>
            
            <form onSubmit={handleSubmit} className="login">
                <h1 style={{"margin": 0}}>Login</h1>

                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <p>Need to Register ? <Link to='/signup'>Sign Up</Link></p>

                <button disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Login'}
                </button>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Login;