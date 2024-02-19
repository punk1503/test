import { useState } from "react"
import "./UserCard.css"

function PhotoGallery({photos}) {
    const [currentPhotoID, setCurrentPhotoID] = useState(0)

    // TODO: add photo map (такая штука, которая показывает сколько всего картинок и на какой из них мы сейчас)
    // TODO: add code snippet display

    function returnPhotoMapSpans() {
        let resultNodes = []
        for (let i=0; i<photos.length; i++) {
            resultNodes.push(<div key={i} className={i === currentPhotoID ? "checked" : ""}></div>)
        }
        return resultNodes
    }
    return (
        <div className="photo_gallery">
            <div className="photo_map">
                {returnPhotoMapSpans().map( (mapSpan, index) => {
                    return mapSpan
                })}
            </div>
            <div className="left_button" onClick={() => {setCurrentPhotoID((currentPhotoID + photos.length - 1) % photos.length); console.log(currentPhotoID)}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            </div>
            <img src={photos[currentPhotoID]} alt="" />
            <div className="right_button" onClick={() => {setCurrentPhotoID((currentPhotoID + photos.length + 1) % photos.length); console.log(currentPhotoID)}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            </div>
        </div>
    )
}
function UserCard({name, age, description, technologies, photos}) {
    return (
        <>
            <div className={"card"}>
                <div className="card__face front">
                    <div className="card__top">
                        <PhotoGallery photos={photos}>
                        </PhotoGallery>
                        <div className="code"></div>
                    </div>
                    <div className="card__bottom">
                        <h2 className="card__name">{name}, <span className="card__age">{age}</span></h2>
                        <div className="tech__bar">
                            {technologies?.map( (tech, index) => {
                                return <div key={index} className="tech">{tech}</div>
                            })}
                        </div>
                        <div className="card_description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard