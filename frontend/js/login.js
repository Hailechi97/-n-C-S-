const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signInForm = document.getElementById("signInForm");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm.querySelector('input[type="email"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

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

      window.location.href = "/view/index.html";
    } else {
      alert(data.message || "Đăng nhập thất bại");
    }
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    alert("Lỗi đăng nhập");
  }
});
