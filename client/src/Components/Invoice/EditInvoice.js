import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import {
	Col,
	Row,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Alert,
} from "reactstrap";

export const EditInvoice = (props) => {
	const { invoices, editInvoice, companies } = useContext(GlobalContext);
	const [renderButton, setRenderButton] = useState(true);
	const [selectedInvoice, setSelectedInvoice] = useState({
		invoiceNumber: "",
		dueDate: "",
		amount: "",
		company: "",
	});

	const history = useHistory();
	const currentInvoiceId = props.match.params.id;

	useEffect(() => {
		const invoiceId = currentInvoiceId;
		const selectedInvoice = invoices.find(
			(invoice) => invoice.id === invoiceId
		);
		setSelectedInvoice(selectedInvoice);
	}, [currentInvoiceId, invoices]);

	useEffect(() => {
		const checkValidation = () => {
			if (selectedInvoice) {
				if (
					!selectedInvoice.invoiceNumber.trim() ||
					!selectedInvoice.dueDate.trim() ||
					!selectedInvoice.amount.trim() ||
					!selectedInvoice.company.trim()
				) {
					return setRenderButton(false);
				} else {
					return setRenderButton(true);
				}
			}
			return setRenderButton(false);
		};
		checkValidation();
	}, [selectedInvoice]);

	useEffect(() => {
		if (!selectedInvoice) {
			history.goBack();
		}
	}, [history, selectedInvoice]);

	const onChange = (e) => {
		setSelectedInvoice({ ...selectedInvoice, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		editInvoice(selectedInvoice);
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
			<h2>Edit invoice</h2>
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label>Invoice Number</Label>
						<Input
							value={selectedInvoice ? selectedInvoice.invoiceNumber : ""}
							onChange={onChange}
							name="invoiceNumber"
							type="text"
						></Input>
					</FormGroup>
				</Col>
				<Col md={2}>
					<FormGroup>
						<Label>Due Date</Label>
						<Input
							value={selectedInvoice ? selectedInvoice.dueDate : ""}
							onChange={onChange}
							name="dueDate"
							type="date"
						></Input>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label>Amount ($)</Label>
						<Input
							value={selectedInvoice ? selectedInvoice.amount : ""}
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
						<Label>Company</Label>
						<Input
							value={selectedInvoice ? selectedInvoice.company : ""}
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
							value={selectedInvoice ? selectedInvoice.department : ""}
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
					<Button type="submit" className="btn btn-warning">
						Save
					</Button>
					<Link to="/invoices" className="btn btn-secondary ml-2">
						Cancel
					</Link>
					<Button
						tag={Link}
						outline
						to={`/invoices/delete/${currentInvoiceId}`}
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
					<Link to="/invoices" className="btn btn-primary ml-2">
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
