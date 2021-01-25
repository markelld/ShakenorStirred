import github from "./githubIcon.png"; 
import linkedin from "./linkedin.png";


function Footer() {
  return (
    <div className="Footer" >
      <div classname="git" > 
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/markelld">
          <img src={github} /> 
        </a>
      </div>
      <div classname="linkedin"> 
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/markell-dehaney-340a60105/">
          <img src={linkedin} />
        </a>
      </div>
    </div>  
  )
} 




export default Footer; 

{/* <div class="Footer">    
  <a rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/markelld"> 
      <img  class="github" src="githubIcon.png"  alt="Github" >
  </a>
</div> */}