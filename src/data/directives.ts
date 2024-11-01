import { Directive } from '../types';
import { uuidv4 } from '../utils';

export const directives: Directive[] = [
  {
    id: uuidv4(),
    title: "Сбор",
    order: 1,
    url: 'assembly'
  },
  {
    id: uuidv4(),
    title: "Нападение",
    order: 2,
    url: 'attack'
  },
  {
    id: uuidv4(),
    title: "Пожар",
    order: 3,
    url: 'fire'
  },
  {
    id: uuidv4(),
    title: "Разбег",
    order: 4,
    url: 'assembly'
  },
  {
    id: uuidv4(),
    title: "Воздух",
    order: 5,
    url: 'edelweiss'
  },
  {
    id: uuidv4(),
    title: "Эдельвейс",
    order: 6,
    url: 'edelweiss'
  },
  {
    id: uuidv4(),
    title: "Срабатывание ТСО",
    order: 7,
    url: 'tso'
  },
  {
    id: uuidv4(),
    title: "Сполохи",
    order: 8,
    url: 'flashes'
  },
  {
    id: uuidv4(),
    title: "Дежурная служба",
    order: 9,
    url: 'duty_service'
  },
  {
    id: uuidv4(),
    title: "Пропускной режим",
    order: 10,
    url: 'access_mode'
  },
  {
    id: uuidv4(),
    title: "Парольные сигналы",
    order: 11,
    url: 'siganls'
  },
]
