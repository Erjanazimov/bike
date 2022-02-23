import React from 'react';

const ModalContact = () => {
    return (
        <div className="modal fade" id="exampleModalContact" tabIndex="-1" aria-labelledby="exampleModalLabelContact"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLabel">Есть вопросы? Оставьте номер, и мы всё обсудим</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="exampleInputName" className="text_date pb-2">Имя*</label>
                                <input required type="name" className="form-control" id="exampleInputName"
                                       aria-describedby="nameHelp" placeholder="Введите имя"/>
                            </div>
                            <div className="mb-4 mt-3">
                                <label htmlFor="exampleInputNumber" className="text_date pb-2">Номер телефона*</label>
                                <input required type="number" className="form-control" id="exampleInputNumber"
                                       aria-describedby="numberHelp" placeholder="Введите номер телефона"/>
                            </div>
                            <button type="submit" className="btn btn-primary form-control fw-bold">Отправить</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalContact;