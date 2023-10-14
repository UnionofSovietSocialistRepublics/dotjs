let diem = prompt("Nhap diem cua ban")


//Don't spam else if loop
if (diem < 4) {
    alert("Đạt loại Yếu");
}else if (diem < 6){
    alert("Đạt loại Trung bình");
}else if(diem < 8){
    alert("Đạt loại Khá");
}else if(diem < 9.5){
    alert("Đạt loại giỏi ");
}else if (diem > 9.5){
    alert("Đạt loại Xuất sắc.");
}

