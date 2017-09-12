import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {qty:0};
    this.deposit = this.deposit.bind(this);
    this.show = this.show.bind(this);
    this.withdraw = this.withdraw.bind(this);

  }

  deposit() {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price); 
  }

  
  
  withdraw() {
    this.setState({qty: this.state.qty - 1});
    this.props.handleTotal(this.props.price); 
  }


show() {
    this.props.handleShow(this.props.balance);
    }


  render() {
    return (
      <div>

     {/*<p>this.props.name} = ${this.props.price}</p>*/}

      <button className="btn btn-primary" onClick={this.deposit}>Deposit</button>
           
            <button className="btn btn-primary" onClick={this.withdraw}>Withdraw</button>

       <button className="btn btn-primary" onClick={this.show}>Balance</button>
      
      {/*<h3>{this.state.qty}</h3>*/}
      
      {/*<h3>${this.state.qty*this.props.price}</h3>*/}
      <hr/>  
      </div>
    );
  }
}

class Total extends Component {
  render() {
    return (
    <div>
    {/*<h3>Total balance: ${this.props.total}</h3>*/} 
    </div>
   )

  }
}

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    }
    submit(e){
    e.preventDefault();
    var product = {
      name:this.refs.name.value,
      price:parseInt(this.refs.price.value
    )};
    this.props.handleCreate(product);
    //alert(product.name+ "has been added");
    this.ref.name.value='';
    this.refs.name.value='';
 }

  render() {
    return(
      <form onSubmit={this.submit} class="form-group">
      <input className="form-control" type="text" placeholder="Enter Name" ref="name"/>
      <br/>
      <input className="form-control" type="text" placeholder="Enter Amount" ref="balance"/>
      <br/>
      <button className="btn btn-primary">Submit</button> 
      </form>

      );
    }
}


class ProductList extends Component {

    constructor(props) {
      super(props);
      this.state={total:0,
         productList: [{name: "", balance: 213},
                
                  ]
      };
      this.calcTotal = this.calcTotal.bind(this);
      this.createProduct = this.createProduct.bind(this);
    }

    calcTotal(balance) {
      this.setState({total: this.state.total + balance})
    }

  showProduct(balance) {
     alert("Your balance is "+balance);
 }

    createProduct(product) {
    this.setState({
      productList: this.state.productList.concat(product)
    });
   }

  

  render() {
    var component = this;
    var products = this.state.productList.map(
      function(prod){
    return(
        <Product name={prod.name} price={prod.price}
        handleShow={component.showProduct}
        handleTotal={component.calcTotal}/>
      );
    });  
    

    return(
      <div>
        <ProductForm handleCreate={this.createProduct}/>
       {products}
       <Total total={this.state.total}/>
       </div>
     )    
  }  
}



export default ProductList;
