import axios from 'axios';
import { Notification } from '../constants/api';


export const listNotifications=async(query)=>{
   const res= await axios.get(Notification, { query});
   return res.data
}

export const update = async(id,payload)=>{
   const res = await axios.patch(`${Notification}/update/${id}`,payload);
   return res.data
}