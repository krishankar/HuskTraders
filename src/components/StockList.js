import React, { Component } from "react"
 import StockDetails from './StockDetails'

class StockList extends Component {
    constructor(props) {
        super(props);

        var lists = []
 
         
        this.state = {
            lists: this.props.list,
            // msft,
            stock:lists
        }
    }

    
    componentWillReceiveProps(newProps) {
        this.setState({
            lists: newProps.list
        });
    }
    StockDetails(e) {
this.setState({
    
 stock:this.state.stock
})
    }

    render() {
        // alert(JSON.stringify(this.state.msft) + "msft")
        return (

            <div>
                <table className="table">
                    <thead>
                        <tr>Title</tr>

                    </thead>
                    <tbody>
                        {
                            this.state.lists.map((title) => {
                                return (
                                    <tr>
                                        <td onClick={this.StockDetails.bind(this)}>
                                            {title}
                                        </td>
                                    </tr>
                                )
                            })
                        } 
                    </tbody>
                </table>
                 <StockDetails details={this.state.stock}/> 
            </div>
        )
    }
}
export default StockList;