import React from "react";
import { CompanyList } from "./CompanyList";
import { Link } from "react-router-dom";
export const Company = () => {
	return (
		<div>
			<h1>Vendors/Suppliers</h1>
			<Link to="/companies/add" className="btn btn-primary">
				Add Vendor/Supplier
			</Link>
			<br />
			<br />
			<CompanyList />
		</div>
	);
};
