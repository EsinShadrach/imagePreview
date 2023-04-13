import { useState, useRef, useEffect } from "react";
import { Gallery } from "./Gallery";
import { Images } from "./Images";
import { UploadButton } from "./UploadButton";
import { DropZone } from "./DropZone";

export default function ImagePreview() {
	const [fileData, setFileData] = useState([]);
	const [images, setImages] = useState([]);
	const [gallery, setGallery] = useState({
		image: "",
		name: "",
		size: "",
		type: "",
		opened: false,
		draggerOver: false,
	});
	const inputRef = useRef();


	function readFile(fileData) {
		setImages([]);
		setFileData([]);
		for (let i = 0; i < fileData.length; i++) {
			const reader = new FileReader();
			const element = fileData[i];
			reader.onloadend = () => {
				setImages((prev) => [...prev, reader.result]);
				setFileData((prev) => [...prev, element]);
			};
			reader.readAsDataURL(element);
		}
	}

	/**@param {Event} event */
	function handleFile(event) {
		event.preventDefault();
		const fileData = event.target.files;
		readFile(fileData);
	}

	/**@param {Event} event */
	function handleDragOver(event) {
		event.preventDefault();
		setGallery((prev) => ({
			...prev,
			draggerOver: true,
		}));
	}

	/**@param {Event} event */
	function handleDragLeave(event) {
		event.preventDefault();
		setGallery((prev) => ({
			...prev,
			draggerOver: false,
		}));
	}

	/**@param {Event} event */
	function handleDrop(event) {
		event.preventDefault();
		const fileData = event.dataTransfer.files;
		readFile(fileData);
		setGallery((prev) => ({
			...prev,
			opened: false,
			draggerOver: false,
		}));
	}

	useEffect(() => {
		window.addEventListener("dragover", handleDragOver);
		window.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				closeGallery();
			}
		});
		return () => {
			window.removeEventListener("keydown", handleDragOver);
		};
	}, []);

	/**@param {Event} event */
	function openGallery(event, data, dataObject) {
		event.preventDefault();
		setGallery((prev) => ({
			...prev,
			image: data,
			name: dataObject.name,
			size: `${Math.round(dataObject.size / 1024)}KB`,
			type: dataObject.type,
			opened: true,
		}));
	}
	
	function closeGallery() {
		setGallery((prev) => ({
			...prev,
			opened: false,
		}));
	}
	

	return (
		<section
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			className="container mx-auto px-3"
		>
			<DropZone draggedOver={gallery.draggerOver} />
			<UploadButton
				handleFile={handleFile}
				inputRef={inputRef}
				imageCount={fileData.length}
			/>
			<Images
				openGallery={openGallery}
				images={images}
				fileData={fileData}
			/>
			<Gallery closeGallery={closeGallery} gallery={gallery}/>
			
		</section>
	);
}
