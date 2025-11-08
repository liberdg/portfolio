var type=new Typed('.test',{
    strings:["Développeur Web","Developpeur Mobile","Trader","Entrepreneur"],
    typeSpeed:100,
    backSpeed:60,
    loop:true

});
<script>
const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement
    const data = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            confirmation.style.display = 'block';
            form.reset();
        } else {
            alert("Erreur lors de l'envoi du message !");
        }
    }).catch(error => {
        alert("Erreur : " + error);
    });
});
</script>


