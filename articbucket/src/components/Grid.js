import React, { Component } from 'react'
import './Grid.css'
import Task from './Task';

export default class Grid extends Component {
    render() {
        return (
            <div className='Grid'>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </div>
        )
    }
}
