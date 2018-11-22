import React,  {Component} from 'react'
import Header from '../../components/Global/Header'
import Menu from '../../components/Global/Menu'
import Newload from '../../components/Global/Newload'
import Footer from '../../components/Global/Footer';
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
                <Footer />
            </div>
        )
    }
}

export default NewloadPage;