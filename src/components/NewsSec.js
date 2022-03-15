import React, { Component } from "react";
import Slider from "react-slick";
import './NewsSec.scss'


export default class NewsSec extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className="news_sec">
        <h2>Yangiliklar</h2>
        <Slider {...settings}>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
        <div className="news1">
            <a href="/news">
              <div className="wrapper">
                <div className="there_text">
                        <h3>Main Information </h3>
                        <p>Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim Lorem ipsum dolor sit amo br narsa yana nimadrlarda kyin yana nuimadrla tez yoziwi sinab kordim</p>
                    </div>
              </div>
            </a>
        </div>
       
        </Slider>
      </div>
    );
  }
}
