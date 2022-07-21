import React, { Component } from 'react'
import '../css/Input.css'

export default class Input extends Component {
  render() {
    return (
      <>
      <form className='kontainer'>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Add Todo</span>
          <input className="masukkan rounded w-full border-violet-700 placeholder-slate-700 contrast-more:border-black-400 contrast-more:placeholder-slate-500"/>
          <p className="keterangan">
            Silahkan isi kolom untuk menambahkan rencana
          </p>
          <button className="rounded-full ... submit">Submit</button>
        </label>
      </form>
      </>
    )
  }
}
