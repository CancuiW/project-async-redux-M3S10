import React from 'react';
import { connect } from 'react-redux';
import GifList from './components/GifList'
import GifForm from './components/GifForm';

import './App.css';


function App(props) {
  
  const {loading,error}=props
  

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm />
      {error && <h3 style={{color:'red'}} >{error}</h3>}

    {
      loading? <h3>We are loading....</h3>
             :<GifList  />
    }
    </div>
  );
}
const mapStateToProps=state=>{
  return{
    loading:state.loading,
    error:state.error
  }

}

export default connect(mapStateToProps)(App);