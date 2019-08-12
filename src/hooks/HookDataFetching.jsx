import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HookDataFetching() {
   const [post, setPost] = useState({});
   const [id, setId] = useState(1);
   const [idFromButton, setIdFromButton] = useState(1);

   const handleClick = _ => {
      setIdFromButton(id);
   };

   useEffect(() => {
      axios
         .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
         .then(res => {
            console.log('data: ', res);
            setPost(res.data);
         })
         .catch(err => console.log(err));
   }, [idFromButton]);

   return (
      <div>
         <input type="text" value={id} onChange={e => setId(e.target.value)} />
         <button type="button" onClick={handleClick}>
            Fetch post
         </button>
         <div> {post ? post.title : 'Loading....'} </div>

         {/* <ul>
            {posts.map(post => (
               <li key={post.id}>{post.body}</li>
            ))}
         </ul> */}
      </div>
   );
}

export { HookDataFetching };
