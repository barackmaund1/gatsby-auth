import { inputEncoding } from 'min-document'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const register = () => {
    return (
        <Layout>
            <SEO title='register'/>
            <h4>Register</h4>
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
                <input type='submit' value='register'/>
            </form>
        </Layout>
    )
}

export default register
