import React, { Component } from 'react'
import './Sidebar.css'; 


//Sidebar
export default class Sidebar extends Component {
    render() {
        return (
            <div className='Sidebar'>
                <Logo/>
                <Topic tName='ArticBucket'/>
                <Topic tName='topic 1'/>
                <Topic tName='topic 2'/>
                <Topic tName='topic 3'/>
                <GenericButton bName='+'/>
            </div>
        )
    }
}


//Every topic on sidebar
class Topic extends Component {

    tName= this.props.tName;

    render() {
        return (
            <a className='Topic' href={'#'+this.tName}>{this.tName}</a>
        )
    }
}


class GenericButton extends Component {
    render() {
        return (
            <a className='GenericButton' href='#'>{this.props.bName}</a>
        )
    }
}


class Logo extends Component {
    render() {
        return (
            <div className='Logo'>ArticBucket</div>
        )
    }
}
