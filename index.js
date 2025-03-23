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
            window.location.href = `https://www.baidu.com/baidu?wd=${word}`;
        }
        if (site === "bing") {
            window.location.href = `https://cn.bing.com/search?q=${word}&PC=U316&FROM=CHROMN`;
        }
        if (site === "sogou") {
            window.location.href = `https://www.sogou.com/web?query=${word}`;
        }
        if (site === "zhihu") {
            window.location.href = `https://www.zhihu.com/search?type=content&q=${word}`;
        }
        if (site === "google") {
            window.location.href = `https://google.com/search?q=${word}`;
        }
        if (site === "yandex") {
            window.location.href = `https://yandex.com/search/?text=${word}`;
        }
        if (site === "github") {
            window.location.href = `https://github.com/search?q=${word}`;
        }
        if (site === "fanyi") {
            window.location.href = `https://fanyi.baidu.com/#zh/en/${word}`;
        }
    }
}

function testgists() {
    let element = document.querySelector("#testid");
    fetch('https://api.github.com/gists', {
        method: 'POST',
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': 'token ' + element.value,
            'X-GitHub-Api-Version': '2022-11-28'
        },
        body: JSON.stringify({
            "description": 'Example of a gist',
            "public": false,
            "files": {"README.md": {"content": "手动创建"}}
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}