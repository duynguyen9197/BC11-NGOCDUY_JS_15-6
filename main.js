/**
 * INPUT:
 * -Nhập số nguyên,lưu vào trong mảng
 * PROGRAMING:
 * 0.tạo mảng [] global
 * 1.Dom nút
 *  -tạo biến hứng giá trị input
 *  -thêm số vào mảng bằng funtion push
 *  -show mảng ra html
 *
 * OUTPUT:
 * 1.Tổng các số dương
 * 2.Đếm các số dương
 * 3.Tìm số nhỏ nhất
 * 4.Tìm số dương nhỏ nhất
 * 5.Tìm số chẵn cuối cùng trong mảng.Nếu ko có số chẵn thì trả về -1
 *
 */
var arrNumber = [];
function getID(id) {
  return document.getElementById(id);
}
document
  .getElementById("btnAddNumber")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var number = document.getElementById("inputNumber").value;
    if (!number) {
      alert("Mới thêm số");
      return;
    }
    number = parseInt(number);
    arrNumber.push(number);

    document.getElementById("showArr").innerHTML = "Danh sách : " + arrNumber;
  });

/**
 * -Tổng các số dương:
 * PROGRAMMING:
 * 1.TẠO HÀM
 * -tạo biến tổng
 * -duyệt mảng :if (i>0):tong +=i
 * -show html
 */
function tinhTongSoDuong() {
  if (!arrNumber.length) {
    alert("Mời nhập số");
    return;
  }
  var tongSoDuong = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      tongSoDuong += arrNumber[i];
    }
  }
  getID("showTongSoDuong").innerHTML = tongSoDuong;
}
/**
 *  -Đếm các số dương
 * PROGRAMMING:
 * 1.duyệt mảng
 * 2.tạo biến count =0
 * 3.if arr[i]>0 count++
 */
function demSoDuong() {
  if (!arrNumber.length) {
    alert("Mời nhập số");
    return;
  }
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      count++;
    }
  }
  getID("showDemSo").innerHTML = "Có " + count + " số dương trong mảng";
}
/**
 *  -3.Tìm số nhỏ nhất
 * PROGRAMMING:
 *  1.Tạo Min
 *  2.duyệt mảng
 *  -if arr[i]<Min
 * Min= arr[i]
 */
function timSoNhoNhat() {
  if (!arrNumber.length) {
    alert("Mời nhập số");
    return;
  }
  var Min = arrNumber[0];
  for (var i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] < Min) {
      Min = arrNumber[i];
    }
  }
  getID("showSoNhoNhat").innerHTML = "Số nhỏ nhất là : " + Min;
}
/**
 *-4.Tìm số dương nhỏ nhất
 * PROGRAMMING:
 *  1.Tạo Min
 *  2.Tìm số dương
 *  3.Duyệt mảng tìm nhỏ nhất
 *
 */
function timSoDuongNhoNhat() {
  if (!arrNumber.length) {
    alert("Mời nhập số");
    return;
  }
  var Min = arrNumber[0];
  if (arrNumber[0] <= 0) {
    for (var j = 1; j < arrNumber.length; j++) {
      if (arrNumber[j] > 0) {
        Min = arrNumber[j];
        break;
      }
    }
  }

  for (var i = arrNumber.indexOf(Min, 1); i < arrNumber.length; i++) {
    if (arrNumber[i] < Min && arrNumber[i] > 0) {
      Min = arrNumber[i];
    }
  }
  getID("showSoDuongNhoNhat").innerHTML = "Số  dương nhỏ nhất là : " + Min;
}
/**
 *5.Tìm số chẵn cuối cùng trong mảng.Nếu ko có số chẵn thì trả về -1
 * PROGRAMMING:
 *  1.tạo biến soChan= -1
 *  2.duyệt mảng tìm số chãn
 *  3.gán soChan
 *
 */
function timSoChanCuoiCung() {
  if (!arrNumber.length) {
    alert("Mời nhập số");
    return;
  }
  var soChan = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      soChan = arrNumber[i];
    }
  }
  getID("showSoChanCC").innerHTML = soChan + " là số chẵn cuối";
}
/**
 * INPUT:
 * index của số
 * PROGRAMMING:
 * 0.Tạo biến i j chứa value ipt
 * 1.Nếu i j >= lenght
 * 2.tạo biến z làm biến tạm thời
 *  -gán z=arrNumber[i]
 *  -gán arrNumber[i]=arrNumber[j]
 * gán arrNumber[j]=z
 *
 * OUTPUT:
 * Đổi vị trí 2 số
 */
