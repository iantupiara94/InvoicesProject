import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddCompany } from "./Components/Company/AddCompany";
import { EditCompany } from "./Components/Company/EditCompany";
import { ViewCompany } from "./Components/Company/ViewCompany";
import { DeleteCompany } from "./Components/Company/DeleteCompany";
import { Home } from "./Components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import { Heading } from "./Components/Heading";
import { Company } from "./Components/Company/Company";
import { Invoice } from "./Components/Invoice/Invoice";
import { AddInvoice } from "./Components/Invoice/AddInvoice";
import { EditInvoice } from "./Components/Invoice/EditInvoice";
import { ViewInvoice } from "./Components/Invoice/ViewInvoice";
import { DeleteInvoice } from "./Components/Invoice/DeleteInvoice";

import { GlobalProvider } from "./context/GlobalState";
import { Container } from "reactstrap";
function App() {
	return (
		<div>
			<GlobalProvider>
				<Router>
					<Heading />
					<Container className=".container-fluid">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/companies/" component={Company} />
							<Route path="/companies/add" component={AddCompany} />
							<Route path="/companies/edit/:id" component={EditCompany} />
							<Route path="/companies/view/:id" component={ViewCompany} />
							<Route path="/companies/delete/:id" component={DeleteCompany} />
							<Route exact path="/invoices/" component={Invoice} />
							<Route path="/invoices/add" component={AddInvoice} />
							<Route path="/invoices/edit/:id" component={EditInvoice} />
							<Route path="/invoices/view/:id" component={ViewInvoice} />
							<Route path="/invoices/delete/:id" component={DeleteInvoice} />
						</Switch>
					</Container>
				</Router>
			</GlobalProvider>
		</div>
	);
}

export default App;
