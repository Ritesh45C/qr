// ** Icons Import
import { FileText, RotateCw,User,Users, } from "react-feather";
var role =localStorage.getItem("role")

export default [
  {
    id: "PartnerSection",
    title: "Partner",
    icon: <User size={20} />,
    children: role==="admin"||role==="superadmin"? [ {
        id: 'ReportRepeater',
        title: 'Create Partner',
        icon: <User size={20} />,
        navLink: '/partner/add-partner'
      },{
        id: 'ReportRepeater',
        title: 'All Partners',
        icon: <Users size={20} />,
        navLink: '/partner/view-partner'
      },]:[{
        id: 'ReportRepeater',
        title: 'All Partners',
        icon: <Users size={20} />,
        navLink: '/partner/view-partner'
      }],
  },
];
