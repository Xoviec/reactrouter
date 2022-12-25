import React from "react";
import {Route, Routes} from 'react-router-dom';
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { User } from "./components/user";
import { Users } from "./components/users";
import { useState } from "react";

export const Main = () =>{





    const [data, setData] = useState([
        {
            name: 'Adrian', 
            city: 'Bielsko',
            age: 18
          },
          {
            name: 'Seba',
            city: 'Bielsko',
            age: 13
          }  
    ])

    const addData = (name:string,city:string,age:number) =>{
        const newUser = {
            name: name,
            city: city,
            age: age
           }
        const newData = [...data, newUser];
        setData(newData)
    }
    console.log(data)

    // addData('name','dsa',2)

    console.log(data)

    return(

        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/users' element={<Users data={data} handleAddData={addData}/>}/>
              <Route path='/users/:id' element={<User data={data} setData={setData}/>}/>
          </Routes>
    )
}