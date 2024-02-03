// Callback là một hàm
// Phải được truyền vào thông qua đối số của hàm khác

function playGame(callback) {
  // Gọi hàm callback
  if (typeof callback === "function") {
    callback();
  } else {
    console.log("Dữ liệu truyền vào không hợp lệ");
  }
}

playGame(getName);

// Function Decalation: Có cơ chế hosting, Có thể khai báo lại và lấy giá trị của hàm được khai báo sau
function getName() {
  console.log("Nguyễn Văn A");
}

function getName() {
  console.log("Nguyễn Văn B");
}

// Arrow Function

const handleSubmit = () => {
  console.log("Submited");
};

handleSubmit();

// const sum = (a, b) => {
//   return a + b;
// };

const sum = (a, b) => a + b;
console.log(sum(10, 20));

const array = [1, 2, 3, 4, 5];

// let total = 0; // Biến lưu trữ
// for (let i = 0; i < array.length; i++) {
//   total = total + array[i];
// }

// console.log("Total: ", total);

let total = array.reduce((prev, current) => {
  return prev + current;
}, 0);

console.log("Total: ", total);
