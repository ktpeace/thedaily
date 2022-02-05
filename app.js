const pressMe = document.querySelector('.pressme');
const messageArea = document.querySelector('.messageArea');

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (7776000000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

pressMe.addEventListener('click', function () {
    pressMe.hidden = true;
    messageArea.innerHTML = 'Come back tomorrow for a new click!';
    setCookie('clicklink', 'yes');
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var cookieString = getCookie("clicklink");

window.onload = function () {
    if (cookieString == "yes") {
        pressMe.hidden = true;
        messageArea.innerHTML = 'Come back tomorrow for a new click!';
    }
}
