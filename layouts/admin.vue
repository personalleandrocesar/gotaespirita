<script>
export default {
    mounted() {
        let lastScrollTop = 0;
        const navbar = document.getElementById('nav-container');

        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Rolando para baixo
                navbar.style.top = '-100px'; // Ou qualquer outra posição desejada para esconder o navbar
            } else {
                // Rolando para cima
                navbar.style.top = '20px';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para o comportamento correto em bordas
        }, false);
    }
}


</script>
<script setup>
const route = useRoute()

const reg = route.params.id
const logon = useCookie('logon')
// const logon = useCookie('logon', { maxAge: 4800})
logon.value = reg

const Users = await useFetch('https://api.nexwod.app/users');
const photoOpen = ref(false);
function openPhoto() {
    photoOpen.value = !photoOpen.value;
}

// talvez não precise do código abaixo
const logOff = () => {
    logon.value = null
}

const tag = useCookie('tag')
tag.value = tag.value


const bodyOne = ref(true)
function menu() {
    bodyOne.value = !bodyOne.value

}
const colorMode = useColorMode()

function theme() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}

const colorCookie = useCookie('colorCookie')
if (colorMode.value === "dark") {
    colorCookie.value = "darkCookie"
} else {
    colorCookie.value = "lightCookie"
}
colorCookie.value === "darkCookie" ? colorMode.value = "dark" : colorMode.value = "light"

const state = useCookie('state')
state.value = state.value

const navA = ref(state.value === 1)
const navB = ref(state.value === 2)
const navC = ref(state.value === 3)
const navD = ref(state.value === 4)


</script>
<template>
    <div v-if="bodyOne">

        <div id="nav-container" class='nav'>

            <div>
                <div class="nav-bottom">
                    <NuxtLink :to="`/admin`">
                        <Icon name='material-symbols:data-usage' />
                    </NuxtLink>
                    <NuxtLink :to="`/admin/clientes`">
                        <Icon name='solar:users-group-two-rounded-bold' />
                        <span class="clients">
                            <span>{{ Users.data.value.length }}</span>
                        </span>
                    </NuxtLink>
                </div>
            </div>

            <div>

                <NuxtLink :to="`/`">
                    <Icon name="solar:logout-3-bold" />
                </NuxtLink>

                <!-- <NuxtLink @click="menu()" class="button-client">
                    <Icon name="solar:hamburger-menu-bold" />
                </NuxtLink> -->

            </div>
        </div>

        <div v-if="route.path === `/users/${logon}` || route.path === `/user/${logon}/parcerias`" class="head-logo"
            id="sobre">
            <NuxtLink @click="menu()" class="button-client">
            </NuxtLink>
            <div class='logo'>
                <img @click="openPhoto()" :src="dataConf.data.value?.foto">
            </div>
        </div>
        <div v-if="photoOpen" class="nav-bar">
            <div class='logo-nav-bar'>
                <img @click="openPhoto" :src="dataConf.data.value?.foto">
            </div>
        </div>
        <div v-if="route.path === `/users/${logon}` || route.path === `/user/${logon}/parcerias`" class="head-name">
            <div class="name">
                Olá, {{ dataConf.data.value?.name }}
            </div>
        </div>
        <div class="theme">

            <a @click="theme()" :model="$colorMode.value">
                <Icon
                    :name="colorMode.value === 'dark' ? 'line-md:moon-filled-to-sunny-filled-loop-transition' : 'line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition'" />
            </a>

        </div>


        <slot />
    </div>



    <div v-else>
        <div id="nav-container" class='nav'>


            <div>
                <div class="nav-bottom">
                    <NuxtLink :to="`/admin`">
                        <Icon name='solar:home-smile-bold' />
                    </NuxtLink>
                    <NuxtLink :to="`/admin/clientes`">
                        <Icon name='solar:dumbbell-large-bold' />
                    </NuxtLink>
                    <NuxtLink :to="`/user/${route.params.id}/cardio`">
                        <Icon name='material-symbols:cardiology' />
                    </NuxtLink>
                    <NuxtLink :to="`/user/${route.params.id}/avaliacao`">
                        <Icon name='solar:clipboard-heart-bold' />
                    </NuxtLink>
                </div>
            </div>

            <div>

                <NuxtLink @click="menu()" class="button-client">
                    <Icon name="solar:close-square-bold" />
                </NuxtLink>

            </div>
        </div>
        <div class="head-name">
        </div>
        <div>
            <!-- Hístórico -->
            <NuxtLink class="menu-button">
                <div>
                    <Icon name="solar:history-outline" />
                    <p>
                        Histórico
                    </p>
                </div>
                <Icon name="ic:baseline-keyboard-arrow-right" />
            </NuxtLink>
            <!-- Histórico fim -->

            <NuxtLink :to="`/user/${route.params.id}/contratos`" class="menu-button">
                <div>
                    <Icon name="solar:document-add-linear" />
                    <p>
                        Contratos
                    </p>
                </div>
                <Icon name="ic:baseline-keyboard-arrow-right" />
            </NuxtLink>
            <NuxtLink :to="`/`" class="menu-button">
                <div>
                    <Icon name="" />
                    <p>
                        LOUGOUT
                    </p>
                </div>
                <Icon name="solar:logout-3-bold" />
            </NuxtLink>

            <br>
            <br>

        </div>
    </div>
