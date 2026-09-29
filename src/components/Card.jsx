import "./css/Card.css"

function Card(props){
    // props.name = "akita"
    return(
        <main className="card">
            <h1>Name: {props.name}</h1>
            <p>Course: {props.course}</p>
            <p>Age:{props.age}</p>
            <p> profession:{props.profession}</p>
        </main>
    )
}

export default Card;