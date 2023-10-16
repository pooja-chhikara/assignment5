
 const City=(props)=>{
    const {cityData,cityText,citylink}=props
    console.log(props)
    return(
        <div className="f-con">
            <div className="eat-cities">
               <a href={citylink}>
                <h3 className="value">
        
                {cityText}
                </h3>
               </a>

            </div>
        </div>
    )
}
export default City
