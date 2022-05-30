import { useForm } from "react-hook-form";
import axios from "axios";
import React,{useEffect,useState,useCallback} from "react";
import { Nav, NavItem, NavLink } from "reactstrap";


function Login() {

    //const [data,setData]=useState([]);

    const {register,handleSubmit,formState:{errors}}=useForm();

    const onFormSubmit=(obj)=>{
      axios.post("http://localhost:5000/logindetails/",obj)
      .then(function(response) {
         if(response.data===true)
         {
           
             console.log("Logged in");
         }
         else{
             console.log("User Not present");
         }
      })
      .catch(function(error) {
         console.log(error);
      });
       
    }
    /*useEffect(async()=>{
        try{
            const data1= await axios.get("http://localhost:5000/getdata/");
            setData(data);
            console.log(data1.data);
        }
        catch(error)
        {
            console.log(error)
        }
    },[setData])*/

    /*const fetchData=useCallback(async ()=>{
        try{
            const data1=axios.get("http://localhost:5000/getdata/");
            setData(data1.data);
       }
       catch(error)
       {
           console.log(error)
       }  
    },[setData]);

    useEffect(()=>{
        fetchData();
        console.log(data);
    },[fetchData]);*/

    return ( 
        <div>
       

        <div className="form"> 

     <Nav pills>
            <NavItem>
            <NavLink href="#">teacher</NavLink>
        <form onSubmit={handleSubmit(onFormSubmit)}>

   <div className="mb-3">
    <label htmlFor="un">Username</label>
    <input type="text" className="form-control" id="un" {...register("username")}/>
   </div>

    <div className="mb-3">
        <label htmlFor="ps">Password</label>
        <input type="password"  id="ps" className="form-control" {...register("password")}/>
    </div>
    <button className="btn-info" type="submit">Signin</button>    
   </form>
            </NavItem>

                <NavItem>
                <NavLink href="#">employee</NavLink>
                    
     <form onSubmit={handleSubmit(onFormSubmit)}>

   <div className="mb-3">
    <label htmlFor="un">Username</label>
    <input type="text" className="form-control" id="un" {...register("username")}/>
   </div>

    <div className="mb-3">
        <label htmlFor="ps">Password</label>
        <input type="password"  id="ps" className="form-control" {...register("password")}/>
    </div>

    <button className="btn-info" type="submit">Signin</button>

     </form>
     
    </NavItem>
    </Nav>

           </div>
           </div>
           
     );
}

export default Login;