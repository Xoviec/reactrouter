import React from 'react';
import { useParams } from 'react-router-dom';
// import {data} from './data';
import { useState } from 'react';


export const User = ({data, list, setData}:any) =>{
    const {id} = useParams();
    
    console.log(data)
    const user = data.find((data:any) => data.name === id)
    
    const [userAge, setUserAge] = useState(user.age)

    console.log(userAge)

    const changeAge = () =>{
        setUserAge(userAge+1)
        user.age=userAge
    }


    return(
        <div>

            {
                user ? 
                <div>
                    Name: {user.name}
                    Age: {userAge}
                    city: {user.city}
                    <button onClick={changeAge}>Add</button>
                </div>
                 : null
            }

        </div>

    )
}