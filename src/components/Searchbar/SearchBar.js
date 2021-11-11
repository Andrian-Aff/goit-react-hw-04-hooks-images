import {useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SearchBar.module.css';

export default function SearchBar({onSubmit}) {
    const[queryValue, setQueryValue] = useState('')

   const handleRequestChange = e =>  {
    setQueryValue(e.currentTarget.value.toLowerCase())
   } 

   const handleOnSubmit = evt => {
    evt.preventDefault();
    if(queryValue.trim()==='') {
        return toast('Input your request');
        
    }
    onSubmit(queryValue);
    setQueryValue('');
}

// handleOnSubmit = evt => {
//     evt.preventDefault();
//     if(this.state.queryValue.trim()==='') {
//         return toast('Input your request');
        
//     }
//     this.props.onSubmit(this.state.queryValue);
//     this.setState({queryValue: ''});
// }

    return(
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={handleOnSubmit}>
                <button type="submit" className={s.SearchForm__button}>
                    <span className={s.SearchForm__button__label}>Search</span>
                </button>
                <input
                className={s.SearchForm__input}
                type="text"
                autoComplete="off"
                autoFocus
                value={queryValue}
                placeholder="Search images and photos"
                onChange={handleRequestChange}
                />
            </form>
        </header>
    )
}
