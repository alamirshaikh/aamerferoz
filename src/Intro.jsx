import './index.css';
import  '../public/back.jpg';
import './All.css'
const Intro = () => {
    return (
        <div  className="intro">
            <div className="container   ">
                <div className='row mt-10'>
                    <div className='col-md-8'>
                <h2 className="myself">Hi 👋,my name is</h2>
                <h1 className='title-name' >AAMER  FEROZ</h1>
                <h2 className='prof' >I'm a <spam className="name">.NET Developer</spam></h2>
                <p className='desc' >I am a self-taught back-end developer specializing in C#. My passion lies in providing well-tested and maintainable code, ensuring robust server-side functionality, and delivering seamless user experiences through efficient and scalable solutions using the latest technologies.</p>
                    </div>



<div className='col-md-4'>

<div className='profile'>
 <img src='public/profile.png' alt='profile' className='profile-i' />

</div>

</div>

                </div>
    

                <div className='row'>

 <div className='col-md-6'>
<div className='social-media'>
 <a href='https://www.linkedin.com/in/aamer-feroz/' target='_blank' rel='noreferrer'> <i className='fab fa-linkedin'></i></a>
 <a href='https://github.com/aamerferoz' target='_blank' rel='noreferrer'> <i className='fab fa-github'></i></a>
 <a href='https://twitter.com/aamerferoz' target='_blank' rel='noreferrer'> <i className='fab fa-twitter'></i></a>
 <a href='https://www.instagram.com/aamerferoz/' target='_blank' rel='noreferrer'> <i className='fab fa-instagram'></i></a>
</div>

 </div>

                </div>


<div className='row mt-2'>
    <div className='col-md-6'>
    <div className="touch-resume">
    <button className='touch' >Get in Touch</button>
<button className='resume' >Resume</button>
    </div>


    </div>

</div>

            </div>
        </div>
    );
}

export default Intro;
