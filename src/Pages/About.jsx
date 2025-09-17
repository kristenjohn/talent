import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {

  return (<>

   <div className="h-screen flex justify-center items-center bg-gray-100">
      <motion.div
        className="w-40 h-40 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold"
        initial={{ opacity: 0 }}       // start me invisible
        animate={{ opacity: 1 }}       // end me visible
        transition={{ duration: 4 }}   // 2 second me hoga
      >
        Fade In 🚀
      </motion.div>
    </div>
    console.log("About page");

<Button variant="contained" className="!mt-4">Hello world</Button>
<div className="h-96 w-full border-2 border-red-400 mt-10 flex flex-row">

<div className="h-96 w-full bg-blue-400 border-2 border-black overflow-y-scroll snap-y snap-mandatory">
<img src="https://picsum.photos/id/1011/800/400" alt="pic1" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1012/800/400" alt="pic2" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1015/800/400" alt="pic3" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1016/800/400" alt="pic4" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1020/800/400" alt="pic5" className="h-96 w-full object-cover snap-start" />

</div>


<div className="h-96 w-full bg-green-400 border-2 border-yellow-700 overflow-x-scroll snap-x snap-mandatory flex">
<img src="https://picsum.photos/id/1016/800/400" alt="pic4" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1020/800/400" alt="pic5" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1011/800/400" alt="pic1" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1012/800/400" alt="pic2" className="h-96 w-full object-cover snap-start" />
<img src="https://picsum.photos/id/1015/800/400" alt="pic3" className="h-96 w-full object-cover snap-start" />

</div>

</div>






 <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="w-40 h-40 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-bold"
        initial={{ opacity: 0, x: -200 }}   // starting point
        animate={{ opacity: 1, x: 0, rotate: 360, scale: 1.2 }}     // final point
        transition={{ duration: 1 }}        // animation speed
      >
        Hello 🚀
      </motion.div>
    </div>


    <motion.button
  className="px-6 py-3 bg-green-500 text-white rounded-xl font-bold"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  whileHover={{ scale: 1.2, rotate: 5 }}
  whileTap={{ scale: 0.9, rotate: -5 }}
  transition={{ duration: 0.5 }}
>
  Click Me 🚀
</motion.button>







  </>);
} ;      
export default About;