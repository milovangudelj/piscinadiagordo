export const PricingLabel = ({
	label,
	details,
}: {
	label: string;
	details?: string;
}) => {
	return (
		<div className="space-x-2 text-base">
			<span className="inline-block">{label}</span>
			{details && (
				<span className="inline-block text-dark-le">{details}</span>
			)}
		</div>
	);
};
