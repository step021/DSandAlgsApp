import React from 'react';
import { SideMenuContainer, SideMenuLink } from './SideMenuStyle';
import { useLocation } from 'react-router-dom';
import SideMenuTopics from './SideMenuTopics';
import { Link } from 'react-scroll';

function SideMenu() {
    const location = useLocation();
    const path = location.pathname;
    const mainRoute = path.split('/')[1];
    const topics = SideMenuTopics[mainRoute] || [];

    return (
        <SideMenuContainer>
            {topics.map((topic, index) => (
                <Link
                    key={index}
                    to={topic.href.replace('#', '')}
                    spy={true}
                    smooth={true}
                    offset={-100} // Adjust this to the height of your navbar
                    duration={500}
                >
                    <SideMenuLink as="div">
                        {topic.label}
                    </SideMenuLink>
                </Link>
            ))}
        </SideMenuContainer>
    );
}

export default SideMenu;
