import Image from "next/image";
import img from "../../public/images/rabbani.png";
export default function Home() {
  return (
    <div>
      <header class="container header active" id="home">
        <div class="header-content">
          <div class="left-header">
            <div class="h-shape"></div>
            <div class="image">
              {/* <img src={img} alt="img" /> */}
              <Image src={img} />
            </div>
          </div>
          <div class="right-header">
            <h1 class="name">
              Hi, I'm <span>Burhan Rabbani.</span>A Web Developer.
            </h1>
            <p>
              I'm a Web Developer, I love to create beautiful and functional
              websites. A highly skilled front-end website developer with two
              years of working experience in the software industry. I am
              proficient in HTML, CSS, JavaScript, Bootstrap , React js
            </p>
            <div class="btn-con">
              <a href="" class="main-btn">
                <span class="btn-text">Download CV</span>
                <span class="btn-icon">
                  <i class="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div class="controls">
        <div class="control active-btn" data-id="home">
          <i class="fas fa-home"></i>
        </div>
        <div class="control" data-id="about">
          <i class="fas fa-user"></i>
        </div>
        <div class="control" data-id="portfolio">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="control" data-id="blogs">
          <i class="far fa-newspaper"></i>
        </div>
        <div class="control" data-id="contact">
          <i class="fas fa-envelope-open"></i>
        </div>
      </div>
      <div class="theme-btn">
        <i class="fas fa-adjust"></i>
      </div>
    </div>
  );
}
