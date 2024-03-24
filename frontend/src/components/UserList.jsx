import { Link } from 'react-router-dom'
import useFetchUser from '../hooks/useFetchUser'
import User from './User'
const UserList = () => {
    const {userData} = useFetchUser()
    return (
        <div className="max-w-2xl mx-auto mt-16">
            <h1 className='mb-10 text-3xl font-bold'>User List</h1>
            <Link to="/"><button className='p-2 m-2 bg-slate-400 rounded shadow-lg font-bold text-white mb-2'>Create User</button></Link>
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