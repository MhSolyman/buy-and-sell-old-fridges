import { useEffect, useState } from "react"

const useSeller = email => {

const [isusers,setIsusers] = useState(true)
    const [users, setUsers] = useState()

    useEffect(() => {
        

        if (email) {
            fetch(`https://y-hay6nry43-mhsolyman.vercel.app/users/${email}`)
                .then((response) => response.json())
                .then((data) => {setUsers(data)
                setIsusers(false)});


        }
    }, [email]);
    return [users,isusers]




}
export default useSeller;