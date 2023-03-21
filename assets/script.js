const text =
  "Ayang, tau dak cinta amb ke kau tu sebesar Galaxy Bima Sakti seperti animasi ini. Ayang makasih yo untuk selamo ini pokoknyo amb sayang nian samo ayang, ayang semangat terus yo kerjonyo jangan lupo buat skirpsi yo bee. TERUS NGEBUCIN KEK AMB. HAHAHHHA";
let index = 0;
const typing = setInterval(() => {
  const typingText = document.getElementById("typing-text");
  typingText.innerHTML += text.charAt(index);
  index++;
  if (index > text.length - 1) {
    clearInterval(typing);
    const blink = document.getElementById("blink");
    blink.style.display = "none";
    setTimeout(() => {
      blink.style.display = "inline";
      setInterval(() => {
        blink.style.display =
          blink.style.display === "none" ? "inline" : "none";
      }, 1000);
    }, 500);
  }
}, 50);
