import { Header } from "./components/Header/Header";
import "./App.css";
import { UserInformation } from "./components/UserInformation/UserInformation";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  return (
    <>
      <Header />
      <div className="wrapper-content">
        <UserInformation />
      </div>
      <SearchBar/>
    </>
  );
}
