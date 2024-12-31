import { useState } from "react";
import App from "./App";

const Main = ()=>{
    const [showApp, setShowApp] = useState(true);
      return(
        <>
           <div>
      <button onClick={() => setShowApp(!showApp)}>
        {showApp ? 'Hide App' : 'Show App'}
      </button>
      {showApp && <App />}
    </div>
        </>
      )
}

export default Main