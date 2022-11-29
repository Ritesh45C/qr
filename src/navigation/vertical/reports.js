// ** Icons Import
import { FileText, RotateCw } from "react-feather";

export default [
  {
    id: "ReportSection",
    title: "Reports",
    icon: <FileText size={20} />,
    children: [ {
        id: 'ReportRepeater',
        title: 'View Reports',
        icon: <RotateCw size={20} />,
        navLink: '/reports/create-reports'
      },],
  },
];
