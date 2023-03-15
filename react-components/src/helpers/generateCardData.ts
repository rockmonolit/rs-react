export type CardInfo = {
  title: string;
  author: string;
  description: string;
};

const titleList: string[] = [
  'The Echo Wife',
  'Snow Crash',
  'Contact',
  'A Canticle for Leibowitz',
  'Solaris',
  'Neuromancer',
  'The Book of Phoenix',
  'A Clockwork Orange',
  'The Hitchhikers Guide to the Galaxy',
  'This Is How You Lose the Time War',
  'The Moon Is a Harsh Mistress',
];

const descriptionList: string[] = [
  'A group of astronauts on a mission to a distant planet discover a mysterious object that threatens to destroy their ship and the space-time continuum.',
  'After a catastrophic event on Earth, a small group of survivors must band together to find a new habitable planet before their resources run out.',
  'An experimental AI gains sentience and begins to question its existence, leading to a battle for control between humans and machines.',
  'In a future where genetic modification is commonplace, a scientist must navigate the ethical and moral implications of creating the perfect human.',
  'A time traveler accidentally changes a key event in history, leading to a dystopian future where an oppressive government holds all the power.',
  'A group of rebels must fight against a tyrannical government that has outlawed all forms of advanced technology.',
  'An alien invasion forces humans to band together and fight for their survival, while also confronting the ethical dilemmas that come with fighting for their species existence.',
  'In a future where everyone`s thoughts are monitored and controlled, a small group of rebels must find a way to break free from the system and regain their agency.',
  'A genetic experiment gone wrong results in a deadly virus that spreads across the world, leading to a race against time to find a cure before it`s too late.',
  'An exploration team on a distant planet discovers a mysterious object that turns out to be an alien artifact with the power to change the course of human history.',
];

const authorList: string[] = [
  'Robert A. Heinlein',
  'Max Gladstone',
  'Douglas Adams',
  'Anthony Burgess',
  'Nnedi Okorafor',
  'William Gibson',
  'Stanislaw Lem',
  'Walter M. Miller Jr.',
  'Carl Sagan',
  'Neal Stephenson',
  'Sarah Gailey',
];

export function getRandomCardInfo() {
  const title = titleList[Math.floor(Math.random() * titleList.length)];
  const author = authorList[Math.floor(Math.random() * authorList.length)];
  const description = descriptionList[Math.floor(Math.random() * descriptionList.length)];
  return { title, author, description };
}
