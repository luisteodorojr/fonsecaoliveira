import React from 'react';

const ModalComponent = ({ showModal, closeModal }) => {
    return (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Mensagem Enviada!</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>Agradecemos seu contato! Sua mensagem foi enviada com sucesso e vamos ler e responder assim que possível.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
