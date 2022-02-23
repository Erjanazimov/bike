import React from 'react';
import {useSelector} from "react-redux";

const Personal = () => {
    const loginAuthState = useSelector(state => state.authorization.loginAuth)

    return (
        <div className="p-2 fonsMargin">
            <div className="fons_banner px">
                <div>
            {loginAuthState ?
                <div>
                    <h1>Личный кабинет</h1>
                </div>

                : <h2>Войдите в свой аккаунт</h2>
            }
        </div>
            </div>
        </div>
    );
};

export default Personal;