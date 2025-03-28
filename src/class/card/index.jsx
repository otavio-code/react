export const Card = ({ title, description, image}) => {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}