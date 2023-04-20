import React, { Component } from 'react';
export default class Fetch extends Component {
    constructor() {
        super();
        this.state = { data: [] }
    }
    componentDidMount() {
        fetch('https://dummyjson.com/products').then((data) => {
            return data.json()
        }).then((item) => {
            console.log('hii i am item', item.products);
            this.setState({ data: item.products })
        })
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-wrap justify-content-center align-item-center">
                            {this.state.data.map((data) => {
                                return (
                                    <div className="card" style={{width:"300px" , margin:"20px" }}>
                                        <div className="card-header text-center">
                                            <b>{data.title}</b>
                                        </div>
                                        <div className="car-body">
                                            <img src={data.thumbnail
                                            } alt={data.thumbnail}  width="300px" height="250px"/>
                                        </div>
                                        <hr/>
                                        <p className='text-center'><i>$<strong>{data.price}</strong></i></p>
                                        <button className='btn btn-warning'>Add To Cart</button>
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}