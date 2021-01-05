import React from "react";
import { InvoiceList } from "./InvoiceList";
import { Link } from "react-router-dom";
export const Invoice = () => {
	return (
		<div>
			<h1>Invoices</h1>
			<Link to="/invoices/add" className="btn btn-primary">
				Add Invoice
			</Link>
			<br />
			<br />
			<InvoiceList />
		</div>
	);
};
