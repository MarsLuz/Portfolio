window.onload = pageLoad;

function pageLoad() {
    // ตรวจสอบเมื่อมีการ submit ฟอร์ม
    document.getElementById("myRegister").onsubmit = validateForm;
}

function validateForm() {
    // ดึงข้อมูลจากฟอร์ม
    let firstname = document.forms["myRegister"]["firstname"].value;
    let lastname = document.forms["myRegister"]["lastname"].value;
    let gender = document.forms["myRegister"]["gender"].value;
    let bday = document.forms["myRegister"]["bday"].value;
    let email = document.forms["myRegister"]["email"].value;
    let username = document.forms["myRegister"]["username"].value;
    let password = document.forms["myRegister"]["password"].value;
    let retypePassword = document.forms["myRegister"]["retypePassword"].value;  // ใช้ชื่อฟิลด์ที่ถูกต้อง

    // ตรวจสอบว่าฟิลด์ที่จำเป็นทั้งหมดถูกกรอกหรือไม่
    if (firstname === "" || lastname === "" || gender === "" || bday === "" || email === "" || username === "" || password === "") {
        document.getElementById("errormsg").innerText = "All fields marked with * are required.";
        return false;  // ป้องกันไม่ให้ฟอร์มส่งไป
    }

    // ตรวจสอบว่า password และ retypePassword ตรงกันหรือไม่
    if (password !== retypePassword) {
        document.getElementById("errormsg").innerText = ("password not match!");
        return false;
    }

    // เก็บข้อมูล username และ password ลงใน localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!");
    return true;  // อนุญาตให้ฟอร์มส่งไปยัง login.html
}
