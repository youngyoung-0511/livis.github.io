function showDetail(title, detail) {
    document.getElementById("modal-title").innerHTML = title;
    document.getElementById("modal-detail").innerHTML = detail;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

