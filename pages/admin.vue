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
import { ref } from 'vue';
useHead({
    titleTemplate: 'Clientes | Leandro Cesar - App',
});

const route = useRoute();
const Users = await useFetch('https://api.nexwod.app/users');
const item = Users.data.value;

const layout = 'admin'
const add = ref(true)
function addClient() {
    add.value = !add.value
}

const swit = ref(true)
function switchButton() {
    swit.value = !swit.value
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

function inicio() {
    bodyOne.value = !bodyOne.value
    navigateTo('/admin') 
}

function clientes() {
    bodyOne.value = !bodyOne.value
    navigateTo('/admin/clientes') 
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


const photoOpen = ref(false);
function openPhoto() {
    photoOpen.value = !photoOpen.value;
}

const reg = route.params.id
const logon = useCookie('logon')
// const logon = useCookie('logon', { maxAge: 4800})
logon.value = reg

const dataConf = await useFetch(`https://api.nexwod.app/users/${route.params.id}`)
const status = dataConf.data.value?.status  
const navA = ref(state.value === 1)
const navB = ref(state.value === 2)
const navC = ref(state.value === 3)
const navD = ref(state.value === 4)



</script>
<template>
    <div id="grid">
        <div id="areaA">
            <div>
                <NuxtLink @click='inicio()'>
                    <Icon name='material-symbols:data-usage' /> Início
                </NuxtLink>
                <NuxtLink :to="`/admin/clientes`">
                    <Icon name='solar:users-group-two-rounded-bold' /> Clientes
                </NuxtLink>
            </div>
            <div class='logOut'>
                <NuxtLink :to="`/`">
                    <Icon name='solar:users-group-two-rounded-bold' /> Log Out
                </NuxtLink>
            </div>
        </div>
        <div id="areaB">
            <NuxtPage />
        </div>
    </div>

    <div id='grid-two'>

        <div v-if="bodyOne">

            <NuxtLayout :name='layout'  ></NuxtLayout>



            <NuxtPage />
        </div>


    </div>



</template>
<style scoped>
#grid {
    display: grid;
    grid-template-columns: 14rem 1fr;
    width: 100%;
    height: 100vh;
}

#areaA {
    border-right: solid 1px #07e4e140;
    font-weight: bolder;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

#grid-two {
    display: none;
}

@media (max-width: 650px) {
    #grid {
        display: none;
    }

    #grid-two {
        display: inherit ;
    }

}

.logOut {
    border-top: solid 1px #07e4e140;
}

#areaA a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 12px;
    border-bottom: solid 1px #07e4e140;
    border-end-end-radius: 5px;
    border-start-end-radius: 5px;
}

#areaA a:hover {
    background-color: transparent;
    background: linear-gradient(to right, transparent 0%, transparent  50%, #07e4e1 100%);
    color: #07e4e1;
}

#areaA a.router-link-exact-active {
    background: linear-gradient(to bottom right, #07e4e1 0%, #07e4e1 50%, #07e4e1 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#areaA a.router-link-exact-active:hover {
    background: linear-gradient(to bottom right, #07e4e1 0%, #07e4e1 50%, #07e4e1 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#areaA a.router-link-exact-active:hover::after {
    background-color: var(--color-background);
    color: #07e4e1;
    text-decoration: none;
    cursor: pointer;
}

#areaB {
    margin: 10px;
    border-radius: 5px;
    border: solid 1px #07e4e140;
    overflow-x: hidden; 
    overflow-y: auto; 
}

#areaB-A {
    border: solid 1px #07e4e140;
    margin: 10px;
    border-radius: 5px;
}

#areaB-B {
    border: solid 1px #07e4e140;
    margin: 10px;
    border-radius: 5px;
}


.nav-top {
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    height: 35px;
    font-weight: bolder;
    border-bottom: .10px solid #07e4e140;
    backdrop-filter: blur(45px);
}

.clients {
    margin: 11px;
}

.clients span {
    border: 1px solid #07e4e190;
    padding: 3px 6px;
    border-radius: 5px;
    color: #07e4e1;
    background-color: #07e4e130;
    margin-left: 3px;
}

.notifications {
    border: solid 1px transparent;
    padding: 4px 5px;
    margin: 6px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
}

.notifications:hover {
    padding: 4px 5px;
    border-radius: 5px;
    color: #07e4e1;
    background-color: #fff;
}

.nav-users {
    position: sticky;
    top: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    height: 35px;
    font-weight: bolder;
    margin-bottom: 1rem;
    border-bottom: .10px solid #07e4e140;
    backdrop-filter: blur(45px);
}

.users-conf {
    margin: 16px;
}

.users-conf span {
    border: 1px solid #07e4e190;
    padding: 8px;
    border-radius: 5px;
    color: #07e4e1;
    background-color: #07e4e130;
    margin-left: 3px;
}

.filter {
    border: solid 1px #07e4e190;
    background-color: #07e4e130;
    padding: 6px 7px;
    margin: 9px 35px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
}

.filter:hover {
    border: solid 1px #fff;
    padding: 6px 7px;
    border-radius: 5px;
    color: #07e4e1;
    background-color: #fff;
}

.users-list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    z-index: 1;
    margin-bottom: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
}

.color {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out 0s;
    bottom: 6rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #07e4e110;
    box-shadow: 0 0px 5px #07e4e140;
    backdrop-filter: blur(100px)
}

.whats {
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

.whats .icon,
.color .icon {
    color: #07e4e190;
    zoom: 1;
} 

.color {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out 0s;
    bottom: 6rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #07e4e110;
    box-shadow: 0 0px 5px #07e4e140;
    backdrop-filter: blur(100px)
}

.whats {
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

.whats .icon,
.color .icon {
    color: #07e4e190;
    zoom: 1;
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
    margin: 2px 2px;
    padding: 9px 12px 10px 9px;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active {
    background: linear-gradient(to bottom right, #07e4e110 0%, #07e4e110 50%, #07e4e110 100%);
    margin: 1px 2px 0 2px;
    color: #07e4e1;
    padding: 9px 12px 10px 9px;
    border-radius: 9px;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active:hover {
    margin: 1px 2px 0 2px;
    padding: 9px 12px 10px 9px;
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



.color {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out 0s;
    bottom: 6rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #07e4e110;
    box-shadow: 0 0px 5px #07e4e140;
    backdrop-filter: blur(100px);
}

.whats {
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

.whats .icon,
.color .icon {
    color: #07e4e190;
    zoom: 1;
}
</style>
