import axios from "axios"
import { API_URL } from "../utils/constant"
import { useEffect, useState } from "react"

const useFetchUser = () => {
    const [userData,setUserData] = useState([])
    const fetchUser = async (role = 'author') => {
        try {
            const response = await axios.get(API_URL+'get-all-user?role='+role)
            setUserData(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser()
    },[])

    return { userData , fetchUser}
}

export default useFetchUser