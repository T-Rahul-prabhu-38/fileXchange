import axios from "axios";

const API_URL = "http://localhost:8000";

export const uploadFile = async (data) =>{
    try {
       let res = await axios.post(`${API_URL}/upload`,data);

    } catch(e) {
        console.log("API has crashed!",e.message);
    }
}

// {
//     Header:
//     requstHeader:
//     data:
// }