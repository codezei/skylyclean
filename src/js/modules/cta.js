export default function () {
    const form = document.querySelector('#cta-form')
    if (!form) return
    const popup = document.querySelector('.popup')
    const popupMessage = document.querySelector('.popup__message')
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        let formData = new FormData(e.target)
        let work = []
        for (let [key, value] of formData.entries()) {
        if (key === 'service') {
            
            work.push(value)
        }
    }
    formData.set('service', work.join('; '))
        try {
        let response = await fetch('/telegram.php', {
            method: 'POST',
            body: formData
        })
        let answer = await response.json()
        popupMessage.innerHTML = answer.message
        popup.classList.add('active')
        setTimeout(function () {
            popup.classList.remove("active");
        }, 4000)
        } catch (e) {
            console.log(e.message)
            popup.classList.remove("active")
        }

        form.reset();
    });

}