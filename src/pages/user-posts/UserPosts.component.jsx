import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserPosts } from "../../api/communication-manager";

import './UserPosts.style.scss';

export default function UserPosts(props) {

    const [userPosts, setUserPosts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(10);
    const { userId } = useParams();

    useEffect(() => {
      async function populateData() {
        const response = await getUserPosts(userId, skip, limit);
        setUserPosts(response);
      }
      populateData();
    }, [userId, skip, limit]);

    return (
        <div>
            <h1>Blogs Posts of {props.location.state?.name} </h1>
            {
               userPosts.map(post => <Link key={post.id} to={`/post/${post.id}`}><h2>{post.title}</h2></Link>) 
            }
            <div className="pagination-container">
                <button onClick={()=>setSkip(skip-limit)} disabled={skip===0}>Previous Page</button>
                <span className="page-indicator">Page: {(skip/limit + 1)}</span>
                <button onClick={()=>setSkip(skip+limit)} disabled={userPosts.length<10}>Next Page</button>
            </div>
        </div>
    )
}
