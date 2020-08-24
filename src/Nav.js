import React , { Component , useEffect , useState }from 'react';
import { NavLink } from 'react-router-dom';
import{ Link, Element }from'react-scroll'
const  Nav = (props) =>{

     let [scrolled, changescrolled] = useState();

	 useEffect(() => {

             window.addEventListener('scroll' , () =>{

             let navbar = document.getElementById("nav");
             let sticky = navbar.offsetTop;
             if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
              } else {
              navbar.classList.remove("sticky");
              }
               const scroll = window.scrollY  < 130;
               if(scroll !== true)
               {
                navbar.classList.add("stickyd")
               }
               else{
            	navbar.classList.remove("stickyd");
               }

        });
   

        let active = document.getElementsByClassName('nav-link');


        for (let i = 0; i < active.length; i++) {
           

            active[i].addEventListener("click", function() {
          
             let current = document.getElementsByClassName("active");

                // If there's no active class

                     if (current.length > 0) {
                     for(let i = 0; i < current.length; i++){
                       current[i].className = current[i].className.replace(" active", "");
                       
                     } 
                  }                   
                    // Add the active class to the current/clicked button
                 this.className += " active";
             
               });

              }
       });
	
	 const activeStyle = {
	 	color:'white'
	 }
	 const style ={
	 	color:'white'
	 }


	return(  
         <>
           <div id = "nav" className = "navs">
           <div className = "container ">
           <nav id="navbar" className="navbar navbar-dark light navbar-expand-md  ">
           <NavLink className="navbar-brand text-capitalize" activeClassName="navlogo" activeStyle = {{color:'white' , fontWeight:'bold'}} to ="/">your logo</NavLink>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav ml-auto">
           <li className="nav-item">
           <Link  className="nav-link  text-capitalize home" href = "" to = "home" spy={true} smooth={true} duration={500}  >Home </Link>
           </li>
           <li className="nav-item ">
           <Link   className="nav-link text-capitalize service" href = "" to = "service"  spy={true} smooth={true} duration={500}>Service</Link>
           </li>
           <li className="nav-item">
           <Link   className="nav-link text-capitalize about" href = "" to = "about"  spy={true} smooth={true} duration={500} >about</Link>
           </li>
           <li className="nav-item">
           <Link   className="nav-link text-capitalize contact" href = "" to = "contact" spy={true} smooth={true} duration={500} >contact</Link>
           </li>
           </ul>
           </div>
           </nav>
           </div>
           </div>
          
         </>
		);

}



export default Nav;