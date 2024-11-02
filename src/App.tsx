import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="flex flex-col xl:flex-row xl:place-items-center p-5 lg:p-10 min-h-screen gap-5 w-full xl:justify-center">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
