<template>
    <div class="w-full text-dark-blue">
        <div class="container flex flex-col justify-evenly items-center mx-auto w-full flex-wrap mt-[24px] ">
            <div classs="flex justify-center items-center">
                <p class="w-1/2 text-center mx-auto font-bold text-[20px] md:text-[40px] ">Modalité de livraison </p>
                <p class="w-3/4 mx-auto text-center font-bold text-[15px] md:text-[20px]">
                    Quelles options de livraison s’offrent à vous et à quelle prix ? Chez Livréeo, nous mettons à votre disposition différentes solutions adaptées à vos besoins. 
                </p>
            </div>
            <div class="py-12 flex flex-col justify-evenly items-center px-8 my-[40px">
                <div class="w-full py-[40px] grid md:grid-cols-3 gap-12 border-y-2 border-dark-blue px-8">
                    <div class=" md:col-span-2 "> 
                        <p class="font-bold text-[17px]">Livraison Standard par amana colis <br>Au tarif de 19 MAD </p>
                        <p class="font-medium text-[17px] py-3">Obligatoire pour le paymement en 3 ou 2 fois sans frais</p>
                        <p class="font-normal text-[17px] py-3">+ Délais de livraison : 2 semaine avant la rentrée soclaire ( Vous aurez la possiblité une fois le payement effectuer de choisir le jour qu’il vous conviendra le mieu. )</p>
                        <p class="font-normal text-[17px] py-3">+ Signature : rquise.</p>
                        <p class="font-normal text-[17px] py-3">+ Une fois la commande passée, vous recevrez un e-mail de confiramtion (vérifie egalement vos couriers indesirables.)</p>
                    </div>
                    <div>
                        <img src="../../assets/callvecture.svg">
                    </div>
                </div>

                <div class="w-full py-[40px] grid md:grid-cols-2 gap-12 border-y-2 border-dark-blue px-8">
                    <div class="flex justify-start items-center">
                        <img src="../../assets/backgvectore.svg">
                    </div>
                    <div class=" flex flex-col justify-center"> 
                        <p class="font-bold text-[17px]">Livraison Express par amana colis  <br>Au tarif de 76 MAD  </p>
                        <p class="font-normal text-[17px] py-3">+ Délais de livraison : 8 jour ouvrées  </p>
                        <p class="font-normal text-[17px] py-3">+ Signature : rquise.</p>
                        <p class="font-normal text-[17px] py-3">+ Une fois la commande passée, vous recevrez un e-mail de confiramtion (vérifie egalement vos couriers indesirables.)</p>
                    </div>
                </div>

                <div class="w-full py-[40px] grid md:grid-cols-3 gap-12 border-y-2 border-dark-blue px-8">
                    <div class=" md:col-span-2 "> 
                        <p class="font-bold text-[17px]">Livraison Flash par amana colis  <br>Au tarif de 30 MAD  </p>
                        <p class="font-medium text-[17px] py-3">Réservé aux articles “Fournitures“ à savoir : Calculatrices, trousses, cartables, ainsi que toute les fourniutres scolaires</p>
                        <p class="font-normal text-[17px] py-3">+ Délais de livraison : 4 jours ouvrées</p>
                        <p class="font-normal text-[17px] py-3">+ Signature : rquise.</p>
                        <p class="font-normal text-[17px] py-3">+ Une fois la commande passée, vous recevrez un e-mail de confiramtion (vérifie egalement vos couriers indesirables.)</p>
                    </div>
                    <div>
                        <img src="../../assets/multTaskvectur.svg">
                    </div>
                </div>
                
                <div class="w-full py-[40px] grid md:grid-cols-2 gap-16 border-t-2 border-dark-blue px-8">
                    <div>
                        <div>
                            <img src="../../assets/manAnalyzes.svg" class="h-[365px]">
                        </div>
                        <div class=" "> 
                            <p class="font-bold text-[20px] my-[16px]">Fonctionnement de l'outil de suivi de commande </p>
                            <ul class="list-disc">
                                <li>
                                    <p class="font-medium text-[17px] py-3">Vous renseigner sur le statut de livraison de votre commande, qu'il s'agisse d'une livraison par transporteur ou par envoi postal.</p>
                                </li>
                                <li><p  class="font-medium text-[17px] py-3">Modifier la date de livraison</p></li>
                                <li><p  class="font-medium text-[17px] py-3">Annuler une commande*</p></li>
                            </ul>
                            <p class="font-medium text-[17px] py-3">*L'annulation de commande est possible si vous avez commandé en ligne et que l'email de confirmation de commande reçu comporte la mention "Commande Annulable ". Cliquez-ici pour annuler votre commande.</p>
                        </div>
                    </div>

                    <!-- section 2 -->
                    <div>
                        <div>
                            <img src="../../assets/women.svg">
                        </div>
                        <div class=" "> 
                            <p class="font-bold text-[20px] my-[16px]">Comprendre le statut de votre commande</p>
                            <ul class="">
                                <li>
                                    <p class="font-medium text-[17px] py-3"> <span class="font-bold">Commande reçue :</span> Nous avons reçu votre commande, qui sera traitée dès que possible.</p>
                                </li>
                                <li><p  class="font-medium text-[17px] py-3"> <span class="font-bold">Traitement en cours : </span>Votre commande est en cours de traitement et de finalisation</p></li>
                                <li><p  class="font-medium text-[17px] py-3"> <span class="font-bold">Prête à être envoyée : </span>Votre commande est prête et sur le point d’être expédiée.</p></li>
                                <li><p  class="font-medium text-[17px] py-3"> <span class="font-bold">En route : </span>Votre commande a quitté les locaux de notre expéditeur et elle est en cours de livraison chez vous</p></li>
                                <li><p  class="font-medium text-[17px] py-3"> <span class="font-bold">Livrée : </span>Votre commande a été livrée.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SiteMapComponent/>
    </div>
</template>
<script setup>
import SiteMapComponent from '../../components/SiteMapComponent.vue'
</script>