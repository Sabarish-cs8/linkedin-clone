import { IUser } from "@/types/user";
import mongoose,{Schema ,Document,models,Model} from "mongoose";
import { IComment } from "./comment";

export interface IPostBase{
    user:IUser;
    text:string;
    imageUrl?:string;
    comments?:IComment[];
    likes?:string[];
}