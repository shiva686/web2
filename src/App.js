import React,{useEffect }from 'react';
import logo from './logo.svg';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import  Nav from './Nav.js'
import{ Link, Element }from'react-scroll'


function App() {
    

  const style = {
    "padding":'0px',
    "margin":'0px'  }

  return (
   < >
     <div id="home" className = "bgb " >
     <Nav/>
     <div className = "bgbv content" >
         <div className ="content">
         <h1  className="text-center wt text-capitalize"> website name </h1>
         <p className="text-center cp text-capitalize">caption</p>
        </div>
     </div>
     </div>

     <div className="container">
      <div name="service" className="element">
        <Element className="row vh">
           <div className="col-md-6" >
               <h1 className = "text-capitalize">service</h1>
              <p>Nulla do sit occaecat quis ut aliquip dolor dolore eiusmod elit proident sint exercitation duis aliquip et aliqua in labore consequat est in sit voluptate cupidatat nostrud eiusmod ut ut dolore pariatur sint eiusmod duis cillum et reprehenderit id excepteur quis ex ex dolor ut cillum voluptate consequat do occaecat laborum nisi veniam laborum magna magna sint pariatur sunt nostrud quis deserunt eiusmod aliqua eu nisi voluptate aute et cupidatat commodo anim aliquip duis est quis est irure tempor velit deserunt duis exercitation in incididunt in eu aliqua dolore culpa cupidatat eiusmod fugiat consectetur ea reprehenderit enim occaecat anim ex commodo qui consequat ad non nisi est sunt labore reprehenderit minim ut exercitation ullamco minim ex adipisicing nostrud et ut elit commodo veniam reprehenderit sunt tempor dolore mollit duis dolor reprehenderit ut magna cupidatat nulla adipisicing aliqua esse ut eu consequat proident tempor aute proident magna ut ad commodo id exercitation eu commodo exercitation amet in ex nisi eu dolore qui irure magna tempor et irure incididunt magna eiusmod sed aliqua incididunt aliqua eu laborum deserunt enim magna cillum enim in nostrud ea duis sint in id laboris esse in amet id ad sit aute nulla ut.</p>
           </div>
           
        </Element>
      </div>
      <Element name="about" className="element">
         <div className="row vh">
           <div className="col-md-6">
             <h1 className = "text-capitalize">about us</h1>
             <p>Nulla do sit occaecat quis ut aliquip dolor dolore eiusmod elit proident sint exercitation duis aliquip et aliqua in labore consequat est in sit voluptate cupidatat nostrud eiusmod ut ut dolore pariatur sint eiusmod duis cillum et reprehenderit id excepteur quis ex ex dolor ut cillum voluptate consequat do occaecat laborum nisi veniam laborum magna magna sint pariatur sunt nostrud quis deserunt eiusmod aliqua eu nisi voluptate aute et cupidatat commodo anim aliquip duis est quis est irure tempor velit deserunt duis exercitation in incididunt in eu aliqua dolore culpa cupidatat eiusmod fugiat consectetur ea reprehenderit enim occaecat anim ex commodo qui consequat ad non nisi est sunt labore reprehenderit minim ut exercitation ullamco minim ex adipisicing nostrud et ut elit commodo veniam reprehenderit sunt tempor dolore mollit duis dolor reprehenderit ut magna cupidatat nulla adipisicing aliqua esse ut eu consequat proident tempor aute proident magna ut ad commodo id exercitation eu commodo exercitation amet in ex nisi eu dolore qui irure magna tempor et irure incididunt magna eiusmod sed aliqua incididunt aliqua eu laborum deserunt enim magna cillum enim in nostrud ea duis sint in id laboris esse in amet id ad sit aute nulla ut.</p>
           </div>
          
        </div>
      </Element>
      <Element name="contact" className="element">
        <div className="row vh">
           <div className="col-md-6">
             <h1 className = "text-capitalize">contact us</h1>
               
               <form className = 'form-cos'>
                  <label className="text-capitalize ">email</label>
                  <br/>
                  <input type="email" name="email" className="email"/>
                   <br/>
                  <label className="text-capitalize ">password</label>
                  <br/>
                  <input type="password" name="email" className="password"/>
                   <br/>
                  <label className="text-capitalize ">message</label>
                  <br/>
                  <textarea type="textarea" name="email" className="textarea"/>
                  <br/>
                  <button type="submit" name="submit" className="submit btn-primary">submit</button>
               </form>

           </div>
          
        </div>
      </Element>
     </div>


   </>
  );
}

export default App;
