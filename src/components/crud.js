import React from 'react';
import {Table ,Button,Container} from 'reactstrap';
import  '../css/Crud.css';
import 'bootstrap/dist/css/bootstrap.css';


const Crud = ({data,setEmp,deleteEmployees}) => {
  return (
     <Container>

     
      <Table bordered >
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email_ID</th>
                  <th>Mobile_Number</th>
                  <th>Age</th>
                  {/* <th>Address</th> */}
                  <th>Options</th>
              </tr>
          </thead>
          <tbody>
             
              {data.map((value,index)=>{
               return(
              <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email_id}</td>
                  <td>{value.mobile_number}</td>
                  <td>{value.age}</td>
                  {/* <td>{value.address}</td> */}
                  <td >
                      <Button color="primary" onClick={()=>setEmp((value))}>Edit</Button>
                      <Button color="danger" onClick={()=>deleteEmployees(value.id)} style={{marginLeft:'10px'}}>Delete</Button>
                  </td>
              </tr>
               )
          })}
              
              </tbody>
      </Table>
      </Container>
  )
};

export default Crud;