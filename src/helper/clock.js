function printTime() {
    var d = new Date();
    var years = d.getFullYear();
    var months = d.getMonth();
    var days = d.getDate();
    var dayofWeek = d.getDay();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var compiledString = years + "-" + months + "-" + days + " (" + dayName(dayofWeek) + ") " + hours+":"+mins+":"+secs;
    console.log(compiledString)
}
setInterval(printTime, 1000);

function dayName(dayNum) {
    var returnString;
    switch(dayNum) {
        case 0: returnString="Sunday"; break;
        case 1: returnString="Monday"; break;
        case 2: returnString="Tuesday"; break;
        case 3: returnString="Wednesday"; break;
        case 4: returnString="Thursday"; break;
        case 5: returnString="Sunday"; break;
        case 6: returnString="Saturday"; break;
    }
    return returnString;
}