import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const getLink = (name, pages) => {
    const page = pages.find(page => page.node.pageContext && page.node.pageContext.name === name)

    return page.node.path;
}

const getHeadshot = (name, headshot) => {
    const image = getImage(headshot);
    
    if (image) {
        return <GatsbyImage className="circular-headshot" image={image} alt={`${name} headshot`}/>
    }
}

const getCastList = (events, pages) => {
    const castList = [];
    
    events.forEach(event => {
       return event.roles && event.roles.forEach(role => {
            const existingEntry = castList.find(entry => entry && entry.name == role.castMember.name); // eslint-disable-line

            if (existingEntry) {
                existingEntry.dates.push(event.eventDate)
            } else {
                castList.push({ 
                    roleName: role.roleName, 
                    name: role.castMember.name,
                    headshot: role.castMember.headshot,
                    dates: [ event.eventDate ],
                    link: getLink(role.castMember.name, pages),
                })
            }
       })
    })

    if (castList.length) {
        castList.sort((a, b) => {
            if(a.roleName < b.roleName) { return -1; }
            if(a.roleName > b.roleName) { return 1; }
            return 0;
        });
    }

    return castList;
}

const getCast = (events, pages) => {
    const castList = getCastList(events, pages);
    
    if (castList) {
        return (
            <ul className="cast-list">
                {castList.map(({ name, roleName, headshot, dates, link}, i) => {
                    const datesArray = dates.sort().map(date => new Date(date).toLocaleDateString("en-US", { month: 'short', day: 'numeric'}));

                    return (
                        <li className="cast-member artist" key={`cast-member-${i}`}>
                            {getHeadshot(name, headshot)}
                            <div className="artist-text">
                                <div className="cast-member_role">{roleName}</div>
                                <Link className="cast-member_name artist-name"to={link}>{name}</Link>
                                <div className="cast-member_dates">
                                    <div>Performing</div>
                                    <div>{datesArray.join(", ")}</div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const getStaff = (staffArray, pages) => {
    if (staffArray && staffArray.length) {
        return (
            <ul className="staff">
                {staffArray.sort((staff1, staff2) => staff1.title - staff2.title)
                .map((staff, i) => {
                    const name = staff.personnel.name;
                    const image = getImage(staff.personnel.headshot)
                    const title = staff.title;
                    const link = getLink(name, pages);

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
        )
        }
    }


const CastList = ({ events, staff, pages }) => {
    if (!events[0].roles) {
        return;
    }
    
    return (
        <div className="production_artists" id="#production-artists">
            <div className="production_artists_staff-title section-title">Creative Team</div>
            {getStaff(staff, pages)}
            <div className="production_artists_cast-title section-title">Cast</div>
            {getCast(events, pages)}
        </div>
    )
};

export default CastList;