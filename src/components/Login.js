import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";


function Login() {

    const {register,handleSubmit,formState:{errors}}=useForm()

    const onFormSubmit=(obj)=>{
        console.log(obj)
    }
    return ( 
        <div className="row mt-3">
        <div className="col-12 col-sm-8 col-md-6 mx-auto">
        
            <form onSubmit={handleSubmit(onFormSubmit)}>

          {/* <Form className="mb-3">
            
            <label htmlFor="type">Select type of User</label> <br />

            {/* <Form.Check inline type="radio" id="user">
              <Form.Check.input type="radio" value="user" {...register("userType",{required:true})}/>
              <Form.Check.label>User</Form.Check.label>
            </Form.Check>
            <Form.Check inline type="radio" id="admin">
              <Form.Check.input type="radio" value="admin" {...register("userType",{required:true})}/>
              <Form.Check.label>Admin</Form.Check.label>
            </Form.Check> 
            {/* <Form className="d-inline mx-auto">
            <input type="radio" id="user" {...register("userType",{required:true})} />
            <label htmlFor="user">User</label>
            <input type="radio" id="admin" {...register("adminType",{required:true})} />
            <label htmlFor="admin">Admin</label>
            </Form> 

            </Form> */}
            <div className="mb-3">
                <label htmlFor="un">Username</label>
                <input type="text" className="form-control" id="un" {...register("username",{required:true})}/>
                {errors.username?.type==='required' && <p className="text-danger">Username Required!!</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="ps">Password</label>
                    <input type="password"  id="ps" className="form-control" {...register("password",{required:true})}/>
                    {errors.password?.type==='required' && <p className="text-danger">Password Required!!</p>}
                </div>
                <button className="btn-info" type="submit">Signin</button>
            </form>
            </div>
        </div>
     );
}

export default Login;