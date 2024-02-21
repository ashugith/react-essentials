function Card ({id , name , info , image , price}) {
    return (
    <div className="card">
        <img src={image} className="image"></img>
        <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
    </div>
    )

}
export default Card
