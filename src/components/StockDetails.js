import React, {Component} from "react"

class StockDetails extends Component{
    constructor(props){
        super(props);
        console.log(props)

        this.state={
            detail:this.props.details
        }
    }

componentWllReceiveProps(newProps)
{
    this.setState({
     detail:newProps.details
    })
}
render(){
    console.log(JSON.stringify(this.state.detail)+"stockdetails")
    return(
      <h1> {this.state.detail} </h1>
    )
}
}
export default StockDetails;