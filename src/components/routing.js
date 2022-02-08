import {React,useState,useEffect } from 'react';
import Age from '../components/age'
import { Table } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
const Routing = () => {
    const [data,setData] =useState([]);
    useEffect(()=>{
        fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user")
        .then(response => response.json())
        .then((data) => setData(data)); 
    },[]);
   return(
        <div>
          <h1 style={{textAlign: 'center',backgroundColor: 'lightblue',height: '50px'}}>ALL  DATA</h1>
<Table bordered style={{textAlign: 'center'}}>
<thead>
  <tr>
    <th>
      ID
    </th>
    <th>
    NAME
    </th>
    <th>
      EMAIL_ID
    </th>
    <th>
      MOBILE_NUMBER
    </th>
    <th>
      CITY
    </th>
    <th>
      AGE
    </th>
    <th>
    ADDRESS
    </th>
  </tr>
</thead>
<tbody> 
   {data.map((value) => { 
return (
  
  <tr >
    <th>
    {value.id}
    </th>
    <td>
      {value.name}
    </td>
    <td>
      {value.email_id}
    </td>
    <td>
      {value.mobile_number}
    </td>
    <td>
      {value.city}
    </td>
    <td>
    {value.age}
    </td>
    <td>
    {value.address}
    </td>
  </tr>
  
)
}
)
}
</tbody>

</Table>


          </div>
) 


      }
export default Routing;