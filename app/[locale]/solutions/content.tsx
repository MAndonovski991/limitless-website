/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";
import Image from "next/image";

import { MaterialSymbol } from "react-material-symbols";

import lax from "lax.js";

import { useTranslation } from "../../../utils/translationProvider";

import LetsTalkSection from "../../../components/letsTalkSection";
import { Carousel } from "antd";
import ScrollToTop from "../../../components/scrollToTop";

const COLORS = [
	"bg-blue-700",
	"bg-blue-600",
	"bg-blue-500",
	"bg-[#114481]",
	"bg-[#225a96]",
	"bg-[#3270ab]",
	"bg-[#3270ab]",
	"bg-[#4386bf]",
	"bg-[#549cd4]",
	"bg-accent",
];

const Content = () => {
	const params = useParams();
	const t = useTranslation(params && (params.locale as string));

	useEffect(() => {
		lax.init();

		lax.addDriver("scrollY", () => window.scrollY);

		lax.addElements(
			".moveLeftRight",
			{
				scrollY: {
					translateX: [["elInY", "elCenterY", "elOutY"], [-100, 0, 100], { easing: "easeInOutQuad" }],
					opacity: [["elInY", "elCenterY", "elOutY"], [0, 1, 0], { easing: "easeInOutQuad" }],
				},
			},
			[]
		);

		lax.addElements(
			".delayScroll",
			{
				scrollY: {
					translateY: [
						["elInY", "elOutY"],
						{
							768: ["-30", "30"],
							769: ["-40", "index*30+30"],
						},
						{ easing: "easeInOutQuad" },
					],
				},
			},
			[]
		);

		lax.addElements(
			".moveInCards",
			{
				scrollY: {
					translateY: [
						["elInY+index*40+100", "elInY+index*40+300"],
						{
							768: [0, 0],
							769: ["-40", 0],
						},
						{ easing: "easeInOutQuad" },
					],
					translateX: [
						["elInY", "elCenterY"],
						{
							768: ["-40", 0],
							769: [0, 0],
						},
						{ easing: "easeInOutQuad" },
					],
					opacity: [
						["elInY+index*20+100", "elInY+index*20+300"],
						{
							768: [0, 1],
							769: [0, 1],
						},
						{ easing: "easeInOutQuad" },
					],
				},
			},
			[]
		);

		lax.addElements(
			".delayScrollNoIndex",
			{
				scrollY: {
					translateY: [
						["elInY", "elOutY"],
						[Math.random() * -10 - 10, Math.random() * 100 + 10],
						{ easing: "easeInOutQuad" },
					],
				},
			},
			[]
		);

		lax.addElements(
			".zoomIn",
			{
				scrollY: {
					scale: [["elInY", "elOutY"], [1, 1.15], { easing: "easeInOutQuad" }],
				},
			},
			[]
		);

		lax.addElements(
			".scrollFullWidth",
			{
				scrollY: {
					translateX: [
						["elCenterY-200", "elOutY - screenHeight/1.5"],
						[0, "-elWidth-100"],
						{ easing: "easeInOutQuad" },
					],
				},
			},
			[]
		);

		lax.addElements(
			".scrollFullHeight",
			{
				scrollY: {
					translateY: [["elInY+200", "elInY+screenHeight/1.1"], [0, "-elHeight+320"], { easing: "easeInOutQuad" }],
				},
			},
			[]
		);

		lax.addElements(
			".moveToRight",
			{
				scrollY: {
					translateX: [["elInY", "elCenterY-200"], [-100, 0], { easing: "easeInOutQuad" }],
					opacity: [["elInY", "elCenterY-200"], [0, 1], { easing: "easeInOutQuad" }],
				},
			},
			[]
		);
		lax.addElements(
			".moveToLeft",
			{
				scrollY: {
					translateX: [["elInY", "elCenterY-200"], [100, 0], { easing: "easeInOutQuad" }],
					opacity: [["elInY", "elCenterY-200"], [0, 1], { easing: "easeInOutQuad" }],
				},
			},
			[]
		);
	}, []);

	return (
		<div className=" min-h-screen">
			<ScrollToTop />
			<div className="max-lg:min-h-fit h-[70svh] lg:h-[70svh] bg-primary relative w-full flex flex-col md:flex-row justify-start lg:justify-start overflow-hidden px-4 lg:px-28 gap-4 rounded-b-3xl">
				<video
					className="absolute saturate-0 left-0 top-0 w-full h-full object-cover mix-blend-soft-light opacity-30"
					width={1000}
					height={1000}
					src="/videos/business.mp4"
					autoPlay
					controls={false}
					loop
					muted
				/>
				<div className="flex flex-col gap-8 absolute bottom-1/2 translate-y-[80%]">
					<h1
						className="whitespace-pre-wrap text-3xl lg:text-5xl text-white font-bold leading-tight text-left w-[90%] lg:w-[70%] z-[2]"
						dangerouslySetInnerHTML={{ __html: t("pages.solutions.title") }}
					/>
				</div>
			</div>
			<section className="bg-white text-primary flex  text-center flex-col justify-center items-center gap-10 pt-20 px-8 lg:px-12 h-fit pb-20">
				<p
					className="text-2xl lg:text-3xl font-bold"
					dangerouslySetInnerHTML={{
						__html: t("pages.solutions.businessConsulting.title"),
					}}
				/>
				<p
					className="text-lg lg:text-xl z-[2] lg:px-36 whitespace-pre-wrap"
					dangerouslySetInnerHTML={{
						__html: t("pages.solutions.businessConsulting.description"),
					}}
				/>
			</section>
			<section id="turnkey-solutions" className="w-full h-fit">
				<section className="bg-white text-primary flex  text-center flex-col justify-center items-center gap-10 pt-0 px-2 lg:px-12 h-fit pb-20">
					<div className="w-full grid grid-cols-4 items-start justify-center h-fit gap-2 text-start">
						{(
							t("pages.solutions.services") as unknown as {
								title: string;
								icon: string;
							}[]
						).map((s, i) => (
							<div className="h-fit lg:h-28 lg:hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-visible col-span-4 lg:col-span-1 z-[5]">
								<div
									className={`p-4 h-full text-2xl  transition-all duration-500 ease-in-out overflow-hidden text-white ${COLORS[i]} flex flex-col gap-8 flex-shrink-0  snap-center rounded-xl`}
								>
									<div className="flex flex-col items-start gap-4 font-bold">
										<MaterialSymbol icon={s.icon} size={24} fill />
										<p>{s.title}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
				<section className="px-8 lg:p-36 py-10 lg:py-10 flex flex-col gap-8 items-center justify-center z-[1] relative h-fit text-primary bg-slate-100">
					<p
						className="text-3xl lg:text-4xl font-bold text-center"
						dangerouslySetInnerHTML={{
							__html: t("pages.solutions.advantages.title"),
						}}
					/>
					<div className="text-lg grid grid-cols-1 md:grid-cols-3">
						{(
							t("pages.solutions.advantages.items") as unknown as {
								title: string;
								description: string;
								icon: string;
							}[]
						).map((s) => (
							<div
								key={s.icon}
								className="flex flex-col items-center gap-4 moveInCards col-span-1 p-4 lg:p-8 rounded-2xl"
							>
								<MaterialSymbol size={110} icon={s.icon} fill className="text-accent " />
								<p className=" whitespace-pre-wrap text-primary text-center text-xl font-bold z-[1]">{s.title}</p>
								<p className="whitespace-pre-wrap text-primary text-center text-base z-[1]">{s.description}</p>
							</div>
						))}
					</div>
				</section>
				<section className="lg:px-36 py-10">
					<p className="font-bold text-primary text-2xl lg:text-4xl px-8 lg:px-36 z-[1] text-center">Testimonials</p>
					<div className=" relative h-fit w-full overflow-hidden p-2 lg:p-4 lg:px-48">
						<MaterialSymbol
							icon="format_quote"
							fill
							className="text-primary absolute rotate-180 -right-10 -bottom-10 hidden md:block opacity-5"
							size={256}
						/>
						<MaterialSymbol
							icon="format_quote"
							fill
							className="text-primary absolute -left-10 -top-10 hidden md:block opacity-5"
							size={256}
						/>
						<style>
							{`
							.slick-dots li button {
								background: black !important;
							}`}
						</style>
						<Carousel dotPosition="bottom" autoplay className="h-full w-full mt-20">
							<div className=" rounded-xl p-8 flex flex-col lg:flex-row h-full w-full z-[1] gap-4">
								<div className="flex flex-col gap-8">
									<div className=" leading-normal lg:text-xl tracking-wide bg-slate-100 p-8 rounded-2xl">
										As a global services leader in the digitization industry, we are grateful for the outstanding
										support and opportunities that Limitless Solutions has provided us. Their wide network and top-notch
										services, including due diligence, B2G contacts, and government advocacy in Macedonia, have provided
										us with invaluable support.
										<br />
										<br />
										Their exceptional commitment and brand awareness skills have positioned us for a smooth entrance
										into the Balkan market. As a result, they have become our representative for the region. We highly
										recommend Limitless Solutions to any organization seeking a reliable partner for success in the
										Balkans.
									</div>
									<div className="flex items-center gap-4">
										<Image
											className="object-cover rounded-full aspect-square h-14 w-14"
											src="/images/testimonials/sanjay.webp"
											alt="Sanjay"
											width={100}
											height={100}
										/>
										<div className="flex flex-col gap-1">
											<div className="font-bold leading-none text-xl">Sanjay Salil</div>
											<div className="opacity-70 font-bold text-xs">Founder & CEO, MediaGuru</div>
										</div>
									</div>
								</div>
							</div>
							<div className=" rounded-xl p-8 flex flex-col lg:flex-row h-full w-full z-[1] gap-4">
								<div className="flex flex-col gap-8">
									<div className=" leading-normal lg:text-xl tracking-wide bg-slate-100 p-8 rounded-2xl">
										Limitless Solutions was an excellent partner in helping me organize my very first live event in
										Macedonia! They guaranteed that everything was flawless before and during the event so I could focus
										on what was important to me - delivering the content. They were also a great resource in marketing
										the event, which ended up sold out! I highly recommend them for your future projects or events.
									</div>
									<div className="flex items-center gap-4">
										<Image
											className="object-cover rounded-full aspect-square h-14 w-14"
											src="/images/testimonials/dragana.webp"
											alt="Dragana Ognenovska"
											width={100}
											height={100}
										/>
										<div className="flex flex-col gap-1">
											<div className="font-bold leading-none text-xl">Dragana Ognenovska</div>
											<div className="opacity-70 font-bold text-xs">Business Coach & Founder, Dragana Live</div>
										</div>
									</div>
								</div>
							</div>
						</Carousel>
					</div>
				</section>
				{params && <LetsTalkSection locale={params.locale as string} />}
			</section>
		</div>
	);
};

export default Content;

