document.addEventListener("DOMContentLoaded", function () {
    async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText('./Hensinal_Fantasia/' + target + '.html');
}

importPage('contents');
});