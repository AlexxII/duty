import { DocumentationTree } from '../types';
import { uuidv4 } from '../utils/index.ts';

export const docs: DocumentationTree[] = [
  {
    id: uuidv4(),
    label: 'Документация дежурной службы',
    icon: 'file_copy',
    root: true,
    selectable: false,
    children: [
      {
        id: uuidv4(),
        label: 'Пропускной режим',
        icon: 'badge'
      },
      {
        id: uuidv4(),
        label: 'Охрана и оборона',
        icon: 'star_rate'
      },
      {
        id: uuidv4(),
        label: 'Пожар',
        icon: 'local_fire_department'
      },
      {
        id: uuidv4(),
        label: 'ТСО',
        icon: 'precision_manufacturing'
      },
    ]
  }
]
