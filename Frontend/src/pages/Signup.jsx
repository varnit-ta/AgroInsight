import {useState} from "react";
import {useSignup} from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        contact: '',
        password: '',
    });

    const {signup, error, isLoading} = useSignup();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(
            formData.username,
            formData.email,
            formData.contact,
            formData.password
        );
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="signup">
                <h1>Signup</h1>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />

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
                
                <p>Already have an account ? <Link to='/login'>Login</Link></p>

                <button disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Signup'}
                </button>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Signup;