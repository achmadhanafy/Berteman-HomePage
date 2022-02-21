import React from 'react'
import { orderBy, where} from '@firebase/firestore';
import {collection,getDocs, query, QuerySnapshot} from "firebase/firestore"
import {get} from 'firebase/storage'
import {db} from '../../firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {
    HeartIcon,
    PhotographIcon,
    VideoCameraIcon,
    BookmarkIcon,
    TagIcon
} from '@heroicons/react/solid'
import Image from "next/image";

function ImagePosted() {
    const [postRef] = useCollection(
        query(collection(db, "posts"), orderBy("timestamp","desc"))
    );
    const [imageRef] = useCollection(
        query(collection(db, "posts"),where("status","==","post"))
    );
    
    //.then(function(querySnapshot) {   
    //});
   
    
        return (
            <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
                <div className="flex text-xl justify-between mx-auto max-w-md md:max-w-lg">
                    <div>
                        <h1 className="text-2xl">Post</h1> <p className="text-black">{postRef?.size}</p>
                    </div>
                    <div>
                    <h1 className="text-2xl">Friends</h1> <p>100</p>
                    </div>
                    <div>
                    <h1 className="text-2xl">Like</h1> <p className="flex">200 <HeartIcon className="ml-2 h-8 text-green-500"/> </p> 
                    </div>
                </div>
                <div className="flex border-t-4 mt-7 text-l text-normal justify-center mx-auto max-w-md md:max-w-lg">
                    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-green-200 rounded-xl active:border-b-2 active:border-green-500 group">Pictures <p><PhotographIcon className="ml-2 h-8 text-green-500"/></p> </div>
                    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-green-200 rounded-xl active:border-b-2 active:border-green-500 group">Videos <p><VideoCameraIcon className="ml-2 h-8 text-green-500"/></p></div>
                    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-green-200 rounded-xl active:border-b-2 active:border-green-500 group">Saved<BookmarkIcon className="ml-2 h-8 text-green-500"/></div>
                    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-green-200 rounded-xl active:border-b-2 active:border-green-500 group">Tagged<TagIcon className="ml-2 h-8 text-green-500"/></div>
                </div>
                <div className="ml-10 grid grid-cols-3 gap-3 mt-10">
                    
                    {imageRef?.docs.map((post) => {
                        const postImage = post.data().postImage;
                        console.log(postImage);
                        return (
                            <div >
                                <Image src ={postImage} width={280} height={300}/>
                            </div>
                        )
                        })}
                    
                </div>

            </div>
         )
        
    
}

export default ImagePosted
