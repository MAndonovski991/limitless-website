'use client'

import Link from "next/link";
import { MaterialSymbol } from "react-material-symbols";
import type { GetServerSideProps, GetStaticProps } from "next";

import { useTranslation } from "../../../../utils/translationProvider";
import ApplyButton from "./applyButton";
import ScrollToTop from "../../../../components/scrollToTop";

// export const metadata = {
// 	title:
// 		"Active Job Listing: Virtual Assistant and Carrier Sales Representative Department: Administration and Logistics",
// 	openGraph: {
// 		type: "website",
// 		title:
// 			"Active Job Listing: Virtual Assistant and Carrier Sales Representative Department: Administration and Logistics",
// 	},
// };

const jobOffers: { [key: string]: any } = {
	"1001": {
		title: "Remote Client Service Representative",
		subtitle: "Remote (Virtual)",
		description:
			"<b>About Our Client</b>" +
			"<br /><br />" +
			"Our client a world-wide leader in providing Immigration Services, is seeking an Immigration Legal Assistant to join their incredible Canadian legal processing team to help further their rapid growth." +
			"<br /><br />" +
			"Our client practice exclusively in the area of Canadian and U.S. immigration and have been serving our clients for over two decades. With extensive knowledge of immigration law, our client has successfully helped thousands of people’s dreams come to reality." +
			"<br /><br />" +
			"Our client’s award-winning company has been featured in the Toronto Star, Globe and Mail, Maclean’s magazine, and their signature Attorneys have been featured on CTV, CBC and CityTV, to name a few." +
			"<br /><br /><br />" +
			"<b>Position Summary</b>" +
			"<br /><br />" +
			"We are seeking a motivated and customer-oriented individual to join our client’s immigration law firm as a Client Service Representative. In this remote position, you will be responsible for providing excellent client communication and support. You will play a vital role in assisting clients with their immigration inquiries and ensuring their needs are met throughout the process. No previous legal experience is required; however, proficiency in both written and oral English is essential. You will be working on immigration files for both the United States and Canada." +
			"<br /><br /><br />" +
			"<b>Responsibilities</b>" +
			"<br /><br />" +
			"• Client Communication: Act as the primary point of contact for clients, demonstrating exceptional customer service skills and maintaining professional and positive communication throughout the immigration process." +
			"<br />" +
			"• Sending client inquiries to case workers and lawyers when appropriate and following up making sure these inquiries are attended to in a timely manner." +
			"<br />" +
			"• Inquiries and Consultations: Respond promptly and courteously to client inquiries via various communication channels, including phone, email, and chat. Schedule consultations and provide basic information on immigration procedures and requirements." +
			"<br />• Documentation and File Management: Assist in organizing and maintaining client files, ensuring accuracy and completeness of documents, and updating case information as necessary." +
			"<br />• Administrative Support: Carry out administrative tasks such as scheduling appointments, managing calendars, and preparing routine correspondence under the supervision of attorneys.<br />" +
			"• Research and Familiarity: Familiarize yourself with basic immigration processes and procedures in the United States and Canada, and stay updated on any relevant changes or updates.<br />" +
			"• Case Status Updates: Maintain regular contact with clients to provide updates on their case progress and ensure timely completion of required documentation and tasks. Proofreading: Help legal staff review and translate documents accurately, ensuring clarity and coherence. Proofread written materials to maintain high-quality standards.<br />" +
			"• Collaboration: Collaborate with attorneys and other team members to ensure smooth client interactions and effective coordination on immigration matters." +
			"<br /><br /><br />" +
			"<b>Qualifications</b><br /><br />" +
			"• Education: High school diploma or equivalent. Any additional education or certifications related to customer service or communications is a plus.<br />" +
			"• Experience: Prior experience in a customer service or client-facing role is preferred, but not required. No previous legal experience is necessary.<br />" +
			"• Language Skills: Proficiency in both written and oral English is essential. Strong communication skills with the ability to convey complex information in a clear and understandable manner.<br />" +
			"• Technical Proficiency: Comfortable using remote communication tools, email, chat platforms, and document management systems. Willingness to learn and adapt to new software and technology.<br />" +
			"• Organizational Skills: Strong attention to detail, ability to multitask, and prioritize tasks effectively to meet deadlines.<br />" +
			"• Interpersonal Skills: Excellent customer service skills, empathy, and the ability to work with individuals from diverse backgrounds. Professionalism and a calm demeanor in stressful situations.<br />" +
			"• Legal Knowledge: While no previous legal experience is required, an interest in immigration law and a willingness to learn basic immigration processes and terminology is beneficial.<br />" +
			"• Remote Work Skills: Self-motivated and able to work independently in a remote environment, maintaining productivity and effectively managing time and tasks.<br /><br /><br />" +
			"<b>Working Conditions</b><br /><br />" +
			"• This position is fully remote, and the candidate will work exclusively from their own location.<br />" +
			"• Availability during regular business hours is required, with occasional flexibility to accommodate client needs or specific deadlines.<br />" +
			"• The candidate must have a reliable internet connection and a suitable work environment to ensure privacy and confidentiality.<br /><br /><br />" +
			"<b>General info</b><br /><br />" +
			"• Working hours: 3-11 PM Central European Time (some flexibility is offered after with mutual consent of the client)<br />" +
			"• Attractive salary conditions<br />" +
			"• Full time employment that includes social contributions and benefits <br />" +
			"• Significant opportunities for growth in an international environment<br />" +
			"• Fully remote position applicable for Macedonian citizens<br />",
	},
	"1002": {
		title: "Возачи со Е категорија во Европа",
		subtitle: "",
		description:
			"Limitlesss Solutions започнува со регрутирање на возачи на камиони со Ц+Е категорија за потребите на компанијата Petratrans од Чешка, која е во сопствеништво на најголемата приватна транспортна компанија во Европа Europa Worldwide Group." +
			"<br /><br /><br />" +
			"<b>За да се квалификувате за оваа програма потребно е:</b>" +
			"<br /><br />" +
			"• ЕУ државјанство или постоечка работна виза <br />" +
			"• поседување на возачка дозвола со Е категорија <br />" +
			"• КОД 95 и АДР дозвола <br />" +
			"• Мотивација и желба за континуиран успех во работата <br />" +
			"<br /><br /><br />" +
			"<b>Што обезбедува компанијата? </b>" +
			"<br /><br />" +
			"• Атрактивен финансиски план и стабилност, вклучувајќи и можности за дополнителни бонуси   <br />" +
			"• платен авионски повратен билет (покриеност до 150 еур) на секои девет недели до почетната дестинација на возење   <br />" +
			"• платени придонеси во ЕУ, почнувајќи од првиот работен ден   <br />" +
			"• државно здравствено осигурување   <br />" +
			"• зголемување на плата на годишно ниво   <br />" +
			"• три недели одмор после девет работни недели, како и платени придонеси за време на одморот  <br />" +
			"• сеопфатно осигурување на камионите <br />" +
			"<br /><br /><br />" +
			"*Сите апликанти кои се во процедура за работа во САД преку Limitless, можат да аплицираат и за оваа програма. ",
	},
};

