<template>
    <div class="md:w-2/4 w-full">
        <div class="w-full py-[28px] font-extrabold md:text-[23px] text-[12px]">Demande de retour ou d’échange</div>
        <div class="w-full text-dark-blue font-Poppins text-[26px] rounded-full md:px-0 px-[8px]">
            <Vueform>
                <TextElement
                name="number"
                input-type="number"
                :rules="[
                    'nullable',
                    'numeric',
                ]"
                autocomplete="off"
                label="Numéro de commande : "
                placeholder="Nº"
                />
                <TextElement
                name="email"
                input-type="email"
                :rules="[
                    'nullable',
                    'email',
                ]"
                label="E-mail :"
                placeholder="Email "
                />
                <RadiogroupElement
                name="radiogroup"
                :items="[
                    {
                    value: 'Value',
                    label: 'Retour produit ',
                    },
                    {
                    value: 'value',
                    label: 'Échange produit ',
                    },
                ]"
                label="Type de demande "
                />
                <TextareaElement
                name="textarea"
                placeholder="Écrire"
                size="sm"
                label="Merci de nous préciser le ou les produits concernés :  "
                />
                <ButtonElement
                name="submit"
                :submits="true"
                button-label="Demander un retour ou un échange "
                />
            </Vueform>
        </div>
    </div>
</template>
<script setup>
</script>