async function pingTest() {
    const spinner = document.getElementById('spinner');//加载圆圈
    let url = 'http://127.0.0.1:32008/testHello';
    fetch(url, {
        method: 'POST',
        mode: "cors"
    }).then(response => response.json()
    ).then(data => {
        //隐藏加载效果
        spinner.classList.remove('active');
    
        console.log("请求成功");
        console.log(data);
    }).catch(error => {
        //隐藏加载效果
        spinner.classList.remove('active');
    
        console.log("请求失败");
        console.log(error);
    });
}

async function testllm(word) {
    // 展示加载效果
    spinner.classList.add('active');

    // 发起 Fetch 请求
    const response = await fetch('http://localhost:32008/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "question": word,
        }),
    });

    // 获取可读流
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    const bottom = document.getElementById('llmPart');
    bottom.textContent = '';
    bottom.classList.add('active');

    let buffer = '';
    // 逐步读取数据
    while (true) {
        const { done, value } = await reader.read();
        if (done) break; // 如果流结束，退出循环

        // 解码并处理数据
        buffer += decoder.decode(value, { stream: true });
        
        // 按行分割处理
        let lastIndex = 0;
        while ((lastIndex = buffer.indexOf('\n')) !== -1) {
            const line = buffer.slice(0, lastIndex).trim();
            buffer = buffer.slice(lastIndex + 1);

            // 跳过空行和注释
            if (line === '') continue;
            if (line.startsWith(':')) continue;

            // 解析 data 字段
            if (line.startsWith('data:')) {
                // 提取 data 内容（移除前缀和首尾空格）
                const eventData = line.slice(5).trim();
                let data = JSON.parse(eventData);
                // 逐步更新页面内容
                bottom.textContent += data.c;
            }
        }

        // 将滚动位置设置为元素的最大可滚动高度
        bottom.scrollTop = bottom.scrollHeight;
    }

    //隐藏加载效果
    spinner.classList.remove('active');
}

window.testllm = testllm;