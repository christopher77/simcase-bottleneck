import formatAMPM from "./formatAMPM";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const ordinals = [
  "",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "st"
];

export default function formatDate(someDate) {
  let FormattedDate = "";
  let today = new Date();
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  ) {
    FormattedDate = `Today at ${formatAMPM(someDate)}`;
  } else if (
    someDate.getDate() == yesterday.getDate() &&
    someDate.getMonth() == yesterday.getMonth() &&
    someDate.getFullYear() == yesterday.getFullYear()
  ) {
    FormattedDate = `Yesterday at ${formatAMPM(someDate)}`;
  } else {
    FormattedDate = `${getWeekDay(someDate)}, ${getMonth(
      someDate
    )} ${getformatDay(someDate)} at ${formatAMPM(someDate)}`;
  }
  // return Today, yesterday, "Monday, May 20th at 08:00 am"
  return FormattedDate;
}

function getWeekDay(date) {
  return days[date.getDay()];
}

function getMonth(date) {
  return months[date.getMonth()];
}

function getformatDay(date) {
  return `${date.getDate()}${ordinals[date.getDate()]}`;
}
