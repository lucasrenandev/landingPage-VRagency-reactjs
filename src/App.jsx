import logoImg from "./assets/logo.png"
import mainImg from "./assets/main-img.png"
import arrowImg from "./assets/arrow.png"
import dotsImg from "./assets/dots.png"
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <a href="/">
          <img className="logo" src={logoImg} alt="Logo" />
        </a>

        <nav>
          <ul className="nav-list">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">VR News</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <main className="content-box">
          <h1>VR Virtual</h1>
          <div className="buttons">
            <button type="button">Shop now</button>
            <button type="button">See offers</button>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit. Animi, voluptates officiis.</p>
        </main>

        <figure className="image-box">
          <img src={mainImg} alt="Main image" />
        </figure>

        <figure className="dots dots1">
          <img src={dotsImg} alt="Dots image" />
        </figure>

        <figure className="dots dots2">
          <img src={dotsImg} alt="Dots image" />
        </figure>

        <div className="side">
          <p>Live streaming</p>
          <img className="arrow" src={arrowImg} alt="Arrow" />

          <div className="social-icons">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-tiktok"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
      </section>
    </>
  )
}