import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";

const VerifyOTP = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });
            const data = await res.json();
            if (res.ok) {
                alert('Email verified successfully!');
                login(data);
                navigate('/');
            } else {
                alert(data.message || 'Invalid OTP');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Verify Email</h2>
                <p style={{ color: '#a1a1aa', marginBottom: '15px', fontSize: '0.9rem' }}>
                    OTP sent to <span style={{ color: '#f97316' }}>{email}</span>
                </p>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                />
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
            </form>
        </div>
    );
};

export default VerifyOTP;