</template>
<style scoped>

.clients {
    border: 1px solid #07e4e190;
    padding: 0px 3px;
    border-radius: 8px; 
    background-color: #07e4e130;
    zoom: .7;
}

.head-logo {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: flex-start;
    z-index: 1;
    flex-wrap: wrap;

}

.icon {
    zoom: 1.1;
}

.logo {
    display: flex;
    justify-content: center;
    flex-direction: flex-start;
    align-items: center;
    flex-wrap: wrap;
    height: 55px;
    width: 55px;
    background: linear-gradient(to bottom right, #07e4e1 0%, #07e4e170 50%, #00f2ff90 100%);
    margin: 1.5rem;
    border-radius: 7px;
    z-index: 10;
}

.logo img {
    height: 49px;
    width: 49px;
    margin: -1px 0 0 -1px;
    border-radius: 7px;
    z-index: 100;
    opacity: 1;

}

.nav-bar {
    z-index: 200;
    transform: translateX(0%);
    position: fixed;
    height: calc(100% - 0px);
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.logo-nav-bar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    transform: translateX(0%);
    position: fixed;
    bottom: 0px;
    height: calc(100% - 0px);
    width: calc(100% - 100px);
    background: linear-gradient(to bottom right, #07e4e1 0%, #07e4e180 50%, #00f2ff90 100%);
    backdrop-filter: blur(5px);
    z-index: 1004;

}

.logo-nav-bar img {
    height: 300px;
    width: 300px;
    border-radius: 7px;
    border: #07e4e1 1px solid;
    opacity: 1;
    z-index: 100;

}

.button-client {
    margin: 1.2rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    zoom: 1.3;
}

.button-client .icon {
    zoom: .9;
    margin-right: -3px;
}


.head-name {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
}


.name {
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin: .2rem 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #07e4e1;

}

.email {
    font-size: .8rem;
    line-height: 1.5rem;
    margin: .2rem 1.6rem;
    font-weight: 700;
    letter-spacing: 1.1px;

}


.body-timeline {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
    margin: 2rem 10px 120px 10px;
}

.main-logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 100px;
    width: 100px;
    box-shadow: 1px 7px 20px #07e4e1;
    margin: 1.5rem;
    border-radius: 7px;
}

.main-logo img {
    height: 100px;
    width: 100px;
    border-radius: 7px;
    border: #07e4e1 2px solid;
    opacity: 1;

}

.body-timeline p {
    text-align: left;
    margin: 0 10px 20px 20px;
}

.link {
    text-decoration: underline;
}

.link:hover {
    color: #07e4e1;
}

.section-title {
    text-align: left;
    margin: 10px 1.5rem;
    font-weight: 800;
}

.section-subtitle {
    text-align: left;
    margin: -10px 1.5rem 15px;
    font-weight: 800;
    font-size: .9em;
}

.section-subtitle-two {
    text-align: left;
    margin: -16px 1.5rem 15px;
    font-weight: 800;
    font-size: .9em;
}

.section-option {
    text-align: left;
    margin: -10px 1.5rem 15px;
    font-size: .8em;
    font-weight: 800;
}

.section-option .icon {
    zoom: .8;
    margin-top: -3px;
}

.verified {
    color: green;
}

.pending {
    color: #e1a918;
}

.bloqued {
    color: #b30000;
}


.conf {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
}

.menu-square {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 800;
    width: 49.6%;
    padding: 5px;
    border-radius: 8px;
    margin: 1px auto;
    border: solid .1px #07e4e150;
}

.menu-square div .icon {
    margin: 3px 0px;
    transition: transform .3s linear;
    transform: translateX(-10px);
}

.menu-square div {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    justify-content: center;
    margin: 2px auto;
}

.menu-square div:nth-child(2) {
    display: flex;
    flex-direction: column;
    font-size: .7em;
    justify-content: center;
    margin: 2px auto;
}

.menu-square div:nth-child(3) {
    display: flex;
    flex-direction: column;
    font-size: .7em;
    justify-content: center;
    margin: 2px auto;
    color: #002aff;
}

.menu-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 800;
    width: 100%;
    padding: 6px 2px 2px 2px;
    margin: 5px auto;
    border: solid 1px #07e4e110;
    border-bottom: solid .1px #07e4e140;
    border-top: solid .2px transparent;
}

