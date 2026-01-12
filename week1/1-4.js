let username = "admin";
let password = "2848";
let age = "21";

if (username == "admin" && password == "2848" && age >= 18){
    console.log("เข้าสู่ระบบสำเร็จ");
}else if(username != "admin" || password != "2848"){
    console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
}else{
    console.log("อายุไม่ถึงเกณฑ์");
}
