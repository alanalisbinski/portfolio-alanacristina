console.log('Seção skills:', document.getElementById('skills'));
console.log('Barras de progresso:', document.querySelectorAll('.skill-progress').length);
console.log('Barras de fundo:', document.querySelectorAll('.skill-bar').length);

document.querySelectorAll('.skill-progress').forEach(bar => {
    bar.style.width = bar.getAttribute('data-level') + '%';
    bar.style.backgroundColor = 'red';
});