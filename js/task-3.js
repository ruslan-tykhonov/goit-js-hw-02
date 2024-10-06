function checkForSpam(message) {
  // Перетворюємо рядок на нижній регістр для перевірки незалежно від регістру символів
  const lowerCaseMessage = message.toLowerCase();
  
  // Перевіряємо, чи містить рядок заборонені слова "spam" або "sale"
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}