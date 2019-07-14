function formatTime(number) {
    var d = number / 1440 | 0;
    var h = number / 60 | 0;
    var m = number % 60;
    var date = `${d} day(s) ${h} hour(s) ${m} minute(s)`;
    return date;
}
formatTime(120);