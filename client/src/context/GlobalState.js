import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
	companies: [
		{
			id: "id1",
			name: "Los Angeles Aquarium",
			contactName: "Jurgen Klopp",
			contactEmail: "jklopp@amz.com",
			address: "10550 Ella Blvd",
			address2: "",
			city: "Los Angeles",
			state: "California",
			zip: "77038",
		},
		{
			id: "id2",
			name: "Downtown Aquarium",
			contactName: "Cyrus Main Guy",
			contactEmail: "cmainguy@cyrusone.com",
			address: "410 Bagby St",
			address2: "",
			city: "Houston",
			state: "Texas",
			zip: "77002",
		},
		{
			id: "id3",
			name: "Austin Zoo",
			contactName: "Lenny Lion",
			contactEmail: "llion@hzoo.com",
			address: "6200 Hermann Park D",
			address2: "",
			city: "Austin",
			state: "Texas",
			zip: "77030",
		},
		{
			id: "id4",
			name: "Los Angeles Zoo",
			contactName: "Seal the Lion",
			contactEmail: "llion@lazoo.com",
			address: "Los Angeles St 123",
			address2: "",
			city: "Los Angeles",
			state: "Texas",
			zip: "123321",
		},
		{
			id: "id5",
			name: "New York Zoo",
			contactName: "Thelma & Louise",
			contactEmail: "thelma@nyzoo.com",
			address: "Madison Square Garden 321",
			address2: "",
			city: "New York",
			state: "New York",
			zip: "593920",
		},
		{
			id: "id6",
			name: "Baton Rouge Aquarium",
			contactName: "Shark Shark",
			contactEmail: "shark@brouge.com",
			address: "6200 Denham Springs",
			address2: "",
			city: "Baton Rouge",
			state: "Louisiana",
			zip: "70801",
		},
	],
	invoices: [
		{
			id: "invoiceId1",
			invoiceNumber: "FL253",
			dueDate: "2020-12-30",
			amount: "500.35",
			company: "Downtown Aquarium",
			department: "Information Technology",
		},
		{
			id: "invoiceId2",
			invoiceNumber: "2545-AX",
			dueDate: "2020-10-30",
			amount: "340",
			company: "Austin Zoo",
			department: "Marketing",
		},
		{
			id: "invoiceId3",
			invoiceNumber: "CY2333",
			dueDate: "2021-01-30",
			amount: "5100.35",
			company: "Los Angeles Aquarium",
			department: "Procurement",
		},
		{
			id: "invoiceId4",
			invoiceNumber: "CY2343",
			dueDate: "2021-01-13",
			amount: "130.35",
			company: "Los Angeles Aquarium",
			department: "Finance",
		},
	],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions

	const removeCompany = (id) => {
		dispatch({
			type: "REMOVE_COMPANY",
			payload: id,
		});
	};

	const addCompany = (company) => {
		dispatch({
			type: "ADD_COMPANY",
			payload: company,
		});
	};

	const editCompany = (company) => {
		dispatch({
			type: "EDIT_COMPANY",
			payload: company,
		});
	};

	const removeInvoice = (id) => {
		dispatch({
			type: "REMOVE_INVOICE",
			payload: id,
		});
	};

	const addInvoice = (invoice) => {
		dispatch({
			type: "ADD_INVOICE",
			payload: invoice,
		});
	};
	const editInvoice = (invoice) => {
		dispatch({
			type: "EDIT_INVOICE",
			payload: invoice,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				companies: state.companies,
				invoices: state.invoices,
				removeCompany,
				addCompany,
				editCompany,
				removeInvoice,
				addInvoice,
				editInvoice,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
