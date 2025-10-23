import style from "./signIn.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const navigate = useNavigate(); // Navigation hook

  document.title = "SignUp";

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    setLoading(true); // Start loading

    if (password !== confirmPassword) {
      setError("Passwords do not match"); // Set error if passwords differ
      return;
    }

    try {
      setError(""); // Clear error
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_LINK}/api/auth/register-user`,
        {
          method: "POST",
          body: JSON.stringify({ name, email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json(); // Parse response

      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result)); // Save user data
        navigate("/"); // Redirect to home
      } else {
        setError(result.message); // Set error message
      }
    } catch (error) {
      setError("Registration failed. Try again."); // Catch errors
      // console.error("Error during registration:", error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.loginSection}>
          <div className={style.loginPage}>
            <div className={style.login}>
              <div className={style.loginHead}>
                <div className={style.loginHeading}>
                  <div className={style.virusViper}>
                    {/* <h1>Conquer with VirusViper</h1> */}
                    <h1>Activate Virusviper Access</h1>
                  </div>
                </div>
              </div>
              <div className={style.loginError}>
                <div className={style.error}>
                  {error ? (
                    <p className={style.error}>{error}</p>
                  ) : (
                    <p className={style.default}>VirusViper</p>
                  )}
                </div>
              </div>
              <div className={style.loginForm}>
                <div className={style.form}>
                  <form onSubmit={handleSubmit}>
                    <div className={style.inputSection}>
                      <div className={style.input}>
                        <input
                          type="text"
                          value={name}
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className={style.inputSection}>
                      <div className={style.input}>
                        <input
                          type="email"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className={style.inputSection}>
                      <div className={style.input}>
                        <input
                          type="password"
                          value={password}
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className={style.inputSection}>
                      <div className={style.input}>
                        <input
                          type="password"
                          value={confirmPassword}
                          placeholder="Confirm Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className={style.submit}>
                      <div className={style.submitBtn}>
                        <button type="submit" disabled={loading}>
                          {loading ? "Signing in..." : "Sign Up"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className={style.signUp}>
                <div className={style.goToSignIn}>
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className={style.link}>
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
