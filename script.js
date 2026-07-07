let title=document.getElementById("title");
let box=document.getElementById("box");


// PHOTO FRAMES

function showFrames(){

title.innerHTML="Photo Frame Collections";

box.innerHTML=`


<div class="product">
<img src="image/01.jpeg">
<h2>Mini Frame</h2>
<p>Size : 4 x 6 inch</p>
<h3>₹150</h3>
<button onclick="orderWhatsApp('Mini Frame','4 x 6 inch')">Order Now</button>
</div>


<div class="product">
<img src="image/01.jpeg">
<h2>Small Table Frame</h2>
<p>Size : 5 x 7 inch</p>
<h3>₹250</h3>
<button onclick="orderWhatsApp('Small Table Frame','5 x 7 inch')">Order Now</button>
</div>


<div class="product">
<img src="image/02.jpeg">
<h2>Classic Frame</h2>
<p>Size : 6 x 8 inch</p>
<h3>₹350</h3>
<button onclick="orderWhatsApp('Classic Frame','6 x 8 inch')">Order Now</button>
</div>



<div class="product">
<img src="image/02.jpeg">
<h2>Medium Frame</h2>
<p>Size : 8 x 12 inch</p>
<h3>₹600</h3>
<button onclick="orderWhatsApp('Medium Frame','8 x 12 inch')">Order Now</button>
</div>




<div class="product">
<img src="image/03.jpeg">
<h2>Couple Frame</h2>
<p>Size : 10 x 12 inch</p>
<h3>₹750</h3>
<button onclick="orderWhatsApp('Couple Frame','10 x 12 inch')">Order Now</button>
</div>




<div class="product">
<img src="image/03.jpeg">
<h2>Family Frame</h2>
<p>Size : 12 x 18 inch</p>
<h3>₹1200</h3>
<button onclick="orderWhatsApp('Family Frame','12 x 18 inch')">Order Now</button>
</div>




<div class="product">
<img src="image/03.jpeg">
<h2>Large Frame</h2>
<p>Size : 16 x 20 inch</p>
<h3>₹1800</h3>
<button onclick="orderWhatsApp('Large Frame','16 x 20 inch')">Order Now</button>
</div>




<div class="product">
<img src="image/03.jpeg">
<h2>Premium Large Frame</h2>
<p>Size : 16 x 24 inch</p>
<h3>₹2500</h3>
<button onclick="orderWhatsApp('Premium Large Frame','16 x 24 inch')">Order Now</button>
</div>


`;

}



// WALL FRAME

function showPhotography(){

title.innerHTML="Big Wall Frames";

box.innerHTML=`


<div class="product">
<img src="image/04.jpeg">
<h2>Wall Frame</h2>
<p>Size : 18 x 24 inch</p>
<h3>₹3000</h3>
<button onclick="orderWhatsApp('Wall Frame','18 x 24 inch')">Order Now</button>
</div>



<div class="product">
<img src="image/04.jpeg">
<h2>Premium Wall Frame</h2>
<p>Size : 20 x 30 inch</p>
<h3>₹4500</h3>
<button onclick="orderWhatsApp('Premium Wall Frame','20 x 30 inch')">Order Now</button>
</div>



<div class="product">
<img src="image/05.jpeg">
<h2>Luxury Hall Frame</h2>
<p>Size : 24 x 36 inch</p>
<h3>₹6500</h3>
<button onclick="orderWhatsApp('Luxury Hall Frame','24 x 36 inch')">Order Now</button>
</div>




<div class="product">
<img src="image/05.jpeg">
<h2>Royal Wall Frame</h2>
<p>Size : 36 x 48 inch</p>
<h3>₹12000</h3>
<button onclick="orderWhatsApp('Royal Wall Frame','36 x 48 inch')">Order Now</button>
</div>


`;

}




// EDITING

function showEditing(){

title.innerHTML="Editing Works";

box.innerHTML=`


<div class="product">
<h2>Passport Size Photo</h2>
<p>Instant Passport Photo</p>
<h3>₹100</h3>
<button onclick="orderWhatsApp('Passport Size Photo','Standard Size')">Order Now</button>
</div>


<div class="product">
<h2>Photo Editing</h2>
<p>Professional Editing</p>
<h3>₹100/photo</h3>
<button onclick="orderWhatsApp('Photo Editing','1 Photo')">Order Now</button>
</div>



<div class="product">
<h2>Old Photo Restore</h2>
<p>Repair & Colour Correction</p>
<h3>₹300/photo</h3>
<button onclick="orderWhatsApp('Old Photo Restore','1 Photo')">Order Now</button>
</div>


`;

}




// WHATSAPP

function orderWhatsApp(product,size){


let phone="917676557442";


let message=

`Hello MS PHOTO FRAMES

I want to order

Product : ${product}

Size : ${size}

Location : Bangalore

Please confirm details`;


let link=
"https://wa.me/"+phone+
"?text="+encodeURIComponent(message);


window.open(link,"_blank");


}