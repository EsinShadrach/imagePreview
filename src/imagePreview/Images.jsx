export function Images({ images, openGallery, fileData }) {
	return (
		<div className="mx-auto mt-3 rounded-md flex gap-2 flex-wrap">
			{images.map((image, index) => (
				<div className="text-center w-24" key={index + 1}>
					<img
						onClick={(e) => openGallery(e, image, fileData[index])}
						draggable={false}
						src={image}
						alt={`image-${index + 1}`}
						className={`w-24 h-24 object-cover rounded-lg bg-black/20 border-[2.5px] ${fileData[index].type.includes("image")
								? "border-sky-300"
								: "border-rose-500"}`} />
					<div className="text-sm text-ellipsis  overflow-hidden">
						{fileData[index].name}
					</div>
				</div>
			))}
		</div>
	);
}
