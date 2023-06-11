import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useNavigate, useParams } from 'react-router-dom';

import { UsersContext } from './UserContextComponent';




function AddUser({users,setUsers}) {
  let userContext=useContext(UsersContext)
  console.log('Context Add Users',userContext)
  let navigate=useNavigate();
  let params=useParams();
  let [userid,setUserid]=useState("")
  let [name,setName]=useState("")
  let [fathername,setFathername]=useState("")
  let [mothername,setMothername]=useState("")
  let [gender,setGender]=useState("")
  let [dob,setDob]=useState("")
  let [course,setCourse]=useState("")
  let [batchid,setBatchid]=useState("")
  let [quali,setQuali]=useState("")
  let [exp,setExp]=useState("")
  let [add_street,setAdd_street]=useState("")
  let [add_land_mark,setAdd_land_mark]=useState("")
  let [add_city,setAdd_city]=useState("")
  let [add_state,setAdd_state]=useState("")
  let [add_country,setAdd_country]=useState("")
  let [mobile,setMobile]=useState("")
  let [email,setEmail]=useState("")
  



  let handleSubmit=()=>{
    let newUser={userid,name,fathername,mothername,gender,dob,course,batchid,quali,exp,add_street,add_land_mark,add_city,add_state,add_country,mobile,email}
    let newArray=[...userContext.users]
    if(params.id!==undefined)
    {
      newArray.splice(params.id,1,newUser)
    }
    else
    {
      newArray.push(newUser)
    }
   
    userContext.setUsers(newArray)
    navigate('/dashboard')
  }
  useEffect(()=>{
    if(params.id!==undefined)
    {
      setUserid(userContext.users[params.id].userid)
      setName(userContext.users[params.id].name)
      setFathername(userContext.users[params.id].fathername)
      setMothername(userContext.users[params.id].mothername)
      setGender(userContext.users[params.id].gender)
      setDob(userContext.users[params.id].dob)
      setCourse(userContext.users[params.id].course)
      setBatchid(userContext.users[params.id].batchid)
      setQuali(userContext.users[params.id].quali)
      setExp(userContext.users[params.id].exp)
      setAdd_street(userContext.users[params.id].add_street)
      setAdd_land_mark(userContext.users[params.id].add_land_mark)
      setAdd_city(userContext.users[params.id].add_city)
      setAdd_state(userContext.users[params.id].add_state)
      setAdd_country(userContext.users[params.id].add_country)
      setMobile(userContext.users[params.id].mobile)
      setEmail(userContext.users[params.id].email)

    }
    else
    {
      setUserid("");
      setName("");
      setFathername("");
      setMothername("");
      setGender("");
      setDob("");
      setCourse("");
      setBatchid("");
      setQuali("");
      setExp("");
      setAdd_street("");
      setAdd_land_mark("");
      setAdd_city("");
      setAdd_state("");
      setAdd_country("");
      setMobile("");
      setEmail("");
    }
    console.log("Use Effect is triggered");
  },[])
  return (
    <>
<div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" value={email}  onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="text" placeholder="Enter Dob" value={dob}  onChange={(e)=>setDob(e.target.value)} />
      </Form.Group>
      

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>User ID</Form.Label>
<Form.Control type="text" placeholder="Enter User ID" value={userid} onChange={(e)=>setUserid(e.target.value)} />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Name</Form.Label>
<Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>fathername</Form.Label>
<Form.Control type="text" placeholder="Enter Father Name" value={fathername} onChange={(e)=>setFathername(e.target.value)} />
</Form.Group>


<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>mothername</Form.Label>
<Form.Control type="text" placeholder="Enter Mother Name" value={userid} onChange={(e)=>setMothername(e.target.value)} />
</Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>Submit</Button>
    </Form>

    </div>
    </>
  )
}

export default AddUser