import React, { Component } from 'react'
import axios from '../config/axios'
import {connect} from 'react-redux'
import { isNull } from 'util'

export class Profile extends Component {
    state ={
        profil : null
    }
    componentDidMount(){
        this.getProfil()
    }
    getProfil =() =>{
        axios.get(`/users/${this.props._id}`)
        .then(res=>{
            this.setState({profil : res.data})
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        if(!isNull(this.state.profil)){
            //    let {name, email, age,} = this.state.profil.user
            let {avatar , user} = this.state.profil
                    return (
                        <div>
                            <img src={avatar} alt="gambar muka"/>
                            <h1>Hello {user.name}</h1>
                            <h5>{user.age}</h5>
                            <h5>{user.email}</h5>
                        </div>
                    )
        }else{
           return <h1>Loading</h1>
        }
    }
}
const mapStateToProps = state => {
    return {
        _id: state.auth._id
    }
}

export default connect(mapStateToProps)(Profile)
