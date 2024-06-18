import Card from "./component/Card";
import  './component/Card.css'
const Project =()=>{
    return(

        <>
        <div className="Project">
 <div className="container">
 
        <h1  className="pr-title" >&lt;h1&gt;My Projects&lt;/h1&gt;</h1>



<div className="con-card">






        <Card 
                image="public/Project-Pics/roadman.JPG"
                title="Road Man"
                description="Road man is a Cross section road custruction surway report software to generating the excel report and design."
            />
                 <Card 
                image="public/Project-Pics/mr.retail.PNG"
                title="Mr.Retail"
                description="Mr.Retail is a Biling software for shops/and groswary store and electrical shop etc."
            />
            
            <Card 
                image="public/Project-Pics/Tesract.JPG"
                title="Tessrect"
                description="testrect is a static web site for a educational site"
            />
            
          
            
            
        </div>
        </div>
        </div>

        </>
    );
}

export default Project; 