.menu-button div {
    display: flex;
    flex-direction: row;
    font-size: .8em;
    justify-content: space-between;
    margin-top: 2px;
}

.menu-button .icon {
    margin: -2px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-15px);
}

.menu-button .icon:nth-child(2) {
    margin: 5px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-25px);
}

.menu-button:hover {
    cursor: pointer;
    border-bottom: solid .2px #07e4e1;
    background-color: #07e4e110;
}


.menu-button:hover .icon:nth-child(2) {
    transform: translateX(-15px);
}

.logout {
    position: fixed;
    bottom: 15px;
    left: 50%;
    width: 250px;
    margin-left: -125px;
    transition: all .4s linear;
    border: solid .1px #07e4e170;
    box-shadow: 0 0px 5px #07e4e110;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 6px;
    padding-bottom: 8px;
}

.logout .icon {
    margin: 1px 0px 0px 6px;
    transition: transform .3s linear;
    transform: translateX(8px);
}

.logout:hover {
    background-color: #07e4e110;
    color: #07e4e180;
    cursor: pointer;
}

.logout:hover .icon {
    margin: 1px 0px 0px 6px;
    transform: translateX(0px);
}

.nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    transition: all .4s linear;
    position: sticky;
    top: 20px;
    margin: 16px auto;
    box-shadow: 0 0px 5px #00f2ff10;
    border: solid 1px #07e4e140;
    width: 90%;
    height: 50px;
    border-radius: 10px;
    z-index: 101;
    padding: 12.2px 8px 12px 12px;
    backdrop-filter: blur(100px)
}

.nav a {
    margin: 0 2px;
    padding: 12.2px 8px 12px 12px;
    padding: 12.2px 8px 9px 8px;
    padding: 13px 14.5px 14.5px 14.5px;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active {
    background: linear-gradient(to bottom right, #07e4e110 0%, #07e4e110 50%, #07e4e110 100%);
    margin: 0 2px;
    color: #07e4e1;
    padding: 13px 14.5px 14.5px 14.5px;

    border-radius: 9px;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active:hover {
    margin: 0 2px;
    padding: 13px 14.5px 14.5px 14.5px;
    color: #07e4e1;
    background: linear-gradient(to bottom right, #07e4e110 0%, #07e4e110 50%, #07e4e110 100%);
    color: #07e4e1;
    border-radius: 9px;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active:hover::after {
    position: absolute;
    top: 60px;
    left: 20px;
    background-color: var(--color-background);
    color: #07e4e1;
    border-radius: 9px;
    text-decoration: none;
    cursor: pointer;
}

.nav a:hover {
    background-color: transparent;
    color: #07e4e1;
}

.theme {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out 0s;
    bottom: 3.5rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #07e4e110;
    box-shadow: 0 0px 5px #07e4e140;
    backdrop-filter: blur(100px)
}

.theme .icon,
.color .icon {
    color: #07e4e190;
    zoom: 1;
}
</style>
