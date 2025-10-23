import React from "react";
import Products from "./Components/Products";
import phone from "./assets/iphone.png";
import lap from "./assets/laptop.png";
import tab from "./assets/tab.png";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
import ProductList from "./Components/ProductList";

const App = () => {
  let a = 10;
  let arr = [1, 2, 3, 4, 5];
  let obj = { batch: "FSD-WD-B-33", mode: "Weekday", mentor: "Rupan" };
  let arrObj = [
    {
      name: "Iphone",
      price: "$899",
      desc: "This is Iphone 13 pro",
      image: phone,
    },
    {
      name: "Laptop",
      price: "$1000",
      desc: "This is Azsus Laptop",
      image: lap,
    },
    {
      name: "Tab",
      price: "$499",
      desc: "This is Ipad Pro",
      image: tab,
    }
  ];

  return (
    <>
      {/* <Products name="Iphone" price="$899" desc="This is Iphone 13 pro" image={phone}/>
        <Products name="Laptop" price="$1000" desc="This is Azus Laptop" image={lap}/>
         <Products name="Tab" price="$499" desc="This is Ipad pro" image={tab}/> */}
         {/* <CompA a={a}/> */}
         {/* <CompB obj={obj}/> */}
         {/* <CompC arr={arr}/> */}
         <ProductList  arrObj={arrObj}/>
         
    </>
  );
};

export default App;
