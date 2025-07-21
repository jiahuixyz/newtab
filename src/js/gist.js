function checkNoteKey() {
    return localStorage.getItem('noteKey');
}

function getNoteKey() {
    const noteKey = localStorage.getItem('noteKey');
    if (!noteKey) {
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