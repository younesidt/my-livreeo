<template>
    <div class="container w-full px-24 md:my-8 md:pb-12 flex flex-col items-center">
        <div>
            <p class="text-[#004079] md:mx-0 font-bold text-2xl md:text-4xl">FAQ</p>
        </div>
        <div class="relative mt-6 md:mt-16 pb-4 w-full border-b-2 items-center border-dark-blue">
            <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
            <div class="w-3/4 md:w-full">
                <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Par quelle moyen obtenons nous les listes scolaires ?</p>
            </div>
            <div class="absolute right-0 top-0 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
            </div>
            <!-- </div>   -->
            <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
                <div class="py-4">
                <p class="text-[10px] md:text-[18px] text-justify">
                    Nous obtenons les listes scolaires par le biais de plusieurs méthodes rigoureuses pour assurer 
                    leur exactitude et leur exhaustivité. L'une des principales méthodes consiste à travailler 
                    directement avec les chefs d'établissement scolaire. Nous établissons des relations solides et de 
                    confiance avec eux, ce qui nous permet d'accéder aux listes scolaires mises à jour chaque année. 
                    De cette façon, nous pouvons garantir que les informations fournies sur notre site sont précises et 
                    reflètent les besoins actuels des élèves.
                    En plus de travailler avec les chefs d'établissement, nous collaborons également avec les 
                    associations de parents d'élèves. Ces associations jouent un rôle crucial dans la communication 
                    entre l'école et les parents, et sont souvent au courant des besoins spécifiques des élèves en 
                    matière de fournitures scolaires.
                    Nous nous engageons également à maintenir une ligne de communication ouverte avec les 
                    écoles et les associations de parents d'élèves pour toute mise à jour ou modification des listes 
                    scolaires en cours d'année scolaire. Ceci nous permet d'ajuster rapidement nos informations en 
                    ligne et de garantir que nous proposons toujours des données fiables et utiles pour les parents et 
                    les élèves.
                </p>
                </div>
            </div>
        </div>

        <div class="relative mt-6 md:mt-12 pb-4 w-full border-b-2 items-center border-dark-blue">
        <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
        <div class="w-3/4 md:w-full">
            <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Qu'elle est le délais de livraison ? </p>
        </div>
        <div class="absolute right-0 top-0 rotate-0 peer-checked:rotate-180 transition-transform duration-500">
            <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
        </div>
        <!-- </div>   -->
        <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
            <div class="py-4">
            <p class="text-[10px] md:text-[18px] text-justify">
                Sur notre site, nous proposons trois options principales de livraison :<br><br>
                <span class="text-[#004079] font-bold">Livraison Express</span> <br>
                <span class="font-semibold">Coût : </span> 100 DHS<br>
                <span class="font-semibold">Délai : </span> 8 à 11 jours ouvrés<br><br> 
            
                <span class="text-[#004079] font-bold">Livraison Économique</span> <br>
                <span class="font-semibold">Coût :</span> Gratuite<br>
                <span class="font-semibold">Délai : </span>Une semaine avant la date prévue de la rentrée<br><br>

                <span class="text-[#004079] font-semibold">Délai : </span>La livraison est effectuée une semaine avant la date prévue de la rentrée.
                Il est important de noter que le délai de livraison est comptabilisé à partir du jour où vous passez 
                votre commande jusqu'au jour de notre première tentative de livraison. Les jours ouvrés 
                comprennent du lundi au vendredi, à l'exclusion des week-ends et des jours fériés.
                Nous vous recommandons de choisir l'option de livraison qui correspond le mieux à vos besoins 
                et à votre budget. Si vous avez d'autres questions ou si vous avez besoin de plus d'informations 
                sur les modalités de livraison, n'hésitez pas à nous contacter.
            </p>
            </div>
        </div>
        </div>

        <div class="relative mt-6 md:mt-12 pb-4 w-full border-b-2 items-center border-dark-blue">
        <!-- <div class="relative flex justify-between pb-4"> -->
        <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
        <div class="w-3/4 md:w-full">
            <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Puis-je retourner ou échanger des articles ?</p>
        </div>
        <div class="absolute right-0 top-0 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
        </div>
        <!-- </div>   -->
        <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
            <div class="py-4">
            <p class="text-[10px] md:text-[18px] text-justify">
                Oui, vous pouvez retourner ou échanger des articles dans un délai de 14 jours à compter de la 
                date de réception, à condition que les livres soient en parfait état et n'aient pas été utilisés. voir la 
                page <router-Link to="/" class="text-[#004079] font-bold">Modalités de livraison</router-Link> pour plus de détails.
            </p>
            </div>
        </div>
        </div>

        <div class="relative mt-6 md:mt-12 pb-4 w-full border-b-2 items-center border-dark-blue">
        <!-- <div class="relative flex justify-between pb-4"> -->
        <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
        <div class="w-3/4 md:w-full">
            <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Comment accéder à sa commande ?</p>
        </div>
        <div class="absolute right-0 top-0 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
        </div>
        <!-- </div>   -->
        <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
            <div class="py-4">
            <p class="text-[10px] md:text-[18px] text-justify">
                Une fois votre commande passée, vous recevrez un e-mail de confirmation avec un numéro de 
                suivi. Vous pouvez utiliser ce numéro pour suivre l'état de votre commande sur notre site Web
            </p>
            </div>
        </div>
        </div>
        <div class="relative mt-6 md:mt-12 pb-4 w-full border-b-2 items-center border-dark-blue">
            <!-- <div class="relative flex justify-between pb-4"> -->
            <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
            <div class="w-3/4 md:w-full">
            <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Avez-vous des réductions pour les achats en gros ?</p>
            </div>
            <div class="absolute right-0 top-0 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
            </div>
            <!-- </div>   -->
            <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
            <div class="py-4">
                <p class="text-[10px] md:text-[18px] text-justify">
                Oui, nous offrons des réductions pour les achats en gros. Veuillez nous contacter directement 
                pour plus d'informations.
                </p>
            </div>
            </div>
        </div>
        <div class="relative mt-6 md:mt-12 pb-4 w-full border-b-2 items-center border-dark-blue">
            <!-- <div class="relative flex justify-between pb-4"> -->
            <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
            <div class="w-3/4 md:w-full">
                <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Les packs sont-ils conformes aux programmes scolaires ?</p>
            </div>
            <div class="absolute right-0 top-0 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
            </div>
            <!-- </div>   -->
            <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
                <div class="py-4">
                <p class="text-[10px] md:text-[18px] text-justify">
                    Oui, tous nos packs de livres sont conformes aux programmes scolaires en vigueur. Ils sont 
                    soigneusement sélectionnés pour répondre aux besoins éducatifs de chaque niveau.
                </p>
                </div>
            </div>
            </div>

            <div class="relative mt-6 md:mt-12 pb-4 w-full border-b-2 items-center border-dark-blue">
                <!-- <div class="relative flex justify-between pb-4"> -->
                <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
                <div class="w-3/4 md:w-full">
                <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Est-ce que les livres sont neufs ou d'occasion ?</p>
                </div>
                <div class="absolute right-0 top-0 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
                </div>
                <!-- </div>   -->
                <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
                <div class="py-4">
                    <p class="text-[10px] md:text-[18px] text-justify">
                    Tous les livres inclus dans nos packs sont neufs et en parfait état, sauf indication contraire sur la 
                    page du produit.
                    </p>
                </div>
                </div>
            </div>

            <div class="relative mt-6 md:mt-12 pb-4 w-full border-b-2 items-center border-dark-blue">
                <!-- <div class="relative flex justify-between pb-4"> -->
                <input type="checkbox" class="peer w-6 h-6 md:w-12 md:h-12 absolute right-0 opacity-0 z-10 cursor-pointer">
                <div class="w-3/4 md:w-full">
                <p class="text-[13px] md:text-2xl text-normal pb-4 md:pb-8 text-[#004079]">Puis-je acheter des livres individuellement ?</p>
                </div>
                <div class="absolute right-0 top-0 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <img src="../../assets/Flch.svg" class="w-10 md:w-12" alt="flech">
                </div>
                <!-- </div>   -->
                <div class="overflow-hidden max-h-0 peer-checked:max-h-[900px] transition-all duration-500">
                <div class="py-4">
                    <p class="text-[10px] md:text-[18px] text-justify">
                    Nos livres sont vendus sous forme de packs exclusivement offrir le meilleure service possible 
                    pour nos clients.
                    </p>
                </div>
                </div>
            </div>
        </div>
</template>
<script setup>
const QandA =[
    {
        id:1,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:'hhhhhhhhhh'
    },
    {
        id:2,
        qa:'Qu’elle est le délais de livraison ?',
        an:''
    },
    {
        id:3,
        qa:'Par quel moyen obtenons nous les listes scolaires ',
        an:''
    },
    {
        id:4,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:''
    },
    {
        id:5,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:''
    },
    {
        id:6,
        qa:'Par quelle moyen obtenons nous les listes scolaires ',
        an:''
    }
]
let showAn = false;
function toggaleAn(){
    showAn = !showAn;
    return showAn;
    }
</script>