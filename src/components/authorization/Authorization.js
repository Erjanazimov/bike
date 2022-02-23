import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addLogin, addRegister, loginChange, registerChange, tokenAdd} from "../../store/authorizationSlice";


const Authorization = () => {
    const entrance = React.createRef();
    const register = React.createRef()
    const entranceRef = React.createRef();
    const registerRef = React.createRef();
    const registerState = useSelector(state => state.authorization.register);
    const loginState = useSelector(state => state.authorization.login);
    const dispatch = useDispatch();

    const entranceBtn = (e) => {
        register.current.classList.add("d-none");
        entrance.current.classList.remove("d-none")
        entrance.current.classList.add("d-block");
        e.target.classList.add("active_modal");
        registerRef.current.classList.remove("active_modal")
    }

    const registerBtn = (e) => {
        entrance.current.classList.add("d-none");
        register.current.classList.remove("d-none")
        register.current.classList.add("d-block");
        e.target.classList.add("active_modal");
        entranceRef.current.classList.remove("active_modal")
    }

    const registerBtnUser = (event) => {
        dispatch(addRegister(registerState))
        event.preventDefault();
    };

    const registerHandler = (name, e) => {
        dispatch(registerChange({[name]:e}))
    }

    const loginHandler = (name, e) => {
        dispatch(loginChange({[name]:e}))
    }

    const loginBtn = (event) => {
        dispatch(addLogin(loginState))
        event.preventDefault();
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="flex_modal">
                                <p ref={entranceRef} onClick={entranceBtn} className="active_modal">Вход</p>
                                <p ref={registerRef} onClick={registerBtn}>Регистрация</p>
                            </div>
                            {/*Войти*/}
                            <div ref={entrance} className="d-block">
                                <form onSubmit={loginBtn}>
                                    <div className="mb-4 mt-3">
                                        <label htmlFor="exampleInputNumber" className="text_date pb-2">Номер телефона*</label>
                                        <input onChange={(e) =>loginHandler("phone_number", e.target.value)}
                                               required type="tel" className="form-control" id="exampleInputNumber"
                                               aria-describedby="numberHelp" placeholder="Введите номер телефона"
                                                value={loginState.phone_number}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="text_date pb-2">Пароль*</label>
                                        <input onChange={(e) => loginHandler("password", e.target.value)}
                                               required type="password" className="form-control"
                                               id="exampleInputPassword1" placeholder="Введите пароль"
                                                value={loginState.password}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control fw-bold">Войти</button>
                                    <div className="text_a">
                                        <a href="#">Забыли пароль?</a>
                                    </div>
                                </form>
                            </div>

                            {/*Регистрация*/}
                            <div ref={register} className="d-none">
                                <form onSubmit={registerBtnUser}>
                                    <div className="mb-4 mt-3">
                                        <label htmlFor="exampleInputName" className="text_date pb-2">Имя*</label>
                                        <input data-name="name" onChange={(e) =>
                                            registerHandler("name", e.target.value)} required type="name"
                                               className="form-control" id="exampleInputName"
                                               aria-describedby="nameHelp" placeholder="Введите имя" value={registerState.name}/>
                                    </div>
                                    <div className="mb-4 mt-3">
                                        <label htmlFor="exampleInputNumber" className="text_date pb-2">Номер телефона*</label>
                                        <input onChange={(e) =>
                                            registerHandler("phone_number", e.target.value)} required type="name"
                                               className="form-control" id="exampleInputNumber"
                                               aria-describedby="numberHelp" placeholder="+999 999 999"
                                                value={registerState.phone_number}
                                        />
                                    </div>

                                    <div className="mb-4 mt-3">
                                        <label htmlFor="exampleInputEmail" className="text_date pb-2">E-mail</label>
                                        <input  onChange={(e) =>
                                            registerHandler("email", e.target.value)} required type="email"
                                               className="form-control" id="exampleInputEmail"
                                               aria-describedby="emailHelp" placeholder="Введите E-mail" value={registerState.email}/>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="text_date pb-2">Пароль*</label>
                                        <input  onChange={(e) =>
                                            registerHandler("password", e.target.value)} required
                                               type="password" className="form-control"
                                               id="exampleInputPassword1" placeholder="Введите пароль"
                                                value={registerState.password}
                                        />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input required type="checkbox"
                                               className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Согласие на обработку персональных данных</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary form-control fw-bold">Войти</button>
                                    <div className="text_a">
                                        <span className="text_date">Уже авторизованы? </span>
                                        <a href="#">Войти</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;