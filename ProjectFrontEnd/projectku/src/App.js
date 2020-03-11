// import React from "react";
import React, { Component } from "react";
import Header from "./components/header";
import "./App.css";
import "./index.css";
import { APIURL } from "../src/helper/apiurl";
import { connect } from "react-redux";
import { userLoginRepeat, cartProduk } from "./redux/actions";

// Tampilan User //
import Home from "./pages/home";
import Footer from "./components/footer";
import MenuAwal from "./components/menuawal";
import NotFound from "./components/notfound";
import Marchendise from "./pages/marchendise";
import { Switch, Route } from "react-router-dom";

import MenuRoadbike from "./pages/menuRoadbike";
import MenuMountain from "./pages/menuMountain";
import MenuBmx from "./pages/menuBmx";
import MenuDaily from "./pages/menuDaily";
import MenuEbike from "./pages/menuEbike";
import MenuApparels from "./pages/menuApparels";
import MenuSpareParts from './pages/menuSpareParts'
import MenuDetails from "./pages/menuDetails";
import MenuDetails2 from './pages/menuDetails2'
import MenuDetails3 from './pages/menuDetails3'
import MenuDetails4 from './pages/menuDetails4'
import MenuDetails5 from './pages/menuDetails5'
import MenuDetails6 from './pages/menuDetails6'
import MenuDetails7 from './pages/menuDetails7'

// User Controller //
import Cart from "./pages/cart";
import SignIn from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpass";

// Admin Controller //
import ManageAdmin from "./pages/manageAdmin";
import axios from "axios";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    var id = localStorage.getItem("userid");
    if (id) {
      axios
        .get(`${APIURL}auth/userLoginn/${id}`)
        .then(res => {
          this.props.userLoginRepeat(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    this.setState({ loading: false });
  }

  render() {
    var id = localStorage.getItem("userid");
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    // {
    //   this.props.cartProduk(id)
    // }
    return (
      <div>
        <Header />
        <Switch>
          <Route path={"/"} exact>
            <MenuAwal />
            <Home />
          </Route>

          {/* Tampilan User */}
          <NotFound exact path={"/not-found"} component={NotFound} />
          <Route exact path={"/cart"} component={Cart} />
          <Route exact path={"/marchendise"} component={Marchendise} />
          <Route exact path={"/menuroadbike"} component={MenuRoadbike} />
          <Route exact path={"/menumountain"} component={MenuMountain} />
          <Route exact path={"/menubmx"} component={MenuBmx} />
          <Route exact path={"/menudaily"} component={MenuDaily} />
          <Route exact path={"/menuebike"} component={MenuEbike} />
          <Route exact path={"/menuapparels"} component={MenuApparels} />
          <Route exact path={"/menuspareparts"} component={MenuSpareParts} />
          <Route exact path={"/menu-details/:detailId"} component={MenuDetails} />
          <Route exact path={"/menu-details2/:detailId"} component={MenuDetails2} />
          <Route exact path={"/menu-details3/:detailId"} component={MenuDetails3} />
          <Route exact path={"/menu-details4/:detailId"} component={MenuDetails4} />
          <Route exact path={"/menu-details5/:detailId"} component={MenuDetails5} />
          <Route exact path={"/menu-details6/:detailId"} component={MenuDetails6} />
          <Route exact path={"/menu-details7/:detailId"} component={MenuDetails7} />

          {/* User Controller */}
          <Route exact path={"/login"} component={SignIn} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/forgotpass"} component={ForgotPassword} />

          {/* Admin Controller */}
          <Route exact path={"/manageadmin"} component={ManageAdmin} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    Login: state.auth.login
  };
};

export default connect(MapStateToProps, { userLoginRepeat })(App);
