import github from "../media/githubIcon.png"; 
import linkedin from "../media/linkedin.png";


function Footer() {
  return (
    <div className="Footer" >
      <div className="git" > 
        <a alt="git" rel="noopener noreferrer" target="_blank" href="https://github.com/markelld">
          <img src={github} /> 
        </a>
      </div>
      <div className="linkedin"> 
        <a alt="linkedin" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/markell-dehaney-340a60105/">
          <img src={linkedin} />
        </a>
      </div>
    </div>  
  )
} 




export default Footer; 

