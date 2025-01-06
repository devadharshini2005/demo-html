import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
function User()

{

    const [user,setuser]=useState([{
        name:"deva",
    email:"deva@gmail.com",
     address:"chennai"}]);
     useEffect(()=>
    {
        axios.get('http://localhost:3000/api/user/fetch')
        .then(result=>{
            setuser(result.data.users)
        })
        .catch(err=>{console.log(err)})
    },[]);
    const deleteUser=(id)=>{
        axios.delete(`http://localhost:3000/api/user/delete/${_id}`)
    }
    return(
        <>
        
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>email</th>
                <th>address</th>
                <th>Actions</th>
            </tr>{
            user.map((users) => (
                <tr>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.address}</td>
                    <td>
                        <Link to='/Updateuser/'>
                          <button>update</button></Link>
                          <button onclick={(e)=>deleteUser(usem._i)}>delete</button>
                        </td>
                </tr>
            ))
        }
        </table>
        
        </>
    )

}
export default User;