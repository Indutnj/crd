import React from 'react'
import { Link } from 'react-router-dom';


function Sidebar() {
   /* let navigate = useNavigate()*/
  return (
    <>
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">CRUD Application</div>
            <div className="list-group list-group-flush">
            <Link to='/page'> 
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="javascript(void)">Dashboard</a>
            </Link>
            <Link to='/users'> 
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="javascript(void)">List Users</a>
                </Link>
            <Link to='/create-user'>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="javascript(void)">Create User</a>
                </Link>
            <Link to='/edit-user/:id'>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="javascript(void)">Edit User</a>
                </Link>
            <Link to='/profile/:id'>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="javascript(void)">Profile</a>
                </Link>
            <Link to='/edit-profile/:id'>
                <a className="list-group-item list-group-item-action list-group-item-light p-3" href="javascript(void)">Edit profile</a>
            </Link>
            
            </div>
        </div>
    </>
  )
}

export default Sidebar
