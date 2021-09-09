import moment from 'moment';

let bankHoliday = [];

export function isRed(day, api) {

  for (let i in api) {
    if(api[i]["röd dag"] === "Ja") bankHoliday.push({red: api[i]["datum"]})
  }

  let result = bankHoliday.find((item) => item.red === moment(day._d).format("YYYY-MM-DD").toString());

  if(result === undefined) {
    return <p>{day.format("D").toString()}</p>
  } else {
    return <p className="red">{day.format("D").toString()}</p>
  }
  
}

function isSelected(day, value) {
  return value.isSame(day, "day");
}

export function beforeToday(day){
  return day.isBefore(new Date(), "day");
}

function isToday(day){
  return day.isSame(new Date(), "day");
}

export default function dayStyles(day, value) {

  if(beforeToday(day)) return "before"
  if(isSelected(day, value)) return "selected"
  if(isToday(day)) return "today"

  return ""
}