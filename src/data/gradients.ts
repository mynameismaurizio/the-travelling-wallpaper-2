export type Gradient = {
  id: string;
  name: string;
  startColor: string;
  endColor: string;
};

export const gradients: Gradient[] = [
  {
    id: 'black-purple',
    name: 'Black → Purple',
    startColor: '#000000',
    endColor: '#4a148c',
  },
  {
    id: 'dark-blue-teal',
    name: 'Dark Blue → Teal',
    startColor: '#0d1b2a',
    endColor: '#006d77',
  },
  {
    id: 'dark-green-blue',
    name: 'Dark Green → Blue',
    startColor: '#0a2810',
    endColor: '#1a237e',
  },
  {
    id: 'dark-red-purple',
    name: 'Dark Red → Purple',
    startColor: '#1a0000',
    endColor: '#4a148c',
  },
  {
    id: 'dark-blue-indigo',
    name: 'Dark Blue → Indigo',
    startColor: '#0d1b2a',
    endColor: '#311b92',
  },
  {
    id: 'dark-purple-pink',
    name: 'Dark Purple → Pink',
    startColor: '#1a0033',
    endColor: '#880e4f',
  },
  {
    id: 'dark-teal-cyan',
    name: 'Dark Teal → Cyan',
    startColor: '#004d40',
    endColor: '#006064',
  },
  {
    id: 'dark-grey-blue',
    name: 'Dark Grey → Blue',
    startColor: '#212121',
    endColor: '#1565c0',
  },
  {
    id: 'dark-orange-red',
    name: 'Dark Orange → Red',
    startColor: '#1a0000',
    endColor: '#bf360c',
  },
  {
    id: 'dark-navy-teal',
    name: 'Dark Navy → Teal',
    startColor: '#000051',
    endColor: '#004d40',
  },
];

