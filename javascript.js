if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("custom-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// boutique sport ------------------------------------
// id = "sport-cart-total" total cart sport
var PrixTotalSport = "0 000";
document.getElementById("sport-cart-total").innerHTML= PrixTotalSport;


// bouton coeur sport
var heartL = document.getElementsByClassName("ico")
for (let i = 0; i < heartL.length; i++) {
    heartL[i].onclick = function () { myFunction() };
    function myFunction() {
        source = heartL[i].getAttribute("src");
        if (source == "./data/logo/empty-heart-ico.png") {
            heartL[i].setAttribute("src", "./data/logo/red-heart-ico.png")
        } else if (source == "./data/logo/red-heart-ico.png") {
            heartL[i].setAttribute("src", "./data/logo/empty-heart-ico.png")
        }
    }
}
//fin coeur boutique sport

// calcul du prix unitaire du produit
var ValiderArticle
ValiderArticle = document.getElementsByClassName("valider-article")
var PAUTTC
PAUTTC = document.getElementsByClassName("PUTTC")
var PcolorRouge = document.getElementsByClassName("rouge")
var PcolorNoir = document.getElementsByClassName("noir")
var Ep15 = document.getElementsByClassName("ep15")
var Ep30 = document.getElementsByClassName("ep30")
var Pepoxy = document.getElementsByClassName("pepoxy")
var Pnormale = document.getElementsByClassName("pnormal")

for (let i=0; i< ValiderArticle.length; i){
    let xi = Number(PAUTTC[i].innerHTML)
    ValiderArticle[i].onclick = function () { calculPUTTC() }
    function calculPUTTC() {
        let x=0,y=0,z=0
        if (PcolorRouge[i].checked){
            x= 5
        }
        else if (PcolorNoir[i].checked){
            x= 0
        }
        if (Ep15[i].checked){
            y = 0
        }
        else if (Ep30[i].checked){
            y = 20
        }
        if (Pepoxy[i].checked){
            z = 0
        }
        else if (Pnormale[i].checked){
            z = 20
        }

        PAUTTC[i].innerHTML = xi + x + y + z
    }
}
// fin calcul prix unitaire produit 1

// valeur total dans la page
var totP = document.getElementById("sport-cart-total")
var valtotP = parseInt(totP.innerHTML)
valtotP = 0
// FIN valeur total dans la page

// bouton +/-
var plus1 = document.getElementsByClassName("add")
var moins1 = document.getElementsByClassName("rem")
var qte1 = document.getElementsByClassName("qte")
var ToCart = document.getElementsByClassName("ajouter")
var Article = document.getElementsByClassName("nom-produit")

for (let i=0; i<plus1.length;i++){
    let q = 0
    plus1[i].onclick = function() {adding1()}
    function adding1(){
        q = Number(qte1[i].innerHTML)
        q+=1
        qte1[i].innerHTML= q
    }
    moins1[i].onclick = function() {minus1()}
    function minus1(){
        q = Number(qte1[i].innerHTML)
        if (q >= 1){
            q-=1
            qte1[i].innerHTML= q
        }
            else { return}
    }
    ToCart[i].onclick = function() {TotalCart()}
    function TotalCart(){
        if (q>0){
        valtotP += (q * Number(PAUTTC[i].innerHTML))
        document.getElementById("sport-cart-total").innerHTML = valtotP

        var table = document.getElementById("Cart-Sport-Table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = Article[i].innerHTML;
        cell2.innerHTML = qte1[i].innerHTML;
        cell3.innerHTML = PAUTTC[i].innerHTML;
        cell4.innerHTML = Number(PAUTTC[i].innerHTML)*Number(qte1[i].innerHTML);
        cell5.innerHTML = ('<input type="button" value="Delete" onclick="deleteRow(this)" height="30px">');
        q = 0
        qte1[i].innerHTML = 0
        }
        else {return}
    }
    function deleteRow(r) {
        var itemp = r.parentNode.parentNode.rowIndex
        var subval = Number(document.getElementById("Cart-Sport-Table").rows[itemp].cells[3].innerHTML)
        console.log("r", r,)
        console.log("itemp", itemp)
        console.log("sybval", subval)
        valtotP -= subval
        console.log("valtotp", valtotP)

        document.getElementById("sport-cart-total").innerHTML = valtotP
        document.getElementById("total-modal").innerHTML = valtotP
        document.getElementById("Cart-Sport-Table").deleteRow(itemp)
    }

}