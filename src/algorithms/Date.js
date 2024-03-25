// 判断是不是闰年
function isLeap(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

// 判断今天是当年第几日
function whatDay(year, month, day) {
  let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = 0;
  if (isLeap(year)) monthDays[1] = 29;
  for (let i = 0; i < month - 1; i++) {
    days += monthDays[i];
  }
  return days + day;
}

// 计算起止日期
function experience(year0, month0, day0, year1, month1, day1) {
  let days = 0;
  for (let i = year0; i < year1; i++) {
    days += whatDay(i, 12, 31);
  }
  days = days + whatDay(year1, month1, day1) - whatDay(year0, month0, day0);
  return `从${year0}年${month0}月${day0}日到${year1}年${month1}月${day1}日你已经走过了${days}天`;
}

const nowDay = new Date();

console.log(
  experience(
    1949,
    10,
    1,
    nowDay.getFullYear(),
    nowDay.getMonth() + 1,
    nowDay.getDate()
  )
);

// 从1949年10月1日到2021年8月21日你已经走过了26257天