import './App.css';
import Header from "./common/Header";
import Balance from "./components/Balance";
import TxHistory from "./components/TxHistory";
import AddTx from "./components/AddTx";

function App() {
  return (
      <div className="App">
        <Header value={"Expense Tracker"}/>
        <div className={"container"}>
          <Balance/>
          <TxHistory/>
          <AddTx/>
        </div>
      </div>
  );
}

export default App;
