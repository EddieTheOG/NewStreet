import { Link, Outlet } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";

export default function HiddenstreetContainer() {
    return <Container>
        <Menu>
            <Menu.Item as={ Link } name="Mobs" to="/hiddenstreet/mobs" />
            <Menu.Item as={ Link } name="Items" to="/hiddenstreet/items"  />
            <Menu.Item as={ Link } name="Classes" to="/hiddenstreet/classes"  />
        </Menu>
        <Container>
            <Outlet />
        </Container>
    </Container>;
}