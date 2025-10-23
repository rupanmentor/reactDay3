import React from "react";

const ArrayMethods = () => {
  const users = ["John", "Doe", "Alice", "Smith", "Adam", "Jack", "Shoe"]; //7

  const addUser = () => {
    const ind = users.push("Sparrow");
    console.log(ind);
    console.log("Add User", users[ind - 1]);
    users.forEach((ele) => console.log(ele));

    const userIndex = users.indexOf("Daniel");

    if (userIndex === -1) {
      console.log("User is not in the array");
      const lastEle = users.push("Daniel");
      console.log(lastEle);
      console.log("Add user", users[lastEle - 1]);
      users.forEach((ele) => console.log(ele));
    }
  };

  const removeUser = () =>{
     //pop
     const rem = users.pop();
     //console
     console.log("remove user",rem);
     //foreach
      users.forEach((ele) => console.log(ele));
  }

  const sliceUser = () =>{
    //slice
    const sli = users.slice(1,4)
    //console
    console.log(sli);
    
  }
  
  const spliceUser = ()=>{
    //splice
    const spli = users.splice(3,2,"raja","rani")
    //splice console
    console.log(spli);
    //users console
    console.log(users);
    
  }

  return (
    <>
      <h1>Array Methods</h1>
      <ul>
        {users.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
            </div>
          );
        })}
      </ul>
      <button onClick={addUser}>Add</button>
      <button onClick={removeUser}>Remove</button>
      <button onClick={sliceUser}>Slice</button>
      <button onClick={spliceUser}>Splice</button>
    </>
  );
};

export default ArrayMethods;
