import "../css/LoginPage.css";
import Logo from "../assets/img/Frame 1 (1).png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function LoginPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);

        try {
            const response = await api.post("/auth/login", formData);
            const token = response.data.token;

            if (token) {
                localStorage.setItem("token", token);
                console.log("token:", token);
                setSuccess("Login successful! Redirecting to home...");
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setError("Login failed. Token not received.");
            }
        } catch (err) {
            setError("Invalid credentials.");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="wrapper">
            <div className="card">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <h2>Login</h2>
                    <p>Access your account</p>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    {success && (
                        <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
                            {success}
                        </p>
                    )}
                    
                    {error && (
                        <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
