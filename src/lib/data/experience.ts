import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
	  slug: 'elyana-ascenseur',
	  company: 'Elyana Ascenseur',
	  description: 'Lors de ce stage, j’ai exploré, analysé et visualisé des données textuelles non structurées provenant de différentes sources, telles que des enquêtes de satisfaction par email et des commentaires sur les réseaux sociaux. L’objectif était de mieux comprendre les retours des clients et d’en extraire des informations utiles pour améliorer les services.',
	  contract: ContractType.Internship,
	  type: 'Analyse de données',
	  location: 'Tunisie',
	  period: { from: new Date(2021, 0, 1), to: new Date(2021, 11, 31) },
	  skills: getSkills('Spark', 'MongoDB', 'Flask', 'MySQL', 'Talend', 'Tableau'),
	  name: 'Stagiaire Analyste de Données',
	  color: 'green',
	  links: [],
	  logo: Assets.Unknown,
	  shortDescription: 'Exploration, analyse et visualisation de données non structurées pour améliorer les services clients d\'Elyana Ascenseur.'
	},
	{
	  slug: 'telnet-holding',
	  company: 'Telnet Holding',
	  description: 'Pendant mon stage de projet de fin d’étude, j’ai mis en place une architecture Big Data pour le traitement en streaming des données. J’ai utilisé la Lambda Architecture pour assurer une gestion fluide des données en temps réel. Ce projet m’a permis de travailler sur des outils de traitement de données massives et d’acquérir une solide expérience dans l’utilisation de Spark et de Docker.',
	  contract: ContractType.Internship,
	  type: 'Big Data',
	  location: 'Tunisie',
	  period: { from: new Date(2022, 0, 1), to: new Date(2022, 5, 1) },
	  skills: getSkills('Python', 'Spark', 'HDFS', 'MongoDB', 'ELK', 'Docker'),
	  name: 'Stagiaire Big Data',
	  color: 'blue',
	  links: [],
	  logo: Assets.Unknown,
	  shortDescription: 'Mise en place d’une architecture Big Data pour le traitement en temps réel des données en utilisant la Lambda Architecture.'
	},
	{
	  slug: 'sgsm-ascenseur',
	  company: 'SGSM Ascenseur',
	  description: 'Au sein de SGSM Ascenseur, j’ai développé une application web permettant de faciliter la gestion et le suivi des processus de maintenance des ascenseurs. Cette application a intégré la digitalisation des tâches, ce qui a permis d’améliorer l’efficacité des techniciens en éliminant les contraintes liées à la gestion papier et en optimisant les processus de maintenance.',
	  contract: ContractType.Internship,
	  type: 'Développement Web',
	  location: 'Tunisie',
	  period: { from: new Date(2023, 0, 1), to: new Date(2023, 11, 31) },
	  skills: getSkills('ReactJS', 'NestJS', 'PostgreSQL'),
	  name: 'Stagiaire Développeur Web',
	  color: 'purple',
	  links: [],
	  logo: Assets.Unknown,
	  shortDescription: 'Création d’une application web pour digitaliser et optimiser la gestion de la maintenance des ascenseurs.'
	},
	{
	  slug: 'sfectoria',
	  company: 'SFECTORIA',
	  description: 'Dans le cadre de mon stage chez SFECTORIA, j’ai contribué à l’amélioration du système de gestion de l’apprentissage (LMS) en développant un système de recommandation en temps réel, basé sur le comportement de navigation des utilisateurs. De plus, j’ai intégré une fonctionnalité de reconnaissance faciale pour personnaliser l’expérience des utilisateurs. Ce projet m’a permis de renforcer mes compétences en développement full-stack et en traitement de données en temps réel.',
	  contract: ContractType.Internship,
	  type: 'Développement Full Stack',
	  location: 'Tunisie',
	  period: { from: new Date(2024, 0, 1) },
	  skills: getSkills('ReactJS', 'NestJS', 'PostgreSQL', 'Spark', 'Reconnaissance faciale'),
	  name: 'Stagiaire Développeur Full Stack',
	  color: 'red',
	  links: [],
	  logo: Assets.Unknown,
	  shortDescription: 'Amelioration du LMS avec un système de recommandation en temps réel et une intégration de reconnaissance faciale pour une expérience utilisateur personnalisée.'
	}
  ]
  ;

export const title = 'Experience';
