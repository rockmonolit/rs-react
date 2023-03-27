import { getRandomCardInfo } from './generateCardData';

export function getCardsInfo(numberOfCards = 8) {
  const cards = [];
  for (let i = 0; i < numberOfCards; i++) {
    const cardInfo = getRandomCardInfo();
    cards.push({
      id: i,
      author: cardInfo.author,
      title: cardInfo.title,
      description: cardInfo.description,
    });
  }
  return cards;
}
