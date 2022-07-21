import React, { Component } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import NavBar from '../components/Navbar'
import '../css/HomePage.css'
import axios from 'axios';

export default class HomePage extends Component {
  state = {
    loading: false,
    config:{
      method:'get',
      url:`https://api.todoist.com/rest/v1/tasks`,
      headers:{
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }},
    datas:[
      {
        id:1,
        subjek:'Meet with Laura',
        deskripsi:'',
        tanggal:'20/07/2022',
        pukul:'14:00'
      },
      {
        id:2,
        subjek:'Polish brand idea',
        deskripsi:'important',
        tanggal:'20/07/2022',
        pukul:'15:00'
      },
      {
        id:3,
        subjek:'Design a prototype',
        deskripsi:'',
        tanggal:'20/07/2022',
        pukul:'17:00'
      },
    ]
  }



componentDidMount(){
  this.fetchData();
}

async fetchData(){
  this.setState({loading:true});
  await axios
  .get(`https://api.todoist.com/rest/v1/tasks`,
  { headers: { Authorization: 'Bearer 3d1d8b400ac7b81b81fc3369403005779dca728a' } })
  .then((response) =>{
    const {result}=response;
    console.log(result);
  })
  .catch((error) => {
    alert(error.toString());
})
.finally(() => this.setState({loading: false}));
}

  render() {
    return (
        <>
        <NavBar/>
        <div className="kontainers h-screen">
        <Input/>
        {this.state.datas.map((data)=>(
          <Card key={data.id}
          subjek={data.subjek}
          deskripsi={data.deskripsi}/>
          ))}
          </div>
        </>
    )
  }
}
