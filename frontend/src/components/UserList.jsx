import { Link } from 'react-router-dom'
import useFetchUser from '../hooks/useFetchUser'
import User from './User'
import { useState } from 'react'
const UserList = () => {
    const [role,setRole] = useState('author')
    const {userData,fetchUser} = useFetchUser()

    const fetchUserData = (role) => {
        console.log(role)
        setRole(role)
        fetchUser(role)
    }
    
    return (
        <div className="max-w-2xl mx-auto mt-16">
            <h1 className='mb-10 text-3xl font-bold'>User List</h1>
            <Link to="/"><button className='p-2 m-2 bg-slate-400 rounded shadow-lg font-bold text-white mb-2'>Create User</button></Link>
            <div className="-mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="text-sm font-bold mb-2">Role</label>
            <div className="relative">
              <select className={`appearance-none w-1/4 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded  focus:outline-none
               focus:bg-white focus:border-gray-500`} value={role} onChange={(e) => fetchUserData(e.target.value)}>
                <option value="">Select Role</option>
                <option value="author">Author</option>
                <option value="editor">Editor</option>
                <option value="subscriber">Subscriber</option>
                <option value="administrator">Administrator</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    UserId
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Full Name
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                    Role
                                </th>
                                <th scope="col" className="p-4">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {
                                userData?.data?.map((user) => <User key={user.id} user={user}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    )
}

export default UserList;