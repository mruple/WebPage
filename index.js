function displaydate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.write(today);
}
function displaytime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.write(time);
}