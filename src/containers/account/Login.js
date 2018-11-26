import React, {Component} from 'react';
import Header from '../../components/Global/Header';
import Menu from '../../components/Global/Menu';
import Footer from '../../components/Global/Footer';
import Login from '../../components/Account/Login'

class Logins extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <Login/>
                <Footer/>
            </div>
        )
    }
}
export default Logins;
