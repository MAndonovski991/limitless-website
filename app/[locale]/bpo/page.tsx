import { useTranslation } from "../../../utils/translationProvider";
import Content from "./content";

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const t = useTranslation(params && (params.locale as string));
	return {
		title: t("pages.bpo.meta.title"),
		description: t("pages.bpo.meta.description"),
	};
}

const Page = async () => {
	return <Content />;
};

export default Page;

