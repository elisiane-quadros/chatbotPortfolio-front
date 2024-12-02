import mobile from '@/public/assets/mobile.png';
import { StaticImageData } from 'next/image';

type ProjectType = 'FRONT-END' | 'PYTHON' | 'MOBILE' | 'MACHINE LEARNING';

interface Links {
  id: number;
  label: string;
  url: string;
}

interface ProjectInfo {
  id: number;
  title: string;
  image: StaticImageData;
  type: ProjectType;
  links: Links[];
}

const seeProjectLabel = 'Ver projeto';
const seeRepositoryLabel = 'Ver repositório';

const projectInfoList: ProjectInfo[] = [
  {
    id: 1,
    title: 'Teste1',
    image: mobile,
    type: 'FRONT-END',
    links: [
      {
        id: 1,
        label: seeProjectLabel,
        url: '',
      },
      {
        id: 2,
        label: seeRepositoryLabel,
        url: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Teste2',
    image: mobile,
    type: 'PYTHON',
    links: [
      {
        id: 1,
        label: seeProjectLabel,
        url: '',
      },
      {
        id: 2,
        label: seeRepositoryLabel,
        url: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Teste3',
    image: mobile,
    type: 'MOBILE',
    links: [
      {
        id: 1,
        label: seeProjectLabel,
        url: '',
      },
      {
        id: 2,
        label: seeRepositoryLabel,
        url: '',
      },
    ],
  },
  {
    id: 4,
    title: 'Teste4',
    image: mobile,
    type: 'MACHINE LEARNING',
    links: [
      {
        id: 1,
        label: seeProjectLabel,
        url: '',
      },
      {
        id: 2,
        label: seeRepositoryLabel,
        url: '',
      },
    ],
  },
  {
    id: 5,
    title: 'Teste4',
    image: mobile,
    type: 'MACHINE LEARNING',
    links: [
      {
        id: 1,
        label: seeProjectLabel,
        url: '',
      },
      {
        id: 2,
        label: seeRepositoryLabel,
        url: '',
      },
    ],
  },
  {
    id: 6,
    title: 'Teste4',
    image: mobile,
    type: 'MACHINE LEARNING',
    links: [
      {
        id: 1,
        label: seeProjectLabel,
        url: '',
      },
      {
        id: 2,
        label: seeRepositoryLabel,
        url: '',
      },
    ],
  },
];

export default projectInfoList;
