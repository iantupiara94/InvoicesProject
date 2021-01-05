import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

export const SearchBar = (props) => {
	return (
		<Form>
			<FormGroup>
				<Input
					label="search"
					value={props.search}
					onChange={(e) => props.setSearch(e.target.value)}
					placeholder={props.placeholder}
				/>
			</FormGroup>
		</Form>
	);
};
