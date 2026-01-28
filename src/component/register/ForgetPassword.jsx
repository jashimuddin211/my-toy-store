// component/forgetPassword/ForgetPassword.jsx
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify";
import useTitle from "../../Hooks/useTitle";

const ForgetPassword = () => {
  useTitle("Forget Password");

  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  // get email from login page
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("⚠️ Please enter your email!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("📧 Password reset email sent!");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded-lg shadow mb-16">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Forget Password
      </h2>

      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Reset Password
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
