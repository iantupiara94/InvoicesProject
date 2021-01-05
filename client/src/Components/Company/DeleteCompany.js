import React, { useState, useEffect, useContext } from "react";
import { ReusableModal } from "../ReusableModal";
import { GlobalContext } from "../../context/GlobalState";
import history from "../../history";

export const DeleteCompany = (props) => {
	const { companies, removeCompany } = useContext(GlobalContext);
	const currentCompanyId = props.match.params.id;

	const [selectedCompany, setSelectedCompany] = useState({});

	useEffect(() => {
		const companyId = currentCompanyId;
		const selectedCompany = companies.find(
			(company) => company.id === companyId
		);
		setSelectedCompany(selectedCompany);
	}, [currentCompanyId, companies]);

	const actions = (
		<>
			<button
				onClick={() => {
					history.goBack();
					removeCompany(selectedCompany.id);
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

	const content = selectedCompany ? (
		<h6>
			Are you sure you want to delete <strong> {selectedCompany.name} </strong>
		</h6>
	) : (
		<h6> Delete Company Error, please go back to list of companies</h6>
	);

	return (
		<div>
			{selectedCompany ? (
				<ReusableModal
					title="Delete Stream"
					content={content}
					actions={actions}
					onDismiss={() => history.goBack()}
				/>
			) : (
				<div>
					<h1>Error, please go back to list of companies</h1>
				</div>
			)}
		</div>
	);
};