const getJobOffer = async (id: string) => {
	// const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/joboffer/${id}`, {
		const res = await fetch(`/api/joboffer/${id}`, {
        method: "GET",
      })
	const data = await res.json();
  
	return data
}

const Page = async ({ params }: { params: { locale: string; slug: string } }) => {
	const { slug } = params;
	const t = useTranslation(params && (params.locale as string));

	const jobOffer = await getJobOffer(slug);

	return (
		<div className=" min-h-screen"><ScrollToTop/>
			<div className="max-lg:min-h-fit h-[55svh] lg:h-[55] bg-primary text-white relative w-full flex flex-col md:flex-row justify-start lg:justify-start overflow-hidden px-8 lg:px-36 pt-[9%] pb-20 lg:pb-36 gap-4 rounded-b-3xl">
				<div className="flex flex-col gap-4 absolute bottom-1/2 translate-y-[70%]">
					<h1 className=" text-2xl lg:text-4xl font-bold leading-tight text-left w-[90%] lg:w-[60%] z-[2]">
						{jobOffer.title}
					</h1>
					<div className="flex flex-wrap items-center gap-2 tracking-wide uppercase opacity-50 font-bold text-xs lg:text-lg">
						{jobOffer.subtitle}
					</div>
					<ApplyButton jobTitle={jobOffer.title} jobId={jobOffer.id}/>
				</div>
			</div>
			<section className="flex flex-col gap-4 w-full px-8 lg:px-36 py-10">
				<div
					className="text-lg text-justify"
					dangerouslySetInnerHTML={{
						__html: jobOffer.description,
					}}
				></div>
			</section>
			<section className="px-8 lg:px-36 flex justify-center relative py-10">
				<div className="flex justify-center relative overflow-hidden bg-primary rounded-2xl p-10 lg:p-16 w-full zoomIn z-0">
					<div className="flex flex-col gap-8 max-w-4xl justify-center items-center z-[1]">
						<p
							className="text-center text-2xl lg:text-4xl text-white font-bold m-0"
							dangerouslySetInnerHTML={{
								__html: t("pages.careers.applyNow.title"),
							}}
						/>

						<p className="text-center text-white text-lg ">{t("pages.careers.applyNow.description")}</p>
						<ApplyButton jobTitle={jobOffer.title} jobId={jobOffer.id}/>
					</div>
				</div>
			</section>
		</div>
	);
};


export default Page;

