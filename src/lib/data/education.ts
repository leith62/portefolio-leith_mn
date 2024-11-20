import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = 
[
	{
	  degree: 'Cycle d’Ingénieur en Informatique : BI & Big Data',
	  description: '',
	  location: 'Tunisia',
	  logo: Assets.Unknown,
	  name: '',
	  organization: 'Iteam University',
	  period: { from: new Date(2022, 0, 1) },
	  shortDescription: '',
	  slug: 'cycle-ingenieur-ibi-bigdata',
	  subjects: ['Big Data', 'Business Intelligence', 'Data Science', 'Machine Learning', 'Algorithms', 'Database Systems']
	},
	{
	  degree: 'Licence en Mathématique et Informatique',
	  description: '',
	  location: 'Tunisia',
	  logo: Assets.Unknown,
	  name: '',
	  organization: 'Faculté des Sciences de Tunis',
	  period: { from: new Date(2019, 0, 1), to: new Date(2022, 5, 1) },
	  shortDescription: '',
	  slug: 'licence-math-info',
	  subjects: ['Mathematics', 'Computer Science', 'Data Structures', 'Algorithms', 'Statistics', 'Programming']
	},
	{
	  degree: 'Licence en Mathématique fondamentale',
	  description: '',
	  location: 'Tunisia',
	  logo: Assets.Unknown,
	  name: '',
	  organization: 'Faculté des Sciences de Tunis',
	  period: { from: new Date(2016, 0, 1), to: new Date(2018, 5, 1) },
	  shortDescription: '',
	  slug: 'licence-math-fondamentale',
	  subjects: ['Pure Mathematics', 'Algebra', 'Calculus', 'Analysis', 'Geometry', 'Topology']
	},
	{
	  degree: 'Cycle préparatoire Mathématique et Physique',
	  description: '',
	  location: 'Tunisia',
	  logo: Assets.Unknown,
	  name: '',
	  organization: 'Faculté des Sciences de Tunis',
	  period: { from: new Date(2012, 0, 1), to: new Date(2015, 5, 1) },
	  shortDescription: '',
	  slug: 'cycle-preparatoire-math-physique',
	  subjects: ['Mathematics', 'Physics', 'Chemistry', 'General Science', 'Introduction to Programming']
	}
  ]
  
;

export const title = 'Education';
