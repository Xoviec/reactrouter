import React from "react";
import { Link } from 'react-router-dom';




export const Users = ({data, handleAddData}:any) =>{


    const addData = (event:any) =>{

        let age = parseInt(event.target.age.value)
        let name = event.target.name.value
        let city = event.target.city.value

        handleAddData(name, city, age)
        event.preventDefault()

    }

    const handleCheck = () =>{
        console.log('nw')
    }




    return(

        <div>
            {
            data.map((user:any) =>
            <div>
                <Link key={user.name} to={`/users/${user.name}`}>{user.name}</Link>
                <br></br>
            </div>

            )}
            <form onSubmit={addData}>
                <input type="number" name='age' placeholder="age"/>
                <input type="text" name='name' placeholder="imie"/>
                <input type="text" name='city' placeholder="miasto"/>
                <button type='submit'>hej</button>
            </form>
            <button onClick={handleCheck}>sprawdz </button>


        

        </div>
    )
}