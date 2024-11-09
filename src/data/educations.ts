type Education = {
	title: string;
	date: string;
	organization: string;
	location: string;
	url: string;
	tags: string[];
	content?: string;
};

const educations: Education[] = [
	{
		title: "B.TECH (CSE)",
		date: "2022 - 2026",
		organization: "Graphic Era Hill University",
		location: "Graphic Era Hill University, Uttarakhand, IN",
		url: "https://www.gehu.ac.in",
		tags: ["Computer Science", "Engineering"],
		content:
			"Bachelor of Technology in Computer Science and Engineering from Graphic Era Hill University",
	},
	{
		title: "High School",//HIND PUBLIC SCHOOL SITARGANJ RD U S NAGAR UK
		date: "2020 - 2022",
		organization: "Hind Public School Sitarganj RD U.S. Nagar UK",
		location:
			// "Aryaman Vikram Birla Institute of Learning, Haldwani, Uttarakhand, IN",
			"Hind Public School, Khatima, Uttarakhand, IN",
		url: "https://www.hpskhatima.in/",
		tags: ["High School"],
		content: "High School from Hind Public School, Khatima",
	},
];

export default educations;
