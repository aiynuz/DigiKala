export default function FooterNewsletter(data){

return `

<div class="
mt-2
">


<h3
class="
font-bold
text-gray-800
mb-5
text-base
"
>

با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید

</h3>



<div
class="
flex
gap-2
justify-start
"
>


<input

placeholder="${data.newsletterPlaceholder}"

class="
bg-gray-100
rounded-lg
px-4
py-3
w-[330px]
text-sm
"

/>


<button

class="
bg-gray-200
rounded-lg
px-5
text-gray-400
"

>

ثبت

</button>


</div>


</div>


`;

}