import React from 'react';
import Products from './Components/Products';
import phone from "./assets/iphone.png";
import lap from "./assets/laptop.png";
import tab from "./assets/tab.png";

const App = () => {
  
  return (
    <div>
       <Products name="Iphone" price="$899" desc="This is Iphone 13 pro" image={phone}/>
        <Products name="Laptop" price="$1000" desc="This is Azus Laptop" image={lap}/>
         <Products name="Tab" price="$499" desc="This is Ipad pro" image={tab}/>
    </div>
  );
};

export default App;