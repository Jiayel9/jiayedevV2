import '../css/Gallery.css'
import keshi from '../assets/img/gallery/keshi.webp'
import mtl from '../assets/img/gallery/mtl.webp'
import betterPhotographer from '../assets/img/gallery/betterphotographer.webp'
import sanfran from '../assets/img/gallery/sanfran.webp'
import sanfran2 from '../assets/img/gallery/sanfran2.webp'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2>Photo Gallery</h2>
        <div className="gallery">
          <img className="display-img" src={keshi} alt="keshi-concert" />
          <img className="display-img" src={mtl} alt="mtl" />
          <img className="display-img" src={betterPhotographer} alt="better photographer" />
          <img className="display-img" src={sanfran} alt="san francisco" />
          <img className="display-img" src={sanfran2} alt="san francisco 2" />
          <div className="display-img placeholder-img" />
        </div>
      </div>
    </section>
  )
}
