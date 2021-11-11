export interface Day {
	date?: Date;
	//Eventually will be expanded into more complex data, for now strings work
	events: Array<string>;
	holiday?: string;
}
