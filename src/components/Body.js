import RestCard from './res';
import MindMenu from './menu';
import resList from '../utils/listData';
import TList from '../utils/mockData'
import { useState } from 'react';
import { Footer } from './Footer';
//{name,cuisine,rating,Eta} and use it like name , cuisine etc 



const Body=()=>{

//const {listOfRestraunant}=useState();
const [listOfRestraunant,setListOfRestraunant]=useState(resList);
//const [listOfRestraunant1,setListOfRestraunant1]=useState(resList);
const [searchData,setSearchData]=useState("")


let filterDData=(list)=>{
    // list1=list.filter(r=>(
    //     r.info.sla.deliveryTime<18
    //      ))
    //      console.log(list)
    //      setListOfRestraunant1(list1)


         list=list.filter(r=>(
            r.info.sla.deliveryTime<18
             ))
             setListOfRestraunant(list)
}

let filterData=(list)=>{
//filter logic or sorting algo
//console.log(list[0].info.sla.deliveryTime)

list=list.filter(r=>(
r.info.avgRating>4
 ))
 setListOfRestraunant(list)
//console.log(list)
//return list

}
let filterSearch=(text,list)=>{
    console.log(text.toLowerCase().trim())
    // text=text.toLowerCase().trim()
const  list1=   list.filter(val=>
   
val.info.name.toLowerCase().includes(text.toLowerCase())
    )
    console.log(list1)
    setListOfRestraunant(list1)

   
}

    return (
        <div className='body'>
            <div className='search'>
                <input className="input"
                placeholder='enter restaurant name here'
              
                onChange={(e)=>{setSearchData(e.target.value) ,console.log(searchData)}}
                value={searchData}
                >

                </input>
                <button className='search-btn' 
                onClick={()=>{filterSearch(searchData,listOfRestraunant)
                }}
                >
                    Search
                </button>
            </div>
            <div className='filter'>
                <button className='filter-btn' 
                onClick={()=>{filterData(listOfRestraunant)}}
                onMouseOver={()=>{
                    console.log("ya you can click here")
                }}
                >
                    Top Rated Restaurants </button>
           
            <button className='filter-btn' 
                onClick={()=>{filterDData(listOfRestraunant)}}
                onMouseOver={()=>{
                    console.log("ya you can click here")
                }}
                >
                    Early Delivery Restaurants </button>
                    </div>
            <div className='top'><b>What's On Your Mind</b>
            <div className='top-con'>
            {
                TList.map(v=>(
                    <MindMenu menuData={v} key={v.id} />
                ))
            }
            </div>
          </div>
            <div className='middle'>
                <b>Top Restraurants In Your Area For Online Delivery</b></div>
            <div className='res-con'>
              {listOfRestraunant.map(d=>(
                <RestCard resData={d} key={d.info.id} / >
              ))} 
            
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Body