import {useContext}from "react";
import { CreateContext } from '../context/context';


const Modal = () => {
    const { closeModalHandler,addBasketHandler, } = useContext(CreateContext)
  return (
    <div className="modal">
      <div className="modal__block">
        <h2 className="modal__block-title">Добавить в корзину</h2>
        <div className="modal__block-button">
          <button className="button green"onClick={addBasketHandler}>Да</button>
          <button className="button red" onClick={closeModalHandler}>Нет</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
