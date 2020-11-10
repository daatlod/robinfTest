import React, { Component } from 'react';
import axios from 'axios';


import Sidebox from './components/SideBox/SideBox';
import ContentPage from './containers/ContentPage/ContenPage';


class App extends Component {

  state={
    login: true,
    errorLogin: false,
    detail:false,
    users: [],
    stores: [],
    detailContent: {
      products:[]
    },
  }

  componentDidMount () {
    axios.get('https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json')
          .then(resp => {
              //console.log(resp);
              this.setState({users: resp.data.response.users, stores: resp.data.response.stores });
          });
  }

  openDetailFunc = (evt, key) => {
    evt.preventDefault();
    const storeDetail = this.state.stores[key];
    this.setState({detailContent: storeDetail });
    this.setState({detail:true});
  }
  closeDetailFunc = (evt) => {
    evt.preventDefault();
    this.setState({detail:false});
    this.setState({detailContent: { products:[]} });
  }

  logInFunc= (evt) => {
    evt.preventDefault();
  
    let nameUser = evt.target.elements.username.value;
    let passUser = evt.target.elements.password.value;
    let checkUser = false;

    Object.keys(this.state.users).forEach(key => {
      if( (nameUser === this.state.users[key].name) && (passUser === this.state.users[key].password) ){
        checkUser = true;
      }
    });

    if(checkUser){
      this.setState({login:false});
    }else{
      this.setState({errorLogin:true});
    }
  }

  removeErrorLogin = () =>{
    this.setState({errorLogin:false});
  }

  logOutFunc= (evt) => {
    evt.preventDefault();
    this.setState({login:true});
    this.setState({detail:false});
    this.setState({detailContent: { products:[]} });
  }


  render() {
    return (
      <main className="row">
        <Sidebox loginScreen={this.state.login} loginInfo={this.state.users} closeDetail={this.closeDetailFunc} />
        <ContentPage 
            loginScreen={this.state.login} 
            errorLogin={this.state.errorLogin} 
            removeErrorLogin={this.removeErrorLogin}
            logInPage={this.logInFunc} 
            logOutPage={this.logOutFunc} 
            storesInfo={this.state.stores} 
            detailScreen={this.state.detail}              
            openDetail={this.openDetailFunc} 
            closeDetail={this.closeDetailFunc} 
            detailContentPage={this.state.detailContent}  
        />
      </main>
    );
  }
  
}

export default App;