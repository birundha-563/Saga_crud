import { deleteData, getApi,getIdData,postData, putData } from "../../../service/MockApi";
import { takeLatest, call, put } from 'redux-saga/effects';
import * as Type from '../../type/Type'
import { deleteerror, deletesuccess, getError, getIdError, getIdSuccess, getRequest, getSuccess, postError, postRequest, postSuccess } from "../../action/Action";


function* get(){
  try {
   const res = yield call(getApi)
   console.log(res);
   const{data,status}=res
   console.log(data);
   yield put(getSuccess(data))
  } catch (error) {
   console.error("Error");
  }
}
function* post({payload}){
   const res=yield call(postData,payload)
   
   console.log(res);
   if(res.status===200){
    yield put(postSuccess(res.data))
   }else{
    yield put(postError("Error"))
   }
}
function* Delete({payload}){
  const res=yield call(deleteData,payload)
  
  console.log(res);
  if(res.status===200){
   yield put(deletesuccess(res.data))
  }else{
   yield put(deleteerror("Error"))
  }
}
function* fetchId({payload}){
  console.log(payload);
  const res=yield call(getIdData,payload)
  
  console.log(res);
  if(res.status===200){
   yield put(getIdSuccess(res.data))
  }else{
   yield put(getIdError("Error"))
  }
}
function* updateData(action){
  const res=yield call(putData,action.payload,action.payload.id)
  
  console.log(res);
  if(res.status===200){
   yield put(getIdSuccess(res.data))
  }else{
   yield put(getIdError("Error"))
  }
}
function* StudentWatcherSaga() {
  console.log("watch")
  yield takeLatest(Type.GET_REQUEST, get);
  yield takeLatest(Type.POST_REQUEST,post)
  yield takeLatest(Type.DELETE_REQUEST,Delete)
  yield takeLatest(Type.GETID_REQ,fetchId)
  yield takeLatest(Type.PUT_REQ,updateData)
}

export default StudentWatcherSaga;