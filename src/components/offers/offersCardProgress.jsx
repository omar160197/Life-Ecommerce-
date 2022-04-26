export default function SkillsProgress({numOfProductsThatReduced,maxNumOfProducts}) {
  
  let leftItems=maxNumOfProducts-numOfProductsThatReduced;
  let persntage=(leftItems/maxNumOfProducts) *100

    return (        
    <div> 
        <p>{`${leftItems} Items Left`}</p>
        <div className="progress" style={{height:"8px",width:"100%",marginLeft:"auto",marginRight:"auto"}}>
          <div
            className={`progress-bar ${leftItems<5?'bg-danger':'bg-warning'}`}
            role="progressbar"
            style={{width: `${persntage}%`}}
            aria-valuenow={persntage}
            aria-valuemin="0"
            aria-valuemax={`${maxNumOfProducts}`}
          >
          </div>
        </div>
      </div>);
  }
  