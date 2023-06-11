
import Page from './component/Page';
import Sidebar from './component/Sidebar';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Users from './component/Users';
import CreateUser from './component/CreateUser';
import EditProfile from './component/EditProfile';
import EditUser from './component/EditUser';
import Profile from './component/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';

import UserContextComponent from "./component/UserContextComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <div class="d-flex" id="wrapper">
          <Sidebar/>
         {/* <Page/>*/}
            <Routes>
            <Route path="/page" element={
             <UserContextComponent>
              <Page/>
             </UserContextComponent>}/>
              <Route path="/users" element={
               <UserContextComponent>
                <Users/>
              </UserContextComponent>}/>
              
              <Route path="/create-user" element={<CreateUser/>}/>
              <Route path="/edit-user/:id" element={<EditUser/>}/>
              <Route path="/profile/:id" element={<Profile/>}/>
              <Route path="/edit-profile/:id" element={<EditProfile/>}/>
              <Route path="*" element={<Navigate to='/page'/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
