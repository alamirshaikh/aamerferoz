 
import About from './About'
import './App.css'
import Contact from './Contact'
import Experiance from './Experiance'
import Intro from './Intro'
import Footer from './component/Footer'
import Project from './Project'
import './All.css'
import Navbar from './component/Navbar'
import SocailMedia from './component/SocialMedia'

function App() {
   
  return (
    <>
      <div>
        <Navbar></Navbar>
        
    <Intro></Intro>
    <About></About>
    <Project></Project>
    <div className='row mt-4'>
                    <div className="col-12">
                      
        <h1  className="sampo" >&lt;h1&gt;Contact ME&lt;/h1&gt;</h1>
                        <SocailMedia  />
                    </div>
                </div>
                

                <Footer></Footer>
 
   </div>
   
    </>
  )
}

export default App
