import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
        <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-zinc-800 flex justify-between">
            <div className='text-white'></div>
            <div className='text-white'>Todo List App</div>
            <div className='text-white'></div>
        </nav>
    )
  }
}
