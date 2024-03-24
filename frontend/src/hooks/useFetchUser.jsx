import axios from "axios"
import { API_URL } from "../utils/constant"
import { useEffect, useState } from "react"

const useFetchUser = () => {
    const [userData,setUserData] = useState([])
    const fetchUser = async () => {
        try {
            const response = await axios.get(API_URL+'get-all-user')
            setUserData(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser()
    },[])

    return { userData }
}

export default useFetchUser