import React from 'react';
import locationIcon from '../assets/LocationIcon.png';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image">
                <img
                    className="image"
                    src={props.item.imageURL}
                    alt="location"
                />
            </div>
            <div className="card--info">
                <div className="card--info--header">
                    <img
                        className="locationIcon"
                        src={locationIcon}
                        alt="map icon"
                    />

                    <span className="location">{props.item.location}</span>
                    <a className="mapLink" href={props.item.mapLink}>
                        View on Google Maps
                    </a>
                    <h2 className="place">{props.item.place}</h2>
                </div>
                <div className="card--info--date">
                    <strong>
                        {props.item.startDMY} - {props.item.endDMY}
                    </strong>
                </div>
                <span className="card--info--description">
                    {props.item.description}
                </span>
            </div>
        </div>
    );
}

// {
//     imageURL,
//     location,
//     mapLink,
//     place,
//     startDMY,
//     endDMY,
//     description,
// }
