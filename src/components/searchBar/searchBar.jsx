import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./searchBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../store/offers/offersSlice";

export default function SearchBar({ products }) {
  const [filteredData, setFilterdData] = React.useState([]);
  const [wordEntered, setwordEntered] = React.useState("");
  const [active, setActive] = React.useState(true);

  const dispatch = useDispatch();

  const handelFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setwordEntered(searchWord);

    const filteredProductName = products.filter((data) => {
      return (
        data.company.toLowerCase().includes(searchWord.toLowerCase()) ||
        data.productName.toLowerCase().includes(searchWord.toLowerCase()) ||
        data.countryOfManufacture
          .toLowerCase()
          .includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilterdData([]);
    } else {
      setFilterdData(filteredProductName);
      setActive(true);
    }
  };

  const closeSearch = () => {
    setFilterdData([]);
    setwordEntered("");
  };

  return (
    <>
      <div>
        <div className={styles.searchInputsdiv}>
          {/* ---------------------------------------- */}
          <input
            className={styles.searchinput}
            value={wordEntered}
            onChange={handelFilter}
            type="text"
            placeholder={"Search"}
          /> 
           <div className={styles.icons && styles.svg}>
            {filteredData.length === 0 ? (
              <SearchIcon fontSize="22" />
            ) : (
              <CloseIcon
                fontSize="23"
                onClick={closeSearch}
                className={styles.clearBtn}
              />
            )}
          </div>
        </div>
          {/* ---------------------------------------- */}

        {filteredData.length !== 0 && active && (
          <div
            style={{ top: "120%", width: "93.5%" }}
            className="list-group position-absolute"
          >
            {filteredData.slice(0, 6).map((item, index) => {
              return (
                <Link
                  onClick={() => {
                    setActive(false);
                    dispatch(selectProduct(item._id));
                    setwordEntered(item.company+' '+item.productName)
                  }}
                  style={{ color: "black", cursor: "pointer", padding: "0" }}
                  className="list-group-item list-group-item-action my-auto"
                  key={index}
                  to="/searchResult"
                >
                  <p className={styles.p}>
                    {" "}
                    <span style={{ fontWeight: "bold" }}>{item.company}</span>
                    {" " + item.productName}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
