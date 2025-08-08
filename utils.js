// utils.js

/**
 * Utility Functions
 * ไฟล์นี้รวบรวมฟังก์ชันช่วยเหลือที่ใช้บ่อยๆ ในหลายหน้า
 * เช่น การจัดรูปแบบตัวเลข, การสร้างป้ายสถานะ
 */

/**
 * จัดรูปแบบตัวเลขเป็นสกุลเงินบาท (เช่น 1,250.50 ฿)
 * @param {number} number - ตัวเลขที่ต้องการจัดรูปแบบ
 * @returns {string} - สตริงที่จัดรูปแบบแล้ว
 */
export const formatCurrency = (number) => {
    return (number || 0).toLocaleString('th-TH', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    }) + ' ฿';
};

/**
 * สร้าง HTML สำหรับป้ายสถานะการชำระเงิน
 * @param {string} status - สถานะ (เช่น 'ชำระแล้ว', 'มัดจำ')
 * @returns {string} - โค้ด HTML ของป้ายสถานะ
 */
export const getPaymentStatusBadge = (status) => {
    if (status === 'ฟรี') return `<span class="bg-rose-100 text-rose-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${status}</span>`;
    switch (status) {
        case 'ชำระแล้ว': return `<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${status}</span>`;
        case 'มัดจำ': return `<span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${status}</span>`;
        default: return `<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${status || 'N/A'}</span>`;
    }
};

/**
 * สร้าง HTML สำหรับป้ายสถานะการดำเนินการ
 * @param {string} status - สถานะ (เช่น 'จัดส่งแล้ว', 'รอดำเนินการ')
 * @returns {string} - โค้ด HTML ของป้ายสถานะ
 */
export const getProcessingStatusBadge = (status) => {
    switch (status) {
        case 'จัดส่งแล้ว': return `<span class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${status}</span>`;
        case 'ดำเนินการเสร็จสิ้น': return `<span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${status}</span>`;
        default: return `<span class="bg-stone-100 text-stone-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${status || 'N/A'}</span>`;
    }
};

/**
 * แสดงข้อความแจ้งเตือนแบบ Toast บนหน้าจอ
 * @param {string} message - ข้อความที่ต้องการแสดง
 * @param {boolean} isError - ตั้งเป็น true ถ้าเป็นข้อความแสดงข้อผิดพลาด
 */
export function showToast(message, isError = false) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = `fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white transition-opacity duration-300 ${isError ? 'bg-rose-500' : 'bg-emerald-500'}`;
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 4000);
}
