export default function SkillsProgress({numOfProductsThatReduced,maxNumOfProducts,itemsLeft}) {
  
  // let updatedftItems = maxNumOfProducts-numOfProductsThatReduced;
  let percentage=(itemsLeft/maxNumOfProducts) *100
  // let persntage=(maxNumOfProducts) * (100/100)

    return (        
    <div> 
        <p>{`${itemsLeft} Items Left`}</p>
        <div className="progress" style={{height:"8px",width:"100%",marginLeft:"auto",marginRight:"auto"}}>
          <div
            className={`progress-bar ${maxNumOfProducts<(maxNumOfProducts * (5/100)) ?'bg-danger':'bg-warning'}`}
            role="progressbar"
            style={{width: `${percentage}%`}}
            aria-valuenow={itemsLeft}
            aria-valuemin="0"
            aria-valuemax={`${maxNumOfProducts}`}
          >
          </div>
        </div>
      </div>);
  }