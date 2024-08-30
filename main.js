// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const catalogo = document.querySelector("#catalogo");

const pagina1 = document.querySelector("#p1");
const pagina2 = document.querySelector("#p2");
const pagina3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfpaginas = 3;
let maxLocation = numOfpaginas + 1;

function opencatalogo() {
    if (window.innerWidth > 768) {
        catalogo.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }
}

function closecatalogo(isAtBeginning) {
    if (window.innerWidth > 768) {
        if (isAtBeginning) {
            catalogo.style.transform = "translateX(0%)";
        } else {
            catalogo.style.transform = "translateX(100%)";
        }
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                if (window.innerWidth <= 768) {
                    pagina1.style.display = "none";
                    pagina2.style.display = "block";
                } else {
                    pagina1.classList.add("flipped");
                    pagina1.style.zIndex = 1;
                    opencatalogo();
                }
                break;
            case 2:
                if (window.innerWidth <= 768) {
                    pagina2.style.display = "none";
                    pagina3.style.display = "block";
                } else {
                    pagina2.classList.add("flipped");
                    pagina2.style.zIndex = 2;
                }
                break;
            case 3:
                pagina3.classList.add("flipped");
                pagina3.style.zIndex = 3;
                if (window.innerWidth > 768) {
                    closecatalogo(false);
                }
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                if (window.innerWidth <= 768) {
                    pagina2.style.display = "none";
                    pagina1.style.display = "block";
                } else {
                    pagina1.classList.remove("flipped");
                    pagina1.style.zIndex = 3;
                    closecatalogo(true);
                }
                break;
            case 3:
                if (window.innerWidth <= 768) {
                    pagina3.style.display = "none";
                    pagina2.style.display = "block";
                } else {
                    pagina2.classList.remove("flipped");
                    pagina2.style.zIndex = 2;
                }
                break;
            case 4:
                if (window.innerWidth > 768) {
                    opencatalogo();
                    pagina3.classList.remove("flipped");
                    pagina3.style.zIndex = 1;
                }
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}
