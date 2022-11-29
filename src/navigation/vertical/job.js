// ** Icons Import
import { FilePlus, RotateCw } from "react-feather";

export default [
  {
    id: "JobSection",
    title: "Job",
    icon: <FilePlus size={20} />,
    children: [ {
        id: 'JobRepeater',
        title: 'Create Job',
        icon: <RotateCw size={20} />,
        navLink: '/jobs/create-jobs'
      },
      {
        id: 'JobRepeater',
        title: 'View Jobs',
        icon: <RotateCw size={20} />,
        navLink: '/jobs/view-jobs'
      },],
  },
];
