// ** Icons Import
import { Copy, ShoppingBag, RotateCw, AlertTriangle } from 'react-feather'
var role =localStorage.getItem("role")

export default [

  {
    id: 'productElements',
    title: 'Product',
    icon: <ShoppingBag size={20} />,
    children:  role==="admin"||role==="superadmin"? [
      {
        id: 'productRepeater',
        title: 'View Products',
        icon: <RotateCw size={20} />,
        navLink: '/forms/view-products'
      },
      {
        id: 'productRepeater',
        title: 'Add Category',
        icon: <RotateCw size={20} />,
        navLink: '/forms/add-category'
      },
      {
        id: 'productRepeater',
        title: 'Add Subcategory',
        icon: <RotateCw size={20} />,
        navLink: '/forms/add-subcategory'
      },
      // {
      //   id: 'productRepeater',
      //   title: 'Add Partners',
      //   icon: <RotateCw size={20} />,
      //   navLink: '/forms/product-part-category'
      // },
      // {
      //   id: 'productRepeater',
      //   title: 'Product Management',
      //   icon: <RotateCw size={20} />,
      //   navLink: '/forms/product-mngement'
      // },
      // {
      //   id: 'productRepeater',
      //   title: 'Product Detail Page',
      //   icon: <RotateCw size={20} />,
      //   navLink: '/apps/user/view'
      // }
    ]: [{
      id: 'productRepeater',
      title: 'View Products',
      icon: <RotateCw size={20} />,
      navLink: '/forms/view-products'
    }],
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
