// 初始化搜索按钮选中状态
initBtnSelected();

// const inputElement = document.getElementById('search');
//
// inputElement.addEventListener('input', function(event) {
//     console.log('输入的值:', event.target.value);
//     const searchSug = document.getElementById('search-sug');
//     searchSug.style.display = 'block';
// });

// inputElement.addEventListener('blur', function(event) {
//     console.log('输入框失去焦点，当前值:', event.target.value);
//     const searchSug = document.getElementById('search-sug');
//     searchSug.style.display = 'none';
// });

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

function search() {
    if (window.event.keyCode === 13) {// enter键
        let word = document.querySelector('input[id="search"]').value;
        let site = document.querySelector('button[data-select="true"]').id;
        if (site === "baidu") {
            window.open(`https://www.baidu.com/baidu?wd=${word}`);
        }
        if (site === "bing") {
            window.open(`https://cn.bing.com/search?form=bing&q=${word}`);
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
        if (site === "ai") {
            if (word) {
                testllm(word);
            }
        }
    }
}

async function testllm(word) {
    // 展示加载效果
    spinner.classList.add('active');

    let url = 'http://127.0.0.1:11434/api/generate';
    // fetch(url, {
    //     method: 'POST',
    //     mode: "cors",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         "model": "deepseek-r1:7b",
    //         "prompt": word,
    //         "stream": false
    //     })
    // }).then(response => response.json()
    // ).then(data => {
    //     //隐藏加载效果
    //     spinner.classList.remove('active');
    //
    //     console.log("ollama请求成功");
    //     console.log(data);
    //
    //     const bottom = document.getElementById('search-bottom');
    //     bottom.classList.add('active');
    //     bottom.textContent = data.response;
    // }).catch(error => {
    //     //隐藏加载效果
    //     spinner.classList.remove('active');
    //
    //     console.log("ollama请求失败");
    //     console.log(error);
    // });


    // 发起 Fetch 请求
    const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "model": "deepseek-r1:14b",
            "prompt": word,
            "stream": true
        }),
    });

    // 获取可读流
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const bottom = document.getElementById('search-bottom');
    bottom.textContent = '';
    bottom.classList.add('active');

    // 逐步读取数据
    while (true) {
        const {done, value} = await reader.read();
        if (done) break; // 如果流结束，退出循环

        // 解码并处理数据
        const chunk = decoder.decode(value);
        const data = JSON.parse(chunk);

        // 逐步更新页面内容
        bottom.textContent += data.response;

        // 将滚动位置设置为元素的最大可滚动高度
        bottom.scrollTop = bottom.scrollHeight;
    }

    //隐藏加载效果
    spinner.classList.remove('active');
}