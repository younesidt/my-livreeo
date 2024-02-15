<template>
    <div>
        <div class="w-full md:w-3/4 py-[28px] font-extrabold md:text-[23px] text-[12px]">Devenir partenaire</div>
        <div class="w-full md:w-1/2 text-dark-blue font-Poppins text-[26px] rounded-full md:px-0 px-[8px]">
            <Vueform 
            :presets="['semibold']"
            :add-classes="{
    TextElement: {
      input: 'font-semibold'
    }}"
>
                <TextElement class="rounded-full"
                name="Nom de l’association "
                placeholder="API"
                label="Nom de l’association "
                />
                <TextElement class="rounded-full"
                name="Nom de l’École  "
                label="Nom de l’École  "
                placeholder="Lycée lyaytey "
                />
                <TextElement class="rounded-full"
                name="Vôtre nom et prénom "
                label="Vôtre nom et prénom "
                placeholder="Nom"
                />
                <TextElement class="rounded-full"
                name="number"
                input-type="number-phone"
                :rules="[
                    'nullable',
                    'numeric',
                ]"
                autocomplete="off"
                label="Numèro de telephone "
                placeholder="Nº"
                />
                <TextElement class="rounded-full"
                name="text_3"
                label="Votre fonction au sein de l’association "
                placeholder="Fonction"
                />
                <TextElement add-class="rounded-full"
                name="email"
                input-type="email"
                :rules="[
                    'nullable',
                    'email',
                ]"
                label="E-mail :"
                placeholder="Email "
                />
                <TextareaElement add-class="rounded-2xl"
                name="textarea"
                placeholder="Écrire"
                label="Merci de nous préciser vos attentes en matière de partenariats :  "
                size="sm"
                />
                <ButtonElement
                name="submit"
                :submits="true"
                button-label="Devenir partenaire "
                />
            </Vueform>
        </div>
    
    </div>
</template>
<secript setup>

</secript>