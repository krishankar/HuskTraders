import React, {Component} from "react"
import StockList from "./StockList";

class AddStock extends Component{
    constructor(props){
        super(props);
        this.state={
            stocks:[]
        }
    this.addStocks=this.addStocks.bind(this);
    }

    addStocks(){
        var stock=this.refs.stock.value;
        console.log(stock)
        this.setState({
            stocks:this.state.stocks.concat(stock)
        })
        console.log(this.state.stocks)
    }
    
render(){
    return(
        <div>
             <input ref="stock" type=""/> 
            <button onClick={this.addStocks}> ADD</button>
            {/* <li> {this.state.stocks}</li> */}
            <StockList list={this.state.stocks}/>
                                               </div>
    )
}
}
export default AddStock;