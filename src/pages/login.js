import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Login = () => {
    return (
        <Layout>
            <SEO title='login'/>
            <h4>Login</h4>
            <form>
                <div>
                    <label htmlFor='email'></label>
                    <br/>
                    <input type='text' name='email'/>
                </div>
                <div>
                    <label htmlFor='password'></label>
                    <br/>
                    <input type='password' name='password'/>
                    <br/>
                    <br/>
                </div>
                <input type='submit' value='login'/>
            </form>
        </Layout>
    )
}

export default Login


