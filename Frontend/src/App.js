import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import data from "./data";
import List from "./List";
function App() {
  const [randomData, setrandomData] = useState([]);
  const apiCall = async () => {
    console.log("hello");
    const { data } = await axios.get("http://localhost:5000/api/v1/auto");
    // const list = data.map((d) => console.log(d));

    setrandomData(data.member);
  };
  useEffect(() => {
    apiCall();
  }, []);
  // const getDate = () => {
  //   axios
  //     .get("http://localhost:5000/api/v1/auto")
  //     .then((res) => {
  //       console.log("yash varshney");
  //       console.log(res.data.member);
  //       setrandomData(res.data.member);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("yash");
  //   console.log(randomData);
  //   console.log("yash");
  // };

  console.log(randomData);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  
  // console.log(data);
  const newData = data.filter(
    (person) => person.day === dd && person.month === mm
  );
  const apiCheck=randomData.filter((e)=>{
    console.log(dd,e.day,mm,e.month);
 return e.day===Number(dd) && e.month ===Number(mm);
  } 
);
  console.log(apiCheck);
  console.log("yash vasrhney");
  // console.log(newData);
  // console.log(data);
  const [people, setPeople] = useState([]);

  return (
    <main>
      <section className="container">
        <h3> Birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople(apiCheck)}>check</button>
        {/* <button onClick={}>c</button> */}
      </section>
    </main>
  );
}

export default App;
