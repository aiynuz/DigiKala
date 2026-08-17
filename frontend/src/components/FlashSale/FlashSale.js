export default function FlashSale(data) {
  const products = data.products;

  return `

<section class="
mt-6
md:mt-8
mx-auto
max-w-[1400px]
bg-[#f7f0eb]
rounded-2xl
md:rounded-3xl
p-3
md:p-5
relative
overflow-hidden
">


<!-- Header -->

<div class="
flex
justify-between
items-center
mb-5
">


<div class="
flex
items-center
gap-2
text-gray-800
font-bold
text-base
md:text-xl
">

<i class="
${data.icon}
text-orange-500
"></i>

${data.title}

</div>



<a
class="
text-[#424750]
text-xs
md:text-sm
flex
items-center
gap-2
cursor-pointer
"
>

مشاهده همه

<span>
>
</span>

</a>


</div>



<p class="
text-gray-800
text-xs
md:text-sm
mb-5
bg-gray-300
rounded-lg
px-3
md:px-4
py-3
">

${data.description}

</p>



<!-- Categories -->


<div class="
flex
gap-3
mb-6
overflow-x-auto
scrollbar-hide
">


${data.categories
  .map(
    (cat) => `

<button
class="
border
border-gray-300
rounded-full
px-4
md:px-5
py-2
text-xs
md:text-sm
bg-white
whitespace-nowrap
"
>

${cat}

</button>

`,
  )
  .join("")}


</div>





<!-- Slider -->


<div class="relative">


<div class="swiper flashSwiper">


<div class="swiper-wrapper">


${products
  .map(
    (product) => `


<div class="swiper-slide">


<div class="
bg-white
rounded-xl
p-3
md:p-4
h-[350px]
md:h-[390px]
flex
flex-col
justify-between
">


<img

src="${product.image}"

class="
w-full
h-[160px]
md:h-[220px]
object-contain
"

/>



<div

class="
text-xs
md:text-sm
text-gray-700
line-clamp-2
"

>

${product.title}

</div>





<div class="
flex
items-end
justify-between
w-full
"
style="direction:ltr;"
>



<div

class="
flex
flex-col
items-start
"

style="direction:rtl;"

>



<div class="
flex
items-center
gap-2
"
style="direction:rtl;"
>


<span

class="
bg-[#ef394e]
text-white
rounded-full
px-2
text-xs
"

>

${product.discount}

</span>



<div

class="
text-gray-400
text-xs
line-through
"

>

${product.oldPrice}

</div>


</div>





<div

class="
font-bold
text-base
md:text-lg
flex
items-center
gap-1
"

>


${product.price}



<span

class="
text-xs
font-normal
"

>

تومان

</span>


</div>



</div>


</div>



</div>


</div>


`,
  )
  .join("")}



</div>


</div>




<button
class="
flash-prev
absolute
right-2
top-1/2
-translate-y-1/2
z-20
flex
w-9
h-9
bg-white
rounded-full
shadow
items-center
justify-center
text-xl
text-gray-700
"
>
‹
</button>

<button
class="
flash-next
absolute
left-2
top-1/2
-translate-y-1/2
z-20
flex
w-9
h-9
bg-white
rounded-full
shadow
items-center
justify-center
text-xl
text-gray-700
"
>
›
</button>
</div>
</section>

`;
}