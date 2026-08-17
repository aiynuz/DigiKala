import FooterNewsletter from "./FooterNewsletter";


export default function FooterSocial(data) {

return `

<div
class="
text-right
"
>


<h3
class="
font-bold
text-gray-800
mb-6
text-base
"
>
همراه ما باشید!
</h3>



<div
class="
flex
items-center
gap-6
text-gray-400
text-2xl
mb-8
"
>


<a href="#">
<i class="fa-brands fa-instagram"></i>
</a>


<a href="#">
<i class="fa-brands fa-twitter"></i>
</a>


<a href="#">
<i class="fa-brands fa-linkedin"></i>
</a>


<a href="#">
<i class="fa-brands fa-youtube"></i>
</a>


<a href="#">
<i class="fa-solid fa-circle-play"></i>
</a>


</div>



${FooterNewsletter(data)}


</div>

`;

}