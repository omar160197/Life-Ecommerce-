import styles from './CategoryCard.module.css'
const CategoryCard = (props) => {
  return (
    <>
      <div className="card" >
        <img src={props.image} className={styles.categoryimg} alt="category img" />
      </div>
    </>
  )
}

export default CategoryCard

