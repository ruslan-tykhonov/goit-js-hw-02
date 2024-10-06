function formatMessage(message, maxLength) {
  // Перевіряємо довжину рядка
  if (message.length <= maxLength) {
    return message; // Якщо рядок менший або дорівнює maxLength, повертаємо його без змін
  } else {
    return message.slice(0, maxLength) + '...'; // Якщо довший, обрізаємо та додаємо "..."
  }
}