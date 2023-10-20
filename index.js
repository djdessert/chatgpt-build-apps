const setupTextarea = document.getElementById('setup-textarea') 
const setupInputContainer = document.getElementById('setup-input-container')
const movieBossText = document.getElementById('movie-boss-text')

const apiKey = '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'
const url = 'https://api.openai.com/v1/completions'

document.getElementById("send-btn").addEventListener("click", () => {
  // if (setupTextarea.value) {
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`
  // }
  fetchBotReply()
})

function fetchBotReply(){
  fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer ${apiKey}"
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      "messages": [
        {
          "role": "system",
          "content": "give an enthusiastic response in 5 words or less."
        }
      ]
    })
  }).then(response => response.json()).then(data => console.log(data))
}