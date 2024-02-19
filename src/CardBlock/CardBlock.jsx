import UserCard from "../UserCard/UserCard"
import "./CardBlock.css"

export default function CardBlock({card_data}) {
    return (
        <>
            <div className="cards">
                <UserCard {...card_data}/>
            </div>
        </>
    )
}