function hocluc(diem) {
  if (diem >= 90) {
    return "Xuất sắc";
  } else if (diem >= 80 && diem < 90) {
    return "Giỏi";
  } else if (diem >= 70 && diem < 80) {
    return "Khá";
  } else if (diem >= 60 && diem < 70) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
};


var diemhocsinh = parseFloat(prompt("Nhập điểm của học sinh anh nhé :")) ;
var phanLoai = hocluc(diemhocsinh);

console.log(`Xếp loại học lực của học sinh với điểm ${diemhocsinh} là: ${phanLoai}`);