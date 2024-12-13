import React from 'react';
import Slider from 'react-slick';
import team1 from '../img/team/team1.jpg';
import team2 from '../img/team/team2.jpg';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Rohan Lamghare',
            role: 'CEO',
            image: team1,
            socialLinks: {
                twitter: '#',
                linkedin: '#',
            },
        },
        {
            id: 2,
            name: 'Dinesh Salunke',
            role: 'CTO',
            image: team2,
            socialLinks: {
                twitter: '#',
                linkedin: '#',
            },
        },
        {
            id: 3,
            name: 'Nachiket Khambete',
            role: 'COO',
            image: team1,
            socialLinks: {
                twitter: '#',
                linkedin: '#',
            },
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <section className="team">
            <h2 className="team-heading py-5">Meet Our Team</h2>
            <div className="team-members desktop-view">
                {teamMembers.map(member => (
                    <div key={member.id} className="team-member">
                        <div className="member-img" style={{ backgroundImage: `url(${member.image})` }}>
                            <div className="gradient-overlay">
                                <div className="member-info">
                                    <h4>{member.name}</h4>
                                    <span>{member.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="team-slider mobile-view">
                <Slider {...sliderSettings}>
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-member">
                            <div className="member-img" style={{ backgroundImage: `url(${member.image})` }}>
                                <div className="gradient-overlay">
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        <span>{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Team;
