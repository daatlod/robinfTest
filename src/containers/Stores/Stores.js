import React from 'react';

import ListStore from '../../components/ListStores/ListStores';
import StoreDetail from '../../components/StoreDetail/StoreDetail';

import closeIcon from '../../assets/close-icon.jpg';
import logoFB from '../../assets/icon-fb.png';
import logoIG from '../../assets/icon-ig.png';
import footerLogo from '../../assets/Best Pizza.png';


const stores = (props) => (

    <div className={ `stores__module h-100 ${props.loginScreen ? 'd-none' : ''}`}>
        <div className="row h-100" style={{ overflowX: 'auto', paddingBottom: '25rem'}}>
            <div className="col-12">
                
                <div className="row">
                    
                    <div className="col-12 col-xl-11 pl-md-5" >

                        <div className="tool__bar w-100 py-4">
                            <a href="/" className="link__close" onClick={props.logOutPage}>
                                <img alt="salir" src={closeIcon}  className="icon_close" /> Salir
                            </a>
                        </div>

                        <div className="nav__links w-100 mb-5">
                            <ul>
                                <li className="select">
                                    <a href="/" onClick={props.closeDetail}>{ `${props.detailScreen ? 'Volver al listado de pizzerias' : 'Pizzerias'}`}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="stores__top  mb-5">
                            <h2>Tiendas</h2>
                            <p>Escoge tu pizzeria favorita</p>
                        </div>

                    
                        <ListStore detailScreen={props.detailScreen} storesInfo={props.storesInfo} openDetail={props.openDetail}/>

                        <StoreDetail detailScreen={props.detailScreen} detailContentPage={props.detailContentPage}/>
                    
                    </div>
                </div>

                <div className="footer col-12 col-lg-8 col-xl-7 align-self-end py-4">
                    <div className="row">
                        <div className="col-11 pl-5 clearfix">
                            <ul className="social__links float-left">
                                <li className="mr-2"><a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noreferrer"><img alt="Facebook" src={logoFB} /></a></li>
                                <li><a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noreferrer"><img alt="Instagram" src={logoIG} /></a></li>
                            </ul>
                            <p className="logo__footer float-right"><a href="/" onClick={props.closeDetail}><img alt="Best Pizza" src={footerLogo} /></a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

);

export default stores;