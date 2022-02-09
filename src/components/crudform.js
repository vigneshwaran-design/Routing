import {React,useState,useEffect }from 'react';
import Crud from '../components/crud.js';
import 'bootstrap/dist/css/bootstrap.css';
import { FormFeedback,Container,Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

let startemployees={
    id:0,
    name:"",
    email_id:"",
    mobile_number:"",
    age:'',
};

const Crudform = () => {

     const [emp,setEmp]=useState(startemployees);

     const [data,setData]=useState([]);

     const {id,name,email_id,mobile_number,age}=emp;

     const handleChange= (e) => {
        setEmp({...emp,[e.target.name]:e.target.value});
     };
     
     //GET EMPLOYEE DETAILS
     const getEmployees=()=>{
         fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user")
         .then((response) =>response.json())
         .then((data)=>setData(data));
     };
     useEffect(()=>{
         getEmployees();
     },[]);
    
    //DELETE EMPLOYEE DETAILS
    const deleteEmployees=(id)=>{
        fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user/"+id,{
            method: "DELETE",
            header:{
                "Content-Type":"application/json",
            },
        })
        .then((response)=>response.json())
        .then((data)=>{
            setEmp(startemployees);
            getEmployees();
        })
    }
    

    //FOR SUBMITTING
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id===0)
        {
        fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(emp)
        })
        .then((response)=>response.json())
        .then((data)=>{
            setEmp(startemployees);
            getEmployees();
        });
        
        }
        else{
            fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user/"+id,{
             method:"PUT",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify(emp)
            })
            .then((response)=>response.json())
            .then((data)=>{
                setEmp(startemployees);
                getEmployees();
            });
        }
    };

  return (
        <div>
            <Container>
             <Form style={{marginTop:"20px"}} onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label for="name" sm={2}  >Name</Label>
                        <Col sm={10}>
                            <Input  type="text" name="name" id="name" placeholder="Full_Name" value={name}
                            onChange={handleChange} bsSize="lg"/>
                        </Col>   
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>E-Mail</Label>
                        <Col sm={10}>
                            <Input type="email" name="email_id"
                            value={email_id} onChange={handleChange} 
                            id="email" placeholder="E_Mail" bsSize="lg"/>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for="mobile_number" sm={2}>Mobile_Number</Label>
                        <Col sm={10}>
                            <Input type="number" name="mobile_number" id="mobile_number" 
                               value={mobile_number} onChange={handleChange} placeholder="Mobile_Number" bsSize="lg"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="age" sm={2}>Age</Label>
                        <Col sm={10}>
                            <Input type="number" name="age" id="age"
                              value={age} onChange={handleChange} placeholder="Present Age" bsSize="lg"/>
                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                        </Col>
                    </FormGroup>
                    <div style={{textAlign: 'center'}}>
                    <Button color="primary" >Click Me</Button>
                    </div>
                    
              </Form>
            </Container>
             <br/>
            <Crud 
            data={data} 
            setEmp={setEmp}
            deleteEmployees={deleteEmployees} />
        </div>
  )
};

export default Crudform;
