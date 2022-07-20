import React, { Component } from 'react'
import NavBar from '../components/Navbar'
import '../css/DetailTodo.css'

export default class DetailTodo extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <div className='kontainer h-screen max-w-full'>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Add Todo</span>
          <input className="masukkan rounded w-full border-violet-700 placeholder-slate-700 contrast-more:border-black-400 contrast-more:placeholder-slate-500"/>
          <p className="keterangan">
            Silahkan isi kolom untuk menambahkan rencana
          </p>
          <button className="rounded-full ... submit">Submit</button>
        </label>
      </form>
      </div>
      </>
    )
  }
}
