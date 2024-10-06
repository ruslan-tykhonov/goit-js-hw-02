function makeTransaction(quantity, pricePerDroid, customerCredits) {
  // Розраховуємо загальну суму замовлення
  const totalPrice = quantity * pricePerDroid;
  
  // Перевіряємо, чи достатньо кредитів у клієнта
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}