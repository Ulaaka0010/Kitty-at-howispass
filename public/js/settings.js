
function setTabTitle() {
    let input = document.getElementById("changetitle");
    let newTabName = input.value;
    document.title = newTabName;
    localStorage.setItem("tabName", newTabName);
    if (input === "") {
        document.title = "Kitty Cat Club | <%= title %>"
        localStorage.setItem("tabName", "Kitty Cat Club | <%= title %>")
    }
}

function setFavicon() {
    let url = document.getElementById("changefavicon").value;
    if (url === "") {
        localStorage.setItem("favicon", "./img/logo.png");
        alert("You need to put a valid url here!");
    } else {
        localStorage.setItem("favicon", url);
    }
}
//what if i make a button that will change the favicon instead of automatically changing it
function openAboutBlack() {
    let url = window.location.href;
    let win = window.open();
    let iframe = win.document.createElement("iframe"); 
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    win.document.body.appendChild(iframe);
}

function changeBG() {
    let url = document.getElementById("changebg").value; 
    localStorage.setItem("BG", url);
    window.location.reload(); 
}

function changeFaviconToGoogle() {
    localStorage.setItem("changetitle", "./img/google.png")
}

function changeFaviconToGoogleDrive() {
    localStorage.setItem("changetitle", "./img/google_drive.png")
}

function changeFaviconToGoogleClassroom() {
    localStorage.setItem("changetitle", "./img/Google_Classroom.png")
}

function changeFaviconToGoogleDocs() {
    localStorage.setItem("changetitle", "./img/google_docs.ico")
}