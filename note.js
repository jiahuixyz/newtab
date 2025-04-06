// 获取元素
const openBtn = document.getElementById('openBtn');
const popupWindow = document.getElementById('popupWindow');
const closeBtn = document.getElementById('closeBtn');
const pullBtn = document.getElementById('pullBtn');
const pushBtn = document.getElementById('pushBtn');
const textarea = document.querySelector('textarea');
const processText = document.getElementById('processText');
const spinner = document.getElementById('spinner');//加载圆圈

// 打开弹窗
openBtn.addEventListener('click', function (e) {
    const rect = openBtn.getBoundingClientRect();
    popupWindow.style.top = `${rect.bottom + window.scrollY + 10}px`;
    popupWindow.style.left = `${rect.left + window.scrollX}px`;
    popupWindow.style.display = 'block';

    // 如果note为空，pull note
    const noteContent = localStorage.getItem('noteContent');
    if(!noteContent){
        pullNote();
    }
});

// 关闭弹窗
closeBtn.addEventListener('click', function () {
    popupWindow.style.display = 'none';
});

// 关闭弹窗
document.addEventListener('click', function (e) {
    // 获取弹窗元素和打开按钮
    const popup = document.getElementById('popupWindow');
    const openBtn = document.getElementById('openBtn');

    // 当同时满足以下条件时关闭弹窗：
    // 1. 当前点击的不是弹窗本身
    // 2. 当前点击的不是打开按钮
    // 3. 弹窗当前处于显示状态
    if (!popup.contains(e.target) &&
        e.target !== openBtn &&
        popup.style.display === 'block') {
        popup.style.display = 'none';
    }
});

// ESC关闭弹窗
document.addEventListener('keydown', function (e) {
    const popup = document.getElementById('popupWindow');

    // 同时检测两种按键标识方式（兼容性处理）
    if ((e.key === 'Escape' || e.keyCode === 27) &&
        popup.style.display === 'block') {
        popup.style.display = 'none';

        // 可选：移除输入框焦点（如果存在）
        const textarea = document.querySelector('textarea');
        if (document.activeElement === textarea) {
            textarea.blur();
        }
    }
});

// pull按钮功能
pullBtn.addEventListener('click', function () {
    pullNote();
});

// push按钮功能
pushBtn.addEventListener('click', function () {
    pushNote();
});

// 点击文档其他区域关闭弹窗
document.addEventListener('click', function (e) {
    if (!popupWindow.contains(e.target) && e.target !== openBtn) {
        popupWindow.style.display = 'none';
    }
});

// 监听文本域输入事件
textarea.addEventListener('input', function (event) {
    const currentText = event.target.value;
    localStorage.setItem("noteContent", currentText);
});

/**
 * 1.获取私有gists列表
 * 2.找到其中名字为newtabNote.md的那个，拿到id
 * 3.根据id查详情
 */
async function pullNote() {
    spinner.classList.add('active');// 展示加载效果

    let gists = await getGists();
    console.log(gists)
    const newtabNote = gists.find(item => item.files.hasOwnProperty("newtabNote.md"));

    if (newtabNote) {
        console.log("存在newtabNote，获取gist")
        let result = await getGist(newtabNote.id);
        let noteContent = result.files['newtabNote.md'].content;

        // 设置文本域和localStorage
        const textarea = document.querySelector('textarea');
        textarea.value = noteContent;
        localStorage.setItem("noteContent", noteContent);

        spinner.classList.remove('active');//隐藏加载效果
        setProcessText('pull success!');
    } else {
        console.log("不存在newtabNote")
        spinner.classList.remove('active');//隐藏加载效果
        setProcessText('note not exist, please push at first');
    }
}

/**
 * 1.获取私有gists列表
 * 2.找到其中名字为newtabNote.md的那个，拿到id
 * 3.按id去push
 * 4.若没有找到，则新建一个
 */
async function pushNote() {
    const noteContent = localStorage.getItem('noteContent');
    if (!noteContent) {
        setProcessText('note is empty');
        return;
    }

    spinner.classList.add('active');// 展示加载效果

    let gists = await getGists(noteContent);
    const newtabNote = gists.find(item => item.files.hasOwnProperty("newtabNote.md"));
    if (newtabNote) {
        console.log("存在newtabNote，更新gist")
        await updateGist(newtabNote.id, noteContent);
    } else {
        console.log("不存在newtabNote，新建gist")
        await createGist(noteContent);
    }

    spinner.classList.remove('active');//隐藏加载效果
    setProcessText('push success!');
}

// 设置处理完展示的文本
function setProcessText(text) {
    processText.innerHTML = text;
    setTimeout(function () {
        processText.innerHTML = '';
    }, 3000);
}

function getNoteKey() {
    const noteKey = localStorage.getItem('noteKey');
    if (!noteKey) {
        setProcessText('请先设置noteKey');
        throw new Error("noteKey is null");
    }
    return noteKey;
}

function getGistHeader() {
    let noteKey = getNoteKey();
    return {
        'Accept': 'application/vnd.github+json',
        'Authorization': 'token ' + noteKey,
        'X-GitHub-Api-Version': '2022-11-28'
    };
}

async function getGists() {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists', {
            method: 'GET',
            headers: gistHeader
        });
        console.log("getGists success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

async function getGist(gistId, noteContent) {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists/' + gistId, {
            method: 'GET',
            headers: gistHeader
        });
        console.log("getGist success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

async function updateGist(gistId, noteContent) {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists/' + gistId, {
            method: 'PATCH',
            headers: gistHeader,
            body: JSON.stringify({
                "description": 'this is newtabNote',
                "public": false,
                "files": {"newtabNote.md": {"content": noteContent}}
            })
        });
        console.log("updateGist success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}

async function createGist(noteContent) {
    let gistHeader = getGistHeader();
    try {
        let response = await fetch('https://api.github.com/gists', {
            method: 'POST',
            headers: gistHeader,
            body: JSON.stringify({
                "description": 'this is newtabNote',
                "public": false,
                "files": {"newtabNote.md": {"content": noteContent}}
            })
        });
        console.log("createGist success!")
        return await response.json();
    } catch (error) {
        console.log('Request Failed', error);
    }
}