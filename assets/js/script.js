const projets = [
  {
    titre: "Site Star Wars Première Trilogie",
    description: "Site web inspiré de la trilogie originale.",
    technologie: "VSCode / HTML / CSS",
    lien: "https://star-wars1-kappa.vercel.app/",
    image: "./assets/images/apercu Star Wars .png",
    pageDetail: "star-wars.html",
  },
  {
    titre: "Culture&Co ",
    description:
      "Maquette interactive d'un site internet d'informations culturelles.",
    technologie: "Figma",
    lien: "https://www.figma.com/proto/NGawnH0dal11uffqVP0tg4/Projet-Culture-Co-Adem?page-id=87%3A2&node-id=275-1040&p=f&viewport=-508%2C-140%2C0.26&t=Mu0IkZyhV6YI8LKx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=275%3A1040",
    image: "./assets/images/apercu culture&co.png",
    pageDetail: "culture-co.html",
  },
  {
    titre: "projet Food truck",
    description: "Création d'un site pour un restaurant food truck",
    technologie: "VSCode / HTML / CSS / JS ",
    lien: "https://food-truck2-self.vercel.app/",
    image: "./assets/images/apercu-food-truck.png",
    pageDetail: "food-truck.html",
  },
  {
    titre: "ParkEase",
    description:
      "Maquette interactive visualisant une application pour reserver des places de parking",
    technologie: "Figma",
    lien: "https://www.figma.com/proto/XAHXelArikTX5QADx1Mh3o/Parkease?page-id=85%3A169&team_id=1561998788063628538&node-id=85-267&starting-point-node-id=85%3A267&t=5n7UZeEwj9eYeDzE-1",
    image: "./assets/images/Apercu ParkEase.png",
    pageDetail: "Parkease.html",
  },
  {
    titre: "Dream Event ",
    description: "Site internet pour agence d'évenement.",
    technologie: "VScode / HTML / CSS",
    lien: "https://site-mariage-beige.vercel.app/",
    image: "./assets/images/apercu Dream Event.png",
    pageDetail: "Dream-event.html",
  },
  {
    titre: "Rainbow Photo ",
    description: "Site internet pour un collectif de photographes",
    technologie: "VScode / HTML / CSS",
    lien: "https://tp-css-main-z41s.vercel.app/",
    image: "./assets/images/Apercu Rainbow Photo.png",
    pageDetail: "rainbow-photo.html",
  },
];

const sectionProjects = document.getElementById("projects");

sectionProjects.innerHTML = `
    <h2>Mes Projets</h2>
    <div class="projects-contenue"></div>
  `;

const contenue = sectionProjects.querySelector(".projects-contenue");

//au lieu de créer 3 cards individuellement je crée une boucle grace à mon tableau de donnée
// qui va venir me créer mes 3 cards sans le faire indivuellement de maniere répétitive
for (let i = 0; i < projets.length; i++) {
  const projet = projets[i];

  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
      <h3>${projet.titre}</h3>

      <p id="principal">${projet.description}</p>

      <p id="Technologies">
        <strong>Technologies :</strong> ${projet.technologie}
      </p>

      <a class="link" href="${projet.lien}" target="_blank">
        Voir le site →
      </a>
    `;
  const preview = document.createElement("div");
  preview.className = "preview";

  // Créer le lien pour l'image
  const lienImage = document.createElement("a");
  lienImage.href = projet.pageDetail; // Utilise la page spécifique

  const img = document.createElement("img");
  img.src = projet.image;
  img.alt = "Aperçu du projet " + projet.titre;

  lienImage.appendChild(img);
  preview.appendChild(lienImage);
  card.appendChild(preview);
  contenue.appendChild(card);
}

// ========================================
// ANIMATION 1 : APPARITION PROGRESSIVE AU SCROLL
// ========================================

// Fonction pour détecter si un élément est visible à l'écran
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Animation d'apparition progressive
function animateOnScroll() {
  const cards = document.querySelectorAll(".card");
  const sections = document.querySelectorAll("#hero, #projects, #cv");

  // Ajouter les classes d'animation au chargement
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 200);
  });

  // Animation des cartes au scroll
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";
  });

  function checkCards() {
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;

      if (isVisible && card.style.opacity === "0") {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 150);
      }
    });
  }

  window.addEventListener("scroll", checkCards);
  checkCards(); // Vérifier au chargement
}

// ========================================
// ANIMATION 2 : EFFET HOVER DYNAMIQUE SUR LES CARTES
// ========================================

function animateCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    // Effet de levitation au survol
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
      this.style.boxShadow = "0 0 30px rgba(255, 217, 61, 0.4)";
      this.style.transition = "all 0.3s ease";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "none";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1) rotateX(0) rotateY(0)";
    });
  });
}

// ========================================
// ANIMATION 4 : NAVIGATION DOUCE (SMOOTH SCROLL)
// ========================================

function smoothScroll() {
  const navLinks = document.querySelectorAll(".site-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}
// ========================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  // Activer toutes les animations
  animateOnScroll();
  animateCards();
  typeWriterEffect();
  smoothScroll();
  animatePortrait();
  animateLinks();

  console.log("✨ Animations du portfolio activées !");
});

// Animation continue du header
const header = document.querySelector(".site-header");
let scrollPos = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > scrollPos && currentScroll > 100) {
    // Scroll vers le bas - cacher le header
    header.style.transform = "translateY(-100%)";
    header.style.transition = "transform 0.3s ease";
  } else {
    // Scroll vers le haut - montrer le header
    header.style.transform = "translateY(0)";
  }

  scrollPos = currentScroll;
});

// ========================================
// Animation hover “tilt” sur les cards
// ========================================

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


/// Animation de scroll infini 
const gallery = document.querySelector('.gallery-scroll');

// Pause au survol pour une meilleure UX
gallery.addEventListener('mouseenter', () => {
    gallery.style.animationPlayState = 'paused';
});

gallery.addEventListener('mouseleave', () => {
    gallery.style.animationPlayState = 'running';
});

// Créer une modale pour agrandir les images
const modal = document.createElement('div');
modal.className = 'image-modal';
modal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-content" src="" alt="Image agrandie">
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-content');
const closeBtn = modal.querySelector('.close-modal');

// Ajouter le zoom sur clic pour chaque image
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function(e) {
        e.stopPropagation();
        modal.classList.add('active');
        modalImg.src = this.src;
        gallery.style.animationPlayState = 'paused';
    });
});

// Fermer la modale
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    gallery.style.animationPlayState = 'running';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        gallery.style.animationPlayState = 'running';
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        gallery.style.animationPlayState = 'running';
    }
});