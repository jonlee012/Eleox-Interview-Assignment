function user1() {
    var user = document.getElementById('username').value
    var pass = document.getElementById('password').value
    if (user == "interview" && pass == "eleox") {
        window.open("interview-page.html")
        alert('correct username')
    } else {
        alert('incorrect username or password')
    }
}