import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import {
	ListGroup,
	ListGroupItem,
	Row,
	Col,
	Container,
	Button,
} from "reactstrap";
import { SearchBar } from "../SearchBar";

export const InvoiceList = () => {
	const { invoices } = useContext(GlobalContext);
	const [search, setSearch] = useState("");

	const filteredInvoices = invoices
		.filter((invoice) => {
			return (
				invoice.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
				invoice.company.toLowerCase().includes(search.toLowerCase()) ||
				invoice.amount.includes(search)
			);
		})
		.sort((a, b) => (a.dueDate < b.dueDate ? 1 : -1));

	// Helper function to render invoice items
	const renderInvoices = () => {
		return filteredInvoices.map((invoice) => {
			return (
				<ListGroupItem key={invoice.id} className="d-flex">
					<Container fluid={true}>
						<Row>
							<Col xs="6" sm="12" md="4">
								<strong className=""> {invoice.invoiceNumber}</strong>
								<div className="item">{invoice.company}</div>
							</Col>
							<Col xs="6" sm="6" md="4">
								<strong className=""> Due Date: {invoice.dueDate}</strong>
								<div className=" item"> Amount: {invoice.amount}</div>
							</Col>
							<Col md="4" xs="12" className="mt-2">
								<Row className="float-right">
									<Col xs="4">
										<Link
											to={`/invoices/view/${invoice.id}`}
											className="btn btn-primary"
										>
											View
										</Link>
									</Col>
									<Col xs="4">
										<Link
											to={`/invoices/edit/${invoice.id}`}
											className="btn btn-warning"
										>
											Edit
										</Link>
									</Col>
									<Col xs="4">
										<Button
											tag={Link}
											outline
											to={`/invoices/delete/${invoice.id}`}
											color="danger"
											className=""
										>
											Delete
										</Button>
									</Col>
								</Row>
							</Col>
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
				placeholder="Search by Invoice Number, Company or Amount"
			/>
			<ListGroup className="mt-4">
				{filteredInvoices.length > 0 ? renderInvoices() : <h4> No Invoices</h4>}
			</ListGroup>
		</>
	);
};
