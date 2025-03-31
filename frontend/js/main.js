// Hàm để lấy và hiển thị bài viết
async function displayPosts() {
  try {
    const response = await fetch("/api/posts"); // API endpoint lấy danh sách bài viết

    // Kiểm tra xem phản hồi có thành công hay không
    if (!response.ok) {
      throw new Error("Không thể lấy bài viết, mã lỗi: " + response.status);
    }

    const posts = await response.json();

    // Kiểm tra dữ liệu bài viết có hợp lệ không
    if (!Array.isArray(posts) || posts.length === 0) {
      const postList = document.querySelector(".postList");
      postList.innerHTML = "<p>Không có bài viết nào.</p>"; // Thông báo nếu không có bài viết
      return;
    }

    const postList = document.querySelector(".postList");
    postList.innerHTML = ""; // Xóa nội dung cũ trước khi thêm bài viết mới

    posts.forEach((post) => {
      const postItem = document.createElement("div");
      postItem.classList.add("postItem");
      postItem.innerHTML = `
              <div class="postHeader">
                  <div class="userAvt"><img src="${
                    post.userAvt || "default-avatar.jpg"
                  }" alt="User Avatar"></div>
                  <h4>${post.userName}</h4>
              </div>
              <div class="postTitle"><h3>${post.title}</h3></div>
              <div class="postContent">${post.content}</div>
              <div class="postActions">
                  <span><ion-icon name="chatbubble-outline"></ion-icon> ${
                    post.comments || 0
                  }</span>
                  <span><ion-icon name="heart-outline"></ion-icon> ${
                    post.likes || 0
                  }</span>
                  <span><ion-icon name="share-social-outline"></ion-icon> ${
                    post.shares || 0
                  }</span>
              </div>
          `;
      postList.appendChild(postItem); // Thêm bài viết vào danh sách
    });
  } catch (error) {
    console.error("Lỗi lấy bài viết:", error); // Xử lý lỗi nếu có
    const postList = document.querySelector(".postList");
    postList.innerHTML = "<p>Đã xảy ra lỗi khi tải bài viết.</p>"; // Thông báo lỗi khi có sự cố
  }
}

// Xử lý sự kiện click của nút trang chủ
document
  .getElementById("home-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
    const detailsContainer = document.querySelector(".details");

    detailsContainer.classList.remove("calendar-active"); // Chắc chắn rằng chỉ hiển thị bài viết

    // Cập nhật hiệu ứng active cho menu
    setActiveMenuItem("home-link");
  });

// Hàm để thiết lập menu item active
function setActiveMenuItem(menuId) {
  const menuItems = document.querySelectorAll(".navigation ul li");
  menuItems.forEach((item) => item.classList.remove("active"));
  document.getElementById(menuId).classList.add("active");
}

// Gọi hàm hiển thị bài viết khi trang web được tải
document.addEventListener("DOMContentLoaded", function () {
  displayPosts();
  setActiveMenuItem("home-link");
});

// Xử lý sự kiện click của nút 3 gạch menu
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
