import img1 from "../../assets/dental1.jpg";
import img2 from "../../assets/dental2.jpg";
import img3 from "../../assets/dental5.jpg";
import img4 from "../../assets/dental4.jpg";
import styles from "./Newse.module.css"
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import {axios} from "axios";

const News = () => {
    const navigate = useNavigate()
//     useEffect(() => {
//         axios.get("https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4")
//           .then(res => {
//             const persons = res.data;
//           })
// })
    return ( 
        <>
             <div className={styles.parenNews}>
        <p className={styles.titleNews}> News</p>
            <div className="container mt-5 bt-5">
            <div className="row">
                {/* ------------1--------------- */}
                <div className="col-md-4">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img2} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                {/* -------------2-------------- */}
                <div className="col-md-4">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img3} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                {/* -------------3-------------- */}
                <div className="col-md-4">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img1} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                {/* --------------------------- */}
               
                {/* --------------------------- */}
                {/* --------------------------- */}
            </div>
        </div>
            </div>
            {/* -------------------------------------------------------------- */}
            <div className={styles.parenNews2}>
            <div className="container mt-5 bt-5">
            <div className="row">
                {/* ------------1--------------- */}
                <div className="col-md-6">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img4} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                {/* -------------2-------------- */}
                <div className="col-md-6">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img4} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
              
                {/* --------------------------- */}
               
                {/* --------------------------- */}
                {/* --------------------------- */}
            </div>
        </div>
            </div>

            <div className={styles.parenNews3}>
            <div className="container mt-5 bt-5">
            <div className="row">
                {/* ------------1--------------- */}
                <div className="col-md-4">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img4} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                {/* -------------2-------------- */}
                <div className="col-md-4">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img2} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                {/* -------------3-------------- */}
                <div className="col-md-4">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img1} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                {/* --------------------------- */}
               
                {/* --------------------------- */}
                {/* --------------------------- */}
            </div>
        </div>
            </div>
            {/* -------------------------------------------------------------- */}
            <div className={styles.parenNews4}>
            <div className="container mt-5 bt-5">
            <div className="row">
                {/* ------------1--------------- */}
                <div className="col-md-6">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img3} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                {/* -------------2-------------- */}
                <div className="col-md-6">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img4} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}> last New dental cources
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/`)}>View artical	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                {/* --------------------------- */}
               
                {/* --------------------------- */}
                {/* --------------------------- */}
            </div>
        </div>
            </div>
        </>
        
        
    
    
    );
}
 
export default News;