import s from './ImageGalleryItem.module.css'
import { useState} from 'react'
import Modal from '../Modal'

export default function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const[showModal, setShowModal] = useState(false)
  
  const toggleModal = () => {
    setShowModal(ShowModal => !ShowModal )
  }

    return (
      <li className={s.ImageGalleryItem}>
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className={s.ImageGalleryItemImage}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
      </li>
    );
}

  