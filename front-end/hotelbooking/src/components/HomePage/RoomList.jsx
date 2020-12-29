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
