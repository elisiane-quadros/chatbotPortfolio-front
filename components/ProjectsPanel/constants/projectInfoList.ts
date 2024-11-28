import mobile from '@/public/assets/mobile.png'
import { StaticImageData } from 'next/image';

type ProjectType = "FRONT-END" | "PYTHON" | "MOBILE" | "MACHINE LEARNING"

interface ProjectInfo {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  type: ProjectType;
}

const projectInfoList: ProjectInfo[] = [
  {
    id: 1,
    title: "Teste1",
    description: "jdksdjsijfksjf",
    image: mobile,
    type: "FRONT-END"
  },
   {
    id: 2,
    title: "Teste2",
    description: "jdksdjsijfksjf",
    image: mobile,
    type: "PYTHON"
  },
   {
    id: 3,
    title: "Teste3",
    description: "jdksdjsijfksjf",
    image: mobile,
    type: "MOBILE"
  },  
   {
    id: 4,
    title: "Teste4",
    description: "jdksdjsijfksjf",
    image: mobile,
    type: "MACHINE LEARNING"
  }, 
    {
    id: 5,
    title: "Teste4",
    description: "jdksdjsijfksjf",
    image: mobile,
    type: "MACHINE LEARNING"
  },
    {
    id: 6,
    title: "Teste4",
    description: "jdksdjsijfksjf",
    image: mobile,
    type: "MACHINE LEARNING"
  },
  
]

export default projectInfoList