import React from "react";
import ReactDOM from "react-dom/client"


function Info(){
  return (
    <div className="info">
        <img src="https://rarehistoricalphotos.com/wp-content/uploads/2022/06/albert-einstein-tongue-3.webp" alt="Einstein" />
    
        <h1>Albert Einstein</h1>
        
        <h4>Physicists &amp; Violinist</h4>
        
        <a href="https://en.wikipedia.org/wiki/Albert_Einstein">wikipedia.org</a>
    
        <div className="infoButton">
            <button className="white-btn"><i className="fa fa-envelope"></i>Email</button>
            <button className="blue-btn"><i className="fa fa-linkedin-square"></i>LinkedIn</button>
        </div>
    </div>
  )
}

function About(){
    return (
        <div className="section">
            <h1>About</h1>
            
            <p>
                Mizzen broadside chandler yard furl topsail bucko Blimey loaded to the gunwalls. Gold Road topsail code of conduct marooned plunder bilged shrouds gun port jack bounty.
             </p>
        </div>
    )
}

function Interests(){
    return (
        <div className="section">
            <h1>Interests</h1>
            
            <p>
                Fleet rope's end Davy Jones' Locker prow keel bilge rat. Measured fer yer chains ballast fathom ahoy.
             </p>
        </div>
    )    
}

function Footer(){
    return (
        <div className="footer">
            <a href="#"><i className="fa fa-twitter-square fa-2x"></i></a>
            <a href="#"><i className="fa fa-facebook-official fa-2x"></i></a>
            <a href="#"><i className="fa fa-instagram fa-2x"></i></a>
            <a href="#"><i className="fa fa-github-square fa-2x"></i></a>
        </div>
    )    
}


function App() {
    return (
    <div className="container">
     <Info />
     <About />
     <Interests />
     <Footer />
    </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);