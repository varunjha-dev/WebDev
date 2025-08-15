//* ********************************
//* JavaScript Date & Time (Easy Guide)
//* ********************************

//! Creating a Date Object - Used to work with dates & times
const d = new Date();
console.log(d);               //* Full Date & Time
console.log(d.toDateString()); //* Only Date
console.log(d.toString());    //* Date with Timezone
console.log(d.toISOString()); //* ISO Format

//! JavaScript stores date in milliseconds since Jan 1, 1970
const d1 = new Date(1000);  //* 1000 ms = 1 second after Jan 1, 1970
console.log(d1);

const d2 = new Date(2000);  //* 2000 ms = 2 seconds after Jan 1, 1970
console.log(d2);

//! Extracting Date Components
console.log(d.getDate());         //* Day of the month (1-31)
console.log(d.getDay());          //* Day of the week (0=Sun to 6=Sat)
console.log(d.getMonth());        //* Month (0-based, Jan=0, Dec=11)
console.log(d.getFullYear());     //* Year
console.log(d.getMilliseconds()); //* Milliseconds (0-999)
console.log(d.getMinutes());      //* Minutes (0-59)
console.log(d.getTime());         //* Timestamp (ms since 1970)

//! Current Timestamp
const now = Date.now();
console.log(now);  //* Current time in ms since 1970

//! Creating Custom Dates
const d4 = new Date("2022-10-20");  //* YYYY-MM-DD format (1-based counting indexing)
console.log(d4);

const d5 = new Date("2022-10-20T10:10:12"); //* With time
console.log(d5);

//! Custom Date Using Numbers (0-based Month indexing)
const date = new Date(2024, 4, 28); //* May 28, 2024 (0-based month)
console.log(date);

//* ********************************
//* Setting Date Components
//* ******************************** 
const d6 = new Date();
d6.setDate(20);        //* Change Day
d6.setFullYear(2021);  //* Change Year
d6.setMonth(3);        //* Change Month (0-based)
console.log(d6.toString());

//* ********************************
//* Date Calculations
//* ********************************
const date1 = new Date();
const date2 = new Date("2025-04-21");
console.log(date2 - date1); //* Difference in milliseconds
console.log(date2 > date1); //* Compare Dates (true/false)

//* ********************************
//* Countdown Timer (Olympics 2028)
//* ********************************
const currentDate = new Date();
const olymDate = new Date("2028-07-14T00:00:00");
const remainingDate = olymDate - currentDate;

const days = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
const hours = Math.floor((remainingDate / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((remainingDate / (1000 * 60)) % 60);
const seconds = Math.floor((remainingDate / 1000) % 60);

console.log(`Olympics Countdown: Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
