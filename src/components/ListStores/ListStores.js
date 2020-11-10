import React from 'react';

const ListStore = (props) => {


    const stores = Object.keys(props.storesInfo)
                        .map(igKey => {
                            return(
                                <a 
                                    key={igKey} 
                                    href={props.storesInfo[igKey].id} 
                                    onClick={(evt) => props.openDetail(evt, igKey) } 
                                    className="store__item"
                                >
                                    <span className="store__box_img">
                                        <span className="store__img">
                                            <span className="img__front"><img alt={props.storesInfo[igKey].name} src={`stactic/images/${props.storesInfo[igKey].name}.png`} /></span>
                                            <span className="img__back"><img alt={props.storesInfo[igKey].name} src={`stactic/images/${props.storesInfo[igKey].name}_pizza.png`} /></span>
                                            <img ></img>
                                        </span>
                                    </span>
                                    <span className="store__name">{props.storesInfo[igKey].name}</span>
                                    <span className="store__address">{props.storesInfo[igKey].address}</span>
                                </a>
                            ) 
                        }) 

    return (
        <div className={ `stores__list d-flex flex-wrap ${props.detailScreen ? 'stores--close' : ''}`} >
            {stores}
        </div>
    );
};

export default ListStore;