import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.lemde.fr/2022/07/28/782/815/4691/3127/1440/960/60/0/e6a47c5_1658998428690-1k2a0533.JPG"
          className="w-full"
        />

        <div
          style={{ marginTop: "50px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5"
        >
          <h1 className="text-5xl font-bold text-white text-center bg-purple-400">
            Start making money!
          </h1>
        </div>
        <div
          style={{ marginTop: "50px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5"
        >
          <p
            className="text-2xl text-center text-white bg-purple-300"
            style={{ marginTop: "100px" }}
          >
            Do you have something to sell? Post your first ad and start making
            money!
          </p>
        </div>
        <div
          style={{ marginTop: "700px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5"
        >
          <button className="btn btn-active btn-primary mr-5">
            Discover More
          </button>
          <button className="btn btn-success">See Reviews</button>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://www.apple.com/v/iphone-14/c/images/meta/iphone-14_overview__ewkgx3s30v8m_og.png"
          className="w-full"
        />

        <div
          style={{ marginTop: "50px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 "
        >
          <h1 className="text-3xl font-semibold text-white text-center bg-stone-500">
          Looking to buy something?
          </h1>
        </div>
        <div
          style={{ marginTop: "50px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 "
        >
          <p
            className="text-2xl text-white text-center bg-stone-400"
            style={{ marginTop: "110px" }}
          >
            GrabPhones has the widest selection of items all over Bangladesh and <br /> across more than 50 different categories.
          </p>
        </div>
        <div
          style={{ marginTop: "700px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5"
        >
          <button className="btn btn-active btn-primary mr-5">
            Discover More
          </button>
          <button className="btn btn-success">See Reviews</button>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://cdn.pocket-lint.com/r/s/x1920/assets/images/120810-phones-news-buyer-s-guide-upcoming-smartphones-image1-3aitwvwmok.jpg"
          className="w-full"
        />

        <div
          style={{ marginTop: "60px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 "
        >
          <h1 className="text-3xl font-bold text-black text-center bg-slate-50">
          GrabPhones is a platform on which you can buy and sell almost everything!
          </h1>
        </div>
        <div
          style={{ marginTop: "50px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 "
        >
          <p
            className="text-2xl text-black text-center bg-slate-100"
            style={{ marginTop: "150px" }}
          >
            Whether you're looking for a car, mobile phone, house, computer or pet, <br /> you will find the best deal on GrabPhones.
          </p>
        </div>
        <div
          style={{ marginTop: "700px" }}
          className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5"
        >
          <button className="btn btn-active btn-primary mr-5">
            Discover More
          </button>
          <button className="btn btn-success">See Reviews</button>
        </div>
        <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
