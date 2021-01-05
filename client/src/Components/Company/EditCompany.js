import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Alert,
} from "reactstrap";
import { GlobalContext } from "../../context/GlobalState";

export const EditCompany = (props) => {
	const { companies, editCompany } = useContext(GlobalContext);
	const [renderButton, setRenderButton] = useState(true);
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
		const checkValidation = () => {
			if (selectedCompany) {
				if (
					!selectedCompany.name.trim() ||
					!selectedCompany.contactName.trim() ||
					!selectedCompany.contactEmail.trim()
				) {
					return setRenderButton(false);
				} else {
					return setRenderButton(true);
				}
			}
			return setRenderButton(false);
		};
		checkValidation();
	}, [selectedCompany]);

	useEffect(() => {
		if (!selectedCompany) {
			history.goBack();
		}
	}, [history, selectedCompany]);
	const onChange = (e) => {
		setSelectedCompany({ ...selectedCompany, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		editCompany(selectedCompany);
		history.push("/companies");
	};

	const listOfStates = [
		"N/A",
		"Alabama",
		"Alaska",
		"American Samoa",
		"Arizona",
		"Arkansas",
		"California",
		"Colorado",
		"Connecticut",
		"Delaware",
		"District of Columbia",
		"Federated States of Micronesia",
		"Florida",
		"Georgia",
		"Guam",
		"Hawaii",
		"Idaho",
		"Illinois",
		"Indiana",
		"Iowa",
		"Kansas",
		"Kentucky",
		"Louisiana",
		"Maine",
		"Marshall Islands",
		"Maryland",
		"Massachusetts",
		"Michigan",
		"Minnesota",
		"Mississippi",
		"Missouri",
		"Montana",
		"Nebraska",
		"Nevada",
		"New Hampshire",
		"New Jersey",
		"New Mexico",
		"New York",
		"North Carolina",
		"North Dakota",
		"Northern Mariana Islands",
		"Ohio",
		"Oklahoma",
		"Oregon",
		"Palau",
		"Pennsylvania",
		"Puerto Rico",
		"Rhode Island",
		"South Carolina",
		"South Dakota",
		"Tennessee",
		"Texas",
		"Utah",
		"Vermont",
		"Virgin Island",
		"Virginia",
		"Washington",
		"West Virginia",
		"Wisconsin",
		"Wyoming",
	];

	const renderStateOptions = () => {
		return listOfStates.map((state) => <option key={state}>{state}</option>);
	};

	return (
		<Form onSubmit={onSubmit}>
			<h2>Edit vendor/supplier</h2>
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label>
							Company Name <strong>*</strong>
						</Label>
						<Input
							onChange={onChange}
							name="name"
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
							onChange={onChange}
							name="contactName"
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
							onChange={onChange}
							name="contactEmail"
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
							onChange={onChange}
							name="address"
							type="text"
							value={selectedCompany ? selectedCompany.address : ""}
						></Input>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label>Address 2</Label>
						<Input
							onChange={onChange}
							name="address2"
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
							onChange={onChange}
							name="city"
							type="text"
							value={selectedCompany ? selectedCompany.city : ""}
						></Input>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label>State</Label>
						<Input
							onChange={onChange}
							name="state"
							type="select"
							value={selectedCompany ? selectedCompany.state : ""}
						>
							{renderStateOptions()}
						</Input>
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label>Zip</Label>
						<Input
							onChange={onChange}
							name="zip"
							type="text"
							value={selectedCompany ? selectedCompany.zip : ""}
						></Input>
					</FormGroup>
				</Col>
			</Row>
			{renderButton ? (
				<>
					<Button type="submit" className="btn btn-warning" active>
						Save
					</Button>
					<Link to="/companies" className="btn btn-secondary ml-2">
						Cancel
					</Link>
					<Button
						tag={Link}
						outline
						to={`/companies/delete/${currentCompanyId}`}
						color="danger"
						className="ml-2"
					>
						Delete
					</Button>
				</>
			) : (
				<>
					<Button type="submit" className="btn btn-warning" disabled>
						Save
					</Button>
					<Link to="/companies" className="btn btn-primary ml-2">
						Cancel
					</Link>
					<Alert className="mt-2" color="danger">
						Please fill in the required fields
					</Alert>
				</>
			)}
		</Form>
	);
};
