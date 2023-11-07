import React from 'react'
import { useState } from 'react';
import "./style.css"
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from '../Navbar';

// new set is a es6 and use to remove copy of array

const uniqueList = [
    ...new Set(Menu.map((curElem)=>{
    return curElem.category;
})
),"All",
]
console.log(uniqueList);

const Resturent = () => {
    
    const[menuData, setMenuData] = useState(Menu); 
    const [menuList, setMenuList] = useState(uniqueList)

    const fillterItem =(category) =>{

      if (category === "All"){
        setMenuData(Menu);
        return;
      }
      const updateList= Menu.filter((curElem)=> {
        return curElem.category === category;
      });
      setMenuData(updateList);
 
    }
    
    return (
    <>
     
      <Navbar fillterItem={fillterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Resturent
