import React, { useState } from "react";
export const UsersContext=React.createContext()

function UserContextComponent({children})
{
    let [users,setUsers]=useState([
        {
          userid:"1001",
          name:"Ravi M",
          fathername:"Manikandan S",
          mothername:"Saraswathy M",
          gender:"Male",
          dob:"01-11-1992",
          course:"Full Stack Developer",
          duration:"12 Months",
          batchid:"B46",
          quali:"MCA",
          exp:"1-3 years",
          add_street:"12, RAM Street",
          add_city:"Thanjavur",
          add_state:"Tamil Nadu",
          add_country:"India",
          mobile:"9685961256",
          email:"ravi25@gmail.com"
        },
        {
          userid:"1002",
          name:"Divya S",
          fathername:"Sundar S",
          mothername:"Ranjini M",
          gender:"Female",
          dob:"06-05-1992",
          course:"Full Stack Developer",
          duration:"12 Months",
          batchid:"B46",
          quali:"MCA",
          exp:"1-3 years",
          add_street:"89, First Cross Street",
          add_city:"Madurai",
          add_state:"Tamil Nadu",
          add_country:"India",
          mobile:"9485624747",
          email:"divya88@gmail.com"
        },
        {
          userid:"1003",
          name:"Kannan A",
          fathername:"Arun Kumar L",
          mothername:"Latha A",
          gender:"Male",
          dob:"06-07-1995",
          course:"Full Stack Developer",
          duration:"12 Months",
          batchid:"B46",
          quali:"MCA",
          exp:"1-3 years",
          add_street:"145, Lakshmi Kumari Street",
          add_city:"Erode",
          add_state:"Tamil Nadu",
          add_country:"India",
          mobile:"7894562589",
          email:"kannan95@gmail.com"
        }
      ]);

  return <>
    <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
  </>
}

export default UserContextComponent
