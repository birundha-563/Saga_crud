import * as Type from "../../type/Type";
const initialState = {
    list: [],
    editObj:null
}
//import React from "react";
const Reduccerinsaga = (state = initialState, action) => {
    console.log(action);
    console.log(state);

    switch (action.type) {
        case Type.GET_REQUEST:
            return {
                ...state
            };

        case Type.GET_SUCCESS:
            return {
                ...state,
                list: action.payload
            };

        case Type.GET_ERROR:
            return {
                ...state
            };

        case Type.POST_REQUEST:
            return {
                ...state
            };
        case Type.POST_SUCCESS:
            return {
                ...state, list: [...state.list, action.payload]
            };
        case Type.POST_ERROR:
            return {
                ...state
            };
        case Type.DELETE_REQUEST:
            return {
                ...state,error:action.payload
            };
        case Type.DELETE_SUCCESS:
            return {
                ...state,
                list: state.list.filter((items) => items.id !== action.payload),
              };
        case Type.DELETE_ERROR:
            return {
                ...state
            };
            case Type.GETID_SUCCESS:
                return { ...state, editObj: action.payload };
                case Type.PUT_SUCCESS:
                    return {
                        ...state,
                        list: state.list.map((items) =>
                          items.id === action.payload.id ? action.payload : items
                        ),
                      };
        case Type.PUT_REQ:
            return {
                ...state
            };
            case Type.PUT_ERROR:
                return { ...state, editObj: action.payload };
        default:
            return state
    }
}
export default Reduccerinsaga;