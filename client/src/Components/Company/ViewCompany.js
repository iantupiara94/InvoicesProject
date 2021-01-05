import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { GlobalContext } from "../../context/GlobalState";

export const ViewCompany = (props) => {
	const { companies } = useContext(GlobalContext);
	const [selectedCompany, setSelectedCompany] = useState({
		id: "",
		name: "",
		contactName: "",
		contactEmail: "",
		address: "",
		address2: "",
		city: "",
		state: "",
		zip: "",
	});
	const history = useHistory();

	const currentCompanyId = props.match.params.id;

	useEffect(() => {
		const companyId = currentCompanyId;
		const selectedCompany = companies.find(
			(company) => company.id === companyId
		);
		setSelectedCompany(selectedCompany);
	}, [currentCompanyId, companies]);

	useEffect(() => {
		if (!selectedCompany) {
			history.goBack();
		}
	}, [history, selectedCompany]);

	const linkToEdit = selectedCompany
		? `/companies/edit/${selectedCompany.id}`
		: "null";

	return (
		<Form>
			<h2>View vendor/supplier</h2>
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label>
							Company Name <strong>*</strong>
						</Label>
						<Input
							disabled
							type="text"
							value={selectedCompany ? selectedCompany.name : ""}
						></Input>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label>
							Contact Name <strong>*</strong>
						</Label>
						<Input
							disabled
							type="text"
							value={selectedCompany ? selectedCompany.contactName : ""}
						></Input>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label>
							Contact Email <strong>*</strong>
						</Label>
						<Input
							disabled
							type="email"
							value={selectedCompany ? selectedCompany.contactEmail : ""}
						></Input>
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label>Address</Label>
						<Input
							disabled
							type="text"
							value={selectedCompany ? selectedCompany.address : ""}
						></Input>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label>Address 2</Label>
						<Input
							disabled
							type="text"
							value={selectedCompany ? selectedCompany.address2 : ""}
						></Input>
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label>City</Label>
						<Input
							disabled
							type="text"
							value={selectedCompany ? selectedCompany.city : ""}
						></Input>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label>State</Label>
						<Input
							disabled
							type="text"
							value={selectedCompany ? selectedCompany.state : ""}
						></Input>
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label>Zip</Label>
						<Input
							disabled
							type="text"
							value={selectedCompany ? selectedCompany.zip : ""}
						></Input>
					</FormGroup>
				</Col>
			</Row>
			<Link to={linkToEdit} className="btn btn-warning">
				Edit this form
			</Link>
			<Link to="/companies" className="btn btn-secondary ml-2">
				Go Back
			</Link>
		</Form>
	);
};
