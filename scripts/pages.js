const frame = document.getElementById("frame");
const max = 5;

page = 0;

openPage(1);

function openPage(page) {
    this.page = page;

    frame.src = "pages/" + this.page + ".html";

    window.scrollTo(0,0);
}

function nextPage() {
    if (page >= max) {
        return;
    }

    page++;

    openPage(page);
}

function previousPage() {
    if (page <= 1) {
        return;
    }

    page--;

    openPage(page);
}