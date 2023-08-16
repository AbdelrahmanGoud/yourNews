import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../componentcss/usStyle.css'
import WOW from 'wowjs';
function Homep(){
 
  const [egnews,setegnews] = useState([]);
  const [categoryn, setcategoryn] = useState("");

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=eg&category=${categoryn}&apiKey=bb527eb5ac6a4b42a17654fe3f8d4d59`);
        const data = await response.json();
        setegnews(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [categoryn]);

  const hendelcat = (cats) => {
    setcategoryn(cats);
  };
 

  return (
    <>
      <section className="sec-1">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="content text-center text-black px-5">
          <h1 className="mb-3 wow wow bounceInUp">Welcome to YourNews</h1>
          <p>
            In this fast-paced digital era, news has become a constant stream of updates and stories, and I find it essential to actively seek out reliable sources
          </p>
          <p></p>
          <a href="#sec-1-1" className="lin-sec-1">
            <i className="fa-solid fa-angles-down icon-sec-1"></i>
          </a>
        </div>
      </section>
      <section className="sec-2 text-center" id="sec-1-1">
        <div className="px-5">
          <h2 className="mb-3">About</h2>
          <p className="mb-3 sec-2p">
            With the advent of technology and easy access to information, staying informed about current events has become an integral part of our daily lives; therefore, I make a conscious effort to read news articles from reputable sources, follow news channels on social media platforms, and engage in discussions with friends and colleagues to have a well-rounded understanding of the world around me.
          </p>
          <button className="btn btn-dark">Learn More</button>
        </div>
      </section>
      <section className="sec-3 pb-5">
        <div className="text-container">
          <h1 className="sec-3-h1">YOURNEWS</h1>
        </div>
      </section>
      <section className="sec-4 pb-5">
        <div className="px-4">
          <div className="sport-tit text-center pb-4">
            <h2 className="pb-3">{categoryn}</h2>
          </div>
          <div className="other-cat text-center mb-5">
            <button className="btn m-3" onClick={() => hendelcat("general")}>general</button>
            <button className="btn m-3 " onClick={() => hendelcat("business")}>business</button>
            <button className="btn m-3" onClick={() => hendelcat("entertainment")}>entertainment</button>
            <button className="btn m-3" onClick={() => hendelcat("science")}>science</button>
            <button className="btn m-3" onClick={() => hendelcat("sports")}>sports</button>
            <button className="btn m-3" onClick={() => hendelcat("technology")}>technology</button>
          </div>
          <div className="row">
            {egnews.map((eg)=>(
              <div className="col-lg-3 col-md-6 mb-3" key={eg.id}>
                <div className="sec-4-item">
                  <Card style={{width: '18rem' }} className="crad-eg pl-3">
                    <Card.Body>
                      <Card.Title className="pb-3">{eg.author}</Card.Title>
                      <Card.Text>
                        {eg.title}
                      </Card.Text>
                      <Card.Link href={eg.url}>تفاصيل</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
      <section className='us-sec-3'>
      <div class="stage">
       <div class="actor"></div>
      <div class="actor"></div>
      <div class="actor"></div>
</div>    
      </section>
    </>
  );
}

export default Homep;