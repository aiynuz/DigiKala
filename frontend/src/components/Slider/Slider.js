export default function Slider(data) {
  return `

<section class="w-full">


<div 
class="
swiper
heroSwiper
w-full
"
>


<div class="swiper-wrapper">


${data.slides
.map(
(slide)=>`

<div class="swiper-slide">


<img

src="${slide.image}"

class="
w-full

h-auto
sm:h-[250px]
md:h-[400px]

object-contain
md:object-cover

"

>


</div>


`
)
.join("")}


</div>



<div class="swiper-pagination"></div>



<div
class="
swiper-button-prev
custom-prev

hidden
md:flex

!w-8
!h-8
lg:!w-10
lg:!h-10

"
>
</div>


<div
class="
swiper-button-next
custom-next

hidden
md:flex

!w-8
!h-8
lg:!w-10
lg:!h-10

"
>
</div>



</div>


</section>


`;
}