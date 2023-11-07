import Application from "./application"

const user = {
    name: "ian",
    position: "Lead Instructor",
    hometown: "Suttons bay",
}


function UserDetails () {
    return(
        <>
        <Application />
        <ul id="about-me" style= {{listStyle: "none"}}>
           <li className="about-me-item">Name: {user.name}</li>
           <li className="about-me-item">Position: {user.position}</li>
           <li className="about-me-item">Hometown: {user.hometown}</li>
        </ul>
        </>
    )
}

export default UserDetails