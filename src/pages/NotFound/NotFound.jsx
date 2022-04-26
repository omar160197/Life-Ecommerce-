import img from "../../assets/bgNotFound.jpg";
import styles from './NotFound.module.css'
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate=useNavigate();
    return (
    <>
    <div className={styles.cont}>
    <img src={img} alt="Not Found" width={"100%"}/>
    <div className={styles.txt}>
        <h1>PAGE NOT FOUND! </h1>
                <h4>We can't seem to find the page you're looking for</h4>
                <button className=" btn btn-dark mt-3 text-center" onClick={()=>navigate("/")}>BACK TO HOME</button>
            </div>
            </div>
    </>
    );
}

export default NotFound;