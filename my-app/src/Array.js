import React from 'react'

const Array = () => {

    // for Example 1
const names = ["Apple","Banana","Orange","Guava","coconut"];

  // For Example 2 it is in this format because data will come from api format.
  const products = [
    {
    id:1,
    name:"product 1",
    price:10,
  },
    {
    id:2,
    name:"product 2",
    price:20,
  },
    {
    id:3,
    name:"product 3",
    price:30,
  },
];

// Example 3
const Fruits =["Mango","Apple","Orange","papaya","black-berry"];
const FruitItems = Fruits.map((fruit, index)=> <li key={index}>{fruit}</li>);

return (
      
    <div  className='Array'>
     <h1>This is array method</h1>


     {/* Example1  */}
     <ul>
        {names.map((name,index)=>(
            <li key={index}>{name}</li>
        ))}
     </ul>
     {/* Example 2 */}
      <ul>
        {products.map((product)=>(
            <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>

      {/* Example 3 */}
      <ul>{FruitItems}</ul>
    </div>
  )
}

export default Array