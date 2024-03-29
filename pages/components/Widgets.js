import React from 'react'
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid"
import { SearchIcon } from '@heroicons/react/outline';
import Contact from './Contact'
const contacts = [
{src: "https://links.papareact.com/f0p", name:"Jeff Bezoz"},
{src: "https://links.papareact.com/kxk", name:"Elon Musk"},
{src: "https://links.papareact.com/zvy", name:"Bill Gates"},
{src: "https://links.papareact.com/snf", name:"Mark Zuckerberg"},
];
function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-green-500 mb-5">
                <h2 className="text-xl text-gray-500">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            {contacts.map((contact) => (
                <Contact key={contact.src} name={contact.name} src={contact.src}/>
            ))}
        </div>
    )
}

export default Widgets
