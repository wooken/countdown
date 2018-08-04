function days_since() {
    var date0 = new Date(2018, 4, 30); // May 30, 2018 is day 1
    var date1 = new Date();
    var days_since_date0 = Math.ceil((date1 - date0) / 8.64e7);
    return days_since_date0;
}

function weeks_since() {
    days = days_since();
    weeks = days / 7;
    mod = days % 7;
    if (mod == 0) {
        return weeks;
    } else {
        return Math.floor(weeks) + 1;
    }
}

function days_left() {
    days = days_since();
    return 365 - days;
}

function weeks_left() {
    weeks = weeks_since();
    return 52 - weeks;
}

function current_month() {
    weeks = weeks_since();
    months = weeks / 4;
    return months;
}
