import axios from "axios";

export const createComment = async ({token , desc , slug , parent  , replayOnUser  }) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.post("/api/comments" , {desc , slug , parent  , replayOnUser} , config) 
        
        return data 
    } catch (error) {
        if(error.response && error.response.data.message)  throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}


export const updateComment = async ({token , desc , commentId  }) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.put(`/api/comments/${commentId}` , {desc} , config) 
        
        return data 
    } catch (error) {
        if(error.response && error.response.data.message)  throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}


export const deleteComment = async ({token  , commentId  }) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const { data } = await axios.delete(`/api/comments/${commentId}` , config) 
        
        return data 
    } catch (error) {
        if(error.response && error.response.data.message)  throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}