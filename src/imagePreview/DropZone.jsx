export function DropZone({ draggedOver }) {
	return (
		<div
			className={`bg-sky-500/25 h-screen w-full inset-0 flex justify-center items-center text-sky-900 ${draggedOver ? "fixed" : "hidden"}`}
		>
			<div className="text-center bg-sky-100 rounded-lg p-6 border-4 border-dashed border-sky-900/20">
				<h1 className="font-bold text-2xl">Drop File here</h1>
				<p>Upload file to preview here</p>
			</div>
		</div>
	);
}
