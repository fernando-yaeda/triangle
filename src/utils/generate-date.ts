import dayjs from "dayjs";

export function generateDate(): string {
  const day = dayjs().format("DD").toLocaleLowerCase();
  const weekday = dayjs().format("dddd").toLocaleLowerCase();
  const month = dayjs().format("MMMM").toLocaleLowerCase();

  const date = `${weekday}, ${month} ${day}`;

  return date;
}
