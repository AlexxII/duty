import { People } from "../types";

export * from './fireProcedure';

//const people: People[] = [
//  { name: "Аверьянов Сергей Викторович", tel: "22-10", },
//  { name: "Александрова Татьяна Владимировна", tel: "22-10" },
//  { name: "Власова Алла Анатольевна", tel: "23-10" },
//  { name: "Гребенников Павел Васильевич", tel: "22-10" },
//  { name: "Корнеева Светлана Викторона", tel: "22-10" },
//  { name: "Пчелинцев Андрей Сергеевич", tel: "22-10" },
//  { name: "Русанова Татьяна Олеговна", tel: "22-10" },
//];

const people: People[] = [
  {
    id: "d8afa90b-42d9-4ee5-8062-7d6082559d8c",
    lastName: "Аверьянов",
    firstName: "Сергей",
    patronymic: "Викторович",
    birthday: new Date("13-05-1980"),
    unit: "1 отделение",
    position: "начальник отеделения",
    rank: "подполковник",
    atsOgvPhone: ["56-12", "65-27", "56-23", "45-23"],
    ptsPhone: ["722-14"],
    mobilePhone: ["8 911 295-23-15", "8 953 233-34-89"],
    homePhone: ["45-43-24"],
    residence: ["г.Мурманск, ул.Ленина, 65, 12"]
  },
  {
    id: "ba3616a4-d9de-48cb-b374-b59e48b0dc8f",
    lastName: "Александрова",
    firstName: "Татаьяна",
    patronymic: "Владимировна",
    birthday: new Date("13-05-1978"),
    unit: "8 отделение",
    position: "инженер по зданию",
    rank: null,
    atsOgvPhone: ["56-23", "23-12"],
    ptsPhone: null,
    mobilePhone: ["8 912 398-12-47"],
    homePhone: ["65-12-74"],
    residence: ["г.Мурманск, ул.Шмидта, 14, 78"]
  },
  {
    id: "ba3821a4-d9de-48cb-b834-b59e48b0dc8f",
    lastName: "Павлов",
    firstName: "Степан",
    patronymic: "Викторович",
    birthday: new Date("05-02-1988"),
    unit: "6 отделение",
    position: "начальник отделения",
    rank: "подполковник",
    atsOgvPhone: ["23-17"],
    ptsPhone: null,
    mobilePhone: ["8 921 349-95-12"],
    homePhone: null,
    residence: ["г.Мурманск, ул.Челюскинцев, 24, 8"]
  },
  {
    id: "ba3619a4-d9de-48cb-b334-b59e48b0dc8f",
    lastName: "Гребенников",
    firstName: "Павел",
    patronymic: "Васильевич",
    birthday: new Date("05-02-2000"),
    unit: "3 отделение",
    position: "старший инженер",
    rank: "капитан",
    atsOgvPhone: ["23-12"],
    ptsPhone: null,
    mobilePhone: ["8 921 564-24-58"],
    homePhone: null,
    residence: ["г.Мурманск, ул.Морская, 75, 9"]
  },
  {
    id: "ba3616a4-d9de-48cb-b374-b59e48b0dc8f",
    lastName: "Русанова",
    firstName: "Юлия",
    patronymic: "Викторовна",
    birthday: new Date("14-02-1983"),
    unit: "88888888 отделение",
    position: "сотрудник отделения",
    rank: null,
    atsOgvPhone: ["22-57"],
    ptsPhone: null,
    mobilePhone: ["8 904 578-34-39"],
    homePhone: ["65-12-74"],
    residence: ["г.Мурманск, ул.Лобова, 56, 112"]
  },
]
export default people;
