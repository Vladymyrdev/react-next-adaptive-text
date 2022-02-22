export interface LinkType {
	id: number;
	name: string;
	path: string;
}

export interface OptionsType {
	id: number;
	label: string;
}

export const footerUpLinks: LinkType[] = [
	{ id: 1, name: 'Property investors sing up', path: '#' },
	{ id: 2, name: 'Sell your property', path: '#' },
	{ id: 3, name: 'About', path: '#' },
	{ id: 4, name: 'Contsct Us', path: '#' },
	{ id: 5, name: 'Feedback', path: '#' },
];

export const footerDownLinks: LinkType[] = [
	{ id: 1, name: 'Sitemap', path: '#' },
	{ id: 2, name: 'Privacy policy', path: '#' },
	{ id: 3, name: 'Terms of use', path: '#' },
	{ id: 4, name: 'Cookie policy', path: '#' },
	{ id: 5, name: 'Data sourses', path: '#' },
];

export const headerOptions: OptionsType[] = [
	{ id: 1, label: 'Research' },
	{ id: 2, label: 'First option' },
	{ id: 3, label: 'Second option' },
	{ id: 4, label: 'Еhird option' },
];
