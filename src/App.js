import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      <Preloader />
    } else {
      return (
        <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer />

            <Navbar />

            <div className='app-wrapper-content'>
              <Routes className='app-wrapper-content'>
                <Route path='/dialogs/*' element={<DialogsContainer />} />
                <Route path='/profile/:profileId/*' element={<ProfileContainer />} />
                <Route path='/users/*' element={<UsersContainer />} />
                <Route path='/news/*' element={<News />} />
                <Route path='/music/*' element={<Music />} />
                <Route path='/settings/*' element={<Settings />} />
                <Route path='/login/*' element={<Login />} />
              </Routes>
            </div>
          </div>

        </BrowserRouter>);
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose( /*withRouter,*/
  connect(mapStateToProps, { initializeApp }))(App);
