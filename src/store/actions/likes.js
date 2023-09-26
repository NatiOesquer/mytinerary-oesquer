import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../apiUrl";
import axios from "axios";

const read_likes = createAsyncThunk(
    'read_likes',
    async(id)=>{
        try{
            let likes = await axios(apiUrl + 'likes?itinerary_id=', id)
            
            console.log(likes)
        }catch(error){
            console.log(error);
            return{
                read_likes:[]
            }
        }
    }
)
const create_likes = createAsyncThunk(
    'create_likes',
    async (id) => {
        try {
            console.log(id)
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiUrl + 'likes/',id,authorization);
            console.log(data);

            return {
                likes: data.data.response
            };
        } catch (error) {
            console.error(error);
            return {
                create_likes: {}
            };
        }
    }
);


const like_actions = {read_likes, create_likes}
export default like_actions