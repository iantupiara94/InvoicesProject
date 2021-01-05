import React, { useContext, useEffect, useState } from "react";
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

export const AddInvoice = () => {
	const [newInvoice, setNewInvoice] = useState({
		invoiceNumber: "",
		dueDate: "",
		amount: "",
		company: "",
	});

	useEffect(() => {
		const checkValidation = () => {
			if (
				!newInvoice.invoiceNumber.trim() ||
				!newInvoice.dueDate.trim() ||
				!newInvoice.amount.trim() ||
				!newInvoice.company.trim()
			) {
				setRenderButton(false);
			} else {
				setRenderButton(true);
			}
		};
		checkValidation();
	}, [newInvoice]);

	const onChange = (e) => {
		setNewInvoice({ ...newInvoice, [e.target.name]: e.target.value });
	};

	const [renderButton, setRenderButton] = useState(true);

	const { addInvoice, companies } = useContext(GlobalContext);
	const history = useHistory();

	const onSubmit = () => {
		const newInvoice1 = {
			id: uuid(),
			invoiceNumber: newInvoice.invoiceNumber,
			dueDate: newInvoice.dueDate,
			amount: newInvoice.amount,
			company: newInvoice.company,
			department: newInvoice.department,
		};
		addInvoice(newInvoice1);
		history.push("/invoices");
	};

	const listOfDepartments = [
		"N/A",
		"Information Technology",
		"Human Resources",
		"Finance",
		"Marketing",
	];

	const renderDepartmentOptions = () => {
		return listOfDepartments.map((department) => (
			<option key={department}>{department}</option>
		));
	};

	const orderedCompanies = companies.sort((a, b) => (a.name < b.name ? 1 : -1));

	const renderCompanyOptions = () => {
		return orderedCompanies
			.map((company) => <option key={company.name}>{company.name}</option>)
			.sort((a, b) => (a.name > b.name ? 1 : -1));
	};
	return (
		<Form onSubmit={onSubmit}>
			<h2>Add new invoice</h2>
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label>
							Invoice Number <strong>*</strong>
						</Label>
						<Input
							value={newInvoice.invoiceNumber}
							onChange={onChange}
							name="invoiceNumber"
							type="text"
						></Input>
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label>
							Due Date <strong>*</strong>
						</Label>
						<Input
							value={newInvoice.dueDate}
							onChange={onChange}
							name="dueDate"
							type="date"
						></Input>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label>
							Amount ($) <strong>*</strong>
						</Label>
						<Input
							value={newInvoice.amount}
							onChange={onChange}
							name="amount"
							type="number"
						></Input>
					</FormGroup>
				</Col>
			</Row>
			<Row form>
				<Col md={6}>
					<FormGroup>
						<Label>
							Company <strong>*</strong>
						</Label>
						<Input
							value={newInvoice.company}
							onChange={onChange}
							name="company"
							type="select"
						>
							<option>N/A</option>
							{renderCompanyOptions()}
						</Input>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label>Department</Label>
						<Input
							value={newInvoice.department}
							onChange={onChange}
							name="department"
							type="select"
						>
							{renderDepartmentOptions()}
						</Input>
					</FormGroup>
				</Col>
			</Row>
			{renderButton ? (
				<>
					<Button type="submit" className="btn btn-success">
						Add
					</Button>
					<Link to="/invoices" className="btn btn-secondary ml-2">
						Cancel
					</Link>
				</>
			) : (
				<>
					<Button type="submit" className="btn btn-success" disabled>
						Add
					</Button>
					<Link to="/invoices" className="btn btn-secondary ml-2">
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
