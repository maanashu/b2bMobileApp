import {
  building,
  buildingLocation,
  businessBag,
  businessProfit,
  calendar,
  call,
  cooperation,
  email,
  rocket,
  userFull,
  userIcon,
} from "@/assets";
import { strings } from "@/localization";

export const personalInfo = [
  {
    id: 1,
    heading: strings.userInformation.name,
    title: "Karam Manab Attia",
    icon: userIcon,
  },
  {
    id: 2,
    heading: strings.userInformation.email,
    title: "Flowers@gmail.com",
    icon: email,
  },
  {
    id: 3,
    heading: strings.userInformation.phoneNumber,
    title: "612717070",
    icon: call,
  },
  {
    id: 4,
    heading: strings.userInformation.ssn,
    title: "-------5698",
    icon: calendar,
  },
  {
    id: 5,
    heading: strings.userInformation.dob,
    title: "01/02/1988",
    icon: calendar,
  },
];

export const CompanyInfo = [
  {
    id: 1,
    heading: strings.userInformation.companyName,
    title: "ABC Distro",
    icon: building,
  },
  {
    id: 2,
    heading: strings.userInformation.businessType,
    title: strings.userInformation.label,
    icon: cooperation,
  },
  {
    id: 3,
    heading: strings.userInformation.jobFunction,
    title: strings.userInformation.label,
    icon: businessBag,
  },
  {
    id: 4,
    heading: strings.userInformation.jobLevel,
    title: strings.userInformation.label,
    icon: userFull,
  },
  {
    id: 5,
    heading: strings.userInformation.officeAddress,
    title: strings.userInformation.label,
    icon: buildingLocation,
  },
  {
    id: 6,
    heading: strings.userInformation.asv,
    title: strings.userInformation.label,
    icon: businessProfit,
  },
  {
    id: 7,
    heading: strings.userInformation.sellingChannel,
    title: strings.userInformation.label,
    icon: rocket,
  },
];
