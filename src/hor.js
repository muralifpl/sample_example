// import MasterImg from "../../assets/master_logo.png";
import "./hor.css";
// import { FaSearch } from "react-icons/fa";
// import { RxPerson } from "react-icons/rx";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaBars } from "react-icons/fa";
// import search from  "../../assets/search 1.png"
// import india from "../../assets/india_flag.png";
// import login from  "../../assets/login.png"
// import menu from '../../assets/menu 1.png'
// import line from '../../assets/Line 1.png'
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import close from "../../assets/close.png"
// import down from '../../assets/down_array.png'
import { useState } from "react";

// import Sam from '../../components/sample'

function Navbar() {

// const [hover,setHover]=useState(0);

// const handleHover =(check)=>{
//   setHover(check);
 
// }
// const handleLeave =()=>{
//   setHover(false);
// }
  return (
    <div className="">
      <div className="d-none d-lg-block">
    <nav class="navbar navbar-dark fixed-top" style={{background:"black"}}>
    <div class="container-fluid ">
<div style={{fontSize:"3rem"}}>
sjsjs
</div>
  <div className='text-white d-none d-lg-block '>
  <div className='top_mar'>
    <div className='d-flex hell desktop_hover'>
       <div className="change mt-3">
        MATCHES
       </div>
       <div className="change bg-primary">
        CHAMPIONSHIP
       </div>
       <div className="change">
        NEWS
       </div>
       <div className="change">
        SHOP
       </div>
       <div class="navba">
            <div class="dropdow">
              <button class="dropbtn">Dropdown 
              
              </button>
              <div class="dropdown-conten my-4">
                <div class="heade">
                  <h2>Mega Menu</h2>
                </div>   
                <div class="ro">
                  <div class="colum">
                    <h3>Category 1</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                  <div class="colum">
                    <h3>Category 2</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                  <div class="colum">
                    <h3>Category 3</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
            </div> 
          </div>



        {/* <img src={line} ></img> */}
       <div className="three">
       {/* <img src={search} width="33%"></img> */}
        &nbsp;
        <span  style={{fontSize:"0.76rem"}}>SEARCH</span>
       </div>
       <div className="three">

       {/* <img src={login} ></img> */}
        &nbsp;
        <span  style={{fontSize:"0.76rem"}}>LOGIN</span>
        
       </div>
       <div className="three">
        {/* <img className="" src={india}></img>&nbsp; */}
        <span  style={{fontSize:"0.76rem"}}>&nbsp;COUNTRY</span>
        &nbsp;
        {/* <img src={down} ></img> */}
        
       </div>
      
       {/* <img src={line} ></img> */}
     
      
     <div className="three">
      {/* <img style={{cursor:"pointer",fontSize:"1.1rem"}} className='text-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" src={menu} ></img> */}
      </div>
    </div>
      </div>
  
  </div>
     {/* <div className='menu_mobile d-lg-none'>
    
     <div className="">
      <img style={{cursor:"pointer"}} className='text-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" src={menu} ></img>
      </div>
    </div> */}
    {/* <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
    
        <div className='desktop d-none d-lg-block' style={{letterSpacing:"1px"}}>
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 mx-4 text-uppercase desktop_canvas hover-underline-animation ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">MEMBERS COUNTRIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">MEMBERSHIP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">academy/TRAINING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">health & NUTRITIONS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Rules & regulations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">photos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">videos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">blog</a>
          </li>
        </ul>
        <div className="nav_mar">
        <div className="mx-4" id="nav_desktop" style={{fontSize:"0.8rem"}}>
          <div className="my-4">
           HELP/FAQ
         </div>
         <div className="">
           CONTACTS
         </div>
         <div className="my-4" style={{fontSize:"1.3rem"}}>
         <FaFacebookSquare /> &nbsp; <FaTwitter /> &nbsp; <FaYoutube /> &nbsp; <FaInstagram />
         </div>
        </div>
        </div>
        </div>

      </div>
    </div> */}
  </div>
    </nav>
</div>
{/* <div className="d-block d-lg-none">
 <div className="" style={{ background: "black" }}>
      <div
        className=""
        style={{ fontFamily: "", fontWeight: "", zIndex: "99" }}
      >
        <nav className=" navbar  navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">
              <img src={MasterImg} className="master_img"/>
            </a>
            <div
              className="text-uppercase wtcf_nav"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "2px",
                color: "white",
              }}
            >
              World Tennis CRICKET FERDERATION
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
             <img src={menu}></img>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                <span
                  
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></span>
              </div>
              <div className="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 mx-4 text-uppercase mobile_canvas hover-underline-animation">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>MATCHES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>CHAMPIONSHIP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>NEWS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>SHOP</a>
          </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>MEMBERS COUNTRIES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>MEMBERSHIP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>academy/TRAINING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>health & NUTRITIONS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>Rules & regulations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>photos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>videos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"   style={{ color: "white" }}>blog</a>
          </li>
          <div className="nav_mar">
        <div className="" id="nav_desktop" style={{fontSize:"0.8rem"}}>
          <div className="my-4">
           HELP/FAQ
         </div>
         <div className="">
           CONTACTS
         </div>
         <div className="my-4" style={{fontSize:"1.3rem"}}>
         <FaFacebookSquare /> &nbsp; <FaTwitter /> &nbsp; <FaYoutube /> &nbsp; <FaInstagram />
         </div>
        </div>
        </div>
         
        </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
</div> */}
<div>

</div>
</div>

  );
}
export default Navbar;
 {/* <div class="navba">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <div class="dropdow">
              <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-conten">
                <div class="heade">
                  <h2>Mega Menu</h2>
                </div>   
                <div class="ro">
                  <div class="colum">
                    <h3>Category 1</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                  <div class="colum">
                    <h3>Category 2</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                  <div class="colum">
                    <h3>Category 3</h3>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </div>
            </div> 
          </div> */}