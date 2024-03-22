import React, {  useEffect, useState } from 'react'
import './Saga.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postRequest, putRequest } from '../redux/action/Action';
import { useFormik } from 'formik';


const Sagaform = () => {
    const state = useSelector((res) => res.Reduccerinsaga);
    const nav = useNavigate()
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setconfirm] = useState('')
    const [language, setLanguage] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        console.log(state.editObj)
        if (state.editObj) {
            setName(state.editObj.name)
            setEmail(state.editObj.email)
            setPhone(state.editObj.phone)
            setPassword(state.editObj.password)
            setconfirm(state.editObj.confirm)
            setLanguage(state.editObj.language)
            setGender(state.editObj.gender)
            setDateofbirth(state.editObj.dateofbirth)
        }
    }, [state.editObj])

    const formik = useFormik( {
        initialValues:  {
            name: "",
            email: "",
            phone: "",
            password:"",
            confirm: "",
            language:"",
            gender:"",
            dateofbirth:"",
        },
        validate: (values) => {
            const error = {};
            if (values.name.length < 3) {
              error.name = "Name required";
            }
            if (!values.email) {
              error.email = "Email required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              error.email = "Invail email address";
            }
            if (!values.phone) {
              error.phone = "PhoneNumber Required";
            } else if (!/^\d{10}$/i.test(values.phone)) {
              error.phone = "Invalid phone number";
            }
            if (!values.password){
                error.password='Password required'
             }else if(!/^(?=.*[a-z])(?=.[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)){
                error.password = 'Invalid password ';
             }
            if (!values.confirm) {
              error.confirm= "c-password required";
            } else if (values.confirm !== values.password) {
              error.confirm = "Invalid password ";
            }
            if (!values.dateofbirth) {
              error.dateofbirth = " Date required";
            }
            if (!values.language) {
              error.language = " Language required";
            }
            if (!values.gender) {
              error.gender = " Gender required";
            }
      
            return error;
          },
          
          onSubmit: (values) => {
            const formdata = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                password:values.password,
                confirm: values.confirm,
                language: values.language,
                gender:values.gender,
                dateofbirth:values.dateofbirth,
            };

        if (state.editObj) {
            formdata.id = state.editObj.id
            dispatch(putRequest(formdata))
        } else {
            dispatch(postRequest(formdata))
            nav('/Slist');
        }
        formik.resetForm();
    }
    })
console.log(formik);


    return (
        <div className='box form1 card custom-form'>
            <div className='container  justify-content-center  'onSubmit={formik.handleSubmit}>
                <h4 className='display-5   fw-light mt-0'>Form</h4>

                <div>
                    <label htmlFor="name" className="fs-5 mt-1 mb-">Name:</label>
                    {formik.touched.name && formik.errors.name && (
              <div className="text-danger">
                {formik.errors.name}
                <span>*</span>
              </div>
            )}
                    <input type="text" className="form-control mb-3 p-3 rounded-1" id="name" 
             value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} placeholder="Enter your Name" />
                    <p id="error1" className="text-danger"></p>
                </div>
                <div>
                    <label htmlFor="email" className="fs-5 mb-">Email:</label>
                    {formik.touched.email && formik.errors.email && (
              <div className="text-danger">
                {formik.errors.email}
                <span>*</span>
              </div>
            )}
                    <input type="text" className="form-control mb-3 p-3 rounded-1" id="email" value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} placeholder="Enter your Email" />
                    <p id="error2" className="text-danger"></p>
                </div>

                <div>
                    <label htmlFor="phone" className="fs-5 mb-">Phonenumber:</label>
                    {formik.touched.phone && formik.errors.phone && (
              <div className="text-danger">
                {formik.errors.phone}
                <span>*</span>
              </div>
            )}
                    <input type="tel" className="form-control mb-3 p-3 rounded-1" id="phone"  value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} placeholder="Enter your number" />
                    <p id="error3" className="text-danger"></p>
                </div>

                <div>
                    <label htmlFor="password" className="fs-5 mb-">Password:</label>
                    {formik.touched.password && formik.errors.password && (
              <div className="text-danger">
                {formik.errors.password}
                <span>*</span>
              </div>
            )}
                    <input type="password" className="form-control mb-3 p-3 rounded-1" id="password" value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} placeholder="Enter your Password" />
                    <p id="error4" className="text-danger"></p>
                </div>

                <div>
                    <label htmlFor="confirm" className="fs-5 mb-">Confirmpassword:</label>
                    {formik.touched.confirm && formik.errors.confirm && (
              <div className="text-danger">
                {formik.errors.confirm}
                <span>*</span>
              </div>
            )}
                    <input type="password" className="form-control mb-3 p-3 rounded-1" id="confirm" value={formik.values.confirm}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} placeholder="Enter your c-password" />
                    <p id="error5" className="text-danger"></p>
                </div>

                <div>

                    <label htmlFor="gender" className="fs-5 mb-">Gender:</label><br />
                    <input type="radio" className="mb-3 p-3 rounded-1" id="male" name="gender" value="male"
                    checked={formik.values.gender === "male"}
                   onChange={formik.handleChange}
   />
                    <label htmlFor="male">Male</label>
                    <input type="radio" className="mb-3 p-3 rounded-1" id="female" name="gender" value="female"  
                    checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
    />
                    <label htmlFor="female">Female</label>
                    {formik.touched.gender && formik.errors.gender && (
              <div className="text-danger">
                {formik.errors.gender}
                <span>*</span>
              </div>
            )}       </div>
                    <p id="error6" className="text-danger"></p>
                </div>

                <div>
                    <label htmlFor="language" className="fs-5 mb-">Language:</label>
                    {formik.touched.language && formik.errors.language && (
              <div className="text-danger">
                {formik.errors.language}
                <span>*</span>
              </div>
            )}
                    <select className="form-select p-3" id="language" name="language" value={formik.values.language}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              aria-label="Floating label select example" >
                        <option value="select">Select</option>
                        <option>Tamil</option>
                        <option>English</option>
                        <option>Malayalam</option>
                        <option>Hindi</option>
                    </select>
                    <p id="error7" className="text-danger"></p>
                </div>

                <div>
                    <label htmlFor="dateofbirth" className="fs-5 mb-">Date Of Birth:</label>
                    {formik.touched.dateofbirth && formik.errors.dateofbirth && (
              <div className="text-danger">
                {formik.errors.dateofbirth}
                <span>*</span>
              </div>
            )}{" "}
                    <input type="date" className="form-control mb-3 p-3 rounded-1" id="dateofbirth" placeholder="date"
              value={formik.values.date}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}  />
                    <p id="error8" className="text-danger"></p>
                </div>

                <div className="mt-4 text-center">
                    <button type="submit" className="btn bg-info px-3 py-2 rounded-1 mx-2">Submit</button>
                    <button type="button" className="btn btn-success px-3 py-2 rounded-1" onClick>Cancel</button>
                </div>

            </div>
        //</div>
    );
}

export default Sagaform