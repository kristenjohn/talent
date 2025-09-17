import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { IoMdRadioButtonOff } from "react-icons/io";


const Talent = () => {
   const [isOpen, setIsOpen] = useState(1);
   const footerLogo = "https://picadelly.site/uploads/piccadilly_logo_black_6d33947466.png"
    return (<>
    {/* Header Portion */}
 <header className="-mt-12  w-screen min-h-[880px] bg-[url('https://picadelly.site/images/on-demand_bg.png')]
  bg-cover bg-center ">
   <nav className="w-full h-16 mt-20 flex flex-row  fixed -top-20 bg-[rgb(233,233,233,0.45)] backdrop-blur-sm z-50" >
    <div className="ml-20 mt-2">
     <img src="https://picadelly.site/uploads/Logo_fca7a44e45.png" alt="logo" className=""/>   
    </div>
    <div className="ml-[910px] mt-2">
     <button className="text-black text-lg font-semibold bg-white w-44 h-10 px-4 py-2 rounded-3xl
      hover:bg-orange-500 transition duration-300">Lets Connect</button>
    </div>
    <IoMenuSharp className="text-white h-12 w-12 ml-4 "/>
</nav> 

    <div className="w-full h-96 flex flex-col items-center justify-center">
        <h1 className="mt-96 text-9xl font-semibold text-white text-center">On-Demand <br/> Talent</h1>
       
    </div>    
</header>  

    {/* 2nd scetion  */}

    <div className="-mt-12  w-screen h-auto bg-[url('https://picadelly.site/images/flexible_bg.png')]
  bg-cover bg-center flex flex-row  ">
     <div className="w-full bg-[url('https://picadelly.site/images/half-concentric-img.jpg')] pb-32">
     <ul className="mt-32 ml-32 text-4xl font-semibold text-black list-none ">
        <li className="mt-4">There are times when an in-</li>
        <li className="mt-4">house solution is best.</li>
        <li className="mt-4">Piccadilly has the solution.</li>
        <li className="mt-4">Engage one of our 2,000</li>
        <li className="mt-4">expert communications and</li>
        <li className="mt-4">marketing consultants to act</li>
        <li className="mt-4">as an extension of your team</li>
        <li className="mt-4">and deliver immediate impact.</li>
     </ul>  
      <h1 className="mt-4 -ml-3 text-4xl font-bold text-center">Flexible. Cost-effective. Agile.</h1>
     </div>
     <div className="w-full "></div>
    </div>
            

   {/* 3rd Section */}

    <div className="relative -mt-12 pb-32  w-screen h-auto border-2 border-green-600 bg-[url('https://picadelly.site/images/flexible_bg.png')]    
    bg-cover bg-center bg-fixed transition duration-700">         
    <div className="absolute inset-0 bg-[rgba(178,201,53,0.8)] z-0"></div>
    <div className=" w-full h-auto mt-24 z-10 relative">
        <h1 className=" text-6xl font-bold ml-28 ">Services</h1>       
        <p className=" text-3xl font-medium ml-28 mr-28 mt-6 ">
            From a single subject-matter expert to a team of top talent, our vetted on-<br/>
           demand talent deliver results. We make it simple to get the support you<br/>
            need and give you the competitive edge.
        </p>
    </div>

    <div className=" w-full h-auto mt-20 mb-16 z-10 relative flex flex-row gap-3 overflow-x-scroll overflow-y-hidden
      px-8 py-4   custom-scrollbar">
        {/* !st img */}
<div className="ml-3  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_9deb776a20.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>
{/* <h1 className="absolute ml-6 mt-72 text-3xl text-black font-bold text-center
  hover:scale-110 hover:text-orange-500 transition duration-300" >Corporate <br/> Communications</h1> */}

        {/* 2nd img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_1_c7df743e59.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

          {/* 3rd img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_2_a454824c04.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

      {/* 4th img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_3_1345f3a457.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

  {/* 5th img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_4_0e357a793c.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

  {/* 6th img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_5_b41c7edf60.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

 {/* 7th img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_6_85be1359ee.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

 {/* 8th img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/Next_Project_VRRV_1_7_fab057380e.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-white
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

   </div>
   
   </div>

    {/* 4th Section */}

    <div className="relative -mt-12  w-screen h-auto  bg-[url('https://picadelly.site/images/flexible_bg.png')]    
    bg-cover bg-center transition duration-700 flex">
    <div className="absolute inset-0 bg-[rgba(178,201,53,0.8)] z-0"></div>

    <div className=" w-full h-auto bg-gray-200 relative  pb-32" >
        <h1 className=" text-7xl text-orange-500 font-medium ml-20 mt-12 z-10 relative">Why Piccadilly <br/>
              Contractors?</h1>
        <p className=" text-2xl text-black font-medium ml-20 mr-20 mt-3 z-10 relative">
            The speed of business is increasing and its impossible<br/>
              to foresee every changing need. 
        </p>
        <p className=" text-2xl text-black font-medium ml-20 mr-20 mt-3 z-10 relative">
            Thats where we come in. Whether you need extra<br/>
             support for your day-to-day marcom needs or<br/>
             someone to take the lead on a special project — our<br/>
             talent team delivers the right experts. Fast. 
        </p>
        <button className=" text-white bg-orange-500 w-44 h-12 rounded-3xl font-semibold text-lg ml-20 mt-6 z-10 relative
         hover:bg-white hover:text-orange-500 transition duration-300">Learn More</button>       
    </div>
    <div className=" w-full h-96  z-10 relative " ></div>

    </div>


    {/* 5th Section */}
    <div className="  w-screen h-auto border-2 border-blue-400 bg-[url('https://picadelly.site/images/companies_bg.png')]    
    bg-cover bg-center transition duration-700 ">
    <div className="ml-24 mt-12">
    <h2 className=" text-6xl font-bold text-black mt-6 ml-6">Honored to work with these companies</h2>
    <p className=" text-3xl font-medium text-black mt-6 ml-6">We have completed thousands of complex projects for B2B and B2C clients in tech, 
        healthcare, <br/>  pharmaceuticals and more.
        </p>    
    </div>

    <div className="flex flex-row flex-wrap justify-center gap-x-10 pb-24 ">
        <div className=" ml-24 w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Abbot_logo_98ce8bab92.svg" alt="logo" className="mt-24 ml-10"/>     
        </div>   

        <div className=" w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Workday_Logo_94708fa988.svg" alt="logo" className="mt-24 ml-10"/>     
        </div> 

        <div className=" w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Vector_3e5125fa21.svg " alt="logo" className="mt-24 ml-10"/>     
        </div> 

        <div className=" w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Sky_Zone_Logo_787834387a.svg" alt="logo" className="mt-24 ml-10"/>     
        </div> 

        <div className="mr-24 w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Stanford_Logo_ab9dc56cae.svg" alt="logo" className="mt-24 ml-10"/>     
        </div> 

        <div className=" ml-24 w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/SRI_Logo_912bf8ee69.svg" alt="logo" className="mt-24 ml-10"/>     
        </div>   

        <div className=" w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Linked_In_Logo_0cae51cc8f.svg" alt="logo" className="mt-24 ml-10"/>     
        </div> 

        <div className=" w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Net_App_Logo_e774c5478d.svg" alt="logo" className="mt-20 ml-16"/>     
        </div> 

        <div className=" w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Juniper_Logo_541179bdff.svg" alt="logo" className="mt-24 ml-10"/>     
        </div> 

        <div className="mr-24 w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Group_212_dd0b3367b8.svg" alt="logo" className="mt-24 ml-10"/>     
        </div> 

        <div className="ml-24 w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Flex_Logo_1_54ffe1266f.svg" alt="logo" className="mt-20 ml-12"/>     
        </div> 

        <div className=" w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Cisco_Logo_71556a2104.svg" alt="logo" className="mt-20 ml-10"/>     
        </div> 

        <div className="mr-24 w-56 h-56 bg-white  mt-10 rounded-full"> 
          <img src="https://picadelly.site/uploads/Blue_Shield_Logo_cf16d53d6c.svg" alt="logo" className="mt-20 ml-12"/>     
        </div> 

    </div>


    </div>
    

    {/* 6th Section */}
    <div className=" relative  w-screen h-[900px]  bg-[url('https://picadelly.site/images/testimonials_bg.png')]    
    bg-cover bg-center transition duration-700 ">
    
    <div className="absolute  h-[600px] w-[1100px]  bottom-0 right-20  rounded-tl-full rounded-tr-full
    bg-gray-100/80 ">

     <div className={` absolute mt-72 h-auto ml-20  transition-all duration-700 ease-in-out
        ${isOpen === 1 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <p className="text-3xl">"You always have such high-quality professionals available. When <br/>
        we dont have the resources internally to get key
             projects done,<br/> Picadilly is the perfect solution."</p>
        <h1 className="text-4xl font-medium mt-6">VP Communications, Global Manufacturing</h1>
        </div>

     <div className={`absolute mt-72 h-auto ml-20  transition-all duration-700 ease-in-out
        ${isOpen === 2 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <p className="text-3xl">Your team has been our glue over the years. You meet us where we<br/>
         are in a way that's flexible and grounded in the reality of how we run<br/> our business."</p>
        <h1 className="text-4xl font-medium mt-6">VP Employee Communications, Social Networking Company</h1>
        </div>
      
      <div className={`absolute mt-72 h-auto ml-20  transition-all duration-700 ease-in-out
        ${isOpen === 3 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <p className="text-3xl">"All of the consultants I met with were so strong. It's going to be<br/>
         difficult for me to choose only one! I am also shocked how easy this<br/>
          whole process has been. Hats off to your entire group,<br/> this experience has just been superb."</p>
        <h1 className="text-4xl font-medium mt-6">VP Product, Data Infrastructure Company</h1>
        </div>

      <div className={`absolute mt-72 h-auto ml-20  transition-all duration-700 ease-in-out
        ${isOpen === 4 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <p className="text-3xl">Your team has been our glue over the years. You meet us where we<br/>
         are in a way that's flexible and grounded in the reality of how we run<br/> our business."</p>
        <h1 className="text-4xl font-medium mt-6">VP Employee Communications, Social Networking Company</h1>
        </div>

      <div className={`absolute mt-72 h-auto ml-20  transition-all duration-700 ease-in-out
        ${isOpen === 5 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <p className="text-3xl">"Our GM has been without communications support for such a long<br/> time.
         Within days of working with Piccadilly, you have accomplished<br/>
          what it has taken others YEARS to do."</p>
        <h1 className="text-4xl font-medium mt-6">Director, Corporate Communications, Financial Software</h1>
        </div>    
    
      <div className={`absolute mt-72 h-auto ml-20  transition-all duration-700 ease-in-out
        ${isOpen === 6 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <p className="text-3xl">Your team has been our glue over the years. You meet us where we<br/>
         are in a way that's flexible and grounded in the reality of how we run<br/> our business."</p>
        <h1 className="text-4xl font-medium mt-6">VP Employee Communications, Social Networking Company</h1>
        </div>



      <div className="absolute ml-60 flex gap-2 mt-[520px] justify-center">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <button key={n} onClick={() => setIsOpen(n)}>
          <div
            className={`w-12 h-4 border-2 border-black rounded-full
              ${isOpen === n ? "bg-black" : ""}`}
          ></div>
        </button>
      ))}
    </div>


    </div>


    </div>


    {/* 7th Section */}

     <div className="relative -mt-12 pb-32  w-screen h-auto border-2 border-green-600 bg-[url('https://picadelly.site/images/flexible_bg.png')]    
    bg-cover bg-center bg-fixed transition duration-700">         
    <div className="absolute inset-0 bg-[rgba(178,201,53,0.8)] z-0"></div>
    <div className=" w-full h-auto mt-24 z-10 relative">
        <h1 className=" text-6xl font-bold ml-28 ">Success Stories</h1>       
        <p className=" text-3xl font-medium ml-28 mr-28 mt-6 ">
           See how we've helped brands like yours transform their businesses and achieve their goals.
        </p>
    </div>

    <div className=" w-full h-auto mt-20 mb-16 z-10 relative flex flex-row gap-10 overflow-x-scroll overflow-y-hidden
      px-8 py-4  shrink-0 ">
        {/* !st img */}
<div className="ml-28  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/thumbnail_3_a554d61b3e.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  /> 
  <h2 className="absolute inset-0 text-4xl text-white ml-6 mt-24 "> Change Management <br/> Communication</h2>
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-orange-300
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>
{/* <h1 className="absolute ml-6 mt-72 text-3xl text-black font-bold text-center
  hover:scale-110 hover:text-orange-500 transition duration-300" >Corporate <br/> Communications</h1> */}

        {/* 2nd img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/thumbnail_2_f43426f8ea.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
  <h2 className="absolute inset-0 text-4xl text-white ml-9 mt-28 "> Demand Generation</h2>
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-orange-300
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>

          {/* 3rd img */}
<div className="ml-5  relative w-72 h-72 rounded-full overflow-hidden group flex-shrink-0 ">
  <img 
    src="https://picadelly.site/uploads/thumbnail_1_e9888c27d8.png" 
    alt="service1"
    className=" rounded-full object-cover transition-opacity duration-500 group-hover:opacity-0" 
  />
  <h2 className="absolute inset-0 text-4xl text-white ml-9 mt-28 "> Sales Enablement</h2>
<span className="absolute inset-0 flex items-center justify-center 
    text-black text-lg  rounded-full bg-orange-300
    transform scale-0 opacity-0 transition-all duration-1000 ease-in-out
    group-hover:scale-100 group-hover:opacity-100">
    Shape brand perception, foster<br/> stakeholder trust and drive< br/> strategic messaging across<br/> 
    internal and external audiences.
  </span>
</div>


 

   </div>
   
   </div>


     {/* par10 */}

      <button className=" fixed bottom-8 right-8 w-16 h-16 bg-orange-500 text-white text-3xl rounded-full
       hover:bg-white hover:text-orange-500 transition duration-300 z-50"
       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>

  










 
  
 

    {/* footer last */}


    <footer className="site-footer">
    
    <div className="section-1">
        <div className="about-section">
        <h1 className="h1-footer">About Us</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">We Are Piccadilly</li>
           <li className="para-footer">Team Leaders</li>
           <li className="para-footer">Piccadilly Vibe</li>
          <li className="para-footer">Let's Connect</li>
          </ul></div>

          <div className="integrated-services">
        <h1 className="h1-footer">Integrated Services</h1><br/>
        <ul style={{listStyleType: "none"}}>
           <li className="para-footer"> Market Research</li>
         <li className="para-footer">Strategic Planning</li>
         <li className="para-footer">Brand Strategy & Identity</li>
         <li className="para-footer">Campaign Development</li>
         <li className="para-footer"> Production Services</li>
         <li className="para-footer">Digital & Traditional Media</li>
        <li className="para-footer"> Website Development</li>
         <li className="para-footer">Public & Media Relations</li>
        <li className="para-footer">Social Media Strategy</li>
        <li className="para-footer">Internal Communications</li>
        <li className="para-footer">Crisis Communications</li>
        <li className="para-footer">Event Management</li></ul></div>

          <div className="talent-services">
        <h1 className="h1-footer">Talent Services</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">On-Demand Talent</li>
           <li className="para-footer">Executive Search</li>
          </ul></div>

          <div className="our-work">
        <h1 className="h1-footer">Our Work</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">Client Results</li>
           <li className="para-footer">Sectors</li>
           <li className="para-footer">Testimonials</li>
          </ul></div>

        <div className="happening-section">
        <h1 className="h1-footer">What`s Happening</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">Hot News</li>
           <li className="para-footer">Blog Spotlight</li>
           <li className="para-footer">Piccadilly Buzz</li>
          </ul></div>

        <div className="button-section">
        <button className="footer-btn2">Let's Connect</button><br/><br/>
       <ul style={{listStyleType: "none"}}>
            <li className="para-footer">hello@piccadillyad.com</li>
           <li className="para-footer">925-790-2662</li>
          </ul></div>

     
    </div>

    <hr style={{marginTop: "42px"}}/>

    {/* section 2 start */}

    <div className="section-1">
        <div className="about-section">
        <h1 className="h1-footer">About Us</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">We Are Piccadilly</li>
           <li className="para-footer">Team Leaders</li>
           <li className="para-footer">Piccadilly Vibe</li>
          <li className="para-footer">Let's Connect</li>
          </ul></div>

          <div className="integrated-services">
        <h1 className="h1-footer">Integrated Services</h1><br/>
        <ul style={{listStyleType: "none"}}>
           <li className="para-footer"> Market Research</li>
         <li className="para-footer">Strategic Planning</li>
         <li className="para-footer">Brand Strategy & Identity</li>
         <li className="para-footer">Campaign Development</li>
         <li className="para-footer"> Production Services</li>
         <li className="para-footer">Digital & Traditional Media</li>
        <li className="para-footer"> Website Development</li>
         <li className="para-footer">Public & Media Relations</li>
        <li className="para-footer">Social Media Strategy</li>
        <li className="para-footer">Internal Communications</li>
        <li className="para-footer">Crisis Communications</li>
        <li className="para-footer">Event Management</li></ul></div>

          <div className="talent-services">
        <h1 className="h1-footer">Talent Services</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">On-Demand Talent</li>
           <li className="para-footer">Executive Search</li>
          </ul></div>

          <div className="our-work">
        <h1 className="h1-footer">Our Work</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">Client Results</li>
           <li className="para-footer">Sectors</li>
           <li className="para-footer">Testimonials</li>
          </ul></div>

        <div className="happening-section">
        <h1 className="h1-footer">What`s Happening</h1><br/>
        <ul style={{listStyleType: "none"}}>
            <li className="para-footer">Hot News</li>
           <li className="para-footer">Blog Spotlight</li>
           <li className="para-footer">Piccadilly Buzz</li>
          </ul></div>

        <div className="button-section">
        <button className="footer-btn2">Let's Connect</button><br/><br/>
       <ul style={{listStyleType: "none"}}>
            <li className="para-footer">hello@piccadillyad.com</li>
           <li className="para-footer">925-790-2662</li>
          </ul></div>

     
    </div>


     <div style={{marginTop: "92px"}}>
    <img className = "site-logo" src={footerLogo}/> 
      </div>
</footer>
            
        
    </>)
};

export default Talent;