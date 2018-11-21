import React,  {Component} from 'react'
import Header from '../../components/Global/Header'
import Menu from '../../components/Global/Menu'
import Banner from '../../components/Global/Banner'
import Footer from '../../components/Global/Footer'

class HomePage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <Menu/>
                <Banner />
                <Footer/>
            </div>
        )
    }
}

export default HomePage;