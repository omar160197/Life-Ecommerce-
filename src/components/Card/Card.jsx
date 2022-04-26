const Card = (props) => {
    return ( 
        <>
        <div className="card mb-3" style={{ maxwidth: "200px" }}>
  <div className="row g-0">
    <div className="col-md-4 col-sm-6">
      <img  src={`${props.image}`}
            alt="" className="img-fluid rounded-start" style={{ width: "400px", height: "220px" }}/>
    </div>
    <div className="col-md-8 col-sm-6">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  </div>
</div>
     
      </>
     );
}
 
export default Card;