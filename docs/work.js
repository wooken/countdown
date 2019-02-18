var weeks_pushed_back = 8;
var total_days = 365 + weeks_pushed_back * 7;
var start_day = new Date(2018, 4, 30); // May 30, 2018 is day 1
var last_day = new Date(start_day.getTime());
last_day.setDate(last_day.getDate() + total_days);

var total_months = Math.round(total_days / 30, 2);

var ms_per_month = 30*24*60*60*1000; // days*hours*minutes*seconds*milliseconds
var today = new Date();
var months_elapsed = Math.round(((today.getTime() - start_day.getTime()) / ms_per_month), 2);
var months_left = total_months - months_elapsed;
