import React from "react";
import BgShape from "../../../public/assets/bgShape.svg";
import Image from "next/image";

function SiteBg() {
	return (
		<div className="absolute">
			<Image src={BgShape} alt="Background Shape" className="w-full h-auto" />
		</div>
	);
}

export default SiteBg;
