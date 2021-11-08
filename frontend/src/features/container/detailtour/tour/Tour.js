import { Carousel, message, Popover, Radio, Rate, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './tour.css'
import { Link, useHistory, useParams } from 'react-router-dom';
import Detail from '../detail/Detail';
import Footer from '../../trangchu/footer/Footer'
import { ngaydiData } from '../../admin/Ngaydi/ngaydiSlice';
// import { addthanhtoan } from './thanhtoanSlice';
function Tour(props) {
  const { id } = useParams()
  const [state, setState] = useState({
    listdate: '',
    visible: false,
    visible2: false,
    visible3: false,
    name: "",
    email: "",
    sdt: "",
    diachi: "",
    nguoilon: 1,
    treem: 0,
    embe: 0,
    valueDate: "",
    date: "",
    loadlaihoadon: 1,
  })
 


  const dispatch = useDispatch();
  const actionngaydi = async () => { await dispatch(ngaydiData()) }

  const tours = useSelector(state => state.tours.tour.data);
  const ngaydis = useSelector(state => state.ngaydis.ngaydi.data);

  const tour = [];
  if (tours) {
    for (let i = 0; i < tours.length; i++) {
      if (tours[i].id === +id) {
        tour.push(tours[i].Ngaydis)
      }
    }
  }

  const formatdate = e => {
    if (e) {
      var ngay = e.substr(0, 2)
      var thang = e.substr(3, 2)
      var nam = e.substr(6, 4)
      return nam + '-' + thang + '-' + ngay;
    }
  }
  const checkngaydi = () => {
    if (tour.length !== 0) {
      // console.log(tour);
      var ngaydi = tour[0];
      var ngaymin = formatdate(ngaydi[0].ngay);
      var date = new Date();
      // var dateToday = date.getFullYear() + "-" + ((date.getMonth() + 1) > 1 ? date.getMonth() + 1 : ("0" + (date.getMonth() + 1))) + "-" + (date.getDate() > 1 ? date.getDate() : ("0" + date.getDate()));
      var listDate = [];
      for (let i = 0; i < ngaydi.length; i++) {
        if (new Date(ngaymin) < new Date(formatdate(ngaydi[i].ngay)) && date <= new Date(formatdate(ngaydi[i].ngay))) {
          listDate.push(formatdate(ngaydi[i].ngay))
        }
      }
      // console.log(listDate.sort((a, b) => { return new Date(b) - new Date(a) }));
      listDate.sort(function (a, b) {
        return new Date(a) - new Date(b);
      });
      return listDate[0];

    }
  }
  const fillDate = () => {
    if (tour.length !== 0) {
      var ngaydi = tour[0];
      var date = new Date();
      var dates = []
      var dateToday = date.getFullYear() + "-" + ((date.getMonth() + 1) > 1 ? date.getMonth() + 1 : ("0" + (date.getMonth() + 1))) + "-" + (date.getDate() > 1 ? date.getDate() : ("0" + date.getDate()));
      for (let i = 0; i < ngaydi.length; i++) {
        console.log(dateToday <= formatdate(ngaydi[i].ngay));
        if (date <= new Date(formatdate(ngaydi[i].ngay))) {
          dates.push({ id: i + 1, ngay: ngaydi[i].ngay })
        }
      }

      return dates
    }
  }

  const formatlaidate = (e) => {
    if (e) {
      var ngay = e.substr(8, 2)
      var thang = e.substr(5, 2)
      var nam = e.substr(0, 4)
      return ngay + "/" + thang + "/" + nam
    }
  }
  var tour_ngay = [];
  if (ngaydis && formatlaidate(checkngaydi())) {
    tour_ngay.push(ngaydis.find(x => x.ngay === formatlaidate(checkngaydi())).Tours.find(x => x.id === +id))
  }
  console.log(tour_ngay);
  const hide = () => {
    setState({
      ...state,
      visible3: false,
    });
  };
 


  const { name, sdt, diachi, email, nguoilon, treem, embe } = state
 

  
  return (
    <div id="detail-tour">
      <div className="breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/"><i className="fas fa-home mr-2"></i>Trang chủ</Link></li>
            <li className="breadcrumb-item"><Link to="/list-tour">Tour du lịch</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{tour_ngay.length > 0 ? tour_ngay[0].name : ""}</li>
          </ol>
        </nav>
      </div>
      { tour_ngay.length === 0 ?
        <div className="spin"><Spin className="mt-1" /><h1>Test tour detail</h1></div>
        :
        tour_ngay.map(ok => (
          <div className="box-tour" key={ok.id}>
            <div className="container bg-white">
              <div className="row justify-content-center" >
                <div className="col-lg-8">
                  <Carousel autoplay>
                    {tours.find(x => x.id === +id).Anhs.map(oki => (
                      <div>
                        <img src={oki.link} width="760px" height="430px" alt="" />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
              <Detail id={id} />
            </div>
          </div>
        ))}
      <Footer />
    </div>

  )
}

export default Tour