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
		title: "Tiny Machine Learning",
		date: "July 2024",
		organization: "edX",
		url: "https://credentials.edx.org/credentials/eba4f664ee6f454c99f83b15f863b82d/",
		tags: ["ML", "IoT", "Arduino"],
		content: `
<p> TinyML by Harvard University on edX</p>
<ul>
    <li>TinyML 1: Fundamentals of Machine TinyML (July 2024)</li>
    <li>TinyML 2: Applications of TinyML (April 2024)</li>
    <li>TinyML 3: Deploying TinyML (February 2024)</li>
</ul>`,
	},
	{
		title: "CS50t",
		date: "April 2024",
		organization: "CS50",
		url: "https://certificates.cs50.io/5df2b529-78d1-43be-9bb4-3f7cfc8cb1c1",
		tags: ["Technology", "CS50"],
		content: "CS50's Introduction to Technology",
	},
	{
		title: "CS50p",
		date: "February 2024",
		organization: "CS50",
		url: "https://certificates.cs50.io/d15ab114-3ced-44bf-b584-edff871be00e",
		tags: ["Python", "CS50"],
		content: "CS50's Introduction to Programming with Python",
	},
	{
		title: "CS50x",
		date: "November 2023",
		organization: "CS50",
		url: "https://certificates.cs50.io/2e541617-4ded-45dd-9337-f09d40a4502f",
		tags: ["Programming", "C", "Python", "SQL", "CS50"],
		content: "CS50's Introduction to Computer Science",
	},
	{
		title: "LFS101x",
		date: "October 2023",
		organization: "The Linux Foundation",
		url: "https://courses.edx.org/certificates/24b669b505f34f869d725487f17e51b4",
		tags: ["Linux"],
		content:
			"LFS101x: Introduction to Linux by The Linux Foundation on edX",
	},
];

export default certificates;
