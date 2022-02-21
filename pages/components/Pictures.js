import React from 'react'
import Image from "next/image";
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from "@heroicons/react/outline";

function Post({ postImage}) {
    return (
        <div className='flex flex-col'>
            

            {postImage && (
                <div className= "relative h-56 md:h-screen bg-white"> test
                    <Image src = {postImage} objectFit='cover' layout='fill'/>
                </div>
            )}

            
        </div>
    )
}

export default Post
