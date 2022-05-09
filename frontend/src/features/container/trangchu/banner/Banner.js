import React from "react";
import "./banner.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
function Banner(props) {
  const anh = useSelector(state => state.anhs.anh.data);
  var banner = []
  if (anh) {
    console.log(anh.length)
    for (let i = 0; i < anh.length; i++) {
      if (anh[i].status === +1 && anh[i].banner === +1) {
        banner.push(anh[i]);
      }
    }
  }
  return (
    <div id="banner">
      <Carousel autoplay effect="fade">
        {!banner ? '' :
          banner.map(ok => (
            <div className="fit" key={ok.id}>
              <img src={ok.link} alt="" />
            </div>
          ))}
      </Carousel>
      <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-md-12">
                            <div className="slider_text text-center">
                                <h3 className="text_banner">Tạo tour du lịch của riêng mình</h3>
                                <p>Tự tạo cho mình một lộ trình thú vị để có một kỳ nghỉ đáng nhớ hơn.</p>
                                <a href="/create-tour" className="boxed-btn3">Tạo tour</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div >

  )
}

Banner.propTypes = {

}

export default Banner
