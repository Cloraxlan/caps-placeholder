export interface Day {
	month: number;
	date: number;
	//Eventually will be expanded into more complex data, for now strings work
	events: Array<string>;
	holiday?: string;
}
