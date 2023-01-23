import { Link, Outlet } from "react-router-dom";
import { Container, Divider, Header, Image, Menu } from "semantic-ui-react";
import './hiddenstreet.css';

export default function HiddenstreetContainer() {
    return <Container className="hidden-street">
        <Image src='/src/assets/maple_header.jpg' className='maple-header' fluid />
        <Divider />
        <Menu compact>
            <Menu.Item as={ Link } name="Mobs" to="/hiddenstreet/mobs" />
            <Menu.Item as={ Link } name="Items" to="/hiddenstreet/items"  />
            <Menu.Item as={ Link } name="Classes" to="/hiddenstreet/classes"  />
        </Menu>
        <Divider />
        <Container>
            <Outlet />
        </Container>
    </Container>;
}