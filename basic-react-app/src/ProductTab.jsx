

import Product from "./Product"
const ProductTab = () => {

    // let options=[ <li>"Hi-tech"</li>,<li>"Low-tech"</li>,<li>"Mid-tech"</li>];
  return (
 <>
   
    <Product title="Mobile" price={24100} />
    <Product title="Laptop" price={35000}/>
    <Product title="Tab" price={32500}/>
 </>
  )
}

export default ProductTab