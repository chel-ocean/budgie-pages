import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Register = () => {
    
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
                        <div className="grid-xs">   
                            <label>Enter Name</label>
                            <input 
                                type="text" 
                                name="userName" 
                                placeholder="Enter name" 
                                aria-label="Your Name" 
                                autoComplete="given-name" 
                                required
                            />
                        </div>
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
                        Create New User
                        <PlusCircleIcon width={20} />
                        </button>

                        <p> 
                            <Link href="/login">
                            <span>Sign in here!</span></Link>
                        </p>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Register;