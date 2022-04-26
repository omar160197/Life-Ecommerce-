import Container from "@mui/material/Container";
import Slider from "../../components/Slider/Slider";
import Draft from "../../components/Draft/draft";
import SliderComponent from "../../components/offers/offersSlider";
import OffersDraft from "../../components/offers/offersSingleDraftGrid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDiscounts } from "../../store/offers/offersSlice";
import { getProducts } from "../../store/product/productSlice";
import { getTotals } from "../../store/cart/cartSlice";
import CategoryDraft from "../../components/categoryDraft/CategoryDraft"

const Home = () => {
  const { discounts } = useSelector((state) => state.discounts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscounts());
    dispatch(getProducts());
    dispatch(getTotals());
    console.log("first");
  }, []);

  const offer =
    discounts &&
    discounts.filter((item)=>{
      return item.discountAmount > 0  
    }).map((item, index) => {
      return (
        <div key={index}>
          <Container>
        
            <Container>
              <OffersDraft
                discountId={item._id}
                colorStyle={item.style.fontColor}
                textColor={item.style.layoutColor}
              />
            </Container>
            <Container>
              <SliderComponent
                discountId={item._id}
                colorStyle={item.style.fontColor}
                textColor={item.style.layoutColor}
              />
            </Container>
          </Container>
        </div>
      );
    });

  return (
    <>
      <Slider />
      <Container sx={{ marginY: 5}}>  
       <CategoryDraft/>
      </Container>

      {offer}

      
      
    </>
  );
};

export default Home;
