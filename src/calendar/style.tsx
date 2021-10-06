import moment from 'moment';


//Get api bank holidays 
let bankHoliday:Object[] = [];

export function isRed(day:any, api:any):any {

  for (let i in api) {
    if(api[i]["röd dag"] === "Ja") bankHoliday.push({red: api[i]["datum"]})
  }

  let result = bankHoliday.find((item:any) => item.red === moment(day._d).format("YYYY-MM-DD").toString());

  if(result === undefined) {
    return <p>{day.format("D").toString()}</p>
  } else {
    return <p className="red">{day.format("D").toString()}</p>
  }
  
}


//find selected day
function isSelected(day:any, value:any):Object {
  return value.isSame(day, "day");
}

//find days before today
export function beforeToday(day:any):Object[] {
  return day.isBefore(new Date(), "day");
}

//find today
function isToday(day:any):Object[] {
  return day.isSame(new Date(), "day");
}

//return class of day
export default function dayStyles(day:any, value:any):string {

  if(beforeToday(day)) return "before"
  if(isSelected(day, value)) return "selected"
  if(isToday(day)) return "today"

  return ""
}