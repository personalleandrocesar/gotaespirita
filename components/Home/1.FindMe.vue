<script setup>

const icons = [
    {
        name: "Instagram",
        path: "https://www.instagram.com/gotaespirita",
        icon: "fa6-brands:square-instagram",
    },
    {
        name: "Threads",
        path: "https://www.threads.net/gotaespirita",
        icon: "fa6-brands:square-threads",
    },
    {
        name: "Youtube",
        path: "https://youtube.com/gotaespirita",
          icon: "fa6-brands:square-youtube",
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
    zoom: 1.6;
    transition: all .4s linear;
}

.linear:hover a .name{
    color: #02d1d8;
}
.linear:hover a .icon{
    color: #02d1d8;
}
</style>