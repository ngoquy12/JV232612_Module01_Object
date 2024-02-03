// Khai báo object bằng Object literal
const user = {
  userId: 1,
  userName: "Nguyễn Văn A",
  dateOfBirth: "12/12/2023",
  gender: "Nam",
  address: "Thanh Xuân, Hà Nội",
};

// Thêm key và value vào trong object
user.className = "JV232612";

// Cách truy cập vào các giá trị trong Object (cách 1)
console.log("UserName: ", user.userName);
console.log("Address: ", user.address);
console.log("ClassName: ", user.className);

// Cách 2: Dùng ngoặc vuông và truyền key của object ở dạng string
console.log("Giới tính: ", user["gender"]);
console.log("Id: ", user["userId"]);

// Dùng vòng lặp để lặp qua object
for (let key in user) {
  console.log("Key: ", key);
  console.log("Value: ", user[key]);
}

// Khai báo đối tượng với class (ES6)
// Phân tích đối tượng product:
class Product {
  constructor(id, productName, price, image, description) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.image = image;
    this.description = description;
  }
}

// Khởi tạo đối tượng
const product1 = new Product(1, "Cam", 120000, "abc", "Ngon");
console.log("product1: ", product1);

// Truy cập vào key và value của đối tượng
let userKeys = Object.keys(user);
console.log("List key: ", userKeys);

// Lấy ra danh sách value
let userValues = Object.values(user);
console.log("List values: ", userValues);

// Một số đối tượng được cung cấp sẵn trong JS
let today = new Date();
console.log("Today: ", today);
let day = today.getDate();
console.log("Day: ", day);

let month = today.getMonth() + 1;
console.log("Month: ", month);

let year = today.getFullYear();
console.log("Year: ", year);

// Các hàm toán học
const PI = Math.PI;
console.log("PI: ", PI);

console.log(Math.pow(2, 3));
console.log(Math.random());

let number = 0.4;
console.log(Math.ceil(number)); // Làm tròn trên
console.log(Math.round(number)); // Làm tròn khi phần thập phân >= 5
console.log(Math.floor(number)); // Làm tròn dưới
