import s from './Button.module.css'
import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';

class Button extends Component {

  static propTypes = {
    onLoadMore: PropTypes.func.isRequired,
  };

  scroll = () => {
    this.props.onLoadMore();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <button onClick={this.scroll} className={s.Button} type="button">
        <span className={s.Button__label}>Load more</span>
      </button>
    );
  }
}

export default Button;
