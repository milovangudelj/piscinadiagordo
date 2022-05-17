import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import classNames from "classnames";
import { useState } from "react";
import { usePagination } from "../../context/pagination";
import { PaginatorButton } from "./PaginatorButton";

// CSS Design: https://play.tailwindcss.com/80wL0vJv7z

export const Paginator = ({
	onPageChange,
}: {
	onPageChange: (page?: number) => Promise<void>;
}) => {
	const { currentPage, pagesCount, goToPage, previousPage, nextPage } =
		usePagination();

	const prevPageClicked = async () => {
		if (previousPage()) await onPageChange(currentPage - 1);
	};

	const nextPageClicked = async () => {
		if (nextPage()) await onPageChange(currentPage + 1);
	};

	const pageNumClicked = async (pageNum: number) => {
		if (goToPage(pageNum)) await onPageChange(pageNum);
	};

	return (
		<div className="relative flex h-max w-max rounded-lg p-2 shadow-md">
			<span className="absolute right-full self-center pr-4 text-base-sm text-dark-me">
				Pagina:
			</span>
			<button
				onClick={prevPageClicked}
				className={classNames(
					`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-transparent`,
					{
						"text-cyan-500 transition hover:border-cyan-100 hover:bg-cyan-50":
							currentPage !== 0,
					},
					{
						"text-dark-le transition hover:border-gray-100 hover:bg-gray-50":
							currentPage === 0,
					}
				)}
			>
				<ChevronLeftIcon className="h-5 w-5 text-current" />
			</button>
			<ol className="mx-4 flex space-x-2">
				{/* First page if not current */}
				{currentPage !== 0 && (
					<li>
						<PaginatorButton content={1} callback={pageNumClicked} />
					</li>
				)}
				{/* Three dots after the first page */}
				{currentPage >= 3 && (
					<li>
						<PaginatorButton disabled />
					</li>
				)}
				{/* Current page + previous and next pages if any */}
				{
					<>
						{currentPage > 1 && (
							<li>
								<PaginatorButton
									content={currentPage}
									callback={pageNumClicked}
								/>
							</li>
						)}
						<li>
							<PaginatorButton content={currentPage + 1} selected />
						</li>
						{currentPage < pagesCount - 2 && (
							<li>
								<PaginatorButton
									content={currentPage + 2}
									callback={pageNumClicked}
								/>
							</li>
						)}
					</>
				}
				{/* Three dots before the last page */}
				{currentPage <= pagesCount - 3 && pagesCount > 3 && (
					<li>
						<PaginatorButton disabled />
					</li>
				)}
				{/* Last page if not current and more than 1 page */}
				{currentPage !== pagesCount - 1 && pagesCount !== 1 && (
					<li>
						<PaginatorButton
							content={pagesCount}
							callback={pageNumClicked}
						/>
					</li>
				)}
			</ol>
			<button
				onClick={nextPageClicked}
				className={classNames(
					`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-transparent`,
					{
						"text-cyan-500 transition hover:border-cyan-100 hover:bg-cyan-50":
							currentPage !== pagesCount - 1,
					},
					{
						"text-dark-le transition hover:border-gray-100 hover:bg-gray-50":
							currentPage === pagesCount - 1,
					}
				)}
			>
				<ChevronRightIcon className="h-5 w-5 text-current" />
			</button>
		</div>
	);
};
