import img1 from "../../assets/dental1.jpg";
import img2 from "../../assets/dental2.jpg";
import img3 from "../../assets/dental5.jpg";
import img4 from "../../assets/dental4.jpg";
import styles from './categoryDraft.module.css'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/category/categorySlice";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./categoryDraft.module.css"
const CategoryDraft = () => {
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);
  const disptach = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    disptach(getCategories());
  }, [disptach]);


  return (

    <>
      <div className="container conparentdreaft">
          <div className="row  ">
          <div className="col-md-6">
                  <div className={styles.parent}>
                    <div className={styles.grow}>
                      <div className={styles.pimage} >
                        <img src={img1} alt={"image"}loading="lazy" width="100%" height="100%"/>
                        <div className={styles.movingdiv}>
                          <h4 className={styles.textcatcard}>Tools
                            <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                          </h4>
                          <button className={styles.btncat} variant="contained" onClick={() =>
                            navigate(`/tools`)}>View All	&#8594;</button>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
          <div className="col-md-6">
         
            <div className={`${styles.parent} ${styles.parentmedia}`}>
                    <div className={styles.grow}>
                      <div className={styles.pimage} >
                        <img src={img2} alt={"image"}loading="lazy" width="100%" height="100%"/>
                        <div className={styles.movingdiv}>
                          <h4 className={styles.textcatcard}>Units
                            <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                          </h4>
                          <button className={styles.btncat} variant="contained" onClick={() =>
                            navigate(`/units`)}>View All	&#8594;</button>
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
                            
          <div className="container">
          <div className=" row mt-4">
              <div className="col-md-8">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img3} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}>Medicines
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/medicines`)}>View All	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
            <div className="col-md-4">
                    <div className={styles.parent}>
                      <div className={styles.grow}>
                        <div className={styles.pimage} >
                          <img src={img4} alt={"image"}loading="lazy" width="100%" height="100%"/>
                          <div className={styles.movingdiv}>
                            <h4 className={styles.textcatcard}>News
                              <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                            </h4>
                            <button className={styles.btncat} variant="contained" onClick={() =>
                              navigate(`/news`)}>View All	&#8594;</button>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
            </div>
            
        </div>

          
      
          </div>
       </div>
      


      {/*       
      <Grid container spacing={-12}>
        {categories && categories.map((item) => (
          <Grid
            item
            xs={6}
            
          >
            <div className={styles.parent}>
              <div className={styles.grow}>
                <div className={styles.pimage} >
                  <img
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    alt={item.name}
                    loading="lazy"
                    width="500px"
                    height="400px"
                  />
                  <div className={styles.movingdiv}>
                    <h4 className={styles.textcatcard}>This is {item.name} You Can See more Product By Clicking Here
                      <p className={styles.textpara}>Lorem ipsum dolor Lorem ipsum dolor sit amet.</p>
                    </h4>
                    <button className={styles.btncat} variant="contained" onClick={() =>
                      navigate(`/${item.name}`)}>View All	&#8594;</button>

                  </div>
                </div>



              </div>
            </div>
          </Grid>
        ))}
      </Grid> */}









    </>
  );
};

export default CategoryDraft;
