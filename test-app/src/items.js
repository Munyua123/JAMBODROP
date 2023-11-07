function Card({name , photo}) {
    
    return (
        <>
        <div className="card">
        <h5 className="card-title" >{name}</h5>
        <img src={photo} alt={name} style={{width: "18rem"}}/>
        <h3>Favorite snacks</h3>
        <ul>
        </ul>
        </div>
        </>
    )
}

export default Card