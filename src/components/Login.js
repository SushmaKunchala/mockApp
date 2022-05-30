import { useForm } from "react-hook-form";
import { Nav, NavItem, NavLink } from "reactstrap";


function Login() {

    const {register,handleSubmit,formState:{errors}}=useForm()

    const onFormSubmit=(obj)=>{
        console.log(obj)
    }
    return ( 

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
           
     );
}

export default Login;