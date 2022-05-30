import {useForm} from 'react-hook-form'
function Login() {
    return ( 
        <div className="container w-50">
            <form action="">
            <p className="display-3 text-warning mb-2">Login</p>
            <div className="mb-3">
                <label htmlFor="un">Username</label>
                <input type="text" className="form-control" id="un" />
                </div>
                <div className="mb-3">
                    <label htmlFor="ps">Password</label>
                    <input type="password"  id="ps" className="form-control"/>
                </div>
                <button className="btn-info">Signin</button>
            </form>
        </div>
     );
}

export default Login;