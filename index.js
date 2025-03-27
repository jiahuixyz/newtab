// 初始化搜索按钮选中状态
initBtnSelected();
// 初始化格言
initMotto();

// 初始化搜索按钮选中状态
function initBtnSelected() {
    let btns = document.querySelectorAll(".searchType button");
    for (let btn of btns) {
        btn.addEventListener('click', function (e) {
            let btns = document.querySelectorAll(".searchType button");
            for (let btn of btns) {
                if (btn.id === e.target.id) {
                    btn.setAttribute("data-select", "true");
                } else {
                    btn.removeAttribute("data-select");
                }
            }
        });
    }
}

// 初始化格言
function initMotto() {
    const currentDate = new Date().toDateString();
    let storedDate = localStorage.getItem('currentDate');
    let storedRandomInt = parseInt(localStorage.getItem('randomInt'));

    if (storedDate !== currentDate || storedRandomInt > mottoArray.length - 1) {
        storedRandomInt = getRandomInt(0, mottoArray.length);
        localStorage.setItem('currentDate', currentDate);
        localStorage.setItem('randomInt', storedRandomInt);
    }

    let mottoDiv = document.querySelector("#motto");
    mottoDiv.textContent = "「 " + mottoArray[storedRandomInt].content + " 」";
}

// 获取指定范围内的随机整数
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function search() {
    if (window.event.keyCode === 13) {// enter键
        let word = document.querySelector('input[id="search"]').value;
        let site = document.querySelector('button[data-select="true"]').id;
        if (site === "baidu") {
            window.open(`https://www.baidu.com/baidu?wd=${word}`);
        }
        if (site === "bing") {
            window.open(`https://cn.bing.com/search?q=${word}`);
        }
        if (site === "sogou") {
            window.open(`https://www.sogou.com/web?query=${word}`);
        }
        if (site === "zhihu") {
            window.open(`https://www.zhihu.com/search?type=content&q=${word}`);
        }
        if (site === "google") {
            window.open(`https://google.com/search?q=${word}`);
        }
        if (site === "yandex") {
            window.open(`https://yandex.com/search/?text=${word}`);
        }
        if (site === "github") {
            window.open(`https://github.com/search?q=${word}`);
        }
        if (site === "fanyi") {
            window.open(`https://fanyi.baidu.com/#zh/en/${word}`);
        }
    }
}