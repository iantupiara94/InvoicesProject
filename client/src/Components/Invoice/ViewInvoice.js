import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { GlobalContext } from "../../context/GlobalState";

export const ViewInvoice = (props) => {
	const { invoices } = useContext(GlobalContext);
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
		if (!selectedInvoice) {
			history.goBack();
		}
	}, [history, selectedInvoice]);

	const linkToEdit = selectedInvoice
		? `/invoices/edit/${selectedInvoice.id}`
		: "null";

	return (
		<Form>
			<h2>View Invoice</h2>
			<Row form>
				<Col md={4}>
					<FormGroup>
						<Label>
							Invoice Number <strong>*</strong>
						</Label>
						<Input
							disabled
							value={selectedInvoice ? selectedInvoice.invoiceNumber : ""}
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
							disabled
							value={selectedInvoice ? selectedInvoice.dueDate : ""}
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
							disabled
							value={selectedInvoice ? selectedInvoice.amount : ""}
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
							disabled
							value={selectedInvoice ? selectedInvoice.company : ""}
							name="company"
							type="text"
						></Input>
					</FormGroup>
				</Col>
				<Col md={6}>
					<FormGroup>
						<Label>Department</Label>
						<Input
							disabled
							value={selectedInvoice ? selectedInvoice.department : ""}
							name="department"
							type="text"
						></Input>
					</FormGroup>
				</Col>
			</Row>
			<Link to={linkToEdit} className="btn btn-warning">
				Edit this form
			</Link>
			<Link to="/invoices" className="btn btn-secondary ml-2">
				Go Back
			</Link>
		</Form>
	);
};
