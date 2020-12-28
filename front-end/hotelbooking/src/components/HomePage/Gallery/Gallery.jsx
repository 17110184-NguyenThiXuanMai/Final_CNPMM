import React, { Component } from 'react'
import gallery_1 from './images/gallery_1.jpg'
import gallery_2 from './images/gallery_2.jpg'
import gallery_3 from './images/gallery_3.jpg'
import gallery_4 from './images/gallery_4.jpg'

export default class Gallery extends Component {
	state={
		galleries: [
			{
				image: <img src={gallery_1} alt="gallery_1" />
			},
			{
				image: <img src={gallery_2} alt="gallery_2" />
			},
			{
				image:<img src={gallery_3} alt="gallery_3" />
			},
			{
				image:<img src={gallery_4} alt="gallery_4" />
			},
		]
	}
    render() {
        return (		
            <div>						
				<div className="gallery_slider_container">
					<div className="owl-carousel owl-theme gallery_slider">
					{this.state.galleries.map((item, index) => {
					return <div key={index} className="gallery">
						<div className="gallery_item"> 
							<div className="background_image">{item.image}</div>
							{/* <a className="colorbox" href="images/gallery_1.jpg"></a> */}
						</div>
		
						{/* <div className="gallery_item"> 
							<div className="background_image">{item.image}</div>
							<a className="colorbox" href="images/gallery_2.jpg"></a>
						</div>
		
						<div className="gallery_item"> 
							<div className="background_image">{item.image}</div>
							<a className="colorbox" href="images/gallery_3.jpg"></a>
						</div>
		
						<div className="gallery_item">
							<div className="background_image">{item.image}</div>
							<a className="colorbox" href="images/gallery_4.jpg"></a>
						</div>		 */}
					</div>
							})}
				</div>
			</div>
	
 
            </div>
        )
    }
}
