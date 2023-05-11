function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    localStorage.setItem('visited', 'true');
}

var hasVisited = localStorage.getItem('visited');
if (hasVisited !== 'true') {
    document.getElementById('overlay').style.display = 'flex';
}

function ChgStyUF_Inf() {
    document.getElementById("u-a_lnk-con-ins").style.textDecoration = "none";
    document.getElementById("u-a_lnk-con-use").style.textDecoration = "none";
    document.getElementById("u-a_lnk-con-inf").style.textDecoration = "underline";

    document.getElementById("DIV-UF-INFO").style.display = "block";
    document.getElementById("DIV-UF-INSTALL").style.display = "none";
    document.getElementById("DIV-UF-USE").style.display = "none";
}

function ChgStyUF_Ins() {
    document.getElementById("u-a_lnk-con-ins").style.textDecoration = "underline";
    document.getElementById("u-a_lnk-con-use").style.textDecoration = "none";
    document.getElementById("u-a_lnk-con-inf").style.textDecoration = "none";

    document.getElementById("DIV-UF-INFO").style.display = "none";
    document.getElementById("DIV-UF-INSTALL").style.display = "block";
    document.getElementById("DIV-UF-USE").style.display = "none";
}

function ChgStyUF_Use() {
    document.getElementById("u-a_lnk-con-ins").style.textDecoration = "none";
    document.getElementById("u-a_lnk-con-use").style.textDecoration = "underline";
    document.getElementById("u-a_lnk-con-inf").style.textDecoration = "none";

    document.getElementById("DIV-UF-INFO").style.display = "none";
    document.getElementById("DIV-UF-INSTALL").style.display = "none";
    document.getElementById("DIV-UF-USE").style.display = "block";
}