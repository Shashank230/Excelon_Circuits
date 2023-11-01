import React from 'react'
import "./App.css"
import back from "./assets/backinner1.jpg"
import earrings from "./assets/earrings.webp"
import necklace from "./assets/Necklace&pendent.webp"
import bracelet from "./assets/bracelets.webp"
import rings from "./assets/Rings.webp"
import div1 from "./assets/div1.jpg"
import div2 from "./assets/div2.jpg"
import div3 from "./assets/div3.jpg"
import div4 from "./assets/div4.jpg"
import { BiSearch } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { MdRoomService } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { GrScheduleNew } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import rose from "./assets/rose edition.webp"

const App = () => {
  return (
    <>
    <nav className='nav0'><p>Purchases made on this site will ship to U.S. addresses only. Do you want to shop the U.S. site?</p><p>choose our location </p></nav>
      <nav className='nav1'>
        <ul>
          <div className='divli1'><li><p style={{display:"flex"}}>TIFFANY &<p style={{color:"#81d8d0",marginTop:"1px"}}>CO</p></p></li></div>
          <div className='divli2'>
          <li><BiSearch/></li>
          <li> <BsFillCartFill/> </li>
          <li> <AiFillHeart/> </li>
          <li> <FaLocationDot/> </li>
          <li> <BsPersonCircle/> </li>
          </div>
        </ul>
      </nav>
      <div style={{background:"aqua",height:"1px", marginLeft:"1%",marginRight:"1%"}}></div>
      <nav className='nav3'>
        <ul>
          <li>JEWELLERY</li>
          <li>GIFTS</li>
          <li>LOVE & ENGAGEMENT </li>
          <li>FINE WATCHES</li>
          <li>HOME & ACCESSORIES</li>
          <li>FRAGRANCE</li>
          <li>MENS</li>
          <li>STORES</li>
        </ul>
      </nav>
      <div className='container1'>
        <aside className='aside'>
        <h1>THIS IS TIFFANY <br />HARDWARE</h1>
          <p>Elsa Pe  tti's designs reflects her perception of <br />
          the natural world through a sculptural, organic <br />
          asthetic. Discover her irresistibly sensual jewellery <br />
          that makes a modern statement. </p>
          <button style={{border:"none",color:"white",backgroundColor:"teal",borderRadius:"5px",height:"35px",boxShadow:"1px 1px 1px 1px aqua"}}>SHOP NOW</button>
        </aside>
      </div>
      <div className='container2'>
        <h3  style={{color:"teal"}}>NEW COLLECTION</h3>
      </div>
      <div className='container3'><h1>FEEL LOVE PRODUCT</h1></div>
      <div className='container4'>
        <div className='inner1'><img src={back} style={{height:"450px", width:"450px",marginLeft:"43%"}} alt="" /></div>
        <div className='inner2'>
          <h1 style={{marginLeft:"2%",marginTop:"15%"}}>NOW OPEN THE <br />LANDMARK</h1>
          <p style={{backgroundColor:"#F5BCBA",width:"fit-content",marginLeft:"2%",marginTop:"-2%",borderRadius:"10%"}}>Handcrafting the world’s best diamonds starts with <br />
           knowing where they come from. We proudly trace 100% <br />
            of our rough diamonds to known mines and sources.</p>
            <button style={{marginLeft:"2%",marginTop:"-2%", border:"none",color:"white",backgroundColor:"teal",borderRadius:"5px",height:"35px",boxShadow:"1px 1px 1px 1px aqua"}}>LEARN MORE</button>
        </div>
      </div>
      <div className='container5'>
        <div><h1>THE TIFFANY EXPERIENCE</h1></div>
        <div className='container6'>
          <ul>
            <li><FaShippingFast/></li>
            <li><MdRoomService/></li>
            <li><GrScheduleNew/></li>
            <li><BsBoxSeam/></li>
          </ul>
        </div>
        <div className='container7'>
          <ul>
            <li> <p>COMPLIMENTARY <br /> SHIPPING & RETURNS</p> </li>
            <li> <p>TIFFANY AT <br />YOUR SERVICE</p> </li>
            <li> <p>TIGGANY BOOK <br />AN APPOINTMENT</p> </li>
            <li> <p>TIFFANY THE <br /> ICONIC BLUE BOX</p> </li>
          </ul>
        </div>
      </div>
      <div className='container8'><h1>SHOP BY CATEGORY</h1></div>
      <div className='container9'>
        <ul>
          <li><img src={bracelet} style={{height:"300px",width:"300px"}} alt="" /></li>
          <li><img src={necklace} style={{height:"300px",width:"300px"}} alt="" /></li>
          <li><img src={rings} style={{height:"300px",width:"300px"}} alt="" /></li>
          <li><img src={earrings} style={{height:"300px",width:"300px"}} alt="" /></li>
        </ul>
      </div>
      <div className='container10'>
        <ul>
          <li>BRACELET</li>
          <li>NECKLACE</li>
          <li>ENGAGEMENT RING</li>
          <li>EAR RINGS</li>
        </ul>
      </div>
      <div style={{marginLeft:"45%",marginBottom:"2%"}}><h1>WHATS NEWS</h1></div>
      <div className='container11'>
        <div className='container11inner1'>
          <div className='ultrainner1'>
            <div className='number1'><img src={div1} style={{height:"147px",width:"192px"}} alt="" /></div>
            <div className='number2'>
              <h2>BEYONCE TOURS IN TIFFANY & CO.</h2>
              <p style={{marginTop:"-3%"}}>YOUR TIFFANY & CO ARE NOW OPEN IN STOCKLOM. <br />
             NOW WE ARE HERE TO SERVE YOU WITH OUR WORLD CLASS PRODUCTS AND SERVICES</p>
              <h3 style={{backgroundColor:"aqua",width:"130px",marginLeft:"35%"}}>LEARN MORE</h3>
            </div>
          </div>
          <div className='ultrainner1'>            
           <div className='number1'><img src={div2} style={{height:"147px",width:"192px"}} alt="" /></div>
           <div className='number2'>
            <h2>OPENINGS NIGHT IN STOCKHOLM.</h2>
            <p style={{marginTop:"-3%"}}>YOUR TIFFANY & CO ARE NOW OPEN IN STOCKLOM. <br />
             NOW WE ARE HERE TO SERVE YOU WITH OUR WORLD CLASS PRODUCTS AND SERVICES</p>
            <h3 style={{backgroundColor:"aqua",width:"130px",marginLeft:"35%"}}>LEARN MORE</h3>
           </div>
          </div>
          <div className='ultrainner1'>
          <div className='number1'><img src={div3} style={{height:"145px",width:"192px"}} alt="" /></div>
           <div className='number2'>
            <h2>TIFFANY & CO. ON THE RENAISSANCE.</h2>
            <p style={{marginTop:"-3%"}}>YOUR TIFFANY & CO ARE NOW OPEN IN RENAISSANCE. <br />
             NOW WE ARE HERE TO SERVE YOU WITH OUR WORLD CLASS PRODUCTS AND SERVICES</p>
            <h3 style={{backgroundColor:"aqua",width:"130px",marginLeft:"35%"}}>LEARN MORE</h3>
           </div>
          </div>
          <div className='ultrainner1'>
          <div className='number1'><img src={div4} style={{height:"145px",width:"192px"}} alt="" /></div>
           <div className='number2'>
            <h2>DISCOVER MORE FROM TIFFANY & CO.</h2>
            <p style={{marginTop:"-3%"}}>DISCOVER OUR WIDE RANGE OF PRODUCTS ON <br />
            OUR WEBSITE AND OTHER SOCIAL MEDIA PLATFORMS</p>
            <h3 style={{backgroundColor:"aqua",width:"130px",marginLeft:"35%"}}>LEARN MORE</h3>
           </div>
          </div>
        </div>
        <div className='container11inner2'><img src={rose} style={{height:"590px", width:"600px"}} />
        <h1 style={{marginTop:"-8%",marginLeft:"23%"}} >TIFFANY LOCK</h1>
        </div>
      </div>
      <div className='container12'><h1>SUBSCRIBE OUR NEWSLETTER</h1></div>
      <div className='container13'> <p>Handcrafting the world’s best diamonds starts with knowing where they come from. <br />
       We proudly trace 100% of our rough diamonds to known mines and sources.</p>
       </div>
       <div className='container14'>
        <input type="email" placeholder='ENTER YOUR EMAIL' style={{width:"500px",height:"35px",borderRadius:"15%"}} /><button style={{border:"none",color:"white",backgroundColor:"teal",borderRadius:"5px",height:"35px",boxShadow:"1px 1px 1px 1px aqua"}}>SUBSCRIBE</button>
       </div>
       <footer className='container15'>
        <div className='foot1'>
          <h2 style={{marginLeft:"8%"}}>TIFFANY & CO.</h2>
         <div style={{display:"flex",justifyContent:"space-evenly",marginLeft:"8%",marginTop:"-3%",width:"120px"}}><FiFacebook/><FiInstagram/><FiTwitter/><PiYoutubeLogoThin/></div>
        </div>
        <div className='foot1'>
          <h3 style={{marginLeft:"8%"}}>QUICK LINKS</h3><br />
          <ul>
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>ABOUT</li>
            <li>BEST OF US</li>
            <li>CHOOSE US</li>
            <li>TESTIMONIALS</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className='foot1'>
        <h3 style={{marginLeft:"8%"}}>IMPORTANT</h3>
          <ul>
            <li>SHIPPING</li>
            <li>TERM AND CONDITION</li>
            <li>FAQs</li>
            <li>CONTACT</li>
            <li>CHOOSE US</li>
            <li>RETURN AND EXCHANGE</li>
            <li>GET DATA</li>
          </ul>
        </div>
        <div className='foot1'>
        <h3 style={{marginLeft:"8%"}}>MY ACCOUNT</h3>
          <ul>
            <li>SIGNUP</li>
            <li>MY CART</li>
            <li>WISHLIST</li>
            <li>PHONE</li>
          </ul>
        </div>
        <div className='foot1' style={{marginTop:"2%"}}>
          <div style={{height:"30px",display:"flex",justifyContent:"flex-start"}}><MdEmail/><h3 style={{marginTop:"-1%",marginLeft:"5%"}}>tiffany&co@tiffany.com</h3></div>
          <div style={{height:"30px"}}><BsTelephoneInbound/> <h3 style={{marginTop:"-8%",marginLeft:"10 %"}}>8800993366</h3> </div>
        </div>
       </footer>
    </>
  )
}

export default App