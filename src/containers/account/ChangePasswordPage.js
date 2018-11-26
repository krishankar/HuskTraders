import React, {Component} from 'react';
import Header from '../../components/Global/Header';
import Menu from '../../components/Global/Menu';
import Footer from '../../components/Global/Footer';
import ChangePassword from '../../components/Account/ChangePassword'

class ChangePasswordPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <ChangePassword/>
                <Footer/>
            </div>
        )
    }
}
export default ChangePasswordPage;