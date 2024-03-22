import * as Type from "../type/Type";

export const getRequest=()=>{
    console.log("req")
    return{
        type:Type.GET_REQUEST,
        
    }
}
export const getSuccess=(data)=>{
    console.log("suc",data)
    return{
        type:Type.GET_SUCCESS,
        payload:data
       
    }
}
export const getError=(data)=>{
    return{
        type:Type.GET_ERROR,
        payload:data
        
    }
}
export const postRequest=(data)=>{
    return{
        type:Type.POST_REQUEST,
        payload:data
        
    }
}
export const postSuccess=(data)=>{
    return{
        type:Type.POST_SUCCESS,
        payload:data
        
    }
}
export const postError=(data)=>{
    return{
        type:Type.POST_ERROR,
        payload:data
        
    }
}
export const deleterequest=(data)=>{
    return{
        type:Type.DELETE_REQUEST,
        payload:data
        
    }
}
export const deletesuccess=(data)=>{
    return{
        type:Type.DELETE_SUCCESS,
        payload:data
        
    }
}
export const deleteerror=(data)=>{
    return{
        type:Type.DELETE_ERROR,
        payload:data
        
    }
}
export const getIdSuccess=(data)=>{
    return{
        type:Type.GETID_SUCCESS,
        payload:data
        
    }
}
export const getIdReq=(id)=>{
    return{
        type:Type.GETID_REQ,
        payload:id
        
    }
}
export const getIdError=()=>{
    return{
        type:Type.GETID_ERROR,
        
    }
}
export const putSuccess=(id)=>{
    return{
        type:Type.PUT_SUCCESS,
        payload:id
        
    }
}
export const putRequest=(id)=>{
    return{
        type:Type.PUT_REQ,
        payload:id
        
    }
}
export const putError=()=>{
    return{
        type:Type.PUT_ERROR,
        
    }
}
