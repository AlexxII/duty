export function getName(...name: string[]): string {
  if (name.length == 3) {
    return `${name[0]} ${name[1]} ${name[2]}`;
  } else if (name.length == 2) {
    return `${name[0]} ${name[1]}`;
  } else {
    return name[0];
  }
}

export function getPhone(phone: string[]): string[] {
  if (phone == null) {
    return ["-"];
  }
  if (phone.length > 2) {
    return [phone[0], phone[1], '...'];
  } else {
    return phone
  }
}

export function getMobilePhone(phone: string[]): string {
  if (phone == null) {
    return "-";
  }
  if (phone.length == 3) {
    return `${phone[0]}, ${phone[1]}, ${phone[2]}`;
  } else if (phone.length == 2) {
    return `${phone[0]}, ${phone[1]}`;
  } else {
    return `${phone[0]}`;
  }
}

export function isEmpty(obj: Object) {
  for (let _ in obj) {
    return false;
  }
  return true;
}

export function uuidv4(): string {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

export function getDayOfWeek(day: number): string {
  const days = ['вск.', 'пнд.', 'вт.', 'ср.', 'чтв.', 'птц.', 'сб.'];
  return days[day];
}

export function getCurrentTime(date: Ref): string {
  const hour = date.getHours().toString().padStart(2, 0),
    minutes = date.getMinutes().toString().padStart(2, 0),
    seconds = date.getSeconds().toString().padStart(2, 0);
  return `${hour}:${minutes}:${seconds}`;
}
