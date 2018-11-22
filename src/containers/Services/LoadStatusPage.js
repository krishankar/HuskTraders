import React,  {Component} from 'react'
import Header from '../../components/Global/Header'
import Menu from '../../components/Global/Menu'
import Footer from '../../components/Global/Footer'
import LoadStatus from '../../components/Services/LoadStatus';

class LoadStatusPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <Menu/>
                <LoadStatus/>
                <Footer/>
            </div>
        )
    }
}

export default LoadStatusPage;