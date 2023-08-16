import '../componentcss/usStyle.css'
import '../componentcss/Homestyle.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
function Uaep()
{
          const [uanews, setuanews] = useState([]);
          const [categoryn, setcategoryn] = useState("");
        
          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ae&category=${categoryn}&apiKey=bb527eb5ac6a4b42a17654fe3f8d4d59`);
                const data = await response.json();
                setuanews(data.articles);
              } catch (error) {
                console.log(error);
              }
            };
            fetchData();
          }, [categoryn]);
        
          const hendelcat = (cats) => {
            setcategoryn(cats);
          };    
   return(
          <>
          <section className="sec-1 ">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content text-center text-black px-5">
              <h1 className="mb-3">Welcome to YourNews</h1>
              <p>
                In this fast-paced digital era, news has become a constant stream of updates and stories, and I find it essential to actively seek out reliable sources
              </p>
              <p></p>
              <a href="#ue-sec-2" className="lin-sec-1">
                <i className="fa-solid fa-angles-down icon-sec-1"></i>
              </a>
            </div>
          </section>
          <section className='us-sec-2 py-5 ' id='ue-sec-2'>
          <div className='px-4'>
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
         <div className='row'>
        {uanews.map((sa)=>(
         <div className='col-lg-3 col-md-6 mb-3' key={sa.id}>
         <div className='us-item'>
         <Card style={{ width: '18rem' }} className="crad-eg pl-3">
         <Card.Img variant="top" src={sa.urlToImage} />
         <Card.Body>
           <Card.Title className='mb-3'>{sa.author}</Card.Title>
           <Card.Text>
             {sa.title}
           </Card.Text>
           <Card.Link href={sa.url}>Details</Card.Link>
           
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
   )       
}
export default Uaep;