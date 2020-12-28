// import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import { deleteRoomType } from '../../services/index';

// import './../../css/Style.css';
// import store from '../../services/store';
// import { Provider } from 'react-redux';
// import axios from 'axios';
// import Room from './Room'

// class RoomList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             roomTypes: [],
//             search: '',
//             currentPage: 1,
//             roomTypesPerPage: 5,
//             sortDir: "asc"
//         };
//     }

//     sortData = () => {
//         setTimeout(() => {
//             this.state.sortDir === "asc" ? this.setState({ sortDir: "desc" }) : this.setState({ sortDir: "asc" });
//             this.findAllRoomTypes(this.state.currentPage);
//         }, 500);
//     };

//     componentDidMount() {
//         this.findAllRoomTypes(this.state.currentPage);
//     }

//     findAllRoomTypes(currentPage) {
//         currentPage -= 1;
//         axios.get("http://localhost:8080/api/test/roomtypes?pageNumber=" + currentPage + "&pageSize=" + this.state.roomTypesPerPage + "&sortBy=price&sortDir=" + this.state.sortDir)
//             .then(response => response.data)
//             .then((data) => {
//                 this.setState({
//                     roomTypes: data.content,
//                     totalPages: data.totalPages,
//                     totalElements: data.totalElements,
//                     currentPage: data.number + 1
//                 });
//             });
//     };

//     deleteRoomType = (roomTypeId) => {
//         this.props.deleteRoomType(roomTypeId);
//         setTimeout(() => {
//             if (this.props.roomTypeObject != null) {
//                 this.setState({ "show": true });
//                 setTimeout(() => this.setState({ "show": false }), 3000);
//                 this.findAllRoomTypes(this.state.currentPage);
//             } else {
//                 this.setState({ "show": false });
//             }
//         }, 1000);
//     };

//     changePage = event => {
//         let targetPage = parseInt(event.target.value);
//         if (this.state.search) {
//             this.searchData(targetPage);
//         } else {
//             this.findAllRoomTypes(targetPage);
//         }
//         this.setState({
//             [event.target.name]: targetPage
//         });
//     };

//     searchChange = event => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     cancelSearch = () => {
//         this.setState({ "search": '' });
//         this.findAllRoomTypes(this.state.currentPage);
//     };

//     render() {
//         const { roomTypes } = this.state;

//         return (
//             <section className="roomslist">
//                 <div className="roomslist-center">
//                     <Provider store={store}>
//                         {roomTypes.map(roomType => {
//                             return <Room key={roomType.id} roomType={roomType} />;
//                         })
//                         }
//                     </Provider>
//                 </div>
//             </section>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         roomTypeObject: state.roomType
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         deleteRoomType: (roomTypeId) => dispatch(deleteRoomType(roomTypeId))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RoomList);

//đuọc
import React from 'react'
import Room from './Room';
import './../../css/Style.css';

export default function RoomsList({rooms}) {
    if(rooms.length === 0){
       return (
            <div className="container my-5">
                <div className="card shadow-lg border-0 p-4">
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={require('../../images/notfound.svg')}  alt="not found" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="empty-search">
                                <h3 className="display-4">Unfortunately no rooms matched your search parameters</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
               <Room />;
            </div>
        </section>
    );
 }















// import React from 'react'
// import Room from './Room'
// import store from '../../services/store';
// import { Provider } from 'react-redux';

// export default function RoomList({rooms}) {
//     if (rooms.length === 0 ) {
//         return (
//             <div className="empty-search">
//                 <h3>unfortunately no rooms matched your search parameters</h3> 
//             </div>
//         );
//     }

//     return (
//         <section className="roomslist">
//             <div className="roomslist-center">
//                 <Provider store={store}>
//                 {
//                     rooms.map(book => {
//                         return <Room key={book.id} room={book} />;
//                     })
//                 }
//                 </Provider>
//             </div>
//         </section>
//     )
// }
