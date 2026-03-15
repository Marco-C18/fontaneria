console.log("Hello, world!");

const banner = document.getElementById("banner");
const header = document.getElementById("font-header");
const menu = document.getElementById("group-2");
const burguer = document.getElementById("burguer");
const close = document.getElementById("close");
const im = document.getElementById("im");
const cm = document.getElementById("cm");

const phone = "51984177720";

const cb = document.getElementById("cb");
const eb = document.getElementById("eb");
const fb = document.getElementById("fb");
const ib = document.getElementById("ib");
const rb = document.getElementById("rb");
const wb = document.getElementById("wb");

const msgElectricidad =
  "Hola, vi su página web. Estoy interesado en un servicio de electricidad. ¿Podría darme más información o una cotización?";
const msgFontaneria =
  "Hola, vi su página web. Necesito un servicio de fontanería. ¿Podría indicarme disponibilidad o una cotización?";
const msgInstalaciones =
  "Hola, vi su página web. Estoy interesado en un servicio de instalación. ¿Podría darme más información?";
const msgReparaciones =
  "Hola, vi su página web. Necesito una reparación. ¿Podría darme información o una cotización?";
const msgGeneral =
  "Hola Antonio, vi su página web. Necesito información sobre sus servicios. 🙂";

const observer = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  },
  {
    root: null,
    threshold: 0.8,
  },
);

observer.observe(banner);

burguer.addEventListener("click", () => {
  console.log("Burguer");
  menu.classList.add("active");
});

function Close() {
  console.log("Cancel");
  menu.classList.remove("active");
}

close.addEventListener("click", Close);
im.addEventListener("click", Close);
cm.addEventListener("click", Close);

function openWhatsApp(message) {
  const encodedMsg = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  window.location.href = `whatsapp://send?phone=${phone}&text=${encodedMsg}`;

  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${phone}&text=${encodedMsg}`;
  } else {
    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
  }
}

cb.addEventListener("click", () => openWhatsApp(msgGeneral));
eb.addEventListener("click", () => openWhatsApp(msgElectricidad));
fb.addEventListener("click", () => openWhatsApp(msgFontaneria));
ib.addEventListener("click", () => openWhatsApp(msgInstalaciones));
rb.addEventListener("click", () => openWhatsApp(msgReparaciones));
wb.addEventListener("click", () => openWhatsApp(msgGeneral));
