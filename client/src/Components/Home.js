import React from "react";
import "./Home.css";

export const Home = () => {
	return (
		<>
			<h1>Invoices Application</h1>
			<h5>
				Simple invoices CRUD application developed in React JS using Context for
				state management. All the components are functional.
			</h5>

			<h5>Description:</h5>
			<p>
				The first step is to input a Company into the system. To do so, the user
				needs to have three pieces of data: Company Name, Contact Name, Contact
				Email. These three items are mandatory. Additionaly, the user can enter
				address information.
			</p>
			<p>
				After the company is created, the user can view, edit and delete the
				information if needed. A list of companies ordered by name is also
				displayed with a search bar that filters by company name and city.
			</p>
			<p>
				After creating a company, the user can enter the invoice information.
				All the invoice fields are mandatory. They are: Invoice Number, Due
				Date, Amount ($), Company, and Department.
			</p>
			<p>
				The invoice can also be viewed, edited, and deleted. There is also a
				list displaying the invoices oredered by due date, and a search bar that
				filters by invoice number, company and amount.
			</p>
			<h5>
				Note: this is a front-end application only. No back-end has been
				implemented. The data already in the aplication has been hard coded.
			</h5>
		</>
	);
};
