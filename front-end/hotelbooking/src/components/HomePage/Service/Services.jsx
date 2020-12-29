import React, { Component } from 'react'
// import './services.css'
import index_1 from './images/index_1.jpg'
import index_blog_1 from './images/index_blog_1.jpg'
import index_blog_2 from './images/index_blog_2.jpg'
import index_blog_3 from './images/index_blog_3.jpg'

export default class Services extends Component {
    state={
        services: [
            {
                date: "Oct 20, 2018",
                title: "How to book your stay",
                image: <img src={index_1}></img> 
            },
            {
                date: "Oct 21, 2019",
                title: "How to book your stay_1",
                image: <img src={index_blog_1}></img>
            },
            {
                date: "Oct 20, 2020",
                title: "How to book your stay_2",
                image: <img src={index_blog_2}></img>
            },
            {
                date: "Oct 10, 2020",
                title: "How to book your stay_3",
                image: <img src={index_blog_3}></img>
            }
        ]
    }
    render() {
        return (
            <div>
                <div className="blog">
                    <div className="blog_slider_container">
                        <div className="owl-carousel owl-theme blog_slider">
                            {this.state.services.map((item, index) => {
                                <div className="blog_slide" key={index}>
                                <div className="background_image">{item.image}</div>
                                <div className="blog_content">
                                    <div className="blog_date"><a href="#">{item.date}</a></div>
                                    <div className="blog_title"><a href="#">{item.title}</a></div>
                                </div>
                                </div>
                            })}
                           
                            {/* <div className="blog_slide">
                                <div className="background_image"></div>
                                <div className="blog_content">
                                    <div className="blog_date"><a href="#">Oct 20, 2018</a></div>
                                    <div className="blog_title"><a href="#">10 restaurants in town</a></div>
                                </div>
                            </div>
                            <div className="blog_slide">
                                <div className="background_image"></div>
                                <div className="blog_content">
                                    <div className="blog_date"><a href="#">Oct 20, 2018</a></div>
                                    <div className="blog_title"><a href="#">A perfect wedding</a></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
