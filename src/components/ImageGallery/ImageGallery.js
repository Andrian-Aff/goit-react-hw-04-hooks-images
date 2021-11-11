import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem'

export default function ImageGallery({pictures}) {

    return(
        <ul className={s.ImageGallery}>
            {pictures.map((picture) => (
                <ImageGalleryItem
                key={picture.id}
                src={picture.webformatURL}
                alt={picture.tags}
                largeImageUrl={picture.largeImageURL}
                />
            ))}
        </ul>
    )
}
