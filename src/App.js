import "./App.css";
import "./Component/style.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import Header from "./Component/OptionalComponent/Header";

function App() {
  return (
    <div className="App">
      {/* header Component (Optional) */}
      <Header />
      <div className="container-banner">
        {/* full name component */}
        <FullName />
        {/* profile photo component */}
        <ProfilePhoto />
        {/* address component */}
        <Address />
      </div>
    </div>
  );
}

export default App;
