// import React from 'react';
// import CustomerItem from './CustomerItem';
// import CustomerDetail from './CustomerDetail';

// const CustomerList = props =>  {
//   function handleClick(evt) {
//   const selectedCustomer = evt.target.value;
//     console.log("selected booking", evt.target.value);
//   props.onCustomerSelected(selectedCustomer);
//   }

//   const customersNodes = props.customers.map((customer, index) => {
//     return (
//       <tr value={customer.id} key={index}>
//         <td>{customer.name}</td>
//         <td>{customer.email}</td>
//         <td>{customer.phone}</td>
//         <button onClick={handleClick} value={index}>More Details</button>
//       </tr>

//     );
//   });

//   if (props.customers === null) {
//     return(
//       <h3>Customers content loading...</h3>
//     );
//   }
//   return(
//     <div className="data-list-view">

//     <table>
//     <thead>
//     <tr>
//     <th>Name</th>
//     <th>Email</th>
//     <th>Phone</th>
//     </tr>
//     </thead>
//     <tbody>
//     {customersNodes}
//     </tbody>
//     </table>
//     </div>
//   );
// }


// export default CustomerList;





import React, { Component } from 'react'

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        customers: [],
    };
}


fetchData(url, callback) {
  fetch(url, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000"
    }
  })
    .then(res => res.json())
    .then(callback)
    .catch(error => {
      console.error(error);
    });
}

  componentDidMount() {

    this.fetchData("http://localhost:8080/api/test/customers", customers => {
      this.setState({ customers: customers._embedded.customers });
    });
  }

  render() {
    const { customers} = this.state;
    return (
    <div className="table-responsive">
    <table className="table my-3">
<thead>
                                    <tr>
                                        <th>Title Room Type</th>
                                        <th>Slug</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(customers.map((customer) => (
          <tr key={customer.id}>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.phone}</td>
          </tr>
      )))                                           
    }
</tbody>
      </table>
      </div>  
    )
  }
}








// import React from 'react';
// import CustomerItem from './CustomerItem';
// import CustomerDetail from './CustomerDetail';

// const CustomerList = props =>  {
//   function handleClick(evt) {
//   const selectedCustomer = evt.target.value;
//     console.log("selected booking", evt.target.value);
//   props.onCustomerSelected(selectedCustomer);
//   }

//   const customersNodes = props.customers.map((customer, index) => {
//     return (
//       <tr value={customer.id} key={index}>
//         <td>{customer.name}</td>
//         <td>{customer.email}</td>
//         <td>{customer.phone}</td>
//         <button onClick={handleClick} value={index}>More Details</button>
//       </tr>

//     );
//   });

//   if (props.customers === null) {
//     return(
//       <h3>Customers content loading...</h3>
//     );
//   }
//   return(
//     <div className="data-list-view">

//     <table  id="datalist">
//     <thead>
//     <tr>
//     <th>Name</th>
//     <th>Email</th>
//     <th>Phone</th>
//     </tr>
//     </thead>
//     <tbody>
//     {customersNodes}
//     </tbody>
//     </table>
//     </div>
//   );
// }


// export default CustomerList;
