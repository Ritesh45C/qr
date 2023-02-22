// ** Icons Import
import { FilePlus, RotateCw } from "react-feather";
var role =localStorage.getItem("role")
export default [
  {
    id: "JobSection",
    title: "Job",
    icon: <FilePlus size={20} />,
    children:  role==="admin"||role==="superadmin"? [ {
        id: 'JobRepeater',
        title: 'Create Job',
        icon: <FilePlus size={20} />,
        navLink: '/jobs/create-jobs'
      },
      {
        id: 'JobRepeater',
        title: 'View Jobs',
        icon: <RotateCw size={20} />,
        navLink: '/jobs/view-jobs'
      },]:[ 
      {
        id: 'JobRepeater',
        title: 'View Jobs',
        icon: <RotateCw size={20} />,
        navLink: '/jobs/view-jobs'
      },],
  },
];
// children:  role==="admin"? [{
//   id: 'JobRepeater',
//   title: 'Create Job',
//   icon: <RotateCw size={20} />,
//   navLink