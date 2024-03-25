
const Basket = ({basket}) => {
    
  return (
    <div className="basket">
    {basket.map((el, i) => (
        <span key = {i} className="basket__span">{el}</span>
    ))}
    </div>
  )
}

export default Basket