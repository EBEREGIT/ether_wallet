import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <Transactions />
    </div>
  );
}

export default App;
