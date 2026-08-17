export default function FooterBrands(data){

return `

<div class="w-full bg-gray-100">

<section

class="
max-w-[1400px]
mx-auto
"

>


<div

class="
grid
grid-cols-3
sm:grid-cols-5
md:grid-cols-7
lg:grid-cols-9
w-full
mt-2
"

>


${
data.map(item=>`

<div

class="
h-[90px]
sm:h-[100px]
md:h-25
bg-gray-100
flex
items-center
justify-center
border-r
border-b 
border-gray-200
"

>

<img

src="${item.image}"

class="
max-w-[90px]
sm:max-w-[110px]
md:max-w-[130px]
max-h-[50px]
sm:max-h-[60px]
md:max-h-[70px]
object-contain
"

>


</div>


`).join("")
}


</div>


</section>

</div>

`;

}