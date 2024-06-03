import React,{useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Item/Item';



const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  // console.log(all_product);
  // console.log(props)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) =>{
          if(item.category === props.category)
          {
           return<Item key={i} id={item.id} name={item.name} old_price={item.old_price} image={item.image}/>
          }
          else{
            return null;
          }

        })}
      </div>
      
    </div>
  )
}

export default ShopCategory