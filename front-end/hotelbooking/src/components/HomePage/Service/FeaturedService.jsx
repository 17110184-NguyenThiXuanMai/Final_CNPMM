import React, { Component } from 'react';
import Loading from '../Loading';
import Services from './Services';
import '../../../css/main.css'

export default class FeaturedService extends Component {
    render() {
        let { loading , FeaturedService: services} = this.context;
        services = services.map(service => {
            return <Services key={service.id} service={service} />
        });
        return (
            <section className="featured-rooms">
                <div className="featured-rooms-center">
                    {loading?<Loading/>:<Services />}                  
                </div>
            </section>
        );
    }
}
