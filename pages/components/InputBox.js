import React, { useState } from 'react'
import {useSession} from "next-auth/react";
import Image from 'next/image'
import {EmojiHappyIcon} from '@heroicons/react/outline'
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {useRef} from "react";
import { db,storage} from '../../firebase';
import * as firebase from "firebase/app";
import {ref, uploadString, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {collection, addDoc, serverTimestamp, setDoc,doc} from "firebase/firestore"

function InputBox() {
    const {data:session} = useSession();
    const inputRef = useRef(null);
    const colRef = collection(db, "posts")
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const sendPost = (e) => {
        e.preventDefault();

        if(!inputRef.current.value) return;
        addDoc(colRef, {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp(),
          }).then((docs => {
              if (imageToPost) {
                  const storageRef =  ref(storage,`posts/${docs.id}`);
                  const uploadtoString =  uploadString(storageRef,imageToPost,'data_url');
                  const uploadTask = uploadBytesResumable(storageRef, uploadtoString);

                    removeImage();
                    
                uploadTask.on('state_changed', (snapshot) =>{
                     // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                    (error) => {
                        // Handle unsuccessful uploads
                    }, 
                    () => {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        getDownloadURL(ref(storage,`posts/${docs.id}`)).then ((url)=>{
                        setDoc(doc(collection(db, `posts`), `${docs.id}`), {
                            postImage: url, 
                            status: "post"
                        }, {merge: true})
                        });
                    }
                    );
                    
              }
          }))
            
        inputRef.current.value ="";
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    } ;

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center">
        <Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
        />
           <form className="flex flex-1">
                <input className="rounded-full h-12 bg-green-200 flex-grow px-5 focus:outline-none"
                 type="text" 
                 ref ={inputRef}
                 placeholder={`What is your mind, ${session.user.name}`}/> 
            <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form> 
            {imageToPost && (
                <div onClick={removeImage} className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                    <img className="h-10 object-contain" src ={imageToPost} alt=""/>
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            )}
        </div>
        <div className="flex justify-evenly p-3 border-t">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500"/>
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>

            <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                <CameraIcon className="h-7 text-green-400"/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input ref={filepickerRef} type="file" hidden onChange={addImageToPost}/>
            </div>

            <div className="inputIcon">
            <EmojiHappyIcon className="h-7 text-yellow-300"/>
                <p className="text-xs sm:text-sm xl:text-base">Feeling Activity</p>
            </div>
        </div>
        </div>
    )
}

export default InputBox
