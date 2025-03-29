// Hàm để lấy và hiển thị lịch họp
async function displayMeetings() {
  try {
    const response = await fetch("/api/meetings");
    const meetings = await response.json();

    const meetingTableBody = document.querySelector(".meetingTableBody");
    meetingTableBody.innerHTML = "";

    meetings.forEach((meeting) => {
      const row = `
              <tr>
                  <td>${meeting.Title}</td>
                  <td>${meeting.FormattedStartTime}</td>
                  <td>${meeting.Content}</td>
                  <td><a href="#">Join Link</a></td>
              </tr>
          `;
      meetingTableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Lỗi lấy lịch họp:", error);
  }
}

// Hàm để lấy và hiển thị nhân viên
async function displayEmployees() {
  try {
    const response = await fetch("/api/employees");
    const employees = await response.json();

    const employeeTableBody = document.querySelector(".employeeTableBody");
    employeeTableBody.innerHTML = "";

    employees.forEach((employee) => {
      const row = `
              <tr>
                  <td width="60px"><div class="imgBx"><img src="/images/avt.png" alt="" /></div></td>
                  <td>
                      <h4>${employee.FirstName} ${employee.LastName} <br /><span>${employee.ChucVu}</span></h4>
                      <td><span class="status delivered">${employee.Status}</span></td>
                  </td>
              </tr>
          `;
      employeeTableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Lỗi lấy nhân viên:", error);
  }
}

// Gọi các hàm khi trang web được tải
displayMeetings();
displayEmployees();
