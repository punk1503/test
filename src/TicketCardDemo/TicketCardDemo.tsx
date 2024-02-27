import { useState } from "react"
import "./TicketCardDemo.css"
import { isDocument } from "@testing-library/user-event/dist/utils"

export default function TicketCardDemo(props: any) {
    const [isFullSize, setIsFullSize] = useState(false)

    return(
        <>
        {isFullSize ?
            <div className="ticket_card--ghost">
            </div> : <></>

        }
        <div className={"ticket_card " + (isFullSize ? "ticket_card--enlarged" : "")} onClick={() => {setIsFullSize(!isFullSize)}}>
            {props.text}
        </div>
        </>
    )
}
