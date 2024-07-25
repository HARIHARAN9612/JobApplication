import "./Land.css";
import image from "./Assests/Home background svg.svg"
function Land()
{
    return(
        <>
        <div className='desktopnav'>
            <h1 className="logo">JobHive</h1>
            <ul className="nav-links">
                <li>Home</li>
                <li>FindJobs</li>
                <li>Companies</li>
                <li>Reviews</li>
                <li>Contact</li>
            </ul>
            <button className="hire">Hire a job</button>
            <button>Login</button>
            <button>Signup</button>
        </div>
        <div className="Home">
         <div className="Hometext">
          <h1>Discover Your <br/> Dream job With<br/>  <span className='logo1'>JobHive</span></h1>
          <p>
           Discover top oppotunities with Jobhive,<br/>
           Connect with leading employers and <br/> take the next step in you carrer today.
          </p>
          <button>Apply </button>
<button className="hire">Hire a Talent</button>
         </div>
         <div className="pict">
            <img className="pic" src={image}></img>
         </div>
        </div>
        </>
     // Fields intterst
    )
}
export default Land;