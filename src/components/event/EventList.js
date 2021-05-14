import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider.js"


export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)
    const history = useHistory()

    useEffect(() => {
        getEvents()
    }, [])


    const getDateTime = (date) => new Date(date)

    return (

        <>
        <button className="btn btn-2 btn-sep icon-create"
            onClick={() => {
                history.push({ pathname: "/events/new" })
            }}
                >Create New Event</button>

        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <div className="registration__game">{event.game.title}</div>
                        <div>{event.description}</div>
                        <div>
                           {
                                getDateTime(event.date).toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })
                            }
                            &nbsp;@ {getDateTime(event.date).toTimeString()}
                        </div>
                    </section>
                })
            }
        </article >
    </>
    )
}