import { useState,useEffect } from 'react';
import moment from 'moment'
import '../styles/Header.css';
import {Table,Button,Tag,Select} from 'antd'
import{PlusCircleFilled,FilterFilled} from "@ant-design/icons/lib/icons";
import axios from 'axios';
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import Form from "./Form";
import { Link } from 'react-router-dom';



function Products() {
  const [hdata,sethdata]= useState([]); 
  const getProducts = async()=>{
    try{
       const data =await axios.get("http://localhost:5000/get-todo");
       let tempdata=[...data.data]
       console.log([...tempdata])
       tempdata["Date"]=moment(tempdata["Date"]).format("MMM Do YY")
       sethdata(tempdata)
       console.log(data);
     }
     catch(e){
      console.log(e);
     }
    }
    console.log("hdata",hdata);
      useEffect(()=>{
      getProducts();
    },[]); 

  const columns=[
    {
      key:'1',
      title:'Code',
      dataIndex:'Code'
    },
    {
      key:'2',
      title:'Name',
      dataIndex:'Name'
    },
    {
      key:'3',
      title:'Qty',
      dataIndex:'Qty'
    }, 
    {
      key:'4',
      title:'Price',
      dataIndex:'Price'
    },
    {
      key:'5',
      title:'Status',
      dataIndex:'Status'
    },
    {
      key:'6',
      title:'Date added',
      dataIndex:'Date_added'
    }
  ]
  return (
  <div className="heading">
        <div className='prHead'>
           Products
           <Link to="/form" className='btn'>
            + 
          </Link>
          <select className='selection'>
             <option value="month">This Month</option>
             <option value="year">This Year</option>
           </select>
        </div>
        <Table 
        className='prHeading' 
        columns={columns} 
        dataSource={hdata}> 
        </Table>
        <div className='bot'>
         <Link to="/" className='pre'>Previous</Link>
         <Link to="/" className='next'>Next</Link>
        </div>
  </div>
  )
}

export default Products;

