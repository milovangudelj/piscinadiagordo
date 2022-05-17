import classNames from "classnames";

// Components
import { Table, Chip, PricingLabel } from "../";

type PricingItem = {
	label: string;
	details?: string;
	value: string;
};

type PricingTableProps = {
	title: string;
	prices: PricingItem[];
	className?: string;
};

export const PricingTable = ({
	title,
	prices,
	className,
}: PricingTableProps) => {
	return (
		<Table
			columns={[
				{ header: title, className: "w-full" },
				{ header: "Tariffa" },
			]}
			rows={prices.map((price) => [
				{
					content: (
						<PricingLabel label={price.label} details={price.details} />
					),
				},
				{
					content: (
						<Chip color="success" variant="outlined">
							{price.value}
						</Chip>
					),
				},
			])}
			className={classNames("table-auto", className)}
		/>
	);
};
