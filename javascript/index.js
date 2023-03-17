/**
 * Création d'un élément HTML <span></span>.
 * Ajout de la class bubble à l'élément HTML <span></span>.
 * Indication au body qu'il a un enfant soit l'élément HTML <span></span> qui a la class bubble.
 * Génération d'un nombre alétoire entre 200 et 300 px.
 * La height et width sont égales à la constante SIZE.
 * Positionnement des bulles au top entre 100 et 150% et left à 100% (position absolute de la class .bulle).
 * Suppression d'une bulle au clic et le compteur s'incrémente de 1 à chaque clic sur une bulle (AddEventlistener, line 28).
 * Destruction des bulles au bout de 8s (setTimeOut, line 34).
 */

const KILLBUBBLE = document.querySelector("h3");
let cptKillBubble = 0;

const BUBBLEMAKER = () => {
  const BUBBLE = document.createElement("span");
  const SIZE = Math.random() * 200 + 100 + "px";
  const PLUSMINUS = Math.random() > 0.5 ? 1 : -1;

  BUBBLE.classList.add("bubble");
  document.body.appendChild(BUBBLE);

  BUBBLE.style.height = SIZE;
  BUBBLE.style.width = SIZE;
  BUBBLE.style.top = Math.random() * 100 + 50 + "%";
  BUBBLE.style.left = Math.random() * 100 + "%";
  BUBBLE.style.setProperty("--left", Math.random() * 100 * PLUSMINUS + "%");

  BUBBLE.addEventListener("click", () => {
    cptKillBubble++;
    KILLBUBBLE.textContent = cptKillBubble;
    BUBBLE.remove();
  });

  setTimeout(() => {
    BUBBLE.remove();
  }, 8000);
};

setInterval(BUBBLEMAKER, 300);
