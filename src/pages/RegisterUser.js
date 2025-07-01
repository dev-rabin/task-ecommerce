import React, { useState } from "react";
import "../css/LoginPage.css";
import Logo from "../assets/img/Frame 1 (1).png"
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await api.post("/users", formData);

            if (response.status === 201 || response.status === 200) {
                console.log("Submitted User:", response.data);
                setSubmitted(true);
                setFormData({ username: "", email: "", password: "" });
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                setError("Unexpected response from server.");
            }
        } catch (err) {
            console.error("Error submitting user:", err);
            setError("Failed to add user. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wrapper">
            <div className="card">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <h2>Registration</h2>
                    <p>Create a new user profile</p>
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
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
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
                        {loading ? "Registering..." : "Register"}
                    </button>

                </form>

                {submitted && <p style={{ textAlign: "center", color: "green", marginTop: "1rem" }}>User added successfully!</p>}

                {/* <div className="footer">
                    <a href="#">Back to Dashboard</a>
                </div> */}
            </div>
        </div>
    );
}
