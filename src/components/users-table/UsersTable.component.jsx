import React from 'react';
import './UsersTable.style.scss';
import { Link } from 'react-router-dom';

export default function UsersTable({users = []}) {
    console.log("users are ", users);
    return (
      <div className="table_container">
        <table className="leads_table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Blog Posts</th>
            </tr>
            {users.map(({ id, name, company: { name: companyName } }) => (
              <tr key={id} id={id}>
                <td>{name}</td>
                <td>{companyName}</td>
                <td>
                  <Link to={{ pathname: `/user/posts/${id}`, state: { name } }}>
                    Click Here to Visit Blog
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
