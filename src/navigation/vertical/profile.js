// ** Icons Import
import { FileText, RotateCw,Smile } from "react-feather";

export default [
  {
    id: "profileSection",
    title: "Profile",
    icon: <Smile size={20} />,
    children: [ {
        id: 'ReportRepeater',
        title: 'View Profile',
        icon: <Smile size={20} />,
        navLink: '/profile/view-profile'
      },],
  },
];
