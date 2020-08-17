import React, {useState, useEffect} from 'react';
import './Home.style.scss';

import UsersTable from '../../components/users-table/UsersTable.component';

import { getUsers } from "../../api/communication-manager";

export default function HomePage(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
      populateData();
    }, []);

    async function populateData() {
        const response = await getUsers();
        setUsers(response);
    }

    return (
        <div>
            <UsersTable users={users}/>
        </div>
    )
}
