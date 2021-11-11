import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './SearchBar.module.css';

class SearchBar extends Component {
state = {
    queryValue: '',
}

handleRequestChange= e => {
    this.setState({queryValue: e.currentTarget.value.toLowerCase()});
};

handleOnSubmit = evt => {
    evt.preventDefault();
    if(this.state.queryValue.trim()==='') {
        return toast('Input your request');
        
    }
    this.props.onSubmit(this.state.queryValue);
    this.setState({queryValue: ''});
}

render() {
    return(
        <header className={s.Searchbar}>
            <form className={s.SearchForm} onSubmit={this.handleOnSubmit}>
                <button type="submit" className={s.SearchForm__button}>
                    <span className={s.SearchForm__button__label}>Search</span>
                </button>
                <input
                className={s.SearchForm__input}
                type="text"
                autoComplete="off"
                autoFocus
                value={this.state.queryValue}
                placeholder="Search images and photos"
                onChange={this.handleRequestChange}
                />
            </form>
        </header>
    )
}
}

export default SearchBar;