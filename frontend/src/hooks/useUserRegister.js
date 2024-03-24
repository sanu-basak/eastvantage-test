import axios from 'axios'
import { useState } from 'react'
import  {API_URL} from '../utils/constant.js'

const useUserRegister = () => {
   const [response,setResponse] = useState(null)
   const [error,setError] = useState(null)

   const registerUser = async (name,email,role) => {
        setResponse(null)
        setError(null)
        try {
            const response = await axios.post(API_URL+'user-register',{name,email,role})
            const data = await response.data
            setResponse(data)
        } catch (err) {
            
            setError(err)
        } finally {
            
        }
   }

   return {response,registerUser,error}
}

export default useUserRegister