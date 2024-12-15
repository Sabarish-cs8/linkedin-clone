'use client'

import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button";
import { ImageIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

function PostForm() {
    const ref = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLFormElement>(null);   
    const { user } = useUser();
    const [preview , setPreview] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const file = event.target.files?.[0];
        if(file){
            setPreview(URL.createObjectURL(file));
        }
    }
  return (
    <div>
        <form ref={ref} action="">
            <div className="flex items-center space-x-2">
                <Avatar>
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>
                        {user?.firstName?.charAt(0)}
                        {user?.lastName?.charAt(0)}
                    </AvatarFallback>
                </Avatar>

                <input
                  type="text"
                  name="postInput"
                  placeholder="Start Writing a post..."
                  className="flex-1 outline-none rounded-full py-3 px-4 border"                   
                />

                <input 
                ref={fileInputRef}
                 type="file" 
                 name="image" 
                 accept="image/*" 
                 hidden 
                onChange={handleImageChange}
                />
                <button type="submit" hidden >
                    Post
                </button>
            </div>

            {/** Preview conditional check */}
            {preview && (
                <div className="mt-3">
                    <img src={preview} alt="Preview" className="w-full object-cover" />
                </div>
            )}

            <div className="flex justify-end mt-2 space-x-2">
                <Button type="buttton" onClick={()=>fileInputRef.current?.click()}>
                    <ImageIcon className="mr-2" size={16} color="currentColor" />
                    {preview ? "change" :"Add"} image
                </Button>

                {/** Add a remove preview button */}
                {preview && (
                    <Button variant="outline" type="button" onClick={()=>setPreview(null)}>
                        <XIcon className="mr-2" size={16} color="currentColor" />
                        Remove image
                    </Button>
                )}
            </div>
        </form>
        <hr className="mt-2 border-gray-300" />
    </div>
  )
}

export default PostForm