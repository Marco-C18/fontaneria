console.log("Hello, world!");

const banner = document.getElementById("banner");
const header = document.getElementById("font-header");
const menu = document.getElementById("group-2");
const burguer = document.getElementById("burguer");
const close = document.getElementById("close");

const about = document.getElementById("about");
const allAbout = document.getElementById("all-about");

const process = document.getElementById("process");
const allProcess = document.getElementById("all-process");
const processImg = document.getElementById("process-img");

const services = document.getElementById("services");
const allServices = document.getElementById("all-services");

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

function createObserver(element, alcance = 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    },
    {
      root: null,
      threshold: alcance,
    },
  );
  return observer;
}

const observerHeader = createObserver(header, 0.8);
const observerAbout = createObserver(allAbout, 0.2);
const observerProcess = createObserver(allProcess, 0.2);
const observerServices = createObserver(allServices, 0.2);

function Close() {
  console.log("Cancel");
  menu.classList.remove("active");
}

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

function checkWidth() {
  if (window.innerWidth < 670) {
    console.log("phone");
    processImg.src = "assets/img/banner-phone.png";
  } else if (window.innerWidth <= 980) {
    processImg.src = "assets/img/banner-tablet.png";
    console.log("tablet");
  } else {
    processImg.src = "assets/img/banner-pc.png";
    console.log("pc");
  }
}

burguer.addEventListener("click", () => {
  console.log("Burguer");
  menu.classList.add("active");
});

observerHeader.observe(banner);
observerAbout.observe(about);
observerProcess.observe(process);
observerServices.observe(services);

close.addEventListener("click", Close);
im.addEventListener("click", Close);
cm.addEventListener("click", Close);

cb.addEventListener("click", () => openWhatsApp(msgGeneral));
eb.addEventListener("click", () => openWhatsApp(msgElectricidad));
fb.addEventListener("click", () => openWhatsApp(msgFontaneria));
ib.addEventListener("click", () => openWhatsApp(msgInstalaciones));
rb.addEventListener("click", () => openWhatsApp(msgReparaciones));
wb.addEventListener("click", () => openWhatsApp(msgGeneral));

window.addEventListener("resize", checkWidth);
checkWidth();
