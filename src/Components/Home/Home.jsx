import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate=useNavigate()

  const gotoproduct=()=>{
    navigate("/products")
  }
  return (
    <div className='home'>
        <div className="home_maincontainer">
          <h1 style={{fontWeight:"700"}}> Welcome to Go-shop</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos modi quibusdam repellendus inventore molestiae fuga placeat? Nostrum tempore facere veniam a, quod optio iusto voluptatem quo vero magnam minima et nisi eaque commodi iste delectus explicabo impedit ullam corporis dolores ratione, deserunt dolorem pariatur incidunt? Ratione, ipsa sunt sed recusandae cupiditate doloribus fugit consequuntur. Eos esse soluta officia perferendis est veritatis officiis nam illo! Placeat deleniti maiores itaque ab? Vitae, doloremque, corrupti doloribus nihil rerum quaerat cumque iste, magni voluptatum deleniti impedit accusantium architecto vel fugiat? Distinctio, hic quam eum quidem, commodi odio nulla repellat illo, perferendis cum incidunt!</p>

          <button className='explore' onClick={gotoproduct}> Explore more !!!</button>

        </div>

        
    </div>
  )
}
