import React from 'react'
import Image from "next/image";

function SidebarRow({src,Icon,title}) {
    return (
        <div className="flex items-center mb-3 ml-2 cursor-pointer hover:bg-gray-200">
            {src && (
                <Image
                className="rounded-full"
                src={src}
                width={30}
                height={30}
                layout="fixed"
                />
            )}
            {Icon && <Icon className="h-8 w-8 text-green-500"/>}
            <p className="hidden sm:flex items-center font-semibold ml-2">
                {title}</p> 
        </div>
    );
}

export default SidebarRow
