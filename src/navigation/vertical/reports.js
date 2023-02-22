// ** Icons Import
import { FileText, RotateCw,Clipboard } from "react-feather";

export default [
  {
    id: "ReportSection",
    title: "Reports",
    icon: <FileText size={20} />,
    children: [ {
        id: 'ReportRepeater',
        title: 'View Reports',
        icon: <Clipboard size={20} />,
        navLink: '/reports/view-reports'
      },],
  },
 
];
