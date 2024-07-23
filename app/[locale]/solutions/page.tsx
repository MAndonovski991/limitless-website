/* eslint-disable jsx-a11y/media-has-caption */

import { useParams } from "next/navigation";

import { useTranslation } from "../../../utils/translationProvider";
import Content from "./content";

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const t = useTranslation(params && (params.locale as string));
	return {
		title: t("pages.solutions.meta.title"),
		description: t("pages.solutions.meta.description"),
	};
}

const Page = async () => {
	return <Content />;
};

export default Page;

