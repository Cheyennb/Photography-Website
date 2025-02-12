document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('click', () => {
        const fullImgUrl = img.src.replace('thumb', 'large'); // Replace thumbnail with full-size
        window.open(fullImgUrl, '_blank');
    });
});
