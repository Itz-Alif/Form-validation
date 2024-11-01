

function alidateformv() {
    // get the values of the input boxes
    var username = document.querySelector(".username").value
    var password = document.querySelector(".password").value

    // validate the username

    if (username.length == 0) {
        var usernameError = document.querySelector(".usernameError")
        usernameError.style.display = "Block"
        return false
    }
}