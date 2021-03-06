import React from "react";
import ReactDOM from "react-dom";

export const ReusableModal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui container">
			<div
				onClick={props.onDismiss}
				className="ui dimmer modals visible active"
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="ui standard modal visible active"
					style={{ left: "auto", top: "auto", height: "auto" }}
				>
					<div className="header">{props.title}</div>
					<div className="content">{props.content}</div>
					<div className="actions">{props.actions}</div>
				</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};
