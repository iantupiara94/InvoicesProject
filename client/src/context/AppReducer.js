/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
	switch (action.type) {
		case "REMOVE_COMPANY":
			return {
				...state,
				companies: state.companies.filter((company) => {
					return company.id !== action.payload;
				}),
			};
		case "ADD_COMPANY":
			return {
				...state,
				companies: [action.payload, ...state.companies],
			};

		case "EDIT_COMPANY":
			const updateCompany = action.payload;

			const updateCompanies = state.companies.map((company) => {
				if (company.id === updateCompany.id) {
					return updateCompany;
				}
				return company;
			});

			return {
				...state,
				companies: updateCompanies,
			};

		case "REMOVE_INVOICE":
			return {
				...state,
				invoices: state.invoices.filter((invoice) => {
					return invoice.id !== action.payload;
				}),
			};

		case "ADD_INVOICE":
			return {
				...state,
				invoices: [action.payload, ...state.invoices],
			};

		case "EDIT_INVOICE":
			const updateInvoice = action.payload;

			const updateInvoices = state.invoices.map((invoice) => {
				if (invoice.id === updateInvoice.id) {
					return updateInvoice;
				}
				return invoice;
			});

			return { ...state, invoices: updateInvoices };

		default:
			return state;
	}
};
