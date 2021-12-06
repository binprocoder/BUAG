import React from "react";
import "./banner.css";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
function Banner(props) {
  const anh = useSelector(state => state.anhs.anh.data);
  var banner = []
  if (anh) {
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
      <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-12 col-md-12">
                            <div class="slider_text text-center">
                                <h3 class="text_banner">Tạo tour du lịch của riêng mình</h3>
                                <p>Tự tạo cho mình một lộ trình thú vị để có một kỳ nghỉ đáng nhớ hơn.</p>
                                <a href="/create-tour" class="boxed-btn3">Create Tour</a>
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
