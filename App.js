
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

import Signup from "./Components/Signup";
import Connect from "./Components/Verif";
import Register from "./Components/Register";
import Profile from './Components/Profile/Profile'
import Forget from './Components/Forget'
import Map from './Components/Map'
import Home from './Components/homePage/Home';
import Verif from "./Components/Verif";
import Login from './Components/Login';
import Reset from './Components/Reset';
import Init from './Components/Init'


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Init} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/lieu" component={Map} />
            <Route exact path="/home" component={Home} />
          
            <Route  path="/verif" component={Verif} />
            
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/Forget" component={Forget} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});