export type ItemProps = {
	id: string;
	media: string;
	mediaPath: string;
	username?: string;
	title?: string;
	score: string;
	stats: string;
	statsPath: string;
	number: number;
};

export type Props = {
    index?: number;
	item: ItemProps;
	small: boolean;
	source: string;
};

export type HeaderProps = {
	heading: string;
	text?: string;
	modeText?: string;
	toggle?: boolean;
	score?: string;
};

export type ListProps = {
	data: any;
	small?: any;
	source: any;
};

export type SwitchProps = {
	modeText?: string;
};