import React from 'react';
import ImageGallery from 'react-image-gallery';
import {useSelector} from "react-redux";

const InfoBike = () => {
    const infoBikeState = useSelector(state => state.byBike.bikeInfo);

    return (
        <div className="modal fade" id="exampleModalBike" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal_info modal-dialog-centered">
                <div className="modal-content p-3">
                    {infoBikeState.info ? <div className="flex_info">
                            <div className="img_bike">
                                <ImageGallery items={infoBikeState.images}/>
                            </div>
                            <div className="width_info">
                                <h4>{infoBikeState.info.name}</h4>
                                <div className="info_margin pt-4">
                                    <p><span className="text_date">Размер</span></p>
                                    <p><b>{infoBikeState.info.size}</b></p>
                                </div>
                                <div className="info_margin">
                                    <p><span className="text_date">Материал рамы</span></p>
                                    <p><b>{infoBikeState.info.brand}</b></p>
                                </div>
                                <div className="info_margin">
                                    <p><span className="text_date">Диаметр колес</span></p>
                                    <p><b>{infoBikeState.info.wheel_diameter}</b></p>
                                </div>
                                <div className="info_margin">
                                    <p><span className="text_date">Кол-во скоростей</span></p>
                                    <p><b>{infoBikeState.info.number_of_speeds}</b></p>
                                </div>
                                <div className="info_margin">
                                    <p><span className="text_date">Амортизация</span></p>
                                    <p><b>{infoBikeState.info.depreciation.toString()} </b></p>
                                </div>
                            </div>
                        </div> : <h2>loading</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default InfoBike;