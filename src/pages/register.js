import React ,{ useState,useContext }from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import firebase from 'gatsby-plugin-firebase'
import {AuthContext} from '../context/auth'
import {navigate} from 'gatsby'


const Register = () => {

    const [data,setData]=useState({
        email:'',
        password:'',
        error:null
    })
    const {setUser}=useContext(AuthContext)
    const handleChange =e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
        setUser(result)
        navigate('/login')
        } catch (error) {
           setData({...data,error:error.message}) 
        }
    }
    return (
        <Layout>
            <SEO title='register'/>
            <h4>Register</h4>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor='email'></label>
                    <br/>
                    <input type='text' name='email' value={data.email} onChange={handleChange} placeholder='email'/>
                </div>
                <div>
                    <label htmlFor='password'></label>
                    <br/>
                    <input type='password' name='password'value={data.password} onChange={handleChange} placeholder='password'/>
                    <br/>
                    <br/>
                </div>
                {data.error?<p style={{color:`red`}}>{data.error}</p>:null}
                <input type='submit' value='register'/>
            </form>
        </Layout>
    )
}

export default Register
