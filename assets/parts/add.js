// Created using Proton Lumo because I don't know JavaScript but edited by me

async function loadPartial(url, targetId) {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(targetId).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadPartial("/assets/parts/nav.html", "navExt"),
        loadPartial("/assets/parts/dateModal.html", "dateModalExt"),
    ]);
});