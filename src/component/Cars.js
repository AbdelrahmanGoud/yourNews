import '../componentcss/usStyle.css'
import '../componentcss/Homestyle.css';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from 'react';
function Cars()
{  
          const [crnews, setcrnews] = useState([]);
          const [categoryn, setcategoryn] = useState("");
        
          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=$${categoryn}&from=2023-08-13&to=2023-08-13&sortBy=popularity&apiKey=bb527eb5ac6a4b42a17654fe3f8d4d59`);
                const data = await response.json();
                setcrnews(data.articles);
              } catch (error) {
                console.log(error);
              }
              
            };
            fetchData();
          }, [categoryn]);
          console.log(crnews)
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
          <a href="#cr-sec-1" className="lin-sec-1">
            <i className="fa-solid fa-angles-down icon-sec-1"></i>
          </a>
        </div>
      </section>
      <section className='us-sec-2 py-5' id='cr-sec-1'>
      <div className='px-4'>
      <div className="sport-tit text-center pb-4">
            <h2 className="pb-3">{categoryn}</h2>
          </div>
          <div className="other-cat text-center mb-5">
          <button className="btn m-3" onClick={() => hendelcat("tesla")}>tesla</button>        
            <button className="btn m-3" onClick={() => hendelcat("mercedes-benz")}>mercedes-Benz</button>
            <button className="btn m-3 " onClick={() => hendelcat("bmw")}>bmw</button>
            <button className="btn m-3" onClick={() => hendelcat("audi")}>audi</button>
            <button className="btn m-3" onClick={() => hendelcat("ferrari")}>ferrari</button>
            <button className="btn m-3" onClick={() => hendelcat("lamborghini")}>lamborghini</button>
            <button className="btn m-3" onClick={() => hendelcat("ford")}>ford</button>
            <button className="btn m-3" onClick={() => hendelcat("rolls-royce")}>rolls-royce</button>

          </div>  
          <div className="other-cat text-center mb-5">
          <button className="btn m-3" onClick={() => hendelcat("apple")}>apple</button>        
            <button className="btn m-3" onClick={() => hendelcat("samsung")}>samsung</button>
            <button className="btn m-3 " onClick={() => hendelcat("huawei")}>huawei</button>
            <button className="btn m-3" onClick={() => hendelcat("xiaomi")}>xiaomi</button>
            <button className="btn m-3" onClick={() => hendelcat("oppo")}>oppo</button>
            <button className="btn m-3" onClick={() => hendelcat("vivo")}>vivo</button>
            <button className="btn m-3" onClick={() => hendelcat("lg")}>lg</button>
            <button className="btn m-3" onClick={() => hendelcat("sony")}>sony</button>

          </div>   
     <div className='row'>
    {crnews.map((crs)=>(
     <div className='col-lg-3 col-md-6 mb-3' key={crs.id}>
     <div className='us-item'>
     <Card style={{ width: '18rem' }} className="crad-eg pl-3" >
     <Card.Img variant="top" src={crs.urlToImage} />
     <Card.Body>
       <Card.Title className='mb-3'>{crs.author}</Card.Title>
       <Card.Text>
         {crs.description}
       </Card.Text>
       <Card.Link href={crs.url}>Details</Card.Link>
       
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
export default Cars;