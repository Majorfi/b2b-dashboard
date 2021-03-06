import	React, {ReactElement}	from	'react';
import	{format}				from	'@yearn-finance/web-lib/utils';

export type TWithCountUp = {
	refName: string;
	value: number;
	format: (n: number) => string;
	decimals?: number;
	duration?: number;
}
function	SectionStats(): ReactElement {
	const	formatNumber = React.useCallback((n: number): string => format.amount(n, 0, 2), []);
	const	formatUSD = React.useCallback((n: number): string => `$${format.amount(n, 2, 2)}`, []);
	const	formatPercent = React.useCallback((n: number): string => `${format.amount(n, 0, 2)}%`, []);
	const	[tvl] = React.useState(69125743.15);
	const	[fees] = React.useState(420743.15);
	const	[shares] = React.useState(15);
	const	[partners] = React.useState(9);

	return (
		<section aria-label={'stats'} className={'flex flex-row flex-wrap items-center mb-28 md:mb-50'}>
			<div className={'flex flex-col pr-5 mt-4 mr-4 space-y-2 md:mt-0 md:mr-8'}>
				<p>{'TVL by all Partners'}</p>
				<b className={'text-3xl tabular-nums'}>
					{formatUSD(tvl)}
				</b>
			</div>
			<div className={'flex flex-col pr-5 mt-4 mr-4 space-y-2 md:mt-0 md:mr-8'}>
				<p>{'Fees earned by Partners'}</p>
				<b className={'text-3xl tabular-nums'}>
					{formatUSD(fees)}
				</b>
			</div>
			<div className={'flex flex-col pr-5 mt-4 mr-8 space-y-2 md:mt-0'}>
				<p>{'Share of Revenue'}</p>
				<b className={'text-3xl tabular-nums'}>
					{formatPercent(shares)}
				</b>
			</div>
			<div className={'flex flex-col pr-5 mt-4 space-y-2 md:mt-0'}>
				<p>{'Partners'}</p>
				<b className={'text-3xl tabular-nums'}>
					{formatNumber(partners)}
				</b>
			</div>
		</section>
	);
}

export default SectionStats;
