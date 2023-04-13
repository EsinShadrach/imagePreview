import {
	InformationCircle,
	InformationCircleOutline,
	X,
} from "heroicons-react";
import { useState } from "react";

export function Gallery({ closeGallery, gallery }) {
	const [seeInfo, setSeeInfo] = useState(false);

	const imageData = [
		{
			title: "Name",
			info: gallery.name,
		},
		{
			title: "Size",
			info: gallery.size,
		},
		{
			title: "Type",
			info: gallery.type,
		},
	];

	return (
		<div
			className={`min-h-screen w-full fixed inset-0 ${
				gallery.opened ? "block" : "hidden"
			} overflow-y-auto flex justify-center items-center`}
		>
			<div
				className="h-screen w-full bg-black/40  fixed -z-10"
				onClick={closeGallery}
			/>
			<div className="px-2">
				<div className="relative" onClick={() => setSeeInfo(!seeInfo)}>
					<img
						draggable={false}
						src={gallery.image}
						alt=""
						className="rounded-md"
					/>
					<button className="absolute top-1 left-1 text-white rounded-full bg-black">
						<InformationCircle />
					</button>
				</div>
				{seeInfo && (
					<ImageInfo imageData={imageData} />
				)}
			</div>
			<button
				className="bg-neutral-800/50 p-2 text-neutral-300 fixed top-0 right-0 rounded-full flex items-center justify-center m-2 hover:bg-neutral-800/70 transition-all duration-300"
				onClick={closeGallery}
			>
				<X className="h-6 w-6" />
			</button>
		</div>
	);
}

function ImageInfo({ imageData }) {
	return (
		<div className="absolute bg-neutral-900 text-neutral-200 bottom-1 p-3 rounded-md left-1 text-sm">
			{imageData.map((data) => (
				<div key={data.title}>
					<span className="font-bold">{data.title}: </span>
					{data.info}
				</div>
			))}
		</div>
	);
}
