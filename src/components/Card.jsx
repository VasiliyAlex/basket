import { useContext } from 'react'
import { CreateContext } from '../context/context'

const Card = ({cardsList}) => {
  
  const { openModalHandler} = useContext(CreateContext)
  
  return (
    <div className="card__box">
      {cardsList.map((card) => (
        <div key={card.id} className="cards__item" onClick={() => openModalHandler(card.title)}>
          <img className="card__img"  src={card.thumbnail} alt="" />
          <h2 className="card__title">Название товара: {card.title}</h2>
          <p className="card__description">
            Описание товара: {card.description}
          </p>
          <p className="card__price">Цена товара:{card.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
