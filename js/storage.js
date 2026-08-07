/*
==========================================
Warehouse Scanner V3
Storage Engine
==========================================
*/

const Storage = {

    // โหลดข้อมูลทั้งหมด
    load() {

        const data = localStorage.getItem(CONFIG.STORAGE_KEY);

        if (!data) {
            return [];
        }

        try {
            return JSON.parse(data);
        } catch (e) {
            console.error("Storage Error :", e);
            return [];
        }

    },

    // บันทึกข้อมูลทั้งหมด
    save(data) {

        localStorage.setItem(
            CONFIG.STORAGE_KEY,
            JSON.stringify(data)
        );

    },

    // เพิ่ม Barcode
    add(barcode) {

        const list = this.load();

        list.push({

            barcode: barcode,

            time: new Date().toISOString()

        });

        this.save(list);

    },

    // ล้างข้อมูล
    clear() {

        localStorage.removeItem(
            CONFIG.STORAGE_KEY
        );

    },

    // จำนวนทั้งหมด
    count() {

        return this.load().length;

    },

    // ตรวจว่ามี Barcode นี้หรือยัง
    exists(barcode) {

        return this.load().some(item =>
            item.barcode === barcode
        );

    }

};
