import './Sidebar.css'
import { useState } from 'react'
// import Logo from '../../Photos/admin.png'
//  import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import React from 'react'

import { Form } from 'react-router-dom'
import { SidebarData } from '../../../Data/Data'
import  Logo  from '../../../Photos/admin.png'
import Dashboard from '../Dashboard/Dashboard'
import ManageAccount from '../ManagerAccount/ManageAccount'

const Sidebar= ()=>{
  let data;
  if (localStorage.getItem("Role")==="Admin"){
    data=SidebarData
  }
    const [selected,setSelected] = useState(0);
    let tab;
    if(selected===0){
        {tab = <Dashboard/>}
 }
 if(selected===2){
    // tab= <StoreInfor/>
 }
 if(selected===3){
    tab= <ManageAccount/>
 }
    return (
        <div className='Sidebar-container' >
    <div  className='Sidebar-glass'>
        <div>
        <div className="Sidebar">
            {/* {logo} */}
            <div className='logo'>
            <img src={Logo} alt="" />
            <span>Admin</span>
            </div>
        </div>

           {/* Menu */}

           <div className="menu">
             {data.map((item,index)=>{
                   return (
                    <div className={selected===index?'menuItem active':'menuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                           <item.icon/>
                           <span>{item.heading}</span>
                    </div>
                   )
             })}


             <div className='menuItem'>
                 <UilSignOutAlt/>
             </div>
           </div>
      </div>


        <div className="content">
        { tab }
        </div>
     
      </div>
      </div>
    )
}
export default Sidebar