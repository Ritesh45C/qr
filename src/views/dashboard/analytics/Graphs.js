import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Col, Input } from "reactstrap";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Graphs() {
    const [data,setData]=useState([])
    const [bu,setBu]=useState('')

    useEffect(() => {
        getCategories()
    }, [])
    const getCategories=async(value="os")=>{
        setBu(value)
        const configs = {
          headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
      }
        // if(value="code"){
        //   axios.get(`https://warranty.lsin.panasonic.com/api/analytics/code/${value}`,configs).then(res=>{
        //     console.log(res.data)
        //     setData(res.data)
        //     return;
        // })

        // }
      
        axios.get(`https://warranty.lsin.panasonic.com/api/analytics/${value}`,configs).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
      }
      const getCodeStat=async(value)=>{
        const configs = {
          headers: { Authorization: `Bearer ${localStorage.getItem('tokens')}` },
      }
       
          axios.get(`https://warranty.lsin.panasonic.com/api/analytics/code/${value}`,configs).then(res=>{
            console.log(res.data)
            setData(res.data)
            return;
        })

       
      }
      const colourOptions = [
        { value: 'os', label: 'OS' },
        { value: 'Browser', label: 'Browser' },
        {value:"code",label:"Check Unique Code"}
        // { value: 'blue', label: 'Blue' },
        // { value: 'LIGHTING', label: 'LIGHTING' },
        // { value: 'red', label: 'Red' },
        // { value: 'LIGHTING', label: 'LIGHTING' }
      ]
  return (
    <div>
        {/* <Label className='form-label'>Select Analytics Type</Label> */}
        <div style={{width:"361px",padding:"25px"}}>
             <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
         defaultValue={colourOptions[1]}
        name='clear'
        options={colourOptions}
        onChange={e=>getCategories(e.value)}
        isClearable
      />
      {bu==="code"? <Col  >
                    <Label className="form-label" for={`item-name-`}>
                      Check Unique Code
                    </Label>
                    <Input
                      type="text"
                      id={`item-name-`}
                      placeholder="Unique Code"
                      onChange={(e)=>getCodeStat(e.target.value)}
                    />
                  </Col>
:null}
        </div>
     

      <BarChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="_id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>   
    </div>
   
  );
}
