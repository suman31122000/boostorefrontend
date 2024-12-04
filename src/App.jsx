// import Landing from "./landing";
// import Books from "./books";
// import Landing1 from "./landing1";
// import Contact from "./contact";
// import Trendbooks from "./trendbook";
// import Otherbooks from "./otherbooks";
// import Reviews from "./reviews";
// import Body from "./body";
// import National from "./national";
import { BrowserRouter } from "react-router-dom";
import Server from "./router";
// import AddBookForm from "./addbooks";
import UpdatePage from "./adminsPage/updatePage";

const App = () => {
  return (
    <BrowserRouter>
       <Server/>
    </BrowserRouter>
  );
}

export default App;
