// ** Icons Import
import { Copy, Settings, RotateCw, LogOut, Smile } from 'react-feather'

export default [

  {
    id: 'settingElements',
    title: 'Settings',
    icon: <Settings size={20} />,
    children: [
         {
        id: 'settingRepeater',
        title: 'Logout',
        icon: <LogOut size={20} />,
        navLink: '../'
      },
      {
        id: 'ReportRepeater',
        title: 'Access Logs',
        icon: <Smile size={20} />,
        navLink: '/logs/accesslogs'
      },
    //   {
    //     id: 'formRepeater',
    //     title: 'Add Designations',
    //     icon: <RotateCw size={20} />,
    //     navLink: '/forms/add-designation'
    //   },
    //   {
    //     id: 'formRepeater',
    //     title: 'Add Employees',
    //     icon: <RotateCw size={20} />,
    //     navLink: '/forms/add-employee'
    //   },
    //   {
    //     id: 'formRepeater',
    //     title: 'Add Partners',
    //     icon: <RotateCw size={20} />,
    //     navLink: '/forms/product-part-category'
    //   },
    //   {
    //     id: 'formRepeater',
    //     title: 'Product Management',
    //     icon: <RotateCw size={20} />,
    //     navLink: '/forms/product-mngement'
    //   },
    //   {
    //     id: 'formRepeater',
    //     title: 'Product Detail Page',
    //     icon: <RotateCw size={20} />,
    //     navLink: '/apps/user/view'
    //   }
    ]
  },
  // {
  //   id: 'formLayouts',
  //   title: 'Form Layout',
  //   icon: <Box size={20} />,

  //   navLink: '/forms/layout/form-layout'
  // },
  // {
  //   id: 'wizard',
  //   title: 'Form Wizard',
  //   icon: <Package size={20} />,

  //   navLink: '/forms/wizard'
  // },
  // {
  //   id: 'formValidation',
  //   title: 'Form Validation',
  //   icon: <AlertTriangle size={12} />,
  //   navLink: '/forms/form-validation'
  // },

]
