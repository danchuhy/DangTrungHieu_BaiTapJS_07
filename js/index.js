var array = [];

function themPhanTuVaoMang(){
    var phanTuMoi = document.getElementById('phanTuMoi');
    array.push(+phanTuMoi.value);

    document.querySelector("#resultArray").innerHTML = `
    <div class ="result">
        <b>${array}</b>
    </div>
    `
    phanTuMoi.value = "";
    phanTuMoi.focus();
}


// BÀI TẬP VỀ NHÀ 01 - TÍNH TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
function Submit_01(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: Tính tổng số dương
    //     - Số dương là số > 0
    //     - Duyệt mảng, số thoả yêu cầu trên thì gán vào sum
    var sum01 = 0;
    for (var i = 0; i <= array.length; i++){
        sum01 += (array[i] > 0) ? array[i] : 0;
    }

    // B3: In kết quả đầu ra
    document.getElementById('result_01').innerHTML = `
    <div class ="result">
       Tổng số dương trong mảng: <b>${sum01}</b>
    </div>`

};


// BÀI TẬP VỀ NHÀ 02 - ĐẾM SỐ DƯƠNG TRONG MẢNG

function Submit_02(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: Đếm số dương trong mảng
    //     - Số dương là số > 0
    //     - Duyệt mảng, số thoả yêu cầu trên thì đếm
    var soSoDuong02 = 0;
    for (var i = 0; i <= array.length; i++){
        soSoDuong02 += (array[i] > 0) ? 1 : 0;
    }

    // B3: In kết quả đầu ra
    document.getElementById('result_02').innerHTML = `
    <div class ="result">
       Số lượng số dương trong mảng: <b>${soSoDuong02}</b>
    </div>`

};




// BÀI TẬP VỀ NHÀ 03 - TÌM SỐ NHỎ NHẤT TRONG MẢNG

function Submit_03(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: Tim số nhỏ nhất trong mảng
    //     - Gán min = phần tử đầu trong mảng
    //     - Duyệt mảng, khi có phần tử trong mảng nhỏ hơn min thì gán min bằng giá trị của phần tử đó
    var min03 = array[0];
    for (var i = 1; i <= array.length; i++){
        min03 = (array[i] < min03) ? array[i] : min03;
    }

    // B3: In kết quả đầu ra
    document.getElementById('result_03').innerHTML = `
    <div class ="result">
       Số nhỏ nhất trong mảng: <b>${min03}</b>
    </div>`

};


// BÀI TẬP VỀ NHÀ 04 - TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG

function Submit_04(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: Tìm số dương nhỏ nhất
    //     - Số dương là sô > 0
    //     - Duyệt mảng, khi có phần tử trong mảng nhỏ hơn min, và là số dương, gán min bằng giá trị của phần tử đó
    //     - Nếu min < 0 thì chứng tỏ trong mảng không vó số dương nào

    var min04 = array[0];
    for (var i = 1; i <= array.length; i++){
        min04 = (array[i] < min04 && array[i] > 0) ? array[i] : min04;
    }

    // B3: In kết quả đầu ra
    if (min04<=0){
        document.getElementById('result_04').innerHTML = `
            <div class ="result error">
                Trong mảng không có số dương nào!
            </div>`
    } else {
        document.getElementById('result_04').innerHTML = `
        <div class ="result">
           Số dương nhỏ nhất trong mảng: <b>${min04}</b>
        </div>`    
    }

};



// BÀI TẬP VỀ NHÀ 05 - TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG
function Submit_05(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: Tìm số chẵn cuối cùng trong mảng
    //     - Số chẵn là số %2 == 0
    //     - Tạo biến số chẵn, duyệt mảng, phần tử nào thoả dk số chẵn thì lưu vào biến số chẵn
    var chan05 = -1;
    for (var i = 0; i <= array.length; i++){
        chan05 = (array[i] % 2 === 0) ? array[i] : chan05;
    }

    // B3: In kết quả đầu ra
    if (chan05 == -1){
        document.getElementById('result_05').innerHTML = `
        <div class ="result error">
            Trong mảng không có số dương nào!
        </div>`
    } else{
        document.getElementById('result_05').innerHTML = `
        <div class ="result">
           Số chẵn cuối cùng trong mảng: <b>${chan05}</b>
        </div>`
    }

};


// BÀI TẬP VỀ NHÀ 06 - ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG
function Submit_06(){

    // B1: Xác định đầu vào
    // - Array
    // - Vị trí phần tử A
    // - Vị trí phần tử B

    // B2: Đổi chỗ 2 giá trị
    //     - Thuật toán đổi vị trí / giá trị giữa 2 phần tử A và B:
    //          - Tạo biến trung gian X
    //          - A -> X
    //          - B -> A
    //          - X -> B
    var viTriPhanTuA = +document.getElementById('viTriPhanTuA').value;
    var viTriPhanTuB = +document.getElementById('viTriPhanTuB').value;
    var bienTam06;

    if (viTriPhanTuA === "" || viTriPhanTuA === "" ){
        var error06a = true;
    } else if (viTriPhanTuA >= array.length || viTriPhanTuB >= array.length){
        var error06b = true;
    } else{
        var error06 = true;
        bienTam06 = array[viTriPhanTuA];
        array[viTriPhanTuA] = array[viTriPhanTuB];
        array[viTriPhanTuB] = bienTam06;    
    }

    // B3: In kết quả đầu ra
    
    if (error06a == true){
        document.getElementById('result_06').innerHTML = `
        <div class ="result error">
            Vui lòng nhập vị trí!
        </div>`
    } else if (error06b == true) {
        document.getElementById('result_06').innerHTML = `
        <div class ="result error">
            Mảng chỉ có ${array.length} phần tử, vui lòng nhập số từ 0 - ${array.length-1}
        </div>`
    } else {
        document.getElementById('result_06').innerHTML = `
        <div class ="result">
           Mảng mới: <b>${array}</b> <br> <br>
           <i> Lưu ý: Mảng đã có sự thay đổi, từ giờ nếu tính toán các câu khác thì sẽ dùng mảng này để tính toán </i>
        </div>`;
        document.getElementById('resultArray').style.color = "rgba(0,0,0,0.2)";
    }

}



