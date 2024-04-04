var length = prompt('Nhập chiều dài của hình chữ nhật:');
var width = prompt('Nhập chiều rộng của hình chữ nhật:');

// Chuyển đổi giá trị nhập vào từ kiểu chuỗi sang kiểu số
length = parseFloat(length);
width = parseFloat(width);

// Tính chu vi và diện tích của hình chữ nhật
var perimeter = 2 * (length + width);
var area = length * width;

// Hiển thị kết quả lên màn hình
console.log('Chu vi của hình chữ nhật là: ' + perimeter);
console.log('Diện tích của hình chữ nhật là: ' + area);



var radius = prompt('Nhập bán kính của hình tròn:');

// Chuyển đổi giá trị nhập vào từ chuỗi sang số
radius = parseFloat(radius);

// Tính chu vi và diện tích của hình tròn
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2); // Sử dụng hàm Math.pow để tính bình phương

// Hiển thị kết quả lên màn hình
console.log('Chu vi của hình tròn là: ' + circumference.toFixed(2));
console.log('Diện tích của hình tròn là: ' + area.toFixed(2));