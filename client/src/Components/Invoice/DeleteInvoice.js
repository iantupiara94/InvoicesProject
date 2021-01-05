import React, { useContext, useEffect, useState } from "react";
import { ReusableModal } from "../ReusableModal";
import { GlobalContext } from "../../context/GlobalState";
import history from "../../history";

export const DeleteInvoice = (props) => {
	const { invoices, removeInvoice } = useContext(GlobalContext);
	const currentInvoiceId = props.match.params.id;

	const [selectedInvoice, setSelectedInvoice] = useState({});

	useEffect(() => {
		const invoiceId = currentInvoiceId;
		const selectedInvoice = invoices.find(
			(invoice) => invoice.id === invoiceId
		);

		setSelectedInvoice(selectedInvoice);
	}, [currentInvoiceId, invoices]);

	const actions = (
		<>
			<button
				onClick={() => {
					history.goBack();
					removeInvoice(selectedInvoice.id);
				}}
				className="ui button negative"
			>
				Delete
			</button>
			<button onClick={() => history.goBack()} className="ui button">
				Cancel
			</button>
		</>
	);

	const content = selectedInvoice ? (
		<h6>
			Are you sure you want to delete{" "}
			<strong>{selectedInvoice.invoiceNumber}</strong>
		</h6>
	) : (
		<h6> Delete Invoice Error, please go back to list of invoices</h6>
	);
	return (
		<div>
			{selectedInvoice ? (
				<ReusableModal
					title="Delete Invoice"
					content={content}
					actions={actions}
					onDismiss={() => history.goBack()}
				/>
			) : (
				<div>
					<h1>Error, please go back to List of invoices</h1>
				</div>
			)}
		</div>
	);
};
