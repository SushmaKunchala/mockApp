import { useForm } from "react-hook-form";


function Login() {

    const {register,handleSubmit,formState:{errors}}=useForm()

    const onFormSubmit=(obj)=>{
        console.log(obj)
    }
    return ( 
        <div className="container w-50">
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <p className="display-3 text-warning mb-2">Login</p>
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
        </div>
     );
}

export default Login;