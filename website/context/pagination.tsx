import * as React from "react";

interface PaginationContextInterface {
	currentPage: number;
	pagesCount: number;
	pageSize: number;
	itemsCount: number;
	goToPage: (pNum: number) => boolean;
	nextPage: () => boolean;
	previousPage: () => boolean;
	setPagesCount: React.Dispatch<React.SetStateAction<number>>;
	setPageSize: React.Dispatch<React.SetStateAction<number>>;
	setItemsCount: React.Dispatch<React.SetStateAction<number>>;
}

type PaginationProviderProps = {
	children: React.ReactNode;
	pageSize?: number;
	itemsCount?: number;
};

const PaginationContext = React.createContext<
	PaginationContextInterface | undefined
>(undefined);

export function PaginationProvider({
	children,
	pageSize = 5,
	itemsCount = 0,
}: PaginationProviderProps) {
	const pagination = useProvidePagination(pageSize, itemsCount);

	return (
		<PaginationContext.Provider value={pagination}>
			{children}
		</PaginationContext.Provider>
	);
}

function useProvidePagination<PaginationContextInterface>(
	size: number,
	items: number
) {
	const [pageSize, setPageSize] = React.useState<number>(size);
	const [itemsCount, setItemsCount] = React.useState<number>(items);
	const [pagesCount, setPagesCount] = React.useState<number>(
		Math.ceil(items / size)
	);
	const [currentPage, setCurrentPage] = React.useState<number>(0);

	const goToPage = (pNum: number): boolean => {
		if (pNum > pagesCount) return false;

		setCurrentPage(pNum);
		return true;
	};

	const nextPage = (): boolean => {
		if (currentPage === pagesCount - 1) return false;

		setCurrentPage(currentPage + 1);
		return true;
	};

	const previousPage = (): boolean => {
		if (currentPage === 0) return false;

		setCurrentPage(currentPage - 1);
		return true;
	};

	return {
		currentPage,
		pagesCount,
		pageSize,
		itemsCount,
		goToPage,
		nextPage,
		previousPage,
		setPagesCount,
		setPageSize,
		setItemsCount,
	};
}

export function usePagination<PaginationContextInterface>() {
	const context = React.useContext(PaginationContext);

	if (context === undefined) {
		throw new Error("usePagination must be used within a PaginationProvider");
	}

	return context;
}
