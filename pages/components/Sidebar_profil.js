import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
import { BriefcaseIcon,
    AcademicCapIcon,
    HeartIcon,
    HomeIcon
} from '@heroicons/react/solid';
import {useCollection} from "react-firebase-hooks/firestore";
import { db} from '../../firebase';
import Post from "./Post";
import {collection} from "firebase/firestore";
import { orderBy, query, where } from '@firebase/firestore';

function Sidebar_profil() {
    const { data: session } = useSession();
    const [realtimePosts] = useCollection(
        query(collection(db, "posts"),where("postImage","==",null))
    );
    return (
        <div className="ml-3">
            <div className="mt-3">
            <p className="font-semibold">{session.user.name} (23 Years old)</p>
            <p className="font-normal">Proud husband of Putri Septia Anggraini</p>
            <p className="font-normal">IT Software Engineer</p>
            </div>

            <div className="mt-10">
                <p className="font-semibold  text-2xl mb-5 border-b-4 border-slate-300">Background</p>
                <div className="flex">
                    <BriefcaseIcon className="h-8 text-green-300 "/>
                    <p className="ml-3">IT Software Engineer</p>
                </div>
                <div className="flex">
                    <AcademicCapIcon className="h-8 text-green-300 "/>
                    <p className="ml-3">Universitas Indraprasta PGRI</p>
                </div>
                <div className="flex">
                    <HeartIcon className="h-8 text-green-300 "/>
                    <p className="ml-3">Putri Septia Anggraini</p>
                </div>
            </div>
            <div className="mt-10">
                <p className="font-semibold  text-2xl mb-5 border-b-4 border-slate-300">Status</p>
                <div>
                    {realtimePosts?.docs.map((post) =>(
                        <Post
                                key = {post.id}
                                name = {post.data().name}
                                message = {post.data().message}
                                timestamp = {post.data().timestamp}
                                image = {post.data().image}
                                
                        />
                    ))} 
                </div>
            </div>
        </div>

        
    )
}

export default Sidebar_profil
