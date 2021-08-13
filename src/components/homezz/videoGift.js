import React, { Component } from 'react'

class VideoGift extends Component {
    render() {
        return (
            <div>
                <div className="ShopGift">
          <div className="ShopGift__wrapper grid wide">
            <div className="ShopGift--img">
              <img
                src="https://46wdth274t8i3f6z5s2fyaqc-wpengine.netdna-ssl.com/peakshops-bakery/wp-content/uploads/sites/13/2020/12/gifts.jpg"
                alt=""
              />
            </div>
            <div className="ShopGift--describe ">
              <h1 className="ShopGift__title">
                HAPPY HOLIDAYS BUCKET CHOCOLATE CHIP GIFTS!
              </h1>
              <div className="ShopGift__text">
                Clothes mean nothing until someone lives in them. My shows are
                about the complete woman who swallows it all. It’s a question of
                survival. Design is a series of creative choices – it’s a
                collaborative effort.
              </div>
              <div className="ShopGift__btn">
                <span>SHOP GIFTBOXES</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid wide video ">
          <div className="video__text">
            <div className="video__text--title">HOW – TO VIDEOS</div>
            <div className="video__text--describe ">
              Learn to bake with our online video tutorials!
            </div>
          </div>
          <div className="row wow ">
            <div
              className="video__item col l-4 m-4 c-12 wow animated fadeInLeftBig animate__delay-0.2s"
              data-wow-delay="0.2s"
            >
              {/* <div className="video__icon">
                <img src="./img/play-button (1).png" alt="" />
              </div> */}
              <div className="video__item--img">
                 <iframe src="https://www.youtube.com/embed/E8T2--cOGIc" title="YouTube video player" ></iframe>
              </div>
              HOW TO MAKE CRUNCHY BREAD RECIPE IN BAKERY
            </div>
            <div
              className="video__item col l-4 m-4 c-12  wow animated fadeInLeftBig animate__delay-0.1s"
              data-wow-delay="0.1s"
            >
             
              <div className="video__item--img">
              <iframe src="https://www.youtube.com/embed/w6TxH8ha8XU" title="YouTube video player" ></iframe>
              </div>
              HOW TO MAKE CRUNCHY BREAD RECIPE IN BAKERY
            </div>
            <div className="video__item col l-4 m-4 c-12 wow animated fadeInLeftBig ">
             
              <div className="video__item--img">
              
              <iframe src="https://www.youtube.com/embed/4FNDFbxmCRg" title="YouTube video player" ></iframe>
              </div>
              HOW TO MAKE CRUNCHY BREAD RECIPE IN BAKERY
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default VideoGift