import './App.css';
import React, {PureComponent } from 'react'
import { ToastContainer } from 'react-toastify';
import SearchBar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
// import Modal from './components/Modal'
import LoaderPend from "./components/Loader";
import Button from './components/Button'
import pixabayApi from './components/pixabayApi';
import Error from './components/Error'


class App extends PureComponent {
state= {
  error: null,
  queryValue: '',
  pictures:[],
  page:1,
  status: 'idle'
}
// shouldComponentUpdate(nextProps, nextState) {
//   return nextState.state.id !== this.state.id
// }
handleSearchOnSubmit= value => {
  // console.log('queryValue:', value)
  this.setState({queryValue: value,
    page:1, pictures:[]})
  };
  
componentDidUpdate(prevProps, prevState) {
  const prevValue = prevState.queryValue ;
  const nextValue = this.state.queryValue;
      if(prevValue !== nextValue ) {
          // || prevState.page !== this.state.page
          this.setState({ status: 'pending'});
          this.renderPictures();
  }
}

renderPictures = () => {
  const { page, queryValue } = this.state;

  pixabayApi.fetchPictures(queryValue, page)
    .then(response =>
      this.setState(prevState => ({ 
          pictures: [...prevState.pictures, ...response.hits],
          page: prevState.page + 1,
          status: 'resolved'
       }))
    )
    .catch(error => this.setState({ error,  status: 'rejected'}))
};

render() {
  const { pictures, error, status} = this.state;
  // const{onOpen} = this.props

  return (
    <div className="App">
      <SearchBar onSubmit={this.handleSearchOnSubmit}/>
      <ToastContainer autoClose={3000} />
    
      {status === 'idle'&& (
        <p className="welcomeText" >Input your query</p> )
      }

      {status === 'pending' && (<LoaderPend/>)  
      }

      {status === 'rejected' && (
          <Error message={error.message}/>)
      }

      {status === 'resolved' && (
        <>  
          <ImageGallery 
            pictures={pictures}
            // onOpen={this.takeLargePicture}
          /> 
          <Button onLoadMore={this.renderPictures} />
        </>)}
    </div>
  );
  }
}



export default App;
