import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	Nav,
	NavLink,
	NavItem,
	NavbarBrand,
	Container,
} from "reactstrap";
export const Heading = () => {
	return (
		<div>
			<Navbar color="light">
				<Container>
					<NavbarBrand tag={Link} to="/">
						<strong>Invoices Application</strong>
					</NavbarBrand>
					<Nav>
						<NavItem>
							<NavLink tag={Link} to="/invoices/">
								<h3>Invoices</h3>
							</NavLink>
						</NavItem>
						<NavItem className="ml-3">
							<NavLink tag={Link} to="/companies/">
								<h3>Companies</h3>
							</NavLink>
						</NavItem>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};
