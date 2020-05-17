import React,{useState} from 'react';
import {a} from 'react-router-dom';

function Menu(props) {
const [MenuItem, setMenuItem] = useState(true)
const [SearchItems, setSearchItems] = useState(false)
 
const Searchs = () => {
    setMenuItem(false)
    setSearchItems(true)
}
    return (
        <div className="slideUp" style={{position: 'fixed', margin: '7px 0 0 15vw', zIndex:'100',background: ' rgba(255,255, 255, .9)',width:'100%',height:'97.5%' }}>

{MenuItem && (
<>
     <div className='card'>
                    <div className='chapter-container'>
                        <h1>Finding Our Way</h1>
                    </div>
                    <div class="flex-container">
                        <div>
                            <h2 className='text-uppercase'>INTRODUCTION</h2>
        <ul>
        <li>
        <a href='/'>
        <h5 className='text-uppercase'>Foreword </h5>
        </a>   
        </li>

        <li>
        <a href='/'>
        <h5 className='text-uppercase'>Acknowledgment of contributors </h5>
        </a>   
        </li>

        <li>
        <a href='/'>
        <h5 className='text-uppercase'>Our story </h5>
        </a>    
        </li>

        <li>
        <a href='/'>
        <h5 className='text-uppercase'>Our brand building convictions </h5>
        </a> 
        </li>
        </ul>
                       
                      
                       
<h2 className='margin-10 text-uppercase'>Part 1 <br/>
B-f brand building principles </h2>
<h6 className='margin-10'>Chapter 1</h6>
<h6>Brand Foundations</h6>

<ul>
<li>
    <a href='/'>
    <h5 className='text-uppercase'>Brown-Forman's brand Architecture </h5>
    </a>  
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>Portfolio strategy and management</h5>
    </a>  
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>Innovation/new product development</h5>
    </a>  
</li>
</ul>




<h6 className='margin-10'>Chapter 2</h6>
<h6>Bf Growth Framework</h6>



<h6 className='margin-10'>Chapter 2.1</h6>
<h6>Mental Availability</h6>
<ul>
<li>
    <a href='/'>
    <h5 className='text-uppercase'>reach - brand communication </h5>
    </a>  
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>reach - Media</h5>
    </a>  
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>Meaningful difference  </h5>
    </a>  
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>Contextual relevance  </h5>
    </a>  
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>distinctive assets</h5>
    </a>  
</li>
</ul>
  

                        </div>
                        <div>


                        <h6 className='margin-10'>Chapter 2.2</h6>
                        <h6>Physical Availability</h6>
                        <ul>
                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Physical Availability </h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>presence</h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>prominence  </h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>portfolio  </h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>price and rgm </h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>picture of success</h5>
                            </a>  
                        </li>
                        </ul>
                        

                                     <h6 className='margin-10'>Chapter 3</h6>
                        <h6>B-f Brand building capabilities</h6>

                        <h2 className='margin-10 text-uppercase'>Part 2 <br/>
                        principles into <br/> action </h2>


                         <h6 className='margin-10'>Chapter 4</h6>
                        <h6>Strategic Planning</h6>
                        <ul>
                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>An introduction to strategy and planning </h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Stepping through the planning process</h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Guidelines on reviewing and timings </h5>
                            </a>  
                        </li>

                        </ul>


              <h6 className='margin-10'>Chapter 5</h6>
                        <h6>Business Activity Measurement</h6>
                        <ul>
                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>what is bam and how do we use it </h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>what do we measure and how</h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>best practice codification</h5>
                            </a>  
                        </li>

                        </ul>


                        </div>



                        <div>
                                
              <h6 className='margin-10'>Chapter 6</h6>
                        <h6>Drinking Business Results</h6>
                        <ul>
                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Driving Business Results </h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Excellent Business model and operating structure comparison</h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Brown-forman's acquisition history</h5>
                            </a>  
                        </li>

                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Strategic resource allocation  and Business planning</h5>
                            </a>  
                        </li>


                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>financial projections and financial management tools</h5>
                            </a>  
                        </li>

                        </ul>


      <h6 className='margin-10'>Chapter 7</h6>
                        <h6>Inclusive & Responsible Marketing</h6>
                        <ul>
                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'>Inclusive & Responsible Marketing </h5>
                            </a>  
                        </li>

                     
                        <li>
                            <a href='/'>
                            <h5 className='text-uppercase'> managing compliance</h5>
                            </a>  
                        </li>

                        </ul>


<h2 className='margin-10 text-uppercase'>summary and close</h2>
<h2 className='margin-10 text-uppercase'>Appendix </h2>

      <h6 className='margin-10'>Industry and Category Information</h6>

<p className='margin-10 text-uppercase font-05'>
    haven't found what you're looking for?
</p>

<input className="search" placeholder="SEARCH" onChange={Searchs}/>
                        </div>
                    </div>
            </div>
       
</>
)}


{SearchItems && <>
  
       <div class="flex-container">
  <div className="card searchDiv">
<h2 className='margin-10 text-uppercase'>SEARCH Results </h2>
<ul>
<li>
    <a href='/'>
    <h5 className='text-uppercase'>lorem ipsum dolor sit amet </h5>
    </a>  
<p>Video</p>
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>lorem ipsum dolor sit amet </h5>
    </a>  
<p>text, interaction</p>
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>Sed do eismod tempor incdidunt </h5>
    </a>  
<p>text, interaction</p>
</li>


<li>
    <a href='/'>
    <h5 className='text-uppercase'>Sed do eismod tempor incdidunt </h5>
    </a>  
<p>text, interaction</p>
</li>

<li>
    <a href='/'>
    <h5 className='text-uppercase'>Sed do eismod tempor incdidunt </h5>
    </a>  
<p>text, interaction</p>
</li>



<li>
    <a href='/'>
    <h5 className='text-uppercase'>Sed do eismod tempor incdidunt </h5>
    </a>  
<p>text, interaction</p>
</li>


<li>
    <a href='/'>
    <h5 className='text-uppercase'>Sed do eismod tempor incdidunt </h5>
    </a>  
<p>text, interaction</p>
</li>

</ul>
  

<p className='margin-10 text-uppercase font-05'>
    haven't found what you're looking for?
</p>

<input className="search" placeholder="SEARCH" onChange={Searchs}/>


</div>


<div>


</div>


</div>


</>}
        </div>
    ); 
};


export default Menu;