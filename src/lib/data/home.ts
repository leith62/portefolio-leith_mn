import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Manaa';

export const lastName = 'Leith';

export const description =
"Étudiant en dernière année d'ingénierie informatique spécialisé en BI et Big Data, je suis passionné par l'analyse des données et les technologies de traitement des données massives. Grâce à mes projets académiques, j'ai développé des compétences solides en Machine Learning, Big Data Analytics et gestion de bases de données, avec des outils tels qu'Apache Spark, Kafka et Python. Je suis à la recherche d'un stage PFE pour mettre à profit mes compétences et contribuer à des projets innovants dans le domaine de la Data Science, tout en approfondissant mes connaissances professionnelles."
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/leith62' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/leith-manaa-746b10225/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'manaaleith62@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/leithm2/'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
