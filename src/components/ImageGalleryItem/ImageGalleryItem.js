import s from './ImageGalleryItem.module.css'
import React, { PureComponent } from 'react'
import Modal from '../Modal'

class ImageGalleryItem extends PureComponent {
  state= {
    showModal: false,
  }

  takeLargePicture = e => {
    if (!e.target) {
      return;
    } else {
      this.setState({
        largeimage: e.target.attributes['largeimage'].value
      });
    }
    this.toggleModal();
  };
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  

  render() {
    const { src, alt, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li className={s.ImageGalleryItem}>
      <img
        onClick={this.toggleModal}
        src={src}
        alt={alt}
        className={s.ImageGalleryItemImage}
      />
      {showModal && (
        <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
      )}
      </li>
      //     {/* <>
      //   {pictures.map(picture => {
      //     return (
      //       <li key={picture.id} onClick={onToggle} className={s.ImageGalleryItem} >
      //         <img
      //           src={picture.webformatURL}
      //           alt={picture.tags[0]}
      //           className={s.ImageGalleryItem__image}
      //           largeimage={picture.largeImageURL}
      //         />
      //       </li>
      //     );
      //   })}
      // </> */}
  
    );
  };
}

export default ImageGalleryItem
  