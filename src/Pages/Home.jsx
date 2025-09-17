import loggo from  "./../Assets/loggo.png"
import boy from "./../Assets/boy.png"
import boy2 from "./../Assets/boy2.avif"
import siting from "./../Assets/siting.png"
import girlee from "./../Assets/girlee.png"
import { IoHeartCircleSharp } from "react-icons/io5";
import { RiChatSearchFill } from "react-icons/ri";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { PiUserRectangleFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareTwitter } from "react-icons/fa6";



const Home = () => {

    return(<>
    <div className="overflow-x-hidden">
    <header>

        {/* Navbaar Section */}
        <navbar className="flex flex-col lg:flex lg:flex-row " >
            <div className=" ml-0.5 -mt-12 text-center lg:ml-2 ">
                <img src={loggo} alt="logo" className="h-60 w-60 inline-block lg:h-52 lg:w-auto lg:mt-10 "/>
            </div>
            <div className="flex flex-wrap mt-2 ml-0.5 lg:mt-16 ">
                <ul className="flex flex-row flex-wrap lg:flex lg:flex-row justify-between space-x-4 p-4 w-[722px] h-1
                 text-2xl font-bold cursor-pointer">
                    
                    <li className=" hover:text-orange-600">Home</li>
                    <li className=" hover:text-orange-600"><a href="#myout">About Us</a></li>
                    <li className=" hover:text-orange-600"><a href="#myabout">Services</a></li>
                   <li className=" hover:text-orange-600"><a href="#myfooter">Contact Us</a></li>
                    <li className=" hover:text-orange-600">Blog</li>
                </ul>
            </div>
            <div className="lg:ml-72 ml-4 mt-20 ">
                <button className="h-10 w-40 text-center text-white
                 bg-orange-600 border-2 font-bold radius rounded-lg hover:scale-105 duration-300 ">Sign Up</button>
            </div>
        </navbar>

        {/* Hero Section */}
        <div className="flex flex-row flex-wrap lg:flex-nowrap ">
        <div className=" h-auto max-w-[655px] ml-4 lg:ml-24 mt-12" >
            <ul className="text-4xl lg:text-6xl font-bold flex flex-wrap ">
                <li>We Create</li>
                <li ><span className="text-orange-600"> Solutions </span> for</li>
                <li>your business</li>
                 </ul>

                 <ul className="lg:text-3xl font-md mt-4 flex flex-wrap">
                <li>our team keeps a keen eye on emerging trends</li>
                <li > and technoloqies to ensure your marketing</li>
                <li>compagion remains cutting-edge</li>
                 </ul>

          <div className=" mt-9">
                <button className="h-10 w-40 text-center text-white bg-orange-600 border-2 font-bold radius
                 rounded-lg hover:scale-105 duration-300">Get Started</button>
            </div>

        </div>
       
       <div className=" h-96 w-[655px] mt-12 flex flex-wrap lg:flex-nowrap  " >
            <img className="object-cover ml-4 w-80 h-80 " src={boy} alt="logo "/>
            <img className="object-cover w-80 h-80 ml-3 hidden lg:block" src={boy2} alt="logo "/>
                     </div>
        </div>

        {/* end sdfffffff */}

    <div className="flex flex-row justify-between ml-24    ">
       <button className="hidden lg:flex font-bold text-2xl"> <IoHeartCircleSharp  className="h-12 w-12
        text-red-800 -mt-1 hover:scale-105 duration-300 hidden lg:block" /> Explore more      </button>
    </div>

    </header>

                        {/* About us Section */}
   <section id="myabout" className="h-auto w-auto lg:w-full lg:mt-12  flex flex-wrap ml-4  ">
    <div className=" h-auto w-[700px] lg:ml-96 mt-7 lg:-mt-12 bor ">
        <ul className="text-4xl font-bold ml-4 lg:ml-28">
                <li >We Provide The Best <span className="text-orange-600"> Services </span></li>
                </ul>
                <ul className="text-2xl font-medium ml-4 lg:ml-32 mt-2">
               <li>High-quality solutions tailored to your needs</li>
                <li>24/7 customer support and guidance</li>
                 </ul>
    </div>
    </section>
                             {/* last 1st section repeat */}
         <div className="flex flex-wrap lg:flex-wrap lg:justify-between justify-between mt-12 ml-10 mr-10 lg:ml-24
     lg:mr-24  h-auto  ">
          <div className="border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
           hover:scale-105 duration-300">
            <RiChatSearchFill  className="h-24 w-24 text-yellow-400 -mt-3 -ml-2"/>
            <h1 className="text-2xl font-bold ml-6">Searching</h1>
            <ul className="text-1xl font-medium ml-2.5 mt-1"> 
              <li>Enter your keywords in the search bar</li>
              <li>Refine results using filters</li>
                    </ul>
            </div>

             <div className="border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
              hover:scale-105 duration-300">
                <BsMegaphoneFill  className="h-20 w-20 bg-green-400 text-blue-900  rounded-br-2xl"/>
                 <h1 className="text-3xl font-bold ml-6 mt-1">Marketing</h1>
                <ul className="text-1xl font-medium ml-2.5 mt-1"> 
                   <li>Promote your brand with campaigns</li>
                   <li>Reach customers through media</li>
                        </ul>

               
                </div>
              
               <div className=" border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
                hover:scale-105 duration-300">
                <FaGithubSquare  className="h-20 w-20 bg-purple-400 text-gray-700  rounded-br-2xl"/>
                <h1 className="text-3xl font-bold ml-6 mt-1">Campaign</h1>
                <ul className="text-1xl font-medium ml-2.5 mt-1"> 
                <li>Plan campaigns to boost engagement</li>
                <li>Track campaign results with detailed</li>
                  </ul>

                </div>

               <div className=" border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
                hover:scale-105 duration-300">
                  <PiUserRectangleFill  className="h-20 w-20 bg-red-500 text-gray-700  rounded-br-2xl"/>
                  <h1 className="text-3xl font-bold ml-6 mt-1">Career</h1>
                  <ul className="text-1xl font-medium ml-2.5 mt-1"> 
                  <li>Build your career with learning</li>
                  <li>Explore new career opportunities</li>
                     </ul>

                </div>
          </div>        
   

                          {/* Services Section */}

         <div id="myout" className=" h-auto w-full mt-24 bg-pink-100 pt-2 pb-12 ">
            <div className="flex flex-wrap lg:flex-nowrap ml-24 mr-24 justify-between mt-14 ">
          <div className="min-h-[399px] max-w-[660px] -ml-60 md:ml-0">
          <img className=" max-w-[644px] min-h-[440px] -mt-12" src={siting} alt="siting "/>
          </div>

            <div className="lg:min-h-[399px] lg:max-w-[660px] w-auto -ml-20">
                <ul className="text-4xl font-bold lg:ml-12 mt-2 flex lg:flex-nowrap ">
                <li >Simple <span className="text-orange-600"> Solutions! </span></li>
                </ul>

                <ul className="text-2xl font-light ml-12 mt-1 flex ">
               <li>We understand that no two businesses</li><br/>
                <li > are alike. Thats why we take the</li><br/>
                <li>time to understand.</li>
                 </ul>
        <div className="flex flex-row mt-6 ">
     <div className="flex flex-col  align-center">
      <div className=" h-52 w-0.5 bg-orange-400 ml-14 mt-0.5 flex flex-col items-center justify-center ">  
     <div className="h-16 w-10 rounded-full border-2 flex justify-center items-center border-orange-300 text-white bg-orange-600">1</div>
     <div className="h-16 w-10 rounded-full border-2 flex justify-center items-center border-orange-300 mt-4 text-white bg-orange-600">2</div>
     <div className="h-16 w-10 rounded-full border-2 flex justify-center items-center border-orange-300 mt-4 text-white bg-orange-600">3</div>
     <div className="h-16 w-10 rounded-full border-2 flex justify-center items-center border-orange-300 mt-4 text-white bg-orange-600">4</div>
     </div>
     </div> 

              <div className="flex flex-col">
     <div>
        <ul className="text-2xl font-bold ml-12">
                <li >Contact us</li> </ul>
                <ul className="text-1xl font-light ml-12 ">
                <li >Get in touch with us anytime. </li></ul>
                
     </div>
     <div>
        <ul className="text-2xl font-bold ml-12 ">
                <li >Consulatant</li> </ul>
                <ul className="text-1xl font-light ml-12 ">
                <li >Expert guidance for your bright future. </li></ul>
                
     </div>
     <div>
        <ul className="text-2xl font-bold ml-12 ">
                <li >Place Order</li> </ul>
                <ul className="text-1xl font-light ml-12 ">
                <li >Order your desired service easily.</li></ul>
                
     </div>
     <div>
        <ul className="text-2xl font-bold ml-12 ">
                <li >Payment</li> </ul>
                <ul className="text-1xl font-light ml-12 ">
                <li >Secure and fast payment process. </li></ul>
                
     </div>
                                                </div>
                                                </div>

            </div>


                     </div>

     <div className=" mt-5 lg:ml-96 flex flex-row flex-wrap  ">
    <button className="h-10 w-40 lg:ml-96 text-center text-white bg-orange-600 border-2 font-bold radius 
    rounded-lg hover:scale-105 duration-300">Get Started</button>
    <button className="h-9 w-40 ml-12 text-center text-orange-600 bg-pink-100 border-2 border-orange-600 font-bold
     radius rounded-lg hover:scale-105 duration-300">Read More</button>
    </div>         
    </div>  

                   {/* our Agency Section */}

    <div className=" min-h-[599px] pt-20 w-full flex flex-row flex-wrap  lg:ml-24 mr-24 ">
        <div className="min-h-[419px] max-w-[660px] ">
            <ul className="text-4xl font-bold ml-12 mt-2">
                <li >Our <span className="text-orange-600"> Agency </span></li>
                </ul>
             <ul className="text-2xl font-md mt-4 ml-12">
                <li>We deliver innovative digital solutions</li>
                 <li>Creative digital solutions</li>
                 <li>Client-focused approach</li>
                 <li>Web & app development</li>
                 <li>Modern UI/UX design</li>
                 <li>Smart marketing strategies</li>
                 <li>Custom business solutions</li>
                 <li>On-time project delivery</li>
                 <li>Innovative technology use</li>
                 
                 </ul> 
        <div className=" mt-3 ml-12">
                <button className="h-10 w-40 text-center text-white bg-orange-600 font-bold radius
                 rounded-lg hover:scale-105 duration-300">Read More</button>
            </div>         

        </div>
        <div className="min-h-[419px] max-w-[660px] ">
    
          <img className=" lg:max-w-[544px] lg:min-h-[440px] -mt-1.5  lg:ml-8 " src={girlee} alt="girlee "/>
        </div>
        </div>   

                            {/* Client Section */}
        <div className=" h-auto max-w-[700px] lg:ml-96 mt-7 lg:-mt-12 ">
        <ul className="text-4xl font-bold ml-8 lg:ml-48 ">
                <li >What Client <span className="text-orange-600"> Says! </span></li>
                </ul>
                <ul className="text-2xl font-medium ml-8 lg:ml-32 mt-2">
               <li>High-quality solutions tailored to your needs</li>
                <li>24/7 customer support and guidance</li>
                 </ul>
    </div>  

                                {/* 1st section */}

    <div className="flex flex-wrap lg:flex-wrap lg:justify-between justify-between mt-12 ml-10 mr-10 lg:ml-24
     lg:mr-24  h-auto  ">
          <div className="border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
           hover:scale-105 duration-300">
            <RiChatSearchFill  className="h-24 w-24 text-yellow-400 -mt-3 -ml-2"/>
            <h1 className="text-2xl font-bold ml-6">Searching</h1>
            <ul className="text-1xl font-medium ml-2.5 mt-1"> 
              <li>Enter your keywords in the search bar</li>
              <li>Refine results using filters</li>
                    </ul>
            </div>

             <div className="border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
              hover:scale-105 duration-300">
                <BsMegaphoneFill  className="h-20 w-20 bg-green-400 text-blue-900  rounded-br-2xl"/>
                 <h1 className="text-3xl font-bold ml-6 mt-1">Marketing</h1>
                <ul className="text-1xl font-medium ml-2.5 mt-1"> 
                   <li>Promote your brand with campaigns</li>
                   <li>Reach customers through media</li>
                        </ul>

               
                </div>
              
               <div className=" border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
                hover:scale-105 duration-300">
                <FaGithubSquare  className="h-20 w-20 bg-purple-400 text-gray-700  rounded-br-2xl"/>
                <h1 className="text-3xl font-bold ml-6 mt-1">Campaign</h1>
                <ul className="text-1xl font-medium ml-2.5 mt-1"> 
                <li>Plan campaigns to boost engagement</li>
                <li>Track campaign results with detailed</li>
                  </ul>

                </div>

               <div className=" border-t-2 border-b-cyan-100 shadow-2xl  bg-white h-48 w-72 rounded-2xl mt-2
                hover:scale-105 duration-300">
                  <PiUserRectangleFill  className="h-20 w-20 bg-red-500 text-gray-700  rounded-br-2xl"/>
                  <h1 className="text-3xl font-bold ml-6 mt-1">Career</h1>
                  <ul className="text-1xl font-medium ml-2.5 mt-1"> 
                  <li>Build your career with learning</li>
                  <li>Explore new career opportunities</li>
                     </ul>

                </div>
          </div> 


                           {/* 2nd-End Section */}

          <div className=" h-16 max-w-[1200px] ml-3 mr-3 lg:ml-40 mt-16 bg-orange-600 flex flex-row flex-wrap justify-between relative
            lg:flex-nowrap rounded-2xl">
            <h1 className=" lg:text-2xl font-bold text-white ml-2 lg:ml-40 mt-3 ">Ready to get started?</h1>
            <button className=" w-32 h-10 lg:w-40 mr-2 lg:ml-96 mt-3 text-center text-white bg-orange-600 border-2
             border-white font-bold radius rounded-lg hover:scale-105 duration-300 ">Contact us</button>
          </div>

          {/* Footer Section */}

          <div id="myfooter" className=" h-auto w-full -mt-7 bg-pink-100 pt-2 ">

            <div className=" flex flex-wrap mt-6 lg:flex-nowrap lg:ml-24 lg:mr-24 justify-between lg:mt-10 w-full  ">

          <div className="ml-0 mt-3  h-auto lg:w-72 ">
                <img src={loggo} alt="logo" className="h-40 w-auto  "/>
                <div className="flex ">
                <FaFacebook className="h-10 w-10 ml-5 -mt-9 text-blue-600 cursor-pointer hover:scale-125 duration-300" /> 
                <RiInstagramFill className="h-10 w-10 ml-3 -mt-9 text-orange-500 cursor-pointer hover:scale-125 duration-300" /> 
                 <FaSquareTwitter className="h-10 w-10 ml-3 -mt-9 text-blue-500 cursor-pointer hover:scale-125 duration-300"  />


                </div>
            </div>
             

            <div className="ml-0 mt-3 mr-3 h-auto lg:w-72 ">
                <h1 className="text-2xl font-bold ml-6 mt-6">Company</h1>
                <ul className="text-1xl font-medium ml-8 mt-1"> 
              <li>About</li>
              <li>Contact us</li>
              <li>Career</li>
              <li>Teams</li>
              </ul>
            </div>

            <div className="ml-0 mt-3 mr-3 h-auto lg:w-72 ">
                <h1 className="text-2xl font-bold ml-6 mt-6">Design</h1>
                <ul className="text-1xl font-medium ml-8 mt-1"> 
              <li>Creative Ideas</li>
              <li>Modern Layouts</li>
              <li>Unique Style</li>
              <li>Visual Impact</li>
              <li>User Friendly</li>
              </ul>
            </div>

            <div className="ml-0 h-auto mt-3 mr-3 lg:mr-20 lg:w-72 ">
                <h1 className="text-2xl font-bold ml-6 mt-6">Resources</h1>
                <ul className="text-1xl font-medium ml-8 mt-1"> 
              <li>Expert Guides</li>
              <li>Learning Tools</li>
              <li>Helpful Articles</li>
              <li>Training Material</li>
              <li>Case Studies</li>
              <li>Support Docs</li>
              </ul>
            </div>
            </div>


            <div className="w-full h-10 bg-orange-600 rounded-t-[100%] mt-4">
                <h1 className="text-white text-center font-bold pt-2">© 2024 Your Company. All rights reserved.</h1>
            </div>
          </div>



            </div>


    </>)
}

export default Home;