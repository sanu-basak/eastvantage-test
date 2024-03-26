import { useState } from "react";
import useFormValidation from '../hooks/useFormValidation'
import useUserRegister from "../hooks/useUserRegister";
import {useNavigate} from 'react-router-dom'

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); 
  const [errResponse, setErrResponse] = useState('');

  const {nameErr, emailErr, roleErr, validateUser} = useFormValidation()
  const {registerUser} = useUserRegister()
  const navigate = useNavigate()

  const resetForm = () => {
    setName('')
    setEmail('')
    setRole('')
  }

  const submitHandler = async () => {
    setErrResponse(null)
    const isUserValidate = validateUser(name,email,role)
    if (isUserValidate) {
      const {response,error} = await registerUser(name, email, role);
      if(response){
        resetForm()
        navigate('/user-list')
      }
      if(error){
        setErrResponse(error.response.data.message)
      }
    }
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl p-11 mt-30 m-auto">
      <h1 className=" text-gray-700 text-3xl font-bold mb-10 mt-10">
        User Register
      </h1>
      {errResponse && (
        <p className="text-red-500 text-sm italic font-bold mb-10">
          {errResponse}
        </p>
      )}
      <form className="w-full max-w-lg">
        <div className="-mx-3 mb-6">
          <div className="w-full px-3">
            <label className=" text-sm font-bold">Full Name</label>
            <input
              className={`appearance-none w-full bg-gray-200 text-gray-700 border ${
                nameErr ? "border-red-500" : ""
              } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
            {nameErr && (
              <p className="text-red-500 text-xs italic">
                Please enter a name.
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-6">
          <div className="w-full px-3">
            <label className="text-sm font-bold mb-2">Email Address</label>
            <input
              className={`appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none ${
                emailErr ? "border-red-500" : ""
              } focus:bg-white focus:border-gray-500`}
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
            {emailErr && (
              <p className="text-red-500 text-xs italic">
                Please enter a valid email address.
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="text-sm font-bold mb-2">Role</label>
            <div className="relative">
              <select className={`appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded  focus:outline-none ${
                roleErr ? "border-red-500" : ""
              } focus:bg-white focus:border-gray-500`} value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="author">Author</option>
                <option value="editor">Editor</option>
                <option value="subscriber">Subscriber</option>
                <option value="administrator">Administrator</option>
              </select>
              {roleErr && (
                <p className="text-red-500 text-xs italic">
                  Please select a role.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="-mx-3 mb-2 mt-10">
          <div className="w-full px-3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
