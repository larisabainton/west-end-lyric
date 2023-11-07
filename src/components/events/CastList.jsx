import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const getCastList = events => {
    const castList = [];
    
    events.forEach(event => {
       return event.roles && event.roles.forEach(role => {
            const existingEntry = castList.find(entry => entry && entry.name == role.castMember.name);

            if (existingEntry) {
                existingEntry.dates.push(event.eventDate)
            } else {
                castList.push({ 
                    roleName: role.roleName, 
                    name: role.castMember.name,
                    headshot: role.castMember.headshot,
                    dates: [ event.eventDate ] 
                })
            }
       })
    })

    if (castList.length) {
        castList.sort((castMember1, castMember2) => castMember1.roleName - castMember2.roleName);
    }

    return castList;
}

const getCast = events => {
    const castList = getCastList(events);
    
    if (castList) {
        return (
            <ul className="cast-list">
                {castList.map(({ name, roleName, headshot, dates }, i) => {
                    return (
                        <li className="cast-member_item" key={`cast-member-${i}`}>
                            <GatsbyImage className="circular-headshot" image={getImage(headshot)} alt={`${name} headshot`}/>
                            <div className="cast-member_role">{roleName}</div>
                            <div className="cast-member_name">{name}</div>
                            <div className="cast-member_dates">
                                {dates.sort().map(date => {
                                    return (<div className="cast-member_date">{new Date(date).toLocaleDateString("en-US", { month: 'short', day: 'numeric'})}</div>)
                                })}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const getStaff = staffArray => {
    if (staffArray && staffArray.length) {
        return (
            <ul className="staff">
                {staffArray.sort((staff1, staff2) => staff1.title - staff2.title)
                .map((staff, i) => {
                    const name = staff.personnel.name;
                    const image = getImage(staff.personnel.headshot)
                    const title = staff.title;

                    return (
                        <li className="staff-member_info" key={`staff-member-${i}`}>
                            <GatsbyImage className="circular-headshot" image={image} alt={`${name} headshot`}/>
                            <div className="staff-member_title">{title}</div>
                            <div className="staff-member_name">{name}</div>
                        </li>
                )})}
            </ul>
        )
        }
    }


const CastList = ({ events, staff }) => {
    if (!events[0].roles) {
        return;
    }
    
    return (
        <div className="production_artists" id="#production-artists">
            <div className="production_artists_staff-title">Creative Team</div>
            {getStaff(staff)}
            <div className="production_artists_cast-title">Cast</div>
            {getCast(events)}
        </div>
    )
};

export default CastList;