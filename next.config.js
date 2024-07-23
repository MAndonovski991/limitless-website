// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
	env: {
		API_URL: "https://limitless.com.mk/api",
		GOOGLE_API_KEY: "",
		NEXT_PUBLIC_GA_MEASUREMENT_ID: "G-MJ2Z7C19PL",
		NEXT_PUBLIC_URL: "https://www.limitless.com.mk",
	},
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["flagcdn.com", "localhost", "limitless.mk", "limitless.com.mk"],
	},
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	transpilePackages: ["antd"],
};

