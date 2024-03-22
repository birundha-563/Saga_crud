import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleterequest, getIdReq, getRequest } from '../redux/action/Action';
import { useNavigate } from 'react-router-dom';
//import { getApi } from '../service/MockApi';


 const Sagalist= () => {
  const dispatch = useDispatch()
 
  const state = useSelector((res) => res.Reduccerinsaga);
  console.log(state)
  const nav =useNavigate()


  const getItem = useCallback(() => {
    dispatch(getRequest());
  }, [dispatch])

  useEffect(() => {
    getItem()
  }, [getItem]);
  
  const Delete=(id)=>{
    dispatch(deleterequest(id))
  }
  const Edit=(data)=>{
    dispatch(getIdReq(data.id))
    nav(`/Sform/${data.id}`)
  }

  return (

    <div className="d-flex justify-content-center">
      <table className="mt-3 fs-10 table table-info table-bordered table-hover border-0 w-75">
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phonenumber</th>
            <th scope='col'>Password</th>
            <th scope='col'>Confirmpassword</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Language</th>
            <th scope='col'>Date of Birth</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.list && state.list.map((res) => (
            <tr key={res}>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.phone}</td>
              <td>{res.password}</td>
              <td>{res.confirm}</td>
              <td>{res.gender}</td>
              <td>{res.language}</td>
              <td>{res.dateofbirth}</td>
              <td>{res.action}
              
                  <button type="button" className="me-2 btn btn-primary ms-1" onClick={()=>Edit(res)}>Edit</button>
                  <button type='button' className="btn btn-danger me-2" onClick={()=>Delete(res.id)}>Delete</button>
                </td>
              

            </tr>

          )
          )}

        </tbody>
      </table>
    </div>
  );
};
export default Sagalist;