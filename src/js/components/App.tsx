import * as React from "react";
import $ from "jquery";

function cursorChangeHandler(): void {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const cursorPosition = e.target.selectionStart;
	console.log("Caret at: ", cursorPosition);
	const value: string = $("#text").val() + "";
	const words = value.split(" ");

	// add space to the end so we don't get -1
	const currentWord =
		value
			.substring(0, (value + " ").indexOf(" ", cursorPosition))
			.split(" ").length - 1;
	console.log(words, currentWord, words[currentWord]);
}

export default function App() {
	
	return (
		<>
			<h1>Pinyin Toner</h1>
			<p className="text-muted">
				Easily type chinese pinyin with tone marks.
			</p>
			<textarea
				value={value}
				onKeyUp={cursorChangeHandler}
				onMouseUp={cursorChangeHandler}
				onMouseLeave={cursorChangeHandler}
				onChange={(e) => {
					cursorChangeHandler()

				}}
			/>
		</>
	);
}
