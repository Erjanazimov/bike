import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBike, fetchBikeInfo} from "../../store/bikeSlice";

function Bike(){
    const dispatch = useDispatch();
    const bikeState = useSelector(state => state.byBike.bike)

    useEffect(() => {
        dispatch(fetchBike())
    }, [])
    const bikeMap = bikeState.map(bike => {
        return <div key={bike.id}>
            <p>
                <img onClick={() => infoBikeBtn(bike.id)} data-bs-toggle="modal" data-bs-target="#exampleModalBike" className="bike_img" src={bike.cover_image}/> </p>
            <div className="bg-bike">
                <h5>{bike.brand_name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="info_bike">
                        {bike.price} сом</p>
                    <div className="d-flex ">
                        <p className="btn btn-outline-secondary bike_btn mx-2">?</p>
                        <p className="btn btn-outline-secondary bike_btn">+</p>
                    </div>
                </div>
            </div>

        </div>
    })

    const infoBikeBtn = (id) => {
        dispatch(fetchBikeInfo(id))
    }
    return (
        <div className="p-2 fonsMargin">
            <div className="fons_banner">
                <div>
                    <p className="text_date px-3 pt-2">Тип велосипеда</p>
                    <div className="bike_flex">
                        {bikeState.length ? bikeMap : "Loading"}
                    </div>
                </div>
                <div className="d-flex justify-content-center ">
                    <button type="button" className="btn btn-primary btn_search">Найти</button>
                </div>
            </div>
        </div>
    );
};

export default Bike;