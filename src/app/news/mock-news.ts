import { News } from "../shared/models/news";

export const NEWS: News[] = [
    {
      title: `Test 1`,
      url: 'test-1',
      date: new Date('2017-02-10').toLocaleDateString(),
      description: `This is teste description 1`
    },
    {
      title: `Test 2`,
      url: 'test-2',
      date: new Date('2017-02-11').toLocaleDateString(),
      description: `This is teste description 2`
    },
    {
      title: `Test 3`,
      url: 'test-3',
      date: new Date('2017-02-12').toLocaleDateString(),
      description: `This is teste description 3`
    },
];
