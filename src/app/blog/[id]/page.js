import React from 'react';
import styles from './page.module.css';
import Image from 'next/Image';

const BlogPost = () => {
	return (
		<div className={styles.main}>
			<div className={styles.head}>
				<div className={styles.content}>
					<h1 className={styles.title}>Science</h1>
					<p className={styles.desc}>Author and writer in World Science Blog.<br />
					Doctor in Mathematical Science Cambridge University.<br />
					Interested in every thing new about science.</p>
					<div className={styles.author}>
						<Image className={styles.avatar} alt='author' width={60} height={60}
						src='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg' />
						<span className={styles.user}>John Doe</span>
					</div>
				</div>
				<div className={styles.imgContainer}>
					<Image className={styles.img} alt='blog' width={400} height={250}
					src='https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg' />
				</div>
			</div>
			<div className={styles.body}>
				<p>Science is a neutral, rigorous, systematic endeavor that builds and organizes
				knowledge in the form of testable explanations and predictions about the universe.
				[1][2] Modern science is typically divided into three major branches:
				[3] natural sciences (e.g., biology, chemistry, and physics), which study the physical world;
				the social sciences (e.g., economics, psychology, and sociology), which study individuals and societies; 
				[4][5] and the formal sciences (e.g., logic, mathematics, and theoretical computer science), 
				which study formal systems, governed by axioms and rules.[6][7] 
				There is disagreement whether the formal sciences are science disciplines,[8][9][10] 
				because they do not rely on empirical evidence.[11][9] 
				Applied sciences are disciplines that use scientific knowledge for practical purposes, 
				such as in engineering and medicine.[12][13][14] 
				The history of scientific discipline spans the majority of the historical record, 
				with the earliest written records of identifiable predecessors to modern science 
				dating to Bronze Age Egypt and Mesopotamia from around 3000 to 1200 BCE. 
				Their contributions to mathematics, astronomy, and medicine entered and shaped the Greek natural philosophy 
				of classical antiquity, whereby formal attempts were made to provide explanations of events in 
				the physical world based on natural causes, while further advancements, including the introduction 
				of the Hindu–Arabic numeral system, were made during the Golden Age of India.[15]: 12 [16] 
				[17][18] Scientific research deteriorated in these regions after the fall of the Western Roman Empire and Gupta 
				empire during the early middle ages (400 to 1000 CE,) but was preserved and expanded upon in 
				the Middle East during the Islamic Golden Age[19] and later by the efforts of Byzantine Greek 
				scholars who brought Greek manuscripts from the dying Byzantine Empire to Western Europe in the Renaissance. 
				The recovery and assimilation of Greek works and Islamic 
				inquiries into Western Europe from the 10th to 13th century revived 
				"natural philosophy",[20][21] which was later transformed by the Scientific 
				Revolution that began in the 16th century[22] as new ideas and discoveries departed from previous Greek 
				conceptions and traditions.[23][24] The scientific method soon played a greater role in knowledge creation 
				and it was not until the 19th century that many of the institutional and professional features of science began 
				to take shape,[25][26] along with the changing of "natural philosophy" to "natural science".[27] 
				New knowledge in science is advanced by research from scientists 
				who are motivated by curiosity about the world and a desire to solve problems.[28][29] 
				Contemporary scientific research is highly collaborative and is usually done by teams in academic and research institutions,
				[30] government agencies, and companies.[31][32] 
				The practical impact of their work has led to the emergence of science policies that seek 
				to influence the scientific enterprise by prioritizing the ethical and moral development of commercial products, 
				armaments, health care, public infrastructure, and environmental protection.</p>
			</div>
		</div>
	);
};

export default BlogPost;