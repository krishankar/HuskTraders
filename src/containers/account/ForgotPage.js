import React, {Component} from 'react';
import Header from '../../components/Global/Header';
import Menu from '../../components/Global/Menu';
import Footer from '../../components/Global/Footer';
import Forgot from '../../components/Account/Forgot'

class ForgotPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <Forgot/>
                <Footer/>
            </div>
        )
    }
}
export default ForgotPage;