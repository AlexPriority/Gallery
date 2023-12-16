function upDate(previewPic){
    var fullImage = new Image();
    fullImage.src = previewPic.src;
    fullImage.onload = function() {
        document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    };

    // Cambiar el texto del div "image" a la descripción alternativa de la imagen
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){
    // Restaurar el fondo del div "image" a la imagen original (se asume que no hay imagen original)
    document.getElementById('image').style.backgroundImage = "url('')";
    
    // Restaurar el texto del div "image" al texto original (se asume que no hay texto original)
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function tabFocus(previewPic) {
    upDate(previewPic);
    previewPic.classList.add('tabFocused');
    console.log('Image focused');
}

function removeTabFocus(previewPic) {
    unDo();
    previewPic.classList.remove('tabFocused');
    console.log('Image focus removed');
}

function addTabIndexes() {
    var previewImages = document.getElementsByClassName('preview');
    for (var i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute('tabindex', '0');
    }
}
