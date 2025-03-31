document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");
  const signInForm = document.getElementById("signInForm");
  const togglePassword = document.querySelector(".password-toggle");
  const passwordInput = document.querySelector(".password-container input");

  // Chuyển đổi form đăng nhập/đăng ký
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  // Hiển thị hoặc ẩn mật khẩu
  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      const isPasswordHidden = passwordInput.type === "password";
      passwordInput.type = isPasswordHidden ? "text" : "password";
      togglePassword.textContent = isPasswordHidden ? "🙈" : "👁️";

      // Đưa con trỏ về cuối ô input
      passwordInput.focus();
      passwordInput.setSelectionRange(
        passwordInput.value.length,
        passwordInput.value.length
      );
    });
  }

  // Xử lý đăng nhập
  signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = passwordInput.value;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.user) {
        localStorage.setItem("empId", data.user.EmpID);
        localStorage.setItem("role", data.user.Role);

        // Hiển thị thông báo đăng nhập thành công
        alert("Đăng nhập thành công!");
        window.location.href = "/view/index.html";
      } else {
        alert(data.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert("Lỗi đăng nhập");
    }
  });
});
