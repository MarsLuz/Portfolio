window.onload = loginLoad;

function loginLoad() {
	document.getElementById("myLogin").onsubmit = checkLogin;
}

function checkLogin() {
	// ดึงข้อมูลที่เก็บไว้ใน localStorage จากการลงทะเบียน
	let storedUsername = localStorage.getItem("username");
	let storedPassword = localStorage.getItem("password");

	// ดึงข้อมูลที่ผู้ใช้กรอกในฟอร์ม login
	let username = document.forms["myLogin"]["username"].value;
	let password = document.forms["myLogin"]["password"].value;

	// ตรวจสอบว่าชื่อผู้ใช้และรหัสผ่านถูกต้องหรือไม่
	if (username === storedUsername && password === storedPassword) {
		alert("Login successful!");
		return true; // สามารถ login ได้
	} else {
		alert("Username or password is incorrect.");
		return false; // ไม่สามารถ login ได้
	}
}
