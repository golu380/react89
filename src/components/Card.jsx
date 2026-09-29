import "./css/Card.css"

function Card(props){
    // props.name = "akita"
    return(
        <main className="card">
            <h1>Name: {props.name}</h1>
            <p>Id: {props.id}</p>
            <p>marks:{props.marks}</p>
            <p> City:{props.city}</p>
        </main>
    )
}

export default Card;