
const fecharTrainer = document.querySelector('.fechar_modal')
const video = document.getElementById('video')
const videoLink = video.src;
const modal = document.querySelector('.modal')

function toggleModal(){
    modal.classList.toggle("aberto")
}

fecharTrainer.addEventListener("click", () => {
    toggleModal()
    video.src = ""
    
});

function openModal(){
    video.src = videoLink
    toggleModal()

}

