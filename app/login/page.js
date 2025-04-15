import { PlusCircleIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Login = () => {
    
    // const isSubmitting = fetcher.state === "submitting";

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="intro">
                <div>
                    <h1 className="intro-centered">
                        Take Control of <span className="accent">Your Money</span>
                    </h1>
                    <p>
                        Personal budgeting is the secret to financial success. Sign up today!
                    </p>
                </div>
                
                <div className="dashboard">
                    <form className="form-wrapper">
                        <label>Enter Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter email" 
                            aria-label="Your Email" 
                            autoComplete="email" 
                            required
                        />
                        <label>Enter Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter password" 
                            aria-label="Your Password" 
                            autoComplete="chosen-password" 
                            required
                        />
                        <input 
                            type="hidden"
                            name="_action"
                            value="newUser"
                        />
                        <button 
                            type="submit" 
                            className="btn"
                        >
                        {/* { isSubmitting ? 
                            <span>Creating User...</span> 
                        : (
                            <>
                                <span>Create New User</span>
                                
                            </>
                        )} */}
                        Login
                        <ArrowLeftEndOnRectangleIcon width={20} />
                        </button>

                        <p>
                            <Link href="/register">
                            <span>Click to sign up!</span></Link>
                        </p>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Login;