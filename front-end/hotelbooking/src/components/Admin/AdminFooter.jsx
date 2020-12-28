import React, { Component } from 'react'
import { BiBeenHere, BiPhone, BiEnvelope } from "react-icons/bi";

export default class AdminFooter extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="text-center">
                        <ul className="list-unstyled f_list">
                            <li><a href="#"> <BiBeenHere /> 12-14 Tran Phu - Nha Trang - Vietnam 650000 Nha Trang Vietnam</a></li>
                            <li><a href="#"> <BiPhone /> +84 258 3820999</a></li>
                            <li><a href="#"> <BiEnvelope /> info@sunrisenhatrang.com.vn</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
