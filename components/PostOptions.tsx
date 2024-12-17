"use client"

import { IPostDocument } from "@/mongodb/models/post"
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react"

function PostOptions({post }:{post:IPostDocument}) {
    const [isCommentsOpen , setIsCommentsOpen] = useState(false);
    const {user} = useUser();
    const [liked,setLiked]=useState(false);
    const [likes, setLikes] = useState(post.likes);

    useEffect(() => {
      if(user?.id && post.likes?.includes(user.id)){
        setLiked(true);
      }
    }, [post,user])
    
  return (
    <div>PostOptions</div>
  )
}

export default PostOptions