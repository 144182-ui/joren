document.addEventListener('DOMContentLoaded', function(){
  const showHintBtn = document.getElementById('showHint');
  const hintBox = document.getElementById('hintBox');
  const closeHint = document.getElementById('closeHint');
  const openCode = document.getElementById('openCode');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const copyCode = document.getElementById('copyCode');
  const giftCode = document.getElementById('giftCode');

  // eventueel code automatisch genereren of aanpassen
  // giftCode.textContent = 'SINT' + new Date().getFullYear();

  showHintBtn.addEventListener('click', () => {
    hintBox.setAttribute('aria-hidden','false');
  });
  closeHint.addEventListener('click', () => {
    hintBox.setAttribute('aria-hidden','true');
  });

  openCode.addEventListener('click', () => {
    modal.setAttribute('aria-hidden','false');
  });
  closeModal.addEventListener('click', () => {
    modal.setAttribute('aria-hidden','true');
  });
  // sluit modal bij klik buiten content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.setAttribute('aria-hidden','true');
  });

  copyCode.addEventListener('click', async () => {
    const text = giftCode.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyCode.textContent = 'Gekopieerd!';
      setTimeout(() => copyCode.textContent = 'Kopieer code', 2000);
    } catch {
      alert('Kopieer de code handmatig: ' + text);
    }
  });

  // start zoekknop: laat snel een bevestiging zien
  const startSearch = document.getElementById('startSearch');
  if (startSearch) {
    startSearch.addEventListener('click', () => {
      alert('Succes met zoeken! Kijk goed rond beneden — veel plezier!');
    });
  }
});
// ...existing code...
// Voeg dit onderaan je bestaande DOMContentLoaded-handler of in het bestand als er nog geen handler is.
document.addEventListener('DOMContentLoaded', function () {
  const SECRET = '##SINTERKLAAS2025##';
  const submitBtn = document.getElementById('submitCode');
  const codeInput = document.getElementById('codeInput');
  const result = document.getElementById('result');

  if (submitBtn && codeInput && result) {
    function checkCode() {
      const val = (codeInput.value || '').trim();
      if (val === SECRET) {
        result.textContent = 'Code klopt! Gefeliciteerd!';
        result.style.color = 'green';
        // optionele redirect naar een andere pagina na 2 seconden
        setTimeout(() => window.location.href = 'gefeliciteerd.html', 2000);
      } else {
        result.textContent = 'Verkeerde code, probeer opnieuw.';
        result.style.color = 'red';
      }
    }

    submitBtn.addEventListener('click', checkCode);
    // Enter-toets werkt ook
    codeInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        checkCode();
      }
    });
  }
});
// ...existing code...