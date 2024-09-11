import portfolioFrontImg from './portfolio_front_img.png';
// import Card from './Card.js';


function App() {
  return (
    <div className="App ">
   <nav className="bg-[#f8f9fb] h-[8vh] w-full flex justify-center">
    <ul className="flex  ">
      <a href="#sec1" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4"><li>Home</li></a>
      <a href="#About" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4"><li>About</li></a>
      <a href="#sec2" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4"><li>Project</li></a>
      <a href="#certi" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4"><li>Certificate</li></a>
      <a href="https://www.linkedin.com/in/aditi-mishra-996152282/" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4"><li>Linkdien</li></a>
      <a href="https://medium.com/@mishraadis1620" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4"><li>Medium</li></a>
      <a href="https://github.com/aditi1620" className="text-xl font-outfit text-[#555b68] p-4 hover:text-black hover:font-semibold hover:underline hover:underline-offset-4"><li>Github</li></a>
    </ul>

   </nav>

    <section id="sec1" className="sec1 bg-bg1 h-[100vh] w-full object-contain bg-no-repeat scroll-smooth " >
        <h1 className="text-black  text-[4.2rem] flex  relative top-[57%] left-[20%] w-[65vw] font-semibold font-outfit">Some Things I've Worked On</h1>

          <div className='flex relative top-[60%]'>

          <div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl  ">
            <a href="https://medium.com/@mishraadis1620/company-sales-analysis-dashboard-05b6b63e351b">  <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill hover:contrast-125" src="/images/proj_img1.png " alt='ii'/>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit ">Company Sales Dashboard</h1></a>
            </div>
            <div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl  ">
            <a href="https://medium.com/@mishraadis1620/electric-vehicles-market-size-analysis-using-python-2024-a61e163c45b7">  <img className="h-[60vh] w-[40vw] shadow-2xl rounded-xl object-fill hover:contrast-125" src="/images/proj_img2.png" alt='ii'/>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit">E-Vehicle Market Analysis</h1></a>
            </div>
            <div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl  ">
            <a href="https://medium.com/@mishraadis1620/impacts-of-remote-work-e6abafc08628">  <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125 " src="/images/proj_img9.png" alt='ii'/>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit">Impact of Remote </h1>
              <h1 className=" font-bold text-black text-3xl text-center font-outfit"> Work</h1></a>
            </div>
          <div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl  ">
           <a href="https://medium.com/@mishraadis1620/zomato-sales-analysis-951693f858ce"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125" src="/images/proj_img4.png" alt='ii'/>
            <h1 className=" font-bold text-black text-3xl text-center font-outfit">Zomato Sale Analysis Dashboard</h1></a>
          </div>
        </div>


        </section>


    <section id="sec2" className="sec2 h-[110vh] w-full ">
    <div className='flex relative top-[43%]'>

<div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl  ">
   <a href="https://medium.com/@mishraadis1620/model-dataset-dashboard-324872c782c8"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125" src="/images/proj_img5.png" alt='ii'/>
    <h1 className=" font-bold text-black text-3xl text-center font-outfit">Model Dataset Dashboard</h1></a>
  </div>
  <div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl  ">
   <a href="https://medium.com/@mishraadis1620/healthcare-cost-analysis-3c1c8cd7cf6c"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125" src="/images/proj_img7.png" alt='ii'/>
    <h1 className=" font-bold text-black text-3xl text-center font-outfit">Healthcare Cost Analysis</h1></a>
  </div>
  <div className="h-[70vh] w-[22vw] mx-[20px]  rounded-xl  ">
    <a href="https://medium.com/@mishraadis1620/flipkart-reviews-sentiment-analysis-73b0dc632c77"><img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125" src="/images/proj_img8.png" alt='ii'/>
    <h1 className=" font-bold text-black text-3xl text-center font-outfit">Flipkart Review Sentimental Analysis</h1></a>
  </div>
<div className="h-[70vh] w-[22vw]  mx-[20px] rounded-xl  ">
 <a href="https://github.com/aditi1620/AI-Attorney"> <img className="h-[60vh] w-[38vw] shadow-2xl rounded-xl object-fill  hover:contrast-125" src="/images/proj_img3.png" alt='ii'/>
  <h1 className=" font-bold text-black text-3xl text-center font-outfit">Law-Homepage/Signup Page</h1></a>
</div>
</div>
        </section>


      <section id="certi" className='sec3 h-[100vh] w-full'>
      <h1 className="text-black  text-[80px] relative top-[12%] left-[35%] w-[15vw] font-bold font-outfit">Certificate</h1>
      <marquee scrollamount="11" behavior="alternate" className=" relative top-[16%] bg-[#212121] border-b-2 border-t-2 border-slate-600 shadow-2xl shadow-gray-600 h-[60vh]" >
              <div className='flex gap-8 h-[50vh] pt-8'>

              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img3.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img4.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img3.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img6.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img5.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img7.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img9.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img10.jpg" alt='ii'/>
              <img className="h-[50vh] w-[38vw] shadow-2xl rounded-xl" src="/images/img2.jpg" alt='ii'/>
              </div>
     
      </marquee>
      </section>

      <section id="About" className='sec4 h-[125vh] w-full flex'>
            <div className="resume_sec w-[50vw] ">
              <img src="/images/DA_resume_pg1.jpg" className="w-[45vw] h-[120vh] relative left-[4%] shadow-2xl " alt="imgresume"  />
              </div>
              <div className="about_sec relative w-[50vw]">
                <h1 className='"text-black  text-[80px] relative  left-[13%] w-[15vw] font-bold font-outfit'>Resume/About</h1>
              <img src="/images/About sec.png" className="w-[45vw]  z-[-10] h-[90vh] relative left-[4%]  shadow-2xl rounded-2xl"  alt="imgabout" />
              <a href="https://github.com/aditi1620/MyResume"><button className="cursor-pointer text-lg absolute right-[18.5%] top-[72.8%] transition-all bg-blue-500 text-white px-10 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[8px] active:border-b-[4px] active:brightness-90 active:translate-y-[2px] font-bold font-outfit"> My Full Resume</button>
</a>
              </div>

      </section>
       
        <footer className="h-[7vh] bg-[#24231d] flex text-white p-[9px] gap-[23rem]">
          <h1 className="text-lg font-semibold font-outfit">&copy;Copyright 2024, All rights reserved  </h1>
          <h1 className="text-lg font-semibold animate-pulse font-outfit">Thanks for visiting!</h1>
          <a href="https://mail.google.com/"><h1 className="text-lg font-semibold font-outfit">Contact:aditimishra1623@gmail.com</h1></a>
        </footer>
    </div>
  );
}

export default App;
