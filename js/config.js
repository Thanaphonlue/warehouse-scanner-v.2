/*
==========================================
Warehouse Scanner V3
Configuration
Version : 3.0.0
==========================================
*/

const CONFIG = {

    // ==========================
    // Application
    // ==========================

    APP_NAME: "Warehouse Barcode Scanner",

    VERSION: "3.0.0",

    COMPANY: "",

    LANGUAGE: "th",

    // ==========================
    // Scanner
    // ==========================

    AUTO_FOCUS: true,

    AUTO_CLEAR: true,

    AUTO_ENTER: true,

    DUPLICATE_CHECK: true,

    // ==========================
    // Speech
    // ==========================

    ENABLE_SPEECH: true,

    SPEAK_LAST_DIGITS: 3,

    SPEAK_DUPLICATE: true,

    // ==========================
    // Sound
    // ==========================

    ENABLE_SOUND: true,

    SUCCESS_SOUND: "assets/sounds/success.mp3",

    DUPLICATE_SOUND: "assets/sounds/duplicate.mp3",

    FINISH_SOUND: "assets/sounds/finish.mp3",

    // ==========================
    // Storage
    // ==========================

    STORAGE_KEY: "warehouse_scanner",

    HISTORY_KEY: "warehouse_history",

    SETTINGS_KEY: "warehouse_settings",

    // ==========================
    // Export
    // ==========================

    EXPORT_FILE_NAME: "WarehouseScan",

    EXPORT_SHEET_NAME: "Scan Result",

    // ==========================
    // Google Sheets
    // ==========================

    GOOGLE_SCRIPT_URL: "",

    // ==========================
    // Theme
    // ==========================

    PRIMARY_COLOR: "#1565C0",

    SUCCESS_COLOR: "#2E7D32",

    WARNING_COLOR: "#FB8C00",

    ERROR_COLOR: "#D32F2F"

};

Object.freeze(CONFIG);
