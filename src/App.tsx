import { Header } from "./components/Header/Header";
import "./App.css";
import { UserInformation } from "./components/UserInformation/UserInformation";

export function App() {
  return (
    <>
      <Header />
      <div className="wrapper-content">
        <UserInformation />
      </div>
    </>
  );
}
