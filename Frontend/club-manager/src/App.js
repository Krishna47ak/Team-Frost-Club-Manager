import { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./screens/Home";
import Search from './screens/Search'
import SignIn from "./screens/SignIn.js";
import SignUp from "./screens/Signup.js";
import Profile from './screens/Profile';
import EditClub from "./screens/EditClub";
import Footer from "./components/Footer/footer.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchUser } from "./store/actions/auth";

function App() {
  useEffect(() => {
    store.dispatch(fetchUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/profile" element={<Profile/>} />
          {/* <Route exact path="/club-profile" element={<ClubProfile/>} /> */}
          <Route exact path="/edit-club" element={<EditClub/>} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
