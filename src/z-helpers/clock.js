function printTime() {
    let d = new Date();
    let years = d.getFullYear();
    let months = d.getMonth();
    let days = d.getDate();
    let dayofWeek = d.getDay();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let compiledString = years + "-" + months + "-" + days + " (" + dayName(dayofWeek) + ") " + hours+":"+mins+":"+secs;
    console.log(compiledString)
}
setInterval(printTime, 1000);

function dayName(dayNum) {
    let returnString;
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