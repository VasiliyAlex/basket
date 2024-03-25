import { useRef, useEffect, useState, useContext } from "react";
import { CreateContext } from '../context/context'
import Card from "./Card";
import Basket from "../components/Basket";
import Modal from "./Modal";

const Cards = ({ basket, modal, cardsList }) => {
  
  const [search, setSearch] = useState('')
  const isMounted = useRef(false)
  const { setSearchingHandler} = useContext(CreateContext)
  
  useEffect(() => {
    if(isMounted.current) {
      setSearchingHandler(search)
    }
    isMounted.current = true
   
  },[search])
  
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    
   
    
    <div className="cards">
      <div className="container">
        <div className="cards__box">
          <h1 className="cards__box-title">ТЕСТОВОЕ ЗАДАНИЕ ПО REACT</h1>
          <input
          ref={inputRef} 
          className="cards__box-button"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          ></input>
          <Card cardsList={cardsList} />
          {!!basket.length && <Basket basket={basket} />}
          {modal && <Modal />}
        </div>
      </div>
    </div>
  );
};

export default Cards;