// BÀI TẬP VỀ NHÀ 07 - SẮP XẾP THEO THỨ TỰ TĂNG DẦN
function Submit_07(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: Sắp xếp theo thứ tự tăng dần
    //     - Dùng thuật toán đổi vị trị
    array.sort(function(a, b){return a - b});

    // B3: In kết quả đầu ra
    document.getElementById('result_07').innerHTML = `
    <div class ="result">
       Thứ tự tăng dần: <b>${array}</b>
    </div>`
};


// BÀI TẬP VỀ NHÀ 08 - TÌM SỐ NGUYÊN TỐ ĐÀU TIÊN TRONG MẢNG
function Submit_08(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: 
    //     - Số nguyên là số chỉ có 2 ước duy nhất là 1 và chính nó (trừ số 2)
    //     - Kiểm tra số nguyên tố n
    //          - Vòng lập từ cho i từ 1 đến n
    //          - Nếu n%i == 0 thì số này ko phải số nguyên tố
    //          - Nếu n%i != 0 thì số này là số nguyên tố (trừ 2)
    //     - Tìm số nguyên tố dầu tiên trong mảng
    //          - Duyệt mảng, dùng hàm trên để xem phần tử có phải số nguyên tố không. Tìm được thì break vòng lặp

    function kiemTraSoNguyenTo(n){
        if (n<2){
            return false;
        } else if (n==2){
            return true;
        } else{
            for (var i = 2; i < n; i++){
                if (n%i==0){
                    return false;
                } else {
                    return true;
                }
            }    
        }
    
    }

    var soNguyenTo = -1;

    for (var i = 0; i <= array.length; i++){
        if (kiemTraSoNguyenTo(array[i])){
            soNguyenTo = array[i];
            break;
        }
    }
    // B3: In kết quả đầu ra
    console.log(soNguyenTo);
    if (soNguyenTo == -1){
        document.getElementById('result_08').innerHTML = `
        <div class ="result error">
            Trong mảng không có số nguyên tố nào
        </div>`
   
    } else {
        document.getElementById('result_08').innerHTML = `
        <div class ="result">
           Số nguyên tố đầu tiên trong mảng: <b>${soNguyenTo}</b>
        </div>`
    
    }
};


// BÀI TẬP VỀ NHÀ 09 - TÌM SỐ LƯỢNG SỐ NGUYÊN TRONG MẢNG MỚI

var arraySoThuc = [];

function themPhanTuVaoMangSoThuc(){
    var phanTuMoiSoThuc = document.getElementById('phanTuMoiSoThuc');
    arraySoThuc.push(+phanTuMoiSoThuc.value);

    document.querySelector("#resultArraySoThuc").innerHTML = `
    <div class = "result" >
        <b>${arraySoThuc}</b>
    </div>
    `
    phanTuMoiSoThuc.value = "";
    phanTuMoiSoThuc.focus();
} 

function Submit_09(){

    // B1: Xác định đầu vào
    // - Array số thực

    // B2: 
    //      - Xác định số thực bằng hàm isInteger
    //      - Tạo biến đếm số lượng số thực
    //      - Duyệt mảng, số nào là số thực thì thêm vào biến đếm số lượng
    var soSoNguyen09 = 0;

    for (var i = 0; i < arraySoThuc.length; i++){
        soSoNguyen09 += Number.isInteger(arraySoThuc[i]) ? 1 : 0;
    }

    // B3: In kết quả đầu ra
    if (soSoNguyen09==0){
        document.getElementById('result_09').innerHTML = `
        <div class ="result">
            Trong mảng này không có số nguyên nào!
        </div>`  
    } else {
        document.getElementById('result_09').innerHTML = `
        <div class = "result" >
            Trong mảng này có <b>${soSoNguyen09}</b> số nguyên
        </div>
        `
    }
};




// BÀI TẬP VỀ NHÀ 10 - TÌM SỐ LƯỢNG SỐ SỐ DƯƠNG, SỐ ÂM
function Submit_10(){

    // B1: Xác định đầu vào
    // - Array
    
    // B2: 
    //      - Số dương là số > 0
    //      - Số âm là số < 0
    //      - Số 0 là số không âm không dương
    //      - Duyệt mảng để đếm số âm và số dương
    var soSoDuong = 0;
    var soSoAm = 0;

    for (var i = 0; i <= array.length; i++){
        soSoDuong += (array[i] > 0) ? 1 : 0;
        soSoAm += (array[i] < 0) ? 1 : 0;
    }
    if (soSoDuong > soSoAm){
        var ketLuan = "Số dương nhiều hơn số âm"
    }
    if (soSoDuong < soSoAm){
        var ketLuan = "Số âm nhiều hơn số đương"
    }
    if (soSoDuong == soSoAm){
        var ketLuan = "Số âm và dương có số lượng như nhau"
    }

    // B3: In kết quả đầu ra
    document.getElementById('result_10').innerHTML = `
    <div class ="result">
       Số lượng số dương: <b>${soSoDuong}</b> <br>
       Số lượng số âm: <b>${soSoAm}</b> <br>
       ${ketLuan}
    </div>`
};