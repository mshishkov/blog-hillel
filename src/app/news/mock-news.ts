import { News } from '../shared/models/news';

export const NEWS: News[] = [
    {
      title: `Elon Musk's Falcon Heavy rocket launches successfully`,
      slug: 'science-environment-42969020',
      views: 0,
      previewImage: 'https://ichef-1.bbci.co.uk/news/624/cpsprodpb/1B27/production/_99915960_1.jpg',
      description: 'US entrepreneur Elon Musk has launched his new rocket, the Falcon Heavy, from the Kennedy Space Center in Florida.',
      author: 'Jonathan Amos',
      active: true,
      createdAt: new Date('2018-02-07').toLocaleDateString(),
      tags: ['science', 'environment']
    },
    {
      title: `HMS Ocean sails into Devonport base for the final time`,
      slug: 'uk-england-devon-43005822',
      views: 0,
      previewImage: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/12C9B/production/_99955967_de30.jpg',
      description: 'The Royal Navy flagship HMS Ocean has sailed into its Devonport base for the final time.',
      active: true,
      editing: false,
      createdAt: new Date('2018-02-08').toLocaleDateString(),
      tags: ['uk', 'england', 'devon']
    },
    {
      title: `In search of surrogates, foreign couples descend on Ukraine`,
      slug: 'world-europe-42845602',
      views: 0,
      previewImage: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/CE5D/production/_99892825_untitled-28.jpg',
      description: `Ukraine, one of Europe's poorest nations, is fast becoming the place to go for
                    people desperate to find a surrogate to have their baby. The money on offer is drawing in many young women,
                    but there are fears they could be exploited.`,
      author: 'Kevin Ponniah, BBC News, Kiev',
      active: true,
      editing: false,
      createdAt: new Date('2018-02-13 7:28:00').toLocaleDateString(),
      tags: ['world', 'europe', 'ukraine']
    },
    {
      title: `Firms on Caribbean island chain own 23,000 UK properties`,
      slug: 'world-europe-42845602',
      views: 0,
      previewImage: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/7C38/production/_100000813_bvi.alamay.png',
      description: `A quarter of property in England and Wales owned by overseas firms is held by entities
                  registered in the British Virgin Islands, BBC analysis has found.`,
      author: 'Andy Verity, BBC Economics correspondent',
      active: true,
      editing: false,
      createdAt: new Date('2018-02-13 05:30:00').toLocaleDateString(),
      tags: ['world', 'europe']
    },
    {
      title: `New crayfish that doesn't need males to mate becomes all-powerful`,
      slug: 'world-43032061',
      views: 0,
      previewImage: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/E9F1/production/_99998895_d5bag0.jpg',
      description: `A mutant species of all-female crayfish taking over the world is not the
                    latest science fiction film but a real-life environmental thriller.`,
      active: true,
      editing: false,
      createdAt: new Date('2018-02-12').toLocaleDateString(),
      tags: ['world']
    }
];
