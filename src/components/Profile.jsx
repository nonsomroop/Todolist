import "./Profile.css";
import pic from "../assets/slamdunk.jpg"
function Profile(){
    return(
        <div className="layout">
            <img src={pic} alt="Profile"/>
            <h1 className="name">Natthanon Somroop</h1>
            <hr></hr>
        </div>
    );
} export default Profile;