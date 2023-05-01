const chatbotOutput = document.getElementById('chatbot-output');
const chatbotInput = document.querySelector('#chatbot-input input[type="text"]');
const chatbotButton = document.querySelector('#chatbot-input button');

chatbotButton.addEventListener('click', () => {
  const userMessage = chatbotInput.value;
  chatbotOutput.innerHTML += `<p>User: ${userMessage}</p>`;
  chatbotInput.value = '';

  // Code to send user message to NLP engine and get chatbot response

  chatbotOutput.innerHTML += `<p>Chatbot: ${chatbotResponse}</p>`;
});