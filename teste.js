document.addEventListener("DOMContentLoaded", (event) => {
    const botaoWPP = document.getElementById('btnContatoWPP');
    botaoWPP.addEventListener('click', () =>{
        const numeroWPP = '5585999572062';
        const mensagem = "Olá, Gostaria de saber mais sobre os produtos da Joab Kids";
        const url = `https://wa.me/${numeroWPP}?text=${encodeURIComponent(mensagem)}`;
        console.log(numeroWPP);
        console.log(mensagem);
        console.log(url);
        window.open(url, '_blank');
    })
})
document.addEventListener("DOMContentLoaded", (event) => {
    const botaoInsta = document.getElementById('btnContatoInsta');
})