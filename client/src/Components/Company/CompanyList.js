import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { ListGroup, ListGroupItem, Button, Container, Row } from "reactstrap";
import { SearchBar } from "../SearchBar";

export const CompanyList = () => {
	const { companies } = useContext(GlobalContext);
	const [search, setSearch] = useState("");

	const filteredCompanies = companies
		.filter((company) => {
			return (
				company.name.toLowerCase().includes(search.toLowerCase()) ||
				company.city.toLowerCase().includes(search.toLowerCase())
			);
		})
		.sort((a, b) => (a.name > b.name ? 1 : -1));

	// Another way to do a filtered companies, but with all the keys of the object
	// const filteredCompanies = companies.filter((company) => {
	// 	return Object.keys(company).some((key) =>
	// 		company[key].toLowerCase().includes(search.toLowerCase())
	// 	);
	// });

	// Helper function to render company items
	const renderCompanies = () => {
		return filteredCompanies.map((company) => {
			return (
				<ListGroupItem key={company.id} className="d-flex">
					<Container>
						<Row>
							<div>
								<strong className="mr-2"> {company.name}</strong>
								<div className="item"> {company.city}</div>
							</div>
							<div className="ml-auto">
								<Link
									to={`/companies/view/${company.id}`}
									className="mr-2 btn btn-primary"
								>
									View
								</Link>
								<Link
									to={`/companies/edit/${company.id}`}
									className="btn btn-warning"
								>
									Edit
								</Link>
								<Button
									tag={Link}
									outline
									to={`/companies/delete/${company.id}`}
									color="danger"
									className="ml-2"
								>
									Delete
								</Button>
							</div>
						</Row>
					</Container>
				</ListGroupItem>
			);
		});
	};

	return (
		<>
			<SearchBar
				setSearch={setSearch}
				value={search}
				placeholder="Search by Company or City"
			/>
			<ListGroup className="mt-4">
				{filteredCompanies.length > 0 ? (
					renderCompanies()
				) : (
					<h4>No Companies</h4>
				)}
			</ListGroup>
		</>
	);
};
