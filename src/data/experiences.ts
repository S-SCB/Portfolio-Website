type Experience = {
	title: string;
	date: string;
	organization: string;
	location: string;
	url: string;
	tags: string[];
	content?: string;
};

const experiences: Experience[] = [
	{
		title: "Class Representative",
		date: "2022 - 2023",
		organization: "Graphic Era Hill University",
		location: "Haldwani",
		url: "https://haldwani.gehu.ac.in/",
		tags: ["Leadership", "Communication"],
		content:
			`<ul>
				<li>Served as class spokesperson, liaising between students, parents and school administrators.</li>
				<li>Developed strong relationships with peers through active listening skills and genuine concern for their wellbeing.</li>
			</ul>`,
	}
];

export default experiences;
