export interface People {
  id: string,
  lastName: string | null,                  // фамилия
  firstName: string | null,
  patronymic: string | null,                // отчество
  birthday: Date | null,
  unit: string | null,                      // подразделение из перчня подразделений
  position: string | null,                  // должность из перечня должностей
  rank: string | null,                      // звание 
  atsOgvPhone: string[] | null,
  ptsPhone: string[] | null,
  mobilePhone: [string, string, string] | [string, string] | [string] | null,
  homePhone: string[] | null,
  residence: string[] | null,                // место жительства
  personal_weapon?: string[] | null,         // личное оружие
  customized_weapon?: string[] | null,        // индивидуальные оружие
  other?: string | null                      // прочее
}

export interface Contact {
  id: string,
  title: string | null,
  atsOgvPhone: string[] | null,
  ptsPhone: string[] | null,
  mobilePhone: [string, string, string] | [string, string] | [string] | null,
  homePhone: string[] | null,
  residence: string[] | null,                // место размещения
  other?: string | null                      // прочее
}

export interface Unit {
  id: string,
  title: string,
  supervisor: string,                       // руководитель
  rooms: string[],                          // помещения
}

export interface Room {
  id: string,
  title: string,
  responsible: string | null
}

export interface Directive {
  id: string,
  title: string,
  order: number,
  url: string,
}

export interface DocumentationTree {
  id: string,
  label: string,
  root?: boolean,
  icon?: string,
  disabled?: boolean,
  handler?: Function,
  selectable?: boolean,
  children?: DocumentationTree[]
}

enum CiperCarrierType {
  dk = 'К1634ДК6',
  rik = "РИК-2",
  cd = "CD"
}

export interface CiperCarrier {
  id: string,
  label: string,                                        // наименование носителя
  serialNumber: number,                                 // заводской номер
  type: CiperCarrierType,                               // тип
}
