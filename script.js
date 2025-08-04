//  //การแสดงผลในหน้าเว็บไซต์
// document.write("Hello World")

//  //หน้าต่างเเจ้งเตือน
// alert("Hello World")
// alert("สวัสดีค่ะ")

//  //แสดงใน console
// console.log("ทดสอบระบบสำเร็จ")

//ตัวแปรแบบที่ใช้ได้ทุกส่วน
// var Fullname = "Charisa";

// //ตัวแปรแบบ ไม่เปลื่อนแปลงค่า
// const number = 20;

// document.write(Fullname);
// document.write(number);

// //แปลงจากข้อความ เป็นตัวเลข
// let result = "123abc";
// let total = parseInt(result);

// document.write(total);

// //แปลงจากตัวเลขเป็น ข้อความ
// let Num = 123;
// let result = Num.toString();
// document.write(result);

// //เช็คชนิดตัวแปร
// let total = typeof(result);
// document.write(total);

// let num = 12312121;
// let Text = typeof(num);

// document.write(Text);

// document.write(typeof(num));



// ตัดเกรดคะแนน
//โดยถ้าคะแนนมากกว่า 100  ให้ขึ้นคำว่า สอบผ่าน
//แต่ถ้าน้อยกว่า ให้ขึ้นคำว่า สอบตก ไปสอบใหม่นะ

// var age = 100;

// if (age >= 100){

//     document.write("สอบผ่าน")
// } else{
//     document.write("สอบตก ไปสอบใหม่นะ")
// }

// var scoll = 9;
// if (scoll >= 30){
//     document.write("ร้อนมากครับ");
// } else  if (scoll >= 10){
//     document.write("เริ่มหนาวแล้ว");
// } else {
//     document.write("นํ้าร้อนเย็นหมดแล้ว")
// }

// var number = 4;

// switch (dnumber){
//     case 1 : 
//         document.write("มกราคม");
//    break;

//     case 2 : 
//         document.write("กุมภาพันธ์");
//     break;
// }



// var day = 6;

// switch (day){
//     case 1 : 
//         document.write("วันจันทร์");
//    break;

//     case 2 : 
//         document.write("วันอังคาร");
//     break;

//     case 3 : 
//         document.write("วันพุธ");
//    break;

//     case 4: 
//         document.write("วันพฤหัสบดี");
//     break;

//     case 5 : 
//         document.write("วันศุกร์");
//    break;

//     case 6: 
//         document.write("วันเสาร์");
//     break;

//     case 7 : 
//         document.write("วันอาทิตย์");
//    break;

//     default :
//         document.write("ไม่ตรงกับเงื่อนไขใดๆ");
//     break;

// }


//สมมุติ อยากแสดง สวัสดี 4 ครั้ง
// i = 0 > คือ กำหมดค่าที่จะให้นับเริ่มต้น
// i < 4  คือ ตั้งค่าให้มีการทำซำ้ 4 ครั้ง
// i = i +1  คือ เพิ่มค่าตัวจำนวนนับเติมที่ละ1 
// for (i = 1 ; i < 5 ; i = i + 1){
//     document.write(" สวัสดี ");
//     document.write(i);
// }

// for (i = 1 ; i < 14 ; i = i + 1){
//     document.write(" อยากกลับบ้าน ");
//     document.write(i);
// }

//ฟังชันแบบไม่มีการรับค่า
// function showmessage () {
//     alert("ยินดีต้อนรับ");

// }

// showmessage (); //การเรียกใช้งานฟังชัน

//ฟังชันแบบมีการรับค่า
// function cal (number){
//     return document.write(number * 2);
// }

// cal (40);//เรียกใช้งานแบบฟังชัน

// function showname(realname, surname){
//    return document.write (realname + " " + surname );
// }

// showname("ชลิสา", "สมอาจ"); //การเรียกใช้งานฟังชัน

//ฟังชันแบบมีการรับค่าและส่งค่ากลับ



function changecolor(){
   let name = document.getElementById("Test-1");
   name.style.color =  "red";
     name.style.backgroundColor = "yellow";
}

function test(){
    let result = document.querySelector(".Test-2");
    result.setAttribute("class", "light");
}

let mode = document.querySelector (".mode");

function drakmode(){  
   mode.setAttribute("class", "drak");
}

function lightmode(){   
  mode.setAttribute("class", "light");
    
}

function changetext(){
    let text = document.getElementById("change-text").value;
    let result = document.getElementById("showtext");

    result.innerHTML = text;
}