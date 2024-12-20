async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText('./변시널 판타지아' + target + '.html');
}

importPage('contents');