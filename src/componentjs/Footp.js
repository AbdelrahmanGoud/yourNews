import imgfoot from '../image/logowhite.png';
function Footp()
{ 
  let date =new Date()
  let displaydate=date.getFullYear()        
  return(
     <>
     <footer className='foot pt-5'>
     <div className="foot-desc ">
     <div className='im-foot text-center'>
     <img src={imgfoot} alt='img' className='img-fluid'/>
     </div>
      <div className='desc'>
      <div className='icon-foot pl-3 pt-3'>
          <span className='icon-one px-2'><a href='https://github.com/AbdelrahmanGoud'><i class="fa-brands fa-github foot-i"></i></a></span>
          <span className='icon-one px-2'><a href='https://goudadev.netlify.app/'><i class="fa-solid fa-earth-africa"></i></a></span>
          <span className='icon-one px-2'><a href='https://www.linkedin.com/in/abdelrhman-ahmed-25635527b'><i class="fa-brands fa-linkedin icon-in-fot"></i></a></span>
          <span className='icon-two px-2'><a href="mailto:abdoahmed132001@gmail.com"><i class="fa-regular fa-envelope foot-i"></i></a></span>
          <span className='icon-tree px-2'><a href='https://wa.me/+201148952582'><i class="fa-brands fa-whatsapp foot-i"></i></a></span>
          <span className='icone-four px-2'><a href='tel:01148952582'><i class="fa-solid fa-phone foot-i"></i></a></span>
        </div>   
      <div className='rights pr-3 py-3 text-white'>
      All Rights Reserved GoudaDev ©{displaydate}
      </div> 
        
      </div>
     </div>     
     </footer>
     </>     
  )        
}
export default Footp;