import React, {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DateTimePicker} from "@mui/lab";
function Banner(){
    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);


    return (
        <div className="p-2 fonsMargin">
        <div className="fons_banner">
            <div className="d-flex_fons">
            <div className="text_banner">
                Аренда велосипедов <br/>
                c доставкой
            </div>
            <div className="d_flex ">
                <div className="banner_images">
                    <img src="https://s3-alpha-sig.figma.com/img/66bb/d2a6/d2d5dae5367200e65cdcbbd16efac68a?Expires=1646006400&Signature=gdoNPYQ8UmRJgdhnR4YKAC-dyTHVeTYNOnLePG5zAeD0fNKg3wOM-eJbCxW0JUL1donqjRndfvHkIwN5TKWLNYf2McPjjWZOLvz4F~jY8lclGSU8ZNNbqysz7~9fC-QSE7LoACoYiPKzUwqicX3qdUWLlCW14lJsCNNJPh-Zxu93p8Jkn0I6t7hDOetAf1E9qgLtfgV-nazDcmg4Ad7fjhR9cGpZ81Wq5TMZ8oaZH1iKFpkRWKePwl9imRWwUU8PGRJbTXnTMQqKue0QWjvlTR9NaXLP6Y0tIKB4zOI~k8~wsT3GC5n3hEZgiuYCj8IMHpSdmjJh9FpReUY1hoRy6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <div className="text_moto">
                    <h4>Шлем</h4>
                    <p>Бесплатно</p>
                </div>
                </div>
                <div className="banner_images_2">
                    <img src="https://s3-alpha-sig.figma.com/img/8ca8/d43b/5bca8035b2043ebd040d94024f913ef9?Expires=1646006400&Signature=fyFn4sfAoEaxV26ylcCQyNrrphTjUh5K2m6iPCtJby1zfkmkCv74VcIAqDoTPSwt4R2avae4cCEREJu22Y31Qhh5UMPhp30YE0peGHFwg8ROmi-qXhGCKfw7L4TEAGrdNUHM8w-~QF5BkxTP1xEL7KiHoS~FaS~PMWqHj6fbJwZWDTP8NscdhVc0vQYMEaPVWSc~fvPS9FrhGuownd8MuTiYJU-zbvFafv8PQRU7MkmhEo6Yi9Ae7gboGkFYTymW9SHZZvpKy6Q~zByAoS88fFBpJBYFkUiy2e4cedh4jHqG6jHXZMepJ~dNy839eWTFsRl2uCLiiCLBXuDUR7wQwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <div className="text_moto">
                        <h4>Фонарик</h4>
                        <p>Бесплатно</p>
                    </div>
                </div>
                <div className="banner_images_3">
                    <img src="https://s3-alpha-sig.figma.com/img/d4af/635f/d92f3acf3df745f9fac8283845bea40d?Expires=1646006400&Signature=NOIQ8P94sJPOBJ6rMzurFpoQ-4JwAP94In1ySu1niE3kyTIzCg8YRnxbE6CyvJN-~pFxAgVz9xbWrvCbKc8Z3QmxtUKxLAXlhr4FYbsg-1nKKPC--6uV5ci42Pa~UL9rGNCK2N1hMmNs7PCTSYRKzC3DeOCfculpUECdHtm2EsBVHEuC3KOdaUtWcsDcKOPdARoSb~oIrT7~Jrrj4tqIoe1IvXPP18w6FO15-WEnQQ57QsVohkDpSk3E-D5CSJnAjZptPsi1uQSF4Ou32vjrKp3XxoZbmKQyyoNLBfhY-1hAbQ8IJV2PNl3pAnJAh-2AVJvnD5txY5LOGXO-c7SnZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <div className="text_moto">
                        <h4>Замок</h4>
                        <p>Бесплатно</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="dPost">
                <div className="text_banner2">
                    Аренда велосипедов
                    c доставкой!
                </div>
                <div className="d-flex justify-content-between" >
                    <div className="banner_images rad" style={{background: "#D7E6FF"}}>
                        <img src="https://s3-alpha-sig.figma.com/img/66bb/d2a6/d2d5dae5367200e65cdcbbd16efac68a?Expires=1646006400&Signature=gdoNPYQ8UmRJgdhnR4YKAC-dyTHVeTYNOnLePG5zAeD0fNKg3wOM-eJbCxW0JUL1donqjRndfvHkIwN5TKWLNYf2McPjjWZOLvz4F~jY8lclGSU8ZNNbqysz7~9fC-QSE7LoACoYiPKzUwqicX3qdUWLlCW14lJsCNNJPh-Zxu93p8Jkn0I6t7hDOetAf1E9qgLtfgV-nazDcmg4Ad7fjhR9cGpZ81Wq5TMZ8oaZH1iKFpkRWKePwl9imRWwUU8PGRJbTXnTMQqKue0QWjvlTR9NaXLP6Y0tIKB4zOI~k8~wsT3GC5n3hEZgiuYCj8IMHpSdmjJh9FpReUY1hoRy6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                        <div className="text_moto">
                            <h4>Шлем</h4>
                            <p>Бесплатно</p>
                        </div>
                    </div>
                    <div className="banner_images_2 rad" style={{background: "#B9D5FF"}}>
                        <img src="https://s3-alpha-sig.figma.com/img/8ca8/d43b/5bca8035b2043ebd040d94024f913ef9?Expires=1646006400&Signature=fyFn4sfAoEaxV26ylcCQyNrrphTjUh5K2m6iPCtJby1zfkmkCv74VcIAqDoTPSwt4R2avae4cCEREJu22Y31Qhh5UMPhp30YE0peGHFwg8ROmi-qXhGCKfw7L4TEAGrdNUHM8w-~QF5BkxTP1xEL7KiHoS~FaS~PMWqHj6fbJwZWDTP8NscdhVc0vQYMEaPVWSc~fvPS9FrhGuownd8MuTiYJU-zbvFafv8PQRU7MkmhEo6Yi9Ae7gboGkFYTymW9SHZZvpKy6Q~zByAoS88fFBpJBYFkUiy2e4cedh4jHqG6jHXZMepJ~dNy839eWTFsRl2uCLiiCLBXuDUR7wQwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                        <div className="text_moto">
                            <h4>Фонарик</h4>
                            <p>Бесплатно</p>
                        </div>
                    </div>
                    <div className="banner_images_3 rad" style={{background: "#D7E6FF"}}>
                        <img src="https://s3-alpha-sig.figma.com/img/d4af/635f/d92f3acf3df745f9fac8283845bea40d?Expires=1646006400&Signature=NOIQ8P94sJPOBJ6rMzurFpoQ-4JwAP94In1ySu1niE3kyTIzCg8YRnxbE6CyvJN-~pFxAgVz9xbWrvCbKc8Z3QmxtUKxLAXlhr4FYbsg-1nKKPC--6uV5ci42Pa~UL9rGNCK2N1hMmNs7PCTSYRKzC3DeOCfculpUECdHtm2EsBVHEuC3KOdaUtWcsDcKOPdARoSb~oIrT7~Jrrj4tqIoe1IvXPP18w6FO15-WEnQQ57QsVohkDpSk3E-D5CSJnAjZptPsi1uQSF4Ou32vjrKp3XxoZbmKQyyoNLBfhY-1hAbQ8IJV2PNl3pAnJAh-2AVJvnD5txY5LOGXO-c7SnZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                        <div className="text_moto">
                            <h4>Замок</h4>
                            <p>Бесплатно</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="date_select p-4">
                <div className="px-1">
                    <div className="pb-2 px-3 text_date">Тип аренды</div>
                    <div className=" bgBtn d-none">
                        <button className="btn activeBtn">По дням</button>
                        <button className="btn">2 часа</button>
                    </div>

                    <div className="btn-group bgBtn" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"
                               checked/>
                        <label className="btn btn-outline-secondary" htmlFor="btnradio1">Тип аренды</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                                <label className="btn btn-outline-secondary" htmlFor="btnradio2">По дням</label>
                    </div>
                </div>

                <div className="date_options2 px-1">
                    <div className="pb-2 px-3 text_date">Доставка</div>
                    <select className="form-select slec" aria-label="Default select example">
                        <option selected>По адресу</option>
                        <option value="1">Самовывоз</option>
                    </select>
                </div>

                <div className="date px-1">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <p className="pb-date px-3 text_date">Время начала</p>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Дата и время начала"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </div>
                <div className="date px-1">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <p className="pb-date px-3 text_date">Время конца</p>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Дата и время конца"
                            value={value2}
                            onChange={(newValue) => {
                                setValue2(newValue);
                            }}
                        />
                    </LocalizationProvider>
                </div>
                <div className="date_options px-1">
                    <div className="pb-2 px-3 text_date">Доставка</div>
                    <select className="form-select slec" aria-label="Default select example">
                        <option selected>По адресу</option>
                        <option value="1">Самовывоз</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;