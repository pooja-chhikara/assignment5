import City  from "./City"
import { Cuisines } from "./Cuisines"
import { Restaurant } from "./RestrauantL"
import { CityList } from "../utils/cityData"
export const Footer=()=>{

    return(
        
        <div className="footer">
            <div className="footer1">
            
            <h3>
                Best Places To eat Across Cities
            </h3>
            <div>
       { CityList.map((c)=>{
       //console.log(c.text);
       
        <City cityData={c} cityText={c.text} citylink={c.link} />
        })
    }
   
            </div>
           
        </div>
        <div className="footer2">
            
            <h3>
                Best Cuisine near Me
            </h3>
        
        </div>
        <div className="footer3">
            
            <h3>
                Explore Every Restraurant Near Me
            </h3>

        </div>
        </div>
    )
}