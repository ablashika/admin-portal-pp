import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// import { Outlet } from "react-router-dom";
import Router from "./route/Routes.tsx";
function App() {
  return (
    <>
      {/* <Outlet /> */}
      <Router />
    </>
  );
}

export default App;

