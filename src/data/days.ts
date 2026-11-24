// Small date helpers for the log. Dates in the data are written the way they read: "October 25, 2017".

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// "October 25, 2017" becomes "2017-10-25", which is also the page anchor for that day
export function isoDay(date: string): string {
  const [month, day, year] = date.replace(",", "").split(" ");
  const m = String(MONTHS.indexOf(month) + 1).padStart(2, "0");
  return `${year}-${m}-${day.padStart(2, "0")}`;
}

export const utc = (iso: string) => new Date(`${iso}T00:00:00Z`);

// "Wednesday, October 25, 2017"
export const longDay = new Intl.DateTimeFormat("en-US", {
  weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
});

// "October 25"
export const monthDay = new Intl.DateTimeFormat("en-US", {
  month: "long", day: "numeric", timeZone: "UTC",
});

// "Oct 25"
export const shortDay = new Intl.DateTimeFormat("en-US", {
  month: "short", day: "numeric", timeZone: "UTC",
});
