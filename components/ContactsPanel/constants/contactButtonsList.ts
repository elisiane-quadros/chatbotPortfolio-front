import { mdiArrowTopRight, mdiEmail, mdiEmailAlertOutline, mdiGithub, mdiLinkedin, mdiWhatsapp } from "@mdi/js";

interface ContactButtonItems {
  id: number;
  label:string;
  link: string;
  icon: string;
  actionIcon: string;
}

const contactButtonList: ContactButtonItems[] = [
  {
    id: 1,
    label:"whatsApp",
    link: "https://wa.me/5548991385686",
    icon: mdiWhatsapp,
    actionIcon: mdiArrowTopRight,
  },
  {
    id: 2,
    label:"email",
    link: "elisiane.quadros@hotmail.com",
    icon:mdiEmail,
    actionIcon: mdiArrowTopRight,
  },
  {
    id: 3,
    label:"linkedIn",
    link: "https://www.linkedin.com/in/elisiane-quadros/",
    icon: mdiLinkedin,
    actionIcon: mdiArrowTopRight,
  },
  {
    id: 4,
    label:"gitHub",
    link: "https://github.com/elisiane-quadros",
    icon: mdiGithub,
    actionIcon: mdiArrowTopRight,
  },
]

export default contactButtonList