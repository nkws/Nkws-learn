import { shuffle } from "../../utils/helpers";

export const P3_MATH_TIME_INTRO = {
  "p3m-tm1": {
    title: "24-Hour Clock & Duration",
    pages: [
      { text: "The 24-hour clock goes from 00:00 (midnight) to 23:59. After 12:59 comes 13:00 (1 p.m.)!", emoji: "🕐 13:00 = 1 p.m." },
      { text: "To convert: add 12 for afternoon times. 3 p.m. = 15:00. Subtract 12 for the reverse.", emoji: "+12 / −12" },
      { text: "Duration = end time − start time. From 09:30 to 11:00 is 1 h 30 min.", emoji: "⏱️" },
    ],
  },
};

function buildP3mTm1() {
  return shuffle([
    { q: "What is 3 p.m. in 24-hour time?", a: "15:00", choices: ["15:00", "03:00", "13:00"], explain: "For afternoon and evening times, add 12 to the hour to get 24-hour time. 3 plus 12 is 15, so 3 p.m. is 15:00." },
    { q: "What is 20:00 in 12-hour time?", a: "8 p.m.", choices: ["8 p.m.", "8 a.m.", "10 p.m."], explain: "For 24-hour times past 12, subtract 12 to get the 12-hour clock. 20 minus 12 is 8, and it is afternoon, so 20:00 is 8 p.m." },
    { q: "What time is 1 hour after 11:45 a.m.?", a: "12:45 p.m.", choices: ["12:45 p.m.", "12:45 a.m.", "11:46 a.m."], explain: "Adding 1 hour moves the hour up by one but keeps the minutes. 11:45 a.m. plus an hour is 12:45, and noon turns a.m. into p.m." },
    { q: "How long is it from 09:00 to 11:30?", a: "2 h 30 min", choices: ["2 h 30 min", "3 h 30 min", "2 h"], explain: "To find a time interval, count on from the start time. From 09:00 to 11:00 is 2 hours, then to 11:30 is 30 minutes more, so 2 h 30 min." },
    { q: "A movie starts at 14:00 and ends at 16:15. How long is it?", a: "2 h 15 min", choices: ["2 h 15 min", "2 h", "2 h 45 min"], explain: "Count on from the start to the end. From 14:00 to 16:00 is 2 hours, then 15 more minutes to 16:15, making 2 h 15 min." },
    { q: "What is midnight in 24-hour time?", a: "00:00", choices: ["00:00", "12:00", "24:00"], explain: "The 24-hour clock starts the day at midnight, written 00:00. The hours then count up to 23:59 before midnight comes again." },
    { q: "School starts at 07:30 and ends at 13:00. How long is the school day?", a: "5 h 30 min", choices: ["5 h 30 min", "6 h 30 min", "5 h"], explain: "Count on from start to end. From 07:30 to 12:30 is 5 hours, then to 13:00 is 30 minutes more, so the day is 5 h 30 min." },
    { q: "What is 6:45 p.m. in 24-hour time?", a: "18:45", choices: ["18:45", "06:45", "16:45"], explain: "For p.m. times, add 12 to the hour. 6 plus 12 is 18, and the minutes stay the same, so 6:45 p.m. is 18:45." },
    { q: "A bus journey takes 45 minutes. If it leaves at 10:20, when does it arrive?", a: "11:05", choices: ["11:05", "10:65", "11:20"], explain: "Count on from the start, but remember an hour is only 60 minutes. 10:20 plus 40 min reaches 11:00, then 5 more minutes makes 11:05." },
    { q: "How many minutes in 2 hours?", a: "120", choices: ["120", "200", "60"], explain: "One hour is 60 minutes. Two hours is 2 lots of 60, so multiply: 2 times 60 is 120 minutes." },
  ]).map((item) => ({ question: item.q, answer: item.a, choices: shuffle([...item.choices]), explain: item.explain }));
}

const BUILDERS = { "p3m-tm1": buildP3mTm1 };
export const P3_MATH_TIME_QUESTION_COUNTS = { "p3m-tm1": 10 };
export function buildTime3Questions(moduleId) { return (BUILDERS[moduleId] || (() => []))(); }