function doiCho() {
  if (arrNumber.length < 2) {
    alert("Mời nhập  2 số trở lên");
    return;
  }
  var i = getID("index1").value;
  var j = getID("index2").value;
  if (!j || !i) {
    alert("Chưa nhập vị trí");
    return;
  }
  if (i >= 0 && j >= 0 && i < arrNumber.length && j < arrNumber.length) {
    var z = arrNumber[i];
    arrNumber[i] = arrNumber[j];
    arrNumber[j] = z;
    getID("showArrDoiCho").innerHTML = arrNumber;
  } else {
    alert("Vị trí không đúng");
    return;
  }
}
/**
 * -Sắp xếp mảng tăng dần
 * PROGRAMMING:
 * Sử dụng vong lặp lồng
 * đổi vị trí
 * OUTPUT
 */
function sapXepTang() {
  if (arrNumber.length < 2) {
    alert("Mời nhập  2 số trở lên");
    return;
  }
  for (var i = 0; i < arrNumber.length - 1; i++) {
    for (var j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] > arrNumber[j]) {
        var z = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = z;
      }
    }
  }
  getID("showSapXep").innerHTML = arrNumber;
}
/**Số nguyên tố
 * Lớn hơn 1
 * không chia hết cho số nào từ 2 đến n-1
 * PROGRAMMING:
 * 0.gán soNguyenTo =-1
 * 1-duyệt mảng
 * 2.if ([i]==2) break
 *  -Lớn hơn 2 và số lẻ thì dùng vòng lặp chia [i] từ 2 đến [i]-1.nếu % ==0 thì return. Nếu % khác 0 thì gán [i] =soNguyenTo
 *
 *    else if([i]>2 && [i] % 2 != 0){
 *      for(var j=2;j <[i] ; j++){
 *          if (!([i] % j)  ){
 * return
 *
 * gán soNguyenTo = [i]
 * }
 *
 * }
 *
 * }
 *
 *
 * OUTPUT: Tìm số nguyên tố đầu tiên
 */
function timSoNguyenToDauTien() {
  if (!arrNumber.length) {
    alert("Mời nhập số");
    return;
  }
  var soNguyenTo = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] == 2) {
      soNguyenTo = arrNumber[i];
      break;
    } else if (arrNumber[i] > 2 && arrNumber[i] % 2) {
      for (var j = 2; j < arrNumber[i]; j++) {
        if (!(arrNumber[i] % j)) {
          return;
        }
      }
      soNguyenTo = arrNumber[i];
      break;
    }
  }
  getID("showSoNguyenTo").innerHTML = soNguyenTo;
}
/**
 * INPUT:
 * PROGRAMMING:
 * 1.Tạo mảng số thực
 * 2.Dom Nút ,lấy value,show html
 * 3.Đếm số nguyên
 *  countFloat =0
 * 4.duyệt mảng
 * if(!([i]% 1) ){
 * countFloat++
 * }
 * OUTPUT:
 *
 */
var arrFloat = [];
getID("btnAddFloat").onclick = function (event) {
  event.preventDefault();
  var floatNumber = getID("inputFloat").value;
  if (!floatNumber) {
    alert("Nhập số thực ");
    return;
  }
  floatNumber = parseFloat(floatNumber);
  arrFloat.push(floatNumber);
  getID("showFloat").innerHTML = arrFloat;
};
function demSoNguyen() {
  if (!arrFloat.length) {
    alert("Chưa nhập số thực");
    return;
  }
  var countFloat = 0;
  for (var i = 0; i < arrFloat.length; i++) {
    if (!(arrFloat[i] % 1)) {
      countFloat++;
    }
  }
  getID("showSoNguyen").innerHTML =
    "Có " + countFloat + " số Nguyên trong mảng";
}
/**
 * So SÁnh số dương và âm
 * PROGRAMMING:
 *1.tạo biến dêm âm dương
 2.duyệt mảng
 3.So sánh đếm
    
 */
function soSanhAmDuong() {
  if (!arrNumber.length) {
    alert("Mời nhập số");
    return;
  }
  var countDuong = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      countDuong++;
    } else if (arrNumber[i] < 0) {
      countDuong--;
    } else {
      continue;
    }
  }

  if (countDuong > 0) {
    getID("showSoSanh").innerHTML = "Số dương nhiều hơn";
  } else if (countDuong < 0) {
    getID("showSoSanh").innerHTML = "Số âm nhiều hơn";
  } else {
    getID("showSoSanh").innerHTML = "Số dương bằng số âm";
  }
}
