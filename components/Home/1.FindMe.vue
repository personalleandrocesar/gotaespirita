<script setup>

const icons = [
    {
        name: "Instagram",
        path: "https://www.instagram.com/gotaespirita",
        icon: "fa6-brands:square-instagram",
    },
    {
        name: "twiter",
        path: "https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20,%20em%20um%20dos%20seus%20projetos,%20me%20chamo%20",
        icon: "fa6-brands:square-x-twitter",
    },
    {
        name: "Threads",
        path: "https://www.threads.net/gotaespirita",
        icon: "fa6-brands:square-threads",
    },
    {
        name: "GitHub",
        path: "https://github.com/gotaespirita",
        icon: "fa6-brands:square-github",
    },
]

</script>
<template>
     
    <div id="space" >

        <h3>
            Conectar
        </h3>
        <div class="social" v-for="itens in icons">
            <NuxtLink :to="itens.path">
                <Icon :name="itens.icon" />
            </NuxtLink>
        </div>
        
    </div>

</template>

<style scoped>

#space {
    margin: 3rem 5%;
}
#space h3{
    margin: 1.4rem 0;
}

.social {
    margin-top: 1.5rem;
    display: inline;
}

.social a{
    padding: 8px 5px;
    margin: 1.5rem 5%;
    border-radius: 50%;
}
.icon {
    zoom: 1.5;
    transition: all .4s linear;
    color: #02d1d8;
}

.linear:hover a .name{
    color: #02d1d8;
}
.social:hover a .icon{
    color: #52F4F0;
}
</style>