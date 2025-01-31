import { useState, useEffect } from "react";
import axios from "../api/axios";

const Users = () => {
    const [users, setUser] = useState();

    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get('/Users', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUser(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        getUsers ();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

  return (
    <div>
        <h2>User List:</h2>
        {users?.length
            ? (
                <ul>
                    {users.map((user, i) => <li key={i}>{user?. username}</li>)}
                </ul>
            ): <p>No Users to Display</p>
        }
    </div>
  )
}

export default Users