import React from "react";
import blog1 from "../../../../public/images/blog1.jpg";
import blog2 from "../../../../public/images/blog2.jpg";

const Blog = () => {
  return (
    <div>
      <section class="" id="blogs">
        <div class="blogs-content">
          <div class="main-title">
            <h2>
              My <span>Blogs</span>
              <span class="bg-text">My Blogs</span>
            </h2>
          </div>
          <div class="blogs">
            <div class="blog">
              <img src={blog1} alt="" />
              <div class="blog-text">
                <h4>How to Create Your Own Website</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus natus voluptas, eos obcaecati recusandae amet?
                </p>
              </div>
            </div>
            <div class="blog">
              <img src="../../../../public/images/blog1.jpg" alt="" />
              <div class="blog-text">
                <h4>How to Become an Expert in Web Design</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus natus voluptas, eos obcaecati recusandae amet?
                </p>
              </div>
            </div>
            <div class="blog">
              <img src="img/blog2.jpg" alt="" />
              <div class="blog-text">
                <h4>Become a Web Designer in 10 Days</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus natus voluptas, eos obcaecati recusandae amet?
                </p>
              </div>
            </div>
            <div class="blog">
              <img src="img/blog3.jpg" alt="" />
              <div class="blog-text">
                <h4>Debbuging made easy with Web Inspector</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus natus voluptas, eos obcaecati recusandae amet?
                </p>
              </div>
            </div>
            <div class="blog">
              <img src="img/port1.jpg" alt="" />
              <div class="blog-text">
                <h4>Get started with Web Design and UI Design</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus natus voluptas, eos obcaecati recusandae amet?
                </p>
              </div>
            </div>
            <div class="blog">
              <img src="img/port3.jpg" alt="" />
              <div class="blog-text">
                <h4>This is what you need to know about Web Design</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus natus voluptas, eos obcaecati recusandae amet?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
