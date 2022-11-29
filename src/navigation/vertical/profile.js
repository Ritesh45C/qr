// ** Icons Import
import { FileText, RotateCw } from "react-feather";

export default [
  {
    id: "ReportSection",
    title: "Profile",
    icon: <FileText size={20} />,
    children: [ {
        id: 'ReportRepeater',
        title: 'View Profile',
        icon: <RotateCw size={20} />,
        navLink: '/profile/view-profile'
      },],
  },
];
