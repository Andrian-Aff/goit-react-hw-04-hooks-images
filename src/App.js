import './App.css';
import {useState, useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import SearchBar from './components/Searchbar'
import ImageGallery from './components/ImageGallery'
// import Modal from './components/Modal'
import LoaderPend from "./components/Loader";
import Button from './components/Button'
import pixabayApi from './components/pixabayApi';
import Error from './components/Error'

const Status ={
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [queryValue, setQueryValue] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);

  const handleSearchOnSubmit= value => {
    setQueryValue(value);
    setPage(1);
    setPictures([]);
  }

  useEffect(() => {
    if(!queryValue) { 
      return
     }
    setStatus(Status.PENDING);

      pixabayApi
        .fetchPictures(queryValue, page)
        .then(response => {
          setPictures(pictures=>[...pictures, ...response.hits]);
          setStatus(Status.RESOLVED)
          })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED)
        })
    }, [queryValue, page]);

    const onLoadMore = () => {
      setPage(prevState => prevState + 1);
    };

    return (
      <div className="App">
        <SearchBar onSubmit={handleSearchOnSubmit}/>
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
              // onOpen={ this.takeLargePicture}
            /> 
            <Button onLoadMore={onLoadMore} />
          </>)}
      </div>
    );
}
