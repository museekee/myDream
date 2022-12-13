const elems = {
    maindialog: {
        dialog: document.getElementById("MainDialog"),
        back: document.getElementById("MainDialogBack")
    }
}

for (const elem of document.getElementsByTagName("port-post")) {
    elem.addEventListener("mousedown", (e) => {
        if (e.currentTarget instanceof Element) {
            elems.maindialog.back.style.display = "flex"
            elems.maindialog.dialog.innerHTML = e.currentTarget.innerHTML
        }
    })
}

elems.maindialog.back.addEventListener("mousedown", e => {
    elems.maindialog.back.style.display = "none"
})