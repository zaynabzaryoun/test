import { NavLink } from 'react-router-dom';
const  Nav = () => {
    let activeStyle = {
        color: "red",
    };
    return(
        <nav>
            <ul>
                <li>
                    <NavLink
                     to="/courses"
                     style={({ isActive }) => (isActive ? activeStyle : undefined)}
                     >
                         courses
                     </NavLink>
                </li>
                <li>
                    <NavLink 
                    to ="/about"
                    style={({isActive}) => (isActive ? activeStyle : undefined)}
                    >
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <span style={isActive ? activeStyle : undefined}>home</span>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;