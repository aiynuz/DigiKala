export default function FooterApp(data){

return `

<div class="
mt-10
bg-[#28345d]
rounded-xl
p-4
md:p-5
flex
flex-col
md:flex-row
items-center
justify-between
gap-5
">


<div class="
flex
items-center
gap-3
w-full
md:w-auto
justify-center
md:justify-start
">

  <img
    src="/images/footerlogo2.png"
    alt="دیجی‌کالا"
    class="
    w-10
    h-10
    object-contain
    "
  />

  <h3 class="
  text-white
  font-bold
  text-sm
  md:text-base
  ">
  
  دانلود اپلیکیشن دیجی‌کالا
  
  </h3>

</div>



<div class="
flex
flex-wrap
justify-center
md:justify-end
gap-2
md:gap-3
w-full
md:w-auto
">


${
data.apps.map(app=>`

<img

src="${app.image}"

class="
h-8
md:h-10
object-contain
"

/>


`).join("")
}


</div>


</div>


`;

}