import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import getPathForPersonnel from "../../functions/getPathForPersonnel";


// only list performance dates for multiple performances
const getCastDates = (numberOfEvents, datesArray) => {
    if (numberOfEvents > 1) {
        return (
            <div className="cast-member_dates">
                <div>Performing</div>
                <div>{datesArray.join(", ")}</div>
            </div>
        )
    }
}

const getCastList = (events, pages) => {
    const castList = [];
    
    // create a new object for each cast member that includes performance dates
    events.forEach(event => {
       return event.roles && event.roles
        .filter(role => !role.instrumentalist)
        .forEach(role => {
            const existingEntry = castList.find(entry => entry && entry.name == role.castMember.name); // eslint-disable-line

            if (existingEntry) {
                existingEntry.dates.push(event.eventDate)
            } else {
                castList.push({ 
                    roleName: role.roleName, 
                    name: role.castMember.name,
                    headshot: role.castMember.headshot,
                    dates: [ event.eventDate ],
                    link: getPathForPersonnel(role.castMember.name, pages),
                    order: role.orderNumber,
                })
            }
       })
    })

    // sort list of cast members
    if (castList.length) {

        if (castList.find(castMember => castMember.order)) {
            castList.sort((castMember1, castMember2) => castMember1.order - castMember2.order)
        } else {
            castList.sort((a, b) => {
                if(a.roleName < b.roleName) { return -1; }
                if(a.roleName > b.roleName) { return 1; }
                return 0;
            });
        }
        
    }

    return castList;
}

const getInstrumentalists = (events, pages) => {
    // const castList = getCastList(events, pages, true)
    const castList = [];

    events.forEach(event => {
        return event.roles && event.roles
         .filter(role => role.instrumentalist)
         .forEach(role => {
             const existingEntry = castList.find(entry => entry && entry.name == role.castMember.name); // eslint-disable-line
 
             if (existingEntry) {
                 existingEntry.dates.push(event.eventDate)
             } else {
                 castList.push({ 
                     roleName: role.roleName, 
                     name: role.castMember.name,
                     headshot: role.castMember.headshot,
                     dates: [ event.eventDate ],
                     link: getPathForPersonnel(role.castMember.name, pages),
                     order: role.orderNumber,
                 })
             }
        })
     })

     castList.sort((a, b) => {
        if(a.roleName < b.roleName) { return -1; }
        if(a.roleName > b.roleName) { return 1; }
        return 0;
    });

    if (!castList.length) {
        return;
    }

    return (
        <div className="instrument-section">
            <div className="production_artists_instrumentalist-title section-title">Instrumentalists</div>
            <ul className="instrument-list">
                {castList.map(({ name, roleName, headshot, dates, link}, i) => {
                                const datesArray = dates.sort().map(date => new Date(date).toLocaleDateString("en-US", { month: 'short', day: 'numeric'}));
                                const image = getImage(headshot);
                                return (
                                    <li className="instrument-member artist" key={`instrument-member-${i}`}>
                                        <GatsbyImage className="circular-headshot" image={image} alt={`${name} headshot`}/>
                                        <div className="artist-text">
                                            <div className="instrument-member_role">{roleName}</div>
                                            <Link className="instrument-member_name artist-name"to={link}>{name}</Link>
                                            {getCastDates(events.length, datesArray)}
                                        </div>
                                    </li>
                                )
                            })}
            </ul>
        </div>
    )
}

const getCast = (events, pages) => {
    const castList = getCastList(events, pages);
    
    if (castList) {
        return (
            <div className="cast-section">
                <div className="production_artists_cast-title section-title">Cast</div>
                <ul className="cast-list">
                    {castList.map(({ name, roleName, headshot, dates, link}, i) => {
                        const datesArray = dates.sort().map(date => new Date(date).toLocaleDateString("en-US", { month: 'short', day: 'numeric'}));
                        const image = getImage(headshot);
                        return (
                            <li className="cast-member artist" key={`cast-member-${i}`}>
                                <GatsbyImage className="circular-headshot" image={image} alt={`${name} headshot`}/>
                                <div className="artist-text">
                                    <div className="cast-member_role">{roleName}</div>
                                    <Link className="cast-member_name artist-name"to={link}>{name}</Link>
                                    {getCastDates(events.length, datesArray)}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        )
    }
}

const getStaff = (staffArray, pages) => {
    if (staffArray && staffArray.length) {
        return (
            <div className="staff-section">
                <div className="production_artists_staff-title section-title">Creative Team</div>
                <ul className="staff">
                    {staffArray.sort((staff1, staff2) => staff1.title - staff2.title)
                    .map((staff, i) => {
                        const name = staff.personnel.name;
                        const image = getImage(staff.personnel.headshot)
                        const title = staff.title;
                        const link = getPathForPersonnel(name, pages);

                        return (
                            <li className="staff-member_info artist" key={`staff-member-${i}`}>
                                <GatsbyImage className="circular-headshot" image={image} alt={`${name} headshot`}/>
                                <div className="artist-text">
                                    <div className="staff-member_title">{title}</div>
                                    <Link to={link} className="staff-member_name artist-name">{name}</Link>
                                </div>
                                
                            </li>
                    )})}
                </ul>
            </div>
            
        )
        }
    }


const CastList = ({ events, staff, pages }) => {
    if (!events[0].roles) {
        return;
    }
    
    return (
        <div className="production_artists" id="#production-artists">
            {getStaff(staff, pages)}
            {getCast(events, pages)}
            {getInstrumentalists(events, pages)}
        </div>
    )
};

export default CastList;