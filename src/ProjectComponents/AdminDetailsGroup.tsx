
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

function DetailsGroupList({ label, text }: { label: string; text: string }) {
	return (
		<div className="row mb-1" style={{ width: 400 }}>
			<div className="col">
				<p className="cc_18 medium mr-3">{label}</p>
			</div>
			<div className="col-6">
				<p className="cc_16">{text}</p>
			</div>
		</div>
	);
}

export default function ConfigDetailsGroup(config: {
	heading: string;
	rows: Array<{ label: string; text: string }>;
}) {
	return (
		<DetailsContainer heading={config.heading}>
			{config.rows.map((val, index) => (
				<DetailsGroupList key={index} {...val} />
			))}
		</DetailsContainer>
	);
}