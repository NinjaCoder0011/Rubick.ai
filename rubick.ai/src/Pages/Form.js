import React, { useState } from "react";
import axios from 'axios'
import '../App.css';
 
//import { useHistory } from "react-router-dom";
 
const AddProduct = () => {
  // let history = useHistory(); // Use for Navigate on Previous
  const [products, setUser] = useState({
    product_code: "",
    name: "",
    status: "",
    quantity: "",
    price: "",
  });
 
  const { product_code, name, status, quantity, price } = products;
   
  const onInputChange = e => {
    setUser({ ...products, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    axios.post("http://localhost:5000/save-todo", { product_code,name,status,quantity,price })
    .then((res) => {
      console.log(res.data);
      setUser("");
    })
    // await axios.post("http://localhost:5000/save-todo", products);
    alert('Data Inserted');
    // history.push("/");
  };
  return (
    <div className="heading">
      <div className="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="new">New Products</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <h4 className="prohead">Product code</h4> <h4 className="formstatus">Status</h4> <br/>
            <input
              type="text"
              className="formBox"
              placeholder=""
              name="product_code"
              value={product_code}
              onChange={e => onInputChange(e)}
            /> 
            <input
              type="text"
              className="formstatusbox"
              placeholder=""
              name="status"
              value={status}
              onChange={e => onInputChange(e)}
            /> 
          </div> <br/>
          <div className="form-group">
            <h4 className="prohead">Name</h4> 
            <input
              type="text"
              className="formname"
              placeholder=""
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            /> 
          </div> <br/>
          <div className="form-group">
          <h4 className="prohead">Quantity</h4>
            <input
              type="text"
              className="formBox"
              placeholder=""
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            /> 
          </div> <br/>
          <div className="form-group">
          <h4 className="prohead">Price</h4> 
            <input
              type="text"
              className="formBox"
              placeholder=""
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            /> 
          </div> <br/>
          <div className="formbtn">
          <button className="btnCancel">Cancel</button>
          <button className="btnSubmit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default AddProduct;