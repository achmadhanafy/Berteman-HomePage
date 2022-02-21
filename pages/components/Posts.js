import { orderBy, query } from '@firebase/firestore';
import React from 'react'
import {useCollection} from "react-firebase-hooks/firestore";
import { db} from '../../firebase';
import Post from "./Post";
import {collection} from "firebase/firestore"

function Posts() {
    const [realtimePosts] = useCollection(
        query(collection(db, "posts"), orderBy("timestamp","desc"))
    );
    return (
        <div>
           {realtimePosts?.docs.map((post) =>(
               <Post
                    key = {post.id}
                    name = {post.data().name}
                    message = {post.data().message}
                    timestamp = {post.data().timestamp}
                    image = {post.data().image}
                    postImage = {post.data().postImage}
               />
               

           ))} 
        </div>
    )
}

export default Posts
