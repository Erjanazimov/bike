import React from 'react';

const Contact = () => {
    return (
        <div className="p-2 fonsMargin mb-5">
            <div className="fons_banner pg">
                <h1 className="pb-3">Контакты</h1>
                <div className="flex_contact">
                    <div>
                        <p className="text_contact">
                            <span className="text_date">Номер телефона</span>
                            <p>999 999 999 </p>
                        </p>
                        <p className="text_contact">
                            <span className="text_date">E-mail</span>
                            <p>info@bikerental.ae </p>
                        </p>
                        <p className="text_contact">
                            <span className="text_date">Адрес шоурума</span>
                            <p>Страна А, город Б, ул. АААА </p>
                        </p>
                    </div>
                    <div className="contact">
                        <p className="text_date">Оставить заявку</p>
                        <h5>Остались вопросы? Свяжитесь с нами</h5>
                        <form>
                            <div className="mb-3">
                                <input required type="name" className="form-control" placeholder="Имя*"/>
                            </div>
                            <div className="mb-3">
                                <input required placeholder="Номер телефона*" type="number" className="form-control"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input required type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
                            </div>
                            <button type="submit" className="btn btn-primary form-control">Отправить</button>
                        </form>
                    </div>
                </div>

                <div className="map">
                    <img src="https://s3-alpha-sig.figma.com/img/05ad/39c0/9af9eb64577ce42b33b704d5e898890f?Expires=1646006400&Signature=N1CYjQQ-5HkCYtl0F1XP7l-r~Y8mD30WGwnSy8egJLjtoC21gK6HgBwt~nonp~d21gAfvohh9FaOzl8O19co3aMyMR~A5OgLLA8esQJSPJHgFxOgSysIt3Afv-UfhKAeLuM2KUNQV~dc7sNX3wZbWq2eKTH4tZ6qoNpkp4XHQLisYVHqFSLQn3Ur~IeDwA88EmrGR1pNsMwCHOinER8SkgNDfWXSV4X1z99RRTfbn5pYCfs2ED2DuAsv3eDr29CIY4WWSypmgIYd69mMgsyq1dBOdU2ltOjaYNBPELst13LBr8LihzN7aZhoC5Cfqzd-WVpk-AxbDdOJ17rOMmX0VQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                </div>
        </div>
        </div>
    );
};

export default Contact;