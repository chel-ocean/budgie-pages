import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline"

export default function Page () {
    return (
        <main>
            <div className="flex w-full justify-between">
                <div >
                    <Link href="/dashboard" className="flex items-center text-4xl">
                        <HomeIcon width={30}/>
                        <span className="text-4xl font-bold">Budgie</span>
                    </Link>
                </div>
                {/* button for user profile: */}
                <div className="flex content-center"> 
                    
                    <span className="text-3xl font-bold">Logout</span>
                </div>
            </div>
            <h1>(Name)'s Profile</h1>
            <div className="intro">
                <div className="form-wrapper">
                    <h2>My Information</h2>
                    <form className="grid-sm">
                        <div className="grid-xs">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                // value={name}
                                
                            ></input>
                        </div>
                            {/* shouldn't allow for change */}
                        <div className="grid-xs">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                // value={name}
                            
                            ></input>
                        </div>
                        <div className="grid-xs">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                // value={name}
                                
                            ></input>
                        </div>
                        <div className="flex-sm">
                            <div className="btn">
                                <button className="">Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            
        </main>
    )
}