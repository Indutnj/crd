import React, { useContext } from 'react'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  { UsersContext } from './UserContextComponent';
import { useNavigate } from 'react-router-dom';
//import { Navigate } from "react-router-dom";

function Page() {
  let userContext=useContext(UsersContext)
  let navigate = useNavigate()
  return (
    <>
        <Card>
      <Card.Header as="h5">Complete Users Details</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Details</th>
                <th>Profile Details</th>
              </tr>
            </thead>
            <tbody>
              
                  {userContext.users.map((e,i) => {
                      return <tr key={i}>
                              <td>{e.userid}</td>
                              <td>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Name</th>
                                      <td>{e.name}</td>
                                    </tr>
                                    <tr>
                                      <th>Father Name</th>
                                      <td>{e.fathername}</td>
                                    </tr>
                                    <tr>
                                      <th>Mother Name</th>
                                      <td>{e.mothername}</td>
                                    </tr>
                                    <tr>
                                      <th>Gender</th>
                                      <td>{e.gender}</td>
                                    </tr>
                                    <tr>
                                      <th>DOB</th>
                                      <td>{e.dob}</td>
                                    </tr>
                                    <tr>
                                      <th>Course</th>
                                      <td>{e.course}</td>
                                    </tr>
                                    <tr>
                                      <th>Duration</th>
                                      <td>{e.duration}</td>
                                    </tr>
                                    <tr>
                                      <th>Batch ID</th>
                                      <td>{e.batchid}</td>
                                    </tr>
                                  </thead>
                                </Table>
                              </td>
                              <td>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Qualification</th>
                                      <td>{e.quali}</td>
                                    </tr>
                                    <tr>
                                      <th>Experience</th>
                                      <td>{e.exp}</td>
                                    </tr>
                                    <tr>
                                      <th>Address</th>
                                      <td>{e.add_street}</td>
                                    </tr>
                                    <tr>
                                      <th>City</th>
                                      <td>{e.add_city}</td>
                                    </tr>
                                    <tr>
                                      <th>State</th>
                                      <td>{e.add_state}</td>
                                    </tr>
                                    <tr>
                                      <th>Country</th>
                                      <td>{e.add_country}</td>
                                    </tr>
                                    <tr>
                                      <th>Mobile</th>
                                      <td>{e.mobile}</td>
                                    </tr>
                                    <tr>
                                      <th>Email</th>
                                      <td>{e.email}</td>
                                    </tr>
                                  </thead>
                                </Table>
                              </td>
                              
                              <td>
                                  <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
                                  <Button variant='danger' onClick={()=>{
                                      let newArray=[...userContext.users]
                                      newArray.splice(i,1)
                                      userContext.setUsers(newArray)
                                  }}>Delete</Button>
                              </td>
                          </tr>
                  })}
                
            </tbody>
          </Table>
      </Card.Body>
    </Card>
    </>
  )
}

export default Page
