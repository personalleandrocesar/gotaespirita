<script setup>

const icons = [
    {
        title: "Exercícios nas lesões de Joelho",
        description: "Já vimos que lesões do Ligamento Cruzado Anterior (LCA) são muito comuns!",
        path: "/artigos/lesoes/exercicios-lesoes-joelho",
        date: "19 de julho de 2023",
    },
    {
        title: "A importância do IMC",
        description: "É uma medida internacional usada para calcular se uma pessoa está no peso ideal.",
        path: "/artigos/saude/a-importancia-do-imc",
        date: "15 de julho de 2023",
    },
]

</script>
<template>
     
    <div id="space" >

        <h3>
            Últimas Edições
        </h3>
        <div class="articles" v-for="itens in icons">
            <div class="linear">
                <NuxtLink :to="itens.path">
                    <code>
                        {{ itens.date }}
                    </code>
                    <p class="title">{{ itens.title }}</p>
                    <p class="description">{{ itens.description }}</p>
                </NuxtLink>
            </div>
        </div>
        
        <div class="articles-full">

            <NuxtLink to="/artigos">
                Todos os artigos <Icon name="solar:arrow-right-outline" />
            </NuxtLink>
        </div>
    </div>

</template>

<style scoped>
#space {
    margin: 3rem 5%;
}
.articles {
    margin: 2rem .5rem ;
    transform: scale(1);
    transition: all .2s linear;
}
.articles:hover .title {
    transform: scale(1.03);
}
.articles-full{
    margin: -1.5rem 1.5rem 5.5rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: nowrap;
}

.articles-full:hover .icon {
    transform: translateX(10px);
}
.icon {
    zoom: 1;
    transition: all .4s linear;
}

.linear {
    margin-bottom: 1rem;

}

.linear a{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
}
.linear:hover a .title{
    color: #07e4e1;
}
.linear:hover a .icon{
    color: #07e4e1;
}
.linear:hover a .underline{
    border-bottom: dashed 1px #718096;
}
.title {
    margin: 0;
    transition: all .4s linear;
}
.description {
    margin: 0  ;
    color: var(--color-subtext);
    font-size: .8rem;
    transition: all .4s linear;
}
.underline{
    transition: all .4s linear;
    border-bottom: dashed 1px #ccc ;
    width: 100% ;
}

</style>