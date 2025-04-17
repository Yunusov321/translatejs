async function translateText() {
    const text = document.getElementById('inputText').value;
    const fromLang = document.getElementById('fromLang').value;
    const toLang = document.getElementById('toLang').value;

    if (!text) {
      alert("Matn kiriting!");
      return;
    }

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      const translatedText = data.responseData.translatedText;
      document.getElementById('outputText').value = translatedText;
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi!");
    }
  }

  function speakText(elementId) {
    const text = document.getElementById(elementId).value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
