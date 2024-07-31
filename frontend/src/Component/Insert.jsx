import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {

  const [input,setinput]= useState({});

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setinput(values=>({...values, [name]:value}));
        console.log(input)
    }
    const handle=(e)=>{
        e.preventDefault();
        let api="http://localhost:8000/employe/empsave";
        axios.post(api,input).then((res)=>{
          console.log(res)
          // alert("data save")
          toast("Data Save!");
        })
        // console.log({name:name ,city:city ,rollno:rollno,fees:fees})
    }
    return ( 
        <>
            <h1>Insert Products</h1>
            <Form style={{width:"600px",margin:"50px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter Product No</Form.Label>
        <Form.Control type="text"  name="pno" value={input.pno} 
        onChange={handleinput}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text"  name="name" value={input.name} 
        onChange={handleinput} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name="city" value={input.city} 
        onChange={handleinput}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" name="price" value={input.price} 
        onChange={handleinput}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handle}>
        Submit
      </Button>
    </Form>
    <ToastContainer />
        </>
     );
}
 
export default Insert;