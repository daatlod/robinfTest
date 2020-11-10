import React  from 'react';

import Stores from '../../containers/Stores/Stores';
import Login from '../../components/Login/Login';

const ContentPage = (props) => (

    <div className="col__content col-12 col-lg-8 col-xl-7">
        <Login 
            loginScreen={props.loginScreen} 
            logInPage={props.logInPage} 
            errorLogin={props.errorLogin} 
            removeErrorLogin= {props.removeErrorLogin}
        />
        <Stores 
            loginScreen={props.loginScreen} 
            storesInfo={props.storesInfo} 
            detailScreen={props.detailScreen} 
            logOutPage={props.logOutPage} 
            openDetail={props.openDetail} 
            closeDetail={props.closeDetail} 
            detailContentPage={props.detailContentPage} 
        />
    </div>

)

export default ContentPage;