import { DetailsConfig } from "../props";

function DetailsContainer({
	heading,
	children,
}: {
	heading: string;
	children: React.ReactNode;
}) {
	return (
		<div className="MessAdminDetailsContainer">
			<p className="cc_24 mb-3 medium">{heading}</p>
			{children}
		</div>
	);
}

export function DetailsGroupList({
	label,
	text,
	labelStyle,
}: {
	label: string;
	text?: string | number;
	labelStyle?: React.CSSProperties | undefined;
}) {
	return (
		<div className="row mb-1 vc" style={{ width: 400 }}>
			<div className="col">
				<p className="cc_18 medium mr-3" style={labelStyle}>
					{label}
				</p>
			</div>
			<div className="col-5">
				<p className="cc_16">{text}</p>
			</div>
		</div>
	);
}

export default function ConfigDetailsGroup(config: DetailsConfig) {
	return (
		<DetailsContainer heading={config.heading}>
			{config.rows.map((val, index) => (
				<DetailsGroupList key={index} {...val} />
			))}
		</DetailsContainer>
	);
}
