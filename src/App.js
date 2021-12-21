import logo from "./logo.svg";
import "./App.css";

// Import Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// Import Hooks from React
import { useState, useEffect } from "react";

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";

/////////////////////////
// Style Object
/////////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px",
};

const button = {
  backgroundColor: "orange",
  display: "block",
  margin: "auto"
}

function App() {
   ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate()

  const url = "https://cap-bills-backend.herokuapp.com/bills/";

  // state to hold list of bills
  const [posts, setPosts] = useState([]);

   // an empty bill for initializing the create form
   const nullBill = {
    subject: "",
    details: "",
    date: "",
  }

  const [targetBill, setTargetBill] = useState(nullBill)

  //////////////
  // Functions
  //////////////
 // function to get list of bills from API
 const getBills = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data);
};

// function to add bills
const addBills = async (newBill) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBill),
  });


  //update the list of bills
  getBills()
}

// to select a bill to edit
const getTargetBill = (bill) => {
  setTargetBill(bill);
  navigate("/edit");
};

// update bill for our handlesubmit prop
const updateBill = async (bill) => {
  await fetch(url + bill.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bill),
  });

  //update our bills
  getBills();
};

const deleteBill = async (bill) => {
  await fetch(url + bill.id, {
    method: "delete"
  })

  getBills()
  navigate("/")
}









  //////////////
  // useEffects
  //////////////
  useEffect(() => {
    getBills()
  }, [])
  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      {/* <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1> */}

<h1 className="text-5xl font-bold underline" style={h1}>My Bills List</h1>
<Link to="/new"><button style={button}>Make new bill reminder</button></Link>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts}/>}/>
        <Route path="/post/:id" element={<SinglePost 
        posts={posts} 
        edit={getTargetBill}
        deleteBill={deleteBill}
        />} />
        <Route path="/new" element={<Form 
          initialBill={nullBill}
          handleSubmit={addBills}
          buttonLabel="Create a bill reminder"
        />} />
        <Route path="/edit" element={<Form
          initialBill={targetBill}
          handleSubmit={updateBill}
          buttonLabel="Update"
        />} />
      </Routes>
    </div>
  );
}

export default App;
