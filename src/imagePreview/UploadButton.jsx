export function UploadButton({ handleFile, inputRef, imageCount }) {
	return (
		<div className="w-full mx-auto mt-3 space-y-3 flex flex-col max-w-md text-center">
			{imageCount != 0 && (
				<div className="font-bold text-lg text-sky-900 space-x-2">
					<span>Number Of Files:</span>
					<span>{imageCount}</span>
				</div>
			)}
			<button
				onClick={() => inputRef.current.click()}
				className="bg-sky-100 text-sky-900 border-2 border-sky-900/10 font-bold rounded-lg p-1.5 w-full max-w-md hover:bg-sky-200 transition-all duration-300"
			>
				Click here to upload file
			</button>
			<input
				onChange={handleFile}
				type="file"
				ref={inputRef}
				className="hidden"
				multiple={true} />
		</div>
	);
}
