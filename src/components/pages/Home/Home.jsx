import "./Home.css";
import { Button, Card, Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className="home bg-dark d-flex justify-content-center align-items-center flex-column">
      <div className="bg-light w-75 d-flex justify-content-center align-items-center flex-column ">
        <Carousel className="w-75 mb-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st3.depositphotos.com/1258191/16429/i/600/depositphotos_164299632-stock-photo-pouring-red-wine-into-wineglass.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st2.depositphotos.com/4718461/7860/i/600/depositphotos_78603060-stock-photo-brown-ice-cold-beer-bottles.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st2.depositphotos.com/1177973/7296/i/600/depositphotos_72965417-stock-photo-glasses-of-whiskey-on-bar.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st3.depositphotos.com/5489530/13155/i/600/depositphotos_131550062-stock-photo-vodka-in-shot-glasses-on.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st2.depositphotos.com/2731675/7994/i/600/depositphotos_79947434-stock-photo-opening-bottle-of-champagne.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div>
          <div className="">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YMSUoiT0efA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mN4JWnTOSmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center  gap-5">
          <Card className="home_card1 " style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://products3.imgix.drizly.com/Brand_Refresh_2022_Homepage_Desktop_Gifting.jpg?fm=jpg&amp;auto=format%2Ccompress&amp;ch=Width%2CDPR" alt="People spending time together." class="home_page-186 collage_section-module__ImageRight___1yK57" />
            <Card.Body>
              <Card.Title>Send ’em The Gift of Yastetal.</Card.Title>
              <Card.Text>
                Looking for the perfect last-minute gift? Want to schedule a delivery up to 2 weeks early? Send them bourbon, champagne and more and prepare for endless air-fives.
              </Card.Text>
              <a href="https://drizly.com/gifts"><Button variant="danger"> Give a gift</Button></a>
            </Card.Body>
          </Card>

          <Card className="home_card1" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://products3.imgix.drizly.com/Brand_Refresh_2022_Homepage_Desktop_Selection_New.jpg?fm=jpg&amp;auto=format%2Ccompress&amp;ch=Width%2CDPR" alt="People spending time together." class="home_page-324 collage_section-module__ImageLeft___2N6o0" />
            <Card.Body>
              <Card.Title>You want it? We got it.</Card.Title>
              <Card.Text>
                Rosé? Check. Tito’s? Check. That one killer pale ale you tried the other day? Check. We have the biggest selection for on-demand alcohol in the history of ever.            </Card.Text>
              <Button variant="danger">Check ’em out</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}


export default Home;
