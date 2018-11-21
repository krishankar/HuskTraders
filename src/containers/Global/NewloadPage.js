import React,  {Component} from 'react'
import Header from '../../components/Global/Header'
import Menu from '../../components/Global/Menu'
import Newload from '../../components/Global/Newload'
class NewloadPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <Menu/>
                <Newload/>
            </div>
        )
    }
}

export default NewloadPage;