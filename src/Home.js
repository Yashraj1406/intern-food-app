import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
    return (
        <div className="home">
        <div className="carousel">
        <Carousel>
  <Carousel.Item interval={1000}>
    <img 
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>PIZZA</h3>
      <p>Pizza is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes,
       cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.all-free-download.com/images/graphicthumb/pasta_with_a_chicken_lemon_cream_sauce_555565.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>PASTA</h3>
      <p>Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs,
       and formed into sheets or other shapes, then cooked by boiling or baking.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.steppestravel.com/app/uploads/2020/05/tibetan-momo.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>MOMOS</h3>
      <p>Momo is a type of East and South Asian steamed filled dumpling.
       Momo is native to Tibet and Nepal. It is popular across a wider region of the Indian subcontinent.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>            </div>
        </div>
    )
}

export default Home
