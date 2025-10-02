// ====== SCRIPTS DO SITE ======
document.addEventListener('DOMContentLoaded', function() {
    // Modal para certificados
    const imgsCertificados = document.querySelectorAll('.img-certificado');
    const modal = document.getElementById('modal-certificado');
    const modalImg = document.getElementById('img-modal');
    const closeModal = document.getElementById('close-modal');

    if (modal && modalImg && closeModal) {
        imgsCertificados.forEach(img => {
            img.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
            }
        });

        closeModal.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Menu responsivo hamburguer
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-bar');
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});