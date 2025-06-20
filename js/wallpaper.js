// 说明：
// 默认展示必应每日壁纸，一天一换；
// 每个人看到的每日壁纸都一样；
// 点击“更换壁纸”按钮，随机一张新的壁纸，当日有效；

// 初始化背景
function initImg() {
    const nowDate = getNowDate();
    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        if (obj.hasOwnProperty('imgIndex')) {
            setImgByIndex(obj.imgIndex);
            return;
        }
    }

    // 对imgIdArray的length取模,保证同一天的图片都一样，且imgIdArray里的每张图片都能被用到
    let imgIndex = getDayOfYear() % imgIdArray.length;

    setImgByIndex(imgIndex);
}

function setImgByIndex(imgIndex) {
    // 防止意外
    if (imgIndex >= imgIdArray.length) {
        imgIndex = imgIdArray.length - 1;
    }

    // imgIndex的范围是0 ～ imgIdArray.length-1
    const imgUrl = imgIdArray[imgIndex];
    // 设置body背景图
    document.body.style.backgroundImage = `url("https://cn.bing.com/th?id=${imgUrl}")`;
}

// 更换背景
function changeImg() {
    const nowDate = getNowDate();
    let randomInt = getRandomInt(0, imgIdArray.length);

    setImgByIndex(randomInt);

    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        obj.imgIndex = randomInt;
        localStorage.setItem(nowDate, JSON.stringify(obj));
    } else {
        let obj = {imgIndex: randomInt};
        localStorage.setItem(nowDate, JSON.stringify(obj));
    }
}

initImg();