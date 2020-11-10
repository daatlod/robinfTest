import React from 'react';

import logoPizza from '../../assets/Logo.png';
import pizzaImage from '../../assets/Pizza.png';
import backgrounSideBox from '../../assets/imagebkg.png';


const sidebox = (props) => (

    <div className="col__image d-none d-lg-block col-lg-4 col-xl-5 px-0">
	    <h1 className={ `logo ${props.loginScreen ? 'logo--hide' : ''}`}>
            <a href="/" className="link__logo" title="Best Pizza" onClick={props.closeDetail}><img alt="Best Pizza" src={logoPizza}/></a>
        </h1>

        <div 
            className="bkg__pizza"
            style = {{
                        backgroundImage: `url(${backgrounSideBox})`, 
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "50% 50%" 
                    }}
        >
            <img alt="pizza" src={pizzaImage} className={ `pizza__image ${!props.loginScreen ? 'pizza--in' : ''}`} />
        </div>	      
	</div>
);

export default sidebox;