<template>
    <div class="my-[56px] w-full flex items-center justify-center font-Poppins text-dark-blue flex-col">
        <div class="container flex flex-col items-center justify-between">
            <div class="w-full md:w-3/4 py-[28px] font-bold md:text-[41px] text-[20px]">Qui sommes nous ? </div>
            <div v-for="articl in articls" class="w-full">
                <paragraphComponent :articl="articl.articl" :content="articl.text"/>
            </div>
        </div> 
    </div>
    <SiteMapComponent/>
</template>
<script setup>
import paragraphComponent from '../../components/about/paragraphComponent.vue';
import SiteMapComponent from '../../components/SiteMapComponent.vue'
const articls =[
    {
        articl:"Notre Histoire : Une Révolution Née de la Communauté",
        text:`Livréeo, plus qu'une simple entreprise, incarne une réponse concrète à un défi commun rencontré par tous les parents d'élèves au Maroc. Notre aventure a vu le jour au sein des associations de parents d'élèves de Casablanca, où des voix communes se sont élevées pour dénoncer un calvaire annuel : la préparation de la rentrée scolaire.

            Chaque année, le même scénario se répétait : ruptures de stock frustrantes, prix fluctuants et opaques d'une librairie à l'autre, et les files d'attente interminables aux caisses des supermarchés. Le moment censé être empli de l'excitation de la rentrée se transformait en un parcours d'obstacles épuisant.

            C'est face à cette réalité que Livréeo est née – une initiative portée par les parents pour les parents.`
    },
    {
        articl:"Livréeo : La Solution à Portée de Clic",
        text:`Livréeo est plus qu'un simple service de vente de manuels et de fournitures scolaires. Nous proposons une plateforme intuitive permettant aux parents d'accéder facilement à des listes scolaires complètes et personnalisables, pour commander en quelques clics tout le nécessaire pour la rentrée. Chez Livréeo, nous comprenons les défis financiers auxquels les parents peuvent être confrontés lors de la rentrée scolaire, c’est pourquoi nous sommes fiers d'introduire une offre innovante dans le secteur éducatif marocain, en proposant pour la première fois un système de paiement en trois fois sans frais.`
    },
    {
        articl:"Engagement Communautaire",
        text:`Nous aspirons à avoir un impact positif et tangible sur la communauté et les parents. Notre engagement ne se limite pas à répondre aux besoins matériels ; nous cherchons activement à soutenir les initiatives éducatives et à renforcer le tissu communautaire. Que ce soit à travers des aides financières pour les familles en difficulté ou par le soutien à des activités organisées par les associations de parents d'élèves, nous nous engageons à utiliser nos ressources pour faire la différence de manière significative dans la vie des élèves et de leurs familles.`
    },
    {
        articl:"Tarifs Justes et Transparent",
        text:`Dans un contexte économique marqué par l'inflation, Livréeo s'engage à offrir des prix justes et transparents. Notre politique tarifaire est pensée pour minimiser les marges et soutenir le pouvoir d'achat des familles. Nous sommes déterminés à rendre nos produits plus accessibles, en proposant des tarifs compétitifs par rapport au marché traditionnel. Cette approche vise non seulement à garantir l'accès à des fournitures scolaires de qualité pour tous, mais aussi à témoigner de notre engagement envers la justice sociale et l'équité économique, particulièrement en ces temps difficiles`
    },
    {
        articl:"Un Engagement Inébranlable envers la Satisfaction Clientèle",
        text:`La satisfaction client est la pierre angulaire de Livréeo. Nous comprenons l'importance de la confiance des parents et nous nous engageons à maintenir cette confiance en offrant un service d'excellence. Notre objectif n'est pas seulement de vendre des fournitures scolaires, mais de créer une expérience d'achat sereine et fiable pour chaque parent.`
    },
    {
        articl:"Une Chaîne d'Approvisionnement Robuste : Zéro Rupture de Stock",
        text:`Nous savons à quel point il est frustrant de faire face à des ruptures de stock lors de la préparation de la rentrée. C'est pourquoi nous avons développé une chaîne d'approvisionnement robuste et efficace. En collaborant étroitement avec nos fournisseurs, nous assurons une disponibilité constante de tous les produits, évitant ainsi les désagréments des ruptures de stock. Cette fiabilité est l'un des piliers de notre promesse à nos clients.`
    },
    {
        articl:"Triple Vérification : Une Exactitude Garantie",
        text:`L'exactitude des commandes est une autre de nos priorités absolues. Chaque pack expédié subit une triple vérification pour s'assurer que tous les éléments correspondent parfaitement aux listes scolaires fournies. Cette procédure minutieuse garantit que chaque enfant reçoit exactement ce dont il a besoin, éliminant ainsi toute erreur potentielle et le stress qui en découle pour les parents.`
    },
    {
        articl:"L'Utilisation Innovante de l'ISBN",
        text:`Pour assurer la précision dans l'identification des manuels scolaires, nous avons intégré le système d'ISBN (International Standard Book Number) dans notre processus. Ce système d'identification unique permet de tracer chaque livre avec précision, assurant que les manuels spécifiques demandés par les écoles sont ceux qui sont livrés. Cette approche innovante démontre notre engagement envers la technologie et l'efficacité, tout en simplifiant le processus de commande pour nos clients.`
    },
    {
        articl:"Plus Qu'un Service, Un Partenaire de Confiance",
        text:`Livréeo est bien plus qu'un fournisseur ; c'est un partenaire de confiance pour des milliers de familles marocaines. Nous jouons un rôle crucial dans la préparation de la rentrée, en veillant à ce que chaque enfant dispose des outils nécessaires à sa réussite. Notre engagement envers la qualité, l'exactitude, et la satisfaction client est le fondement de notre entreprise.`
    },
    {
        articl:"Plus Qu'une Entreprise, Une Famille",
        text:`En tant que parents, nous comprenons l'importance de l'éducation et le rôle vital que jouent les fournitures scolaires dans l'apprentissage des enfants. Livréeo est née de cette compréhension et de notre désir de faciliter la vie des familles marocaines. Nous sommes plus qu'une entreprise – nous sommes une famille dédiée à soutenir d'autres familles.`
    },
    {
        articl:"Livréeo, Par des Parents, Pour des Parents",
        text:`Ensemble, nous avons créé Livréeo, une solution qui reflète nos valeurs, notre compréhension des défis auxquels les parents sont confrontés, et notre engagement envers la communauté. Nous sommes fiers de ce que nous avons accompli et impatients de continuer à faciliter la préparation de la rentrée scolaire pour les parents d'élèves à travers le Maroc.`
    },
]
</script>