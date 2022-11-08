import React from "react";

export default class StateSetter<T> {
	setState: React.Dispatch<React.SetStateAction<T>>;

	constructor(setState: React.Dispatch<React.SetStateAction<T>>) {
		this.setState = setState;
	}

	static filterInput(
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		return (e.target as HTMLInputElement).value;
	}

	static setFromInput<X>(
		setter: React.Dispatch<React.SetStateAction<X>>,
		transformer: (base: string) => X 
	) {
		return (e: React.FormEvent<HTMLInputElement>) => {
			const data = StateSetter.filterInput(e);
			setter(transformer(data));
		};
	}

	setLabel(label: string) {
		return (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const data = StateSetter.filterInput(e);
			this.setState((prev) => {
				return { ...prev, [label]: data };
			});
		};
	}
}
