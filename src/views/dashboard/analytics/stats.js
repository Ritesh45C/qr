// ** Third Party Components
import React,{useEffect} from 'react';
import classnames from 'classnames'
import { Server, User, Box, UserCheck,XOctagon,FileText } from 'react-feather'
import CountUp from 'react-countup'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import axios from 'axios';
import { useState } from 'react';

const dashboardStats = ({ cols }) => {
    const [sellers,setSellers]=useState(0)
    const [suppliers,setsuppliers]=useState(0)
    const [fakeCodes,setfakeCodes]=useState(0)
    const [products,setproducts]=useState(0)
    const [reports,setReports]=useState(0)
    const [reportsToday,setReportsToday]=useState(0)
    const [server,setServer]=useState(0)

    useEffect(() => {
      fetchstats()
    }, [])
    
    const configs = {
        headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
    }

    const fetchstats =async ()=>{
          const [data1, data2, data3, data4, data5,data6, data7] =  await Promise.all([
        axios.get('https://Warranty.lsin.panasonic.com/api/dashboard/sellers',configs),
        axios.get('https://Warranty.lsin.panasonic.com/api/dashboard/suppliers',configs),
        axios.get('https://Warranty.lsin.panasonic.com/api/dashboard/fakecodes',configs),
        axios.get('https://Warranty.lsin.panasonic.com/api/dashboard/products',configs),
        axios.get('https://Warranty.lsin.panasonic.com/api/dashboard/reports',configs),
        axios.get('https://Warranty.lsin.panasonic.com/api/dashboard/reports/today',configs),
        axios.get('https://Warranty.lsin.panasonic.com/api/dashboard/ServTech',configs)
        ]);

        setSellers(data1.data.msg)
        setsuppliers(data2.data.msg)
        setfakeCodes(data3.data.msg)
        setproducts(data4.data.msg)
        setReports(data5.data.msg)
        setReportsToday(data6.data.msg)
        setServer(data7.data.msg)
    }
  
        
        // return (
        
        //   <div>
        //     <p>Data from API 1: {data1.data}</p>
        //     <p>Data from API 2: {data2.data}</p>
        //     <p>Data from API 3: {data3.data}</p>
        //     <p>Data from API 4: {data4.data}</p>
        //     <p>Data from API 5: {data5.data}</p>
        //     <p>Data from API 6: {data6.data}</p>
        //   </div>
        // );
  const data = [
    {
      title: sellers,
      subtitle: 'No. Of Sellers',
      color: 'light-primary',
      icon: <User size={24} />
      // icon: <TrendingUp size={24} />
    },
    {
      title: suppliers,
      subtitle: 'No. Of Suppliers',
      color: 'light-info',
     icon: <UserCheck size={24} />
    },
    {
      title: fakeCodes,
      subtitle: 'No. Of Fakecodes',
      color: 'light-danger',
       icon: <XOctagon size={24} />
    },
    {
      title: products,
      subtitle: 'No. Of Products',
      color: 'light-success',
      icon:<Box size={24} />
      // icon: <DollarSign size={24} />
    },
    {
        title: reports,
        subtitle: 'No. Of Reports',
        color: 'light-primary',
        icon:<FileText size={24} />
        // icon: <DollarSign size={24} />
      },
      {
        title: reportsToday,
        subtitle: 'No. Of Reports Today',
        color: 'light-info',
        icon:<FileText size={24} />
        // icon: <DollarSign size={24} />
      },
      {
        title: server,
        subtitle: 'No. Of ServTech',
        color: 'light-primary',
        icon:<Server size={24} />
        // icon: <DollarSign size={24} />
      }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <Avatar color={item.color} icon={item.icon} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>
              <CountUp
                                        end={item.title}
                                        duration={5}
                                        class="card-text p-y-1"
                                    />
               </h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Dashboard Statistics</CardTitle>
        <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default dashboardStats
