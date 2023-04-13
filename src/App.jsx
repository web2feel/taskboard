import { useState } from "react";
import Board from "./Board";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import { data } from "./data";
function App() {
  const [taskData, setTaskdata] = useState(data);
  return (
    <div className="App">
      <Header />
      <Form setTaskdata={setTaskdata}/>
      <Board taskData={taskData} setTaskdata={setTaskdata} />
      <Footer />
    </div>
  );
}

export default App;
