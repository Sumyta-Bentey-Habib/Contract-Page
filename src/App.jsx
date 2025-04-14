import "./App.css";
import ContractHeader from "./components/contract/ContractHeader";
import ContractFrom from "./components/contractfrom/ContractFrom";
import NavBer from "./components/navber/NavBer";
function App() {
  return (
    <>
      <NavBer></NavBer>
      <ContractHeader></ContractHeader>
      <ContractFrom></ContractFrom>
    </>
  );
}

export default App;
