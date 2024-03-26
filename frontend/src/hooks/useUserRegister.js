import axios from 'axios'
import  {API_URL} from '../utils/constant.js'

const useUserRegister = () => {
   let error = null
   let response = null;

   const registerUser = async (name,email,role) => {
        try {
            const resApi = await axios.post(API_URL+'user-register',{name,email,role})
            response = resApi.data
        } catch (err) {
            error = err
        }

        return {response,error}
   }

   return {registerUser}
}

export default useUserRegister