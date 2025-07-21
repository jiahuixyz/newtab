// 获取指定范围内的随机整数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 获取格式化日期，类似2023-05-15
function getNowDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 一年中第几天
function getDayOfYear() {
    const now = new Date(); // 当前日期
    const start = new Date(now.getFullYear(), 0, 0); // 去年12月31日
    const diff = now - start; // 时间差（毫秒）
    const oneDay = 1000 * 60 * 60 * 24; // 一天的毫秒数
    return Math.floor(diff / oneDay); // 返回天数
}

window.getRandomInt = getRandomInt;
window.getNowDate = getNowDate;
window.getDayOfYear = getDayOfYear;