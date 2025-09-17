import Home from "./Pages/Home"
import {Provider} from 'react-redux'
import store from "./Pages/store";
import About from "./Pages/About";
import Talent from "./Pages/Talent";
import { BrowserRouter } from "react-router";

function App() {

  
  return (<>
      <Provider store={store}>
    <BrowserRouter>
   {/* <Home/> */}
   <Talent/>
   {/* <About/> */}
   </BrowserRouter>
   </Provider>
  </>)
}

export default App
