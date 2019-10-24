import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from '../config/axios'

export class EditProfile extends Component {
    state ={
        profil : null
    }

    componentDidMount() {
        axios.get(
            `users/${this.props._id}`
        ).then(res=>{
            this.setState({profil:res.data})
        }).catch(err=>{
            console.log(err)
        })
    }

    onSubmitClick =() => {
        let dataForm = new FormData

        let _name = this.name.value
        let _age = this.age.value
        let _email = this.email.value // rochafi@gmail.com
        let _password = this.password.value
        let _avatar =this.avatar.files[0]

        dataForm.append('name',_name)
        dataForm.append('age',_age)
        dataForm.append('email',_email)
        dataForm.append('password',_password)
        dataForm.append('avatar',_avatar)

        axios.patch(
            `/users/${this.props._id}` , dataForm
        ).then(res=>{
            alert('Berhasil berhasil hore')
        }).catch(err=>{
            console.log(err)
        })
    }


    render() {
        return (
            <div>
                <div className='col-6 mx-auto mt-5 card'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1>Edit Profil</h1>
                    </div>
                    <form className='form-group' >

                        <div className='card-title'>
                            <h4>Username</h4>
                        </div>
                        <input ref={ (asdf) => {this.username = asdf} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h4>Name</h4>
                        </div>
                        <input ref={ (asdf) => {this.name = asdf} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h4>Age</h4>
                        </div>
                        <input ref={ (asdf) => {this.age = asdf} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h4>Email</h4>
                        </div>
                        <input ref={ (input) => {this.email = input} } className='form-control' type='email'/>

                        <div className='card-title'>
                            <h4>Password</h4>
                        </div>
                        <input ref={ (input) => {this.password = input} } className='form-control' type='password'/>

                        <div className='card-title'>
                            <h4>Avatar</h4>
                        </div>
                        <input ref={ (input) => {this.email = input} } className='form-control' type='file'/>

                    </form>
                    <button onClick={this.onSubmitClick} className='btn btn-outline-success btn-block'>Submit</button>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _id: state.auth._id
    }
}

export default connect (mapStateToProps) (EditProfile)
