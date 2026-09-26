import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        employeeId: "",
        password: "",
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    return (
        <div className="login-container">

            <h2>Hospital Management System</h2>

            <input
                type="text"
                name="employeeId"
                placeholder="Employee ID"
                value={credentials.employeeId}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
            />

            <button>
                Login
            </button>

            {error && <p>{error}</p>}

        </div>
    );
}

export default LoginForm;