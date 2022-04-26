import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFavourite, login, reset } from './../../store/auth/authSlice';
import "./login.css"
import Swal from "sweetalert2";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().required('Please Enter your Email').email('Invalid email format'),
    password: Yup.string().required('Please Enter your Password')
    // .matches(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}/,'Password should be alpha numeric min 8')
})


const Login = ({ handleChange }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, user, isSuccess, isError, message } = useSelector((state) => state.auth)

    /*
       const [formData, setFormData] = useState({
           email:'',
           password:''
       })*/

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        
        onSubmit: values => {
            console.log(values)
            const userData = {
                email: values.email,
                password: values.password
            }
            dispatch(login(userData))
            if (isError) {
                console.log("error mesage")
            }
            if (isSuccess || user) {
                    
                    navigate('/')
                 
                
            }
            //  dispatch(reset())
        },
        validationSchema,
    })


    useEffect(() => {
        if (isError) {
            //   toast.error(message)
        }
        if (isSuccess || user) {
            
            dispatch(reset())
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })

                navigate('/')
                dispatch(getFavourite(user._id))
           
        }

    }, [user, isSuccess, isError, message, navigate, dispatch])
    /*
        const onChange = (e) => {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }*/
    /*
        const handleSubmit = (e) => {
            e.preventDefault()
            const userData = {
                // customerEmail, customerPassword
                email,password
            }
            dispatch(login(userData))
              
        }
    */

    return (<>
        <form className='continer p-5 mt-3 sign-in text-center' onSubmit={formik.handleSubmit}>
            <div className='d-flex align-items-center justify-content-center w-100 '>
                <label htmlFor="userName"><i className="fa-solid border p-2 rounded-circle fa-user"></i></label>
                <input placeholder='userName' className='form-control w-100 ms-2'
                    type="email" name='email'
                    {...formik.getFieldProps('email')} />
            </div>
            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
            <div className='d-flex justify-content-center align-items-center w-100 mt-2' >
                <label htmlFor="Passoword"><i className="fa-solid fa-unlock-keyhole border p-2 rounded-circle"></i></label>
                <input placeholder='Passoword' className='form-control  ms-2'
                    type="password" name='password'
                    {...formik.getFieldProps('password')}
                />
            </div>
            {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
            <button className='btn btn-lg text-white my-3' type="submit">Login <i className="fa-solid fa-right-to-bracket"></i></button><br />
            {isError && <span style={{ color: "red" }}>userName or password is inCorrect</span>}
        </form>
    </>);
}

export default Login;