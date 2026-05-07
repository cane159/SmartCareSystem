class Helpers {
  static uniqueRandomNumber(
    usedNumbers: number[],
    min: number,
    max: number,
  ): string {
    const availableNumbers = Array.from(
      { length: max - min + 1 },
      (_, index) => min + index,
    ).filter(number => !usedNumbers.includes(number));

    if (availableNumbers.length === 0) {
      throw new Error('No available unique numbers');
    }

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);

    return availableNumbers[randomIndex].toString();
  }
}

export default Helpers;
