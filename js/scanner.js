// ===============================
// Warehouse Scanner
// Scanner System v1
// ===============================

// โหลดข้อมูลจากหน้า Home
const productCode = sessionStorage.getItem("productCode");
const targetQty = parseInt(sessionStorage.getItem("targetQty")) || 0;

// แสดงข้อมูล
document.getElementById("product").innerHTML =
"<b>สินค้า :</b> " + productCode;

document.getElementById("target").innerHTML =
"<b>จำนวนที่ต้องสแกน :</b> " + targetQty;

// ตัวแปร
let currentQty = 0;

let barcodeList = [];

// อัปเดต Progress
function updateProgress(){

    document.getElementById("progress").innerHTML =
    currentQty + " / " + targetQty;

}

// เริ่มต้น
updateProgress();

// ช่องสแกน
const barcodeInput =
document.getElementById("barcode");

// Focus ตลอดเวลา
barcodeInput.focus();

setInterval(()=>{

    barcodeInput.focus();

},500);

// เมื่อยิง Barcode แล้วกด Enter
barcodeInput.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        let code = barcodeInput.value.trim();

        if(code==="") return;

        currentQty++;

        barcodeList.push(code);

        updateProgress();

        document.getElementById("status").innerHTML =
        "✅ สแกนสำเร็จ";

        document.getElementById("history").innerHTML =
        code;

        barcodeInput.value="";

        barcodeInput.focus();

        // ครบจำนวน
        if(currentQty>=targetQty){

            alert("สแกนครบแล้ว");

        }

    }

});
