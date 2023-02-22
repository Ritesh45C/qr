// ** Icons Import
import { FileText, RotateCw,Smile } from "react-feather";

export default [
  {
    id: "profileSection",
    title: "Logs",
    icon: <Smile size={20} />,
    children: [ {
        id: 'ReportRepeater',
        title: 'Access Logs',
        icon: <Smile size={20} />,
        navLink: '/logs/accesslogs'
      },],
  },
];
