import React, { Component } from 'react'
import '../css/Card.css'

export default class Card extends Component {
  render() {
    return (
      <div className="kontainer card w-full rounded">
        <div className='flex gap-x-12'>
        <p className='subjek flex-1'>{this.props.subjek}</p>
        <div className='shrink-0'></div>
        <button className="hapus rounded-full ... submit flex-1">Hapus</button>
        </div>
        <p>{this.props.deskripsi}</p>
      </div>
    )
  }
}
