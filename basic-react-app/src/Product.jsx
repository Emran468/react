import "./Product.css"

const Product = ({title, price, features}) => {
//   let discount=price>25000 ?"price is of 10%":"price is of 5%";
// let styles={
//     color:"red",
//     backgroundColor:"black"
// }
let discount=price>25000;
let styles={ backgroundColor:discount ? "green":" "};

  return (
  <>
  <div className="product" style={styles}>
    <h1>{title}</h1>
 
    <p>{discount? <p>discount is of 10</p>:<a href="/">Discount want go to the page</a>}</p>
    
    </div>
  </>
  )
}

export default Product