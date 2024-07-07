// 设置搜索按钮选中状态
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