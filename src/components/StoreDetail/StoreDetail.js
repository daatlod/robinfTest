import React from 'react';
import pizzaItemBkg from '../../assets/bkg-pizza.png'


const StoreDetail = (props) => {

    const products = Object.keys(props.detailContentPage.products)
                        .map(igKey => {
                            return(
                                <div key={igKey} className="list__items mr-3 mb-2" >
                                    <div className="item__box" style={{backgroundImage: `url(${pizzaItemBkg})` }}>
                                        <p>{props.detailContentPage.products[igKey].name}</p>
                                    </div>
                                </div>
                            ) 
                        })

    return (        
        <div className={`store__detail py-5  ${!props.detailScreen ? 'd-none' : ''}`}>
            <div className="row">
                <div className="col-12 col-md-3">
                    <img alt={props.detailContentPage.name} src={`stactic/images/${props.detailContentPage.name}.png`} className="image__detail" />
                </div>
                
                <div className="col-12 col-md-8">
                    <h3>{props.detailContentPage.name}</h3>
                    <p className="address__detail mb-4">{props.detailContentPage.address}</p>
                    <p className="description__detail">{props.detailContentPage.description}</p>

                    {products}
                </div>
            </div>
        </div>
    );
};

export default StoreDetail;