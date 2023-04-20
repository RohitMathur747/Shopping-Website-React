import React,{Component} from 'react';

export default class Child extends Component{
    constructor(){
        super()
        this.state={
            data:[]
            }
        }
        componentDidMount(){
            console.log("component didmount method called")
            fetch("https://dummyjson.com/products").then(a=>console.log(a.json()))
            .catch(err=>console.log(err))
        }
    render(){
        return (
            <div style={{display:"flex",flexWrap:"wrap"}}>
                
            </div>
        )
    }
}