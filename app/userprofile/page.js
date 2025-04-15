import Link from "next/link"
import { HomeIcon, TrashIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline"

export default function Page () {
    return (
        <main className="dashboard">
            <div className="flex w-full justify-between">
                <div >
                    <Link href="/dashboard" className="flex items-center text-4xl">
                        <HomeIcon width={30}/>
                        <span className="text-4xl font-bold">Budgie</span>
                    </Link>
                </div>
                {/* button for user profile: */}
                <div className="flex content-center"> 
                    <ArrowLeftStartOnRectangleIcon width={25}/> 
                    <span className="text-3xl font-bold">Logout</span>
                </div>
            </div>
            <div>
                
            </div>
            <h1>(Name)'s Profile</h1>
            <div className="introcol">
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
                        <button type="submit" className="btn">Edit</button>
                    </form>

                    {/* delete account */}
                    {/* <form  onSubmit={(event) => {
                        if (!confirm("Delete all user data?")) {
                            event.preventDefault() // prevents refresh on submit
                        }
                    }}>
                        <button type="submit" className="btn btn--warning">
                            <span>Delete User</span>
                            <TrashIcon width={25} />
                        </button>
                    </form> */}
                </div>

                <form>
                <button type="submit" className="btn btn--warning">
                        <span>Delete User</span>
                        <TrashIcon width={25} />
                    </button>
                </form>
                
            </div>
            
            
        </main>
    )
}