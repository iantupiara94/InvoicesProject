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
import { v4 as uuid } from "uuid";

export const AddCompany = () => {
	const [newCompany, setNewCompany] = useState({
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

	useEffect(() => {
		const checkValidation = () => {
			if (
				!newCompany.name.trim() ||
				!newCompany.contactName.trim() ||
				!newCompany.contactEmail.trim()
			) {
				setRenderButton(false);
			} else {
				setRenderButton(true);
			}
		};
		checkValidation();
	}, [newCompany]);

	const onChange = (e) => {
		setNewCompany({ ...newCompany, [e.target.name]: e.target.value });
	};

	const [renderButton, setRenderButton] = useState(true);

	const { addCompany } = useContext(GlobalContext);
	const history = useHistory();

	const onSubmit = () => {
		const newCompany1 = {
			id: uuid(),
			name: newCompany.name,
			contactName: newCompany.contactName,
			contactEmail: newCompany.contactEmail,
			address: newCompany.address,
			address2: newCompany.address2,
			city: newCompany.city,
			state: newCompany.state,
			zip: newCompany.zip,
		};
		addCompany(newCompany1);
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
			<h2>Add vendor/supplier</h2>
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label>
							Company Name <strong>*</strong>
						</Label>
						<Input
							value={newCompany.name}
							onChange={onChange}
							name="name"
							type="text"
						></Input>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label>
							Contact Name <strong>*</strong>
						</Label>
						<Input
							value={newCompany.contactName}
							onChange={onChange}
							name="contactName"
							type="text"
						></Input>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label>
							Contact Email <strong>*</strong>
						</Label>
						<Input
							value={newCompany.contactEmail}
							onChange={onChange}
							name="contactEmail"
							type="email"
						></Input>
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label>Address</Label>
						<Input
							value={newCompany.address}
							onChange={onChange}
							name="address"
							type="text"
						></Input>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label>Address 2</Label>
						<Input
							value={newCompany.address2}
							onChange={onChange}
							name="address2"
							type="text"
						></Input>
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label>City</Label>
						<Input
							value={newCompany.city}
							onChange={onChange}
							name="city"
							type="text"
						></Input>
					</FormGroup>
				</Col>
				<Col md={4}>
					<FormGroup>
						<Label>State</Label>
						<Input
							value={newCompany.state}
							onChange={onChange}
							name="state"
							type="select"
						>
							{renderStateOptions()}
						</Input>
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label>Zip</Label>
						<Input
							value={newCompany.zip}
							onChange={onChange}
							name="zip"
							type="text"
						></Input>
					</FormGroup>
				</Col>
			</Row>
			{renderButton ? (
				<>
					<Button type="submit" className="btn btn-success" active>
						Add
					</Button>
					<Link to="/companies" className="btn btn-secondary ml-2">
						Cancel
					</Link>
				</>
			) : (
				<>
					<Button type="submit" className="btn btn-success" disabled>
						Add
					</Button>
					<Link to="/companies" className="btn btn-secondary ml-2">
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
