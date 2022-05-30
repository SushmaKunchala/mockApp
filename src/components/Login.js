import { Form ,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import React,{useEffect,useState,useCallback} from "react";



function Login() {

    //const [data,setData]=useState([]);

    const {register,handleSubmit,formState:{errors}}=useForm();

    const onFormSubmit=(obj)=>{
      
      // axios.post("http://localhost:5000/logindetails/",obj)
      // .then(function(response) {
      //    if(response.data===true)
      //    {
      //        console.log("Logged in");
      //    }
      //    else{
      //        console.log("User Not present");
      //    }
      // })
      // .catch(function(error) {
      //    console.log(error);
      // });
      if(obj.userType==='user')
      {
        alert("teacher login succesfull")
      }
      if(obj.userType==='admin')
      {
        alert("Employee login succesfull")
      }
       
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
        // <div className="row mt-3">
        // <div className="col-12 col-sm-8 col-md-6 mx-auto">
        
        //     <form onSubmit={handleSubmit(onFormSubmit)}>

        //   {/* <Form className="mb-3">
            
        //     <label htmlFor="type">Select type of User</label> <br />

        //     {/* <Form.Check inline type="radio" id="user">
        //       <Form.Check.input type="radio" value="user" {...register("userType",{required:true})}/>
        //       <Form.Check.label>User</Form.Check.label>
        //     </Form.Check>
        //     <Form.Check inline type="radio" id="admin">
        //       <Form.Check.input type="radio" value="admin" {...register("userType",{required:true})}/>
        //       <Form.Check.label>Admin</Form.Check.label>
        //     </Form.Check> 
        //     {/* <Form className="d-inline mx-auto">
        //     <input type="radio" id="user" {...register("userType",{required:true})} />
        //     <label htmlFor="user">User</label>
        //     <input type="radio" id="admin" {...register("adminType",{required:true})} />
        //     <label htmlFor="admin">Admin</label>
        //     </Form> 

        //     </Form> */}
        //     <div className="mb-3">
        //         <label htmlFor="un">Username</label>
        //         <input type="text" className="form-control" id="un" {...register("username",{required:true})}/>
        //         {errors.username?.type==='required' && <p className="text-danger">Username Required!!</p>}
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="ps">Password</label>
        //             <input type="password"  id="ps" className="form-control" {...register("password",{required:true})}/>
        //             {errors.password?.type==='required' && <p className="text-danger">Password Required!!</p>}
        //         </div>
        //         <button className="btn-info" type="submit">Signin</button>
        //     </form>
        //     </div>
        // </div>
        <div className="container">
        <p className="display-2 text-center text-primary">Login</p>
  
        <img
          src="https://www.google.com/search?q=login+images&rlz=1C1ONGR_enIN991IN991&sxsrf=ALiCzsZpOPzfg85jV5emObmCxc9fQasp4w:1653906455452&tbm=isch&source=iu&ictx=1&vet=1&fir=zN7CA_rK9U4AWM%252C82iBKwBXIahSvM%252C_%253Bo0TzrMX6EBGEAM%252CFEkE-_kSQPuoWM%252C_%253BGL-R8IOEG5cQXM%252CiH3TQ7x_9oAQwM%252C_%253B70zHF7-2yfVfGM%252CiReuyy2Oo4ao1M%252C_%253BMtPJPhE4yUIilM%252CFEkE-_kSQPuoWM%252C_%253BCa_PGByf44s4oM%252CiH3TQ7x_9oAQwM%252C_%253B8ex1jHV_b3mfZM%252CA1LB4_Wk9GrCfM%252C_%253B5cNQWTMWUiLVrM%252C3Lwto9t8aN5DvM%252C_%253BjB4W_l49ZuujNM%252CiH3TQ7x_9oAQwM%252C_%253BNd3mJeAE1CDm3M%252Cu8DDwyv65J22ZM%252C_%253Bw9saUFYIHVCT0M%252CFEkE-_kSQPuoWM%252C_%253BmBDH4g8QZzQ21M%252C7PkxTTyC_ZIdpM%252C_%253B25MqZTH9lBRVHM%252CiReuyy2Oo4ao1M%252C_%253BFnJdAI1at8hw4M%252C82iBKwBXIahSvM%252C_&usg=AI4_-kQ0aRfwMOQZUiPoqbw5bMdw9-mtDQ&sa=X&ved=2ahUKEwiXhZPWgYf4AhXiRmwGHTdjC6wQ9QF6BAgMEAE#imgrc=MtPJPhE4yUIilM"
          width="300px"
          className="d-sm-block d-none mx-auto"
          alt=""
        />
        <div className="row  ">
          <div className="col-12 col-sm-8 col-md-6  mx-auto">
            <Form onSubmit={handleSubmit(onFormSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Select type of User</Form.Label> <br />
                {/* user type */}
                <Form.Check inline type="radio" id="user">
                  <Form.Check.Input
                    type="radio"
                    value="user"
                    {...register("userType", { required: true })}
                  />
                  <Form.Check.Label>Teacher</Form.Check.Label>
                </Form.Check>
                <Form.Check inline type="radio" id="admin">
                  <Form.Check.Input
                    type="radio"
                    value="admin"
                    {...register("userType", { required: true })}
                  />
                  <Form.Check.Label>Employee</Form.Check.Label>
                </Form.Check>
              </Form.Group>
              {/* username */}
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  {...register("username", { required: true })}
                />
                {/* validation error message for username */}
                {errors.username && (
                  <p className="text-danger">* Username is required</p>
                )}
              </Form.Group>
  
              {/* password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                {/* validation error message for password */}
                {errors.password && (
                  <p className="text-danger">* Password is required</p>
                )}
              </Form.Group>
  
              <Button variant="secondary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
  
     );
}

export default Login;