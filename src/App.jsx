import { useState, useRef, useEffect } from "react";
import "./assets/styles/main.scss";
import { CreateContext } from "./context/context";
import Cards from "./components/Cards";
import cards from "./data.js";
import Load from "./components/Load";

function App() {
  
  useEffect(() => {
    setTimeout(() => {setLoad(true)}, 2000);
  }, []);
  
 
  
  const [load, setLoad] = useState(false);
  const [basket, setBasket] = useState([]);
  const [modal, setModal] = useState(false);
  const basketList = useRef(false);
  const basketModal = useRef(null);
  const [searchValue, setSearchValue] = useState('')
  
  const filteredCards = cards.filter((card) => card.title.toLowerCase().includes(searchValue.toLowerCase()))
  
  const setSearchingHandler = (val) => {
    setSearchValue(val)
  }
  
  const addBasketHandler = () => {
    basket.map((item) => {
      if (item == basketModal.current) {
        basketList.current = true
      }
    });
    !!basketList.current ? setBasket([...basket]) : setBasket([...basket, basketModal.current])
    closeModalHandler();
    basketList.current = false
    console.log(filteredCards);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  const openModalHandler = (card) => {
    setModal(true);
    basketModal.current = card;
  };

  return (
    <CreateContext.Provider
      value={{
        closeModalHandler,
        openModalHandler,
        addBasketHandler,
        setSearchingHandler,
      }}
    >
      {!load && <Load/>}
      {load && <Cards basket={basket} modal={modal} cardsList = {filteredCards} />}
      
      
    </CreateContext.Provider>
  );
}

export default App;