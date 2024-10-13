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
    title: "Разбер",
    order: 4,
    url: 'assembly'
  },
  {
    id: uuidv4(),
    title: "Эдельвейс",
    order: 5,
    url: 'edelweiss'
  },
  {
    id: uuidv4(),
    title: "Срабатывание ТСО",
    order: 6,
    url: 'tso'
  },
  {
    id: uuidv4(),
    title: "Сполохи",
    order: 7,
    url: 'flashes'
  },
  {
    id: uuidv4(),
    title: "Дежурная служба",
    order: 8,
    url: 'duty_service'
  },
  {
    id: uuidv4(),
    title: "Пропускной режим",
    order: 9,
    url: 'access_mode'
  },
  {
    id: uuidv4(),
    title: "Парольные сигналы",
    order: 10,
    url: 'siganls'
  },
]
