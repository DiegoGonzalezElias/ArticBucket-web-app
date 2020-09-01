import React, { Component } from 'react'
import './Sidebar.css'; 




class Topic extends Component {

    tName= this.props.tName;

    render() {
        return (
            <a className='Topic' href={'#'+this.tName}>{this.tName}</a>
        )
    }
}





export default class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar'>
                <Topic tName='ArticBucket'/>
                <Topic tName='topic 1'/>
                <Topic tName='topic 2'/>
                <Topic tName='topic 3'/>
            </div>
        )
    }
}
