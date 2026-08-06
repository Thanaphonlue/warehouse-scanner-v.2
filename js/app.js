// =========================
// Warehouse Scanner v2
// Main Script
// =========================

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", startScanning);

function startScanning() {

    const productCode =
        document.getElementById("productCode").value.trim();

    const targetQty =
        document.getElementById("targetQty").value.trim();

    if (productCode === "") {

        alert("กรุณากรอกรหัสสินค้า");
        return;

    }

    if (targetQty === "") {

        alert("กรุณากรอกจำนวนสินค้า");
        return;

    }

    if (Number(targetQty) <= 0) {

        alert("จำนวนสินค้าต้องมากกว่า 0");
        return;

    }

    sessionStorage.setItem(
        "productCode",
        productCode
    );

    sessionStorage.setItem(
        "targetQty",
        targetQty
    );

    window.location.href = "scan.html";

}
