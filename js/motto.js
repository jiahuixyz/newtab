// 初始化格言
function initMotto() {
    const nowDate = getNowDate();
    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        if (obj.hasOwnProperty('mottoIndex')) {
            setMottoByIndex(obj.mottoIndex);
            return;
        }
    }

    // 对mottoArray的length取模,保证同一天的格言都一样，且mottoArray里的每张图片都能被用到
    let mottoIndex = getDayOfYear() % mottoArray.length;

    setMottoByIndex(mottoIndex);
}

function setMottoByIndex(mottoIndex) {
    let mottoDiv = document.querySelector("#motto");
    mottoDiv.textContent = "「 " + mottoArray[mottoIndex] + " 」";
}

function changeMotto() {
    const nowDate = getNowDate();
    let randomInt = getRandomInt(0, mottoArray.length);

    setMottoByIndex(randomInt);

    let item = localStorage.getItem(nowDate);
    if (item) {
        let obj = JSON.parse(item);
        obj.mottoIndex = randomInt;
        localStorage.setItem(nowDate, JSON.stringify(obj));
    } else {
        let obj = {mottoIndex: randomInt};
        localStorage.setItem(nowDate, JSON.stringify(obj));
    }
}

// 初始化格言
initMotto();