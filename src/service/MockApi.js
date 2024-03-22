import axios from "axios";

export const API="https://65325882d80bd20280f56199.mockapi.io/saga/"

 export const getApi=async (data) => {
    const res = await axios({

        method:'GET',
        url:API,
        data:data
    })
    return res;
 }

 export const postData=async (data) => {
    console.log("Api");
    const res = await axios({

        method:'post',
        url:API,
        data:data
    })
    return res;
 }
 export const deleteData=async (id) => {
    const res = await axios({

        method:'delete',
        url:API+id,
        data:id
    })
    return res;
 }
 export const getIdData=async (id) => {
    const res = await axios({

        method:'get',
        url:API+id,
    })
    return res;
 }
 export const putData=async (data,id) => {
    const res = await axios({

        method:'put',
        url:API+id,
        data:data
    })
    return res;
 }
