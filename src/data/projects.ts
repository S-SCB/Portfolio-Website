type Project = {
	title: string;
	date: string;
	url: string;
	tags: string[];
	content?: string;
};

const projects: Project[] = [
	{
		title: "Slack Clone",
		date: "Oct 2024 - Ongoing",
		url: "https://github.com/S-SCB/Slack_Clone",
		tags: ["Next JS", "Convex", "Auth JS", "Tailwind CSS", "Shadcn UI"],
		content:
			"Slack Clone project is a clone of widely used corporate team communication platform Slack. This is a Full Stack Application.",
	},
	{
		title: "Currency Converter",
		date: "Oct 2020 - Nov 2022",
		url: "https://github.com/S-SCB/Currency-Converter",
		tags: ["React", "Tailwind CSS"],
		content:
			"Currency Converter is a project that utilizes Open Source API which provides latest currency conversion values and generates the exchange value according to the user.",
	},	
];

export default projects;
