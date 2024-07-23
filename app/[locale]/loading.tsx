import Image from "next/image";

import logo from "../../assets/images/logo-symbol.svg";

const Loading = () => (
	<div className="fixed bg-white z-50 top-0 left-0 h-screen w-screen flex items-center justify-center">
		<Image src={logo} width={200} height={150} alt="limitless-loading" className="object-contain" />
	</div>
);

export default Loading;

