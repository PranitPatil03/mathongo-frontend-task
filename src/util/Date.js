const currentDate = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const formattedDate = `${currentDate.getDate()} ${
  months[currentDate.getMonth()]
} '24`;
