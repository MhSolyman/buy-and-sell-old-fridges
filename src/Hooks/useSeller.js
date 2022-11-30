import { useEffect, useState } from "react"

const useSeller = email => {

const [isusers,setIsusers] = useState(true)
    const [users, setUsers] = useState()

    useEffect(() => {
        

        if (email) {
            fetch(`http://localhost:5000/users/${email}`)
                .then((response) => response.json())
                .then((data) => {setUsers(data)
                setIsusers(false)});


        }
    }, [email]);
    return [users,isusers]




}
export default useSeller;