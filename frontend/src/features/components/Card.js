import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Card(props) {
    const getCard = props.card
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
    return (
        <section className="product">
            <button className="pre-btn"><img src="./images/arrow.png" alt="ss" /></button>
            <button className="nxt-btn"><img src="./images/arrow.png" alt="ss" /></button>
            <div className="product-container">
                {getCard.map((items) =>
                    <div className="product-card">
                        <div className="product-image">
                            <img src={items.avatar} />
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand">{items.name}</h2>
                            <span className="price">{items.gianguoilon}</span>
                        </div>
                    </div>
                )
                }
            </div>
        </section>


    )
}

export default Card