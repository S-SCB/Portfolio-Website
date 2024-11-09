type Certificate = {
	title: string;
	date: string;
	organization: string;
	url: string;
	tags: string[];
	content?: string;
};

const certificates: Certificate[] = [
	{
		title: 'BrainWave Programming Competition',
		date: "October 2023",
		organization: "Graphic Era Hill University",
		url: "https://www.linkedin.com/posts/saurabh-baij_gehu-codingjourney-achievement-activity-7101383647173226496-Hkyf?utm_source=share&utm_medium=member_desktop",
		tags: ["Programming Competition", "University"],
		content:
			'Secured an impressive 3rd rank in the "BrainWave" Programming Competition, showcasing strong problem-solving skills and programming expertise among first-year students.',
	},
	{
		title: 'Intra-University Web Development Competition',
		date: "March 2023",
		organization: "Graphic Era Hill University",
		url: "https://www.linkedin.com/posts/saurabh-baij_webdevelopment-competition-teamwork-activity-7047057603113140225-uv5z?utm_source=share&utm_medium=member_desktop",
		tags: ["Web Development Competition", "University"],
		content:
			"Collaborated with a team to secure 2nd rank in the intra-university web development competition. Demonstrated proficiency in web technologies and teamwork by delivering a high-quality project that met the competition's criteria.",
	},
];

export default certificates;
