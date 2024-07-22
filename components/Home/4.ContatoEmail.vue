<script setup>
import { ref } from 'vue';

const email = ref('');

const subscriberOk = ref(false)

async function submit() {
    try {
        const response = await fetch("https://api.nexwod.app/newsletter", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email.value }),
        })
        if (response.ok) {
            console.log('Data sent successfully');
            email.value = '',
            subscriberOk.value = true;
            setTimeout(() => {
                subscriberOk.value = false;
            }, 4000);
        } else {
            console.error('Failed to send data');
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}
</script>
<template>

    <div id="space">

        <h3 class="lin">
            <div class="gray-circle">
                <div class="green-circle"></div>
            </div>

            Notificar
        </h3>
        <p>
            Seja notificado quando uma publicação nova acontecer.
        </p>
        <div class="social">
            <div class="linear">
                <div class="camp">
                    <form @submit.prevent="submit">
                        <Icon class="campIcon" name="solar:letter-linear" />

                        <input type="email" placeholder="Endereço de e-mail" v-model="email" required>

                        <button type="submit">Assinar
                            <Icon class="campIconTwo" name="solar:arrow-right-outline" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div v-if="subscriberOk" class="subscriberOk top">
        <div>
            Inscrição realizada com Sucesso!
        </div>
    </div>

</template>

<style scoped>
#space {
    margin: 3rem 5%;
}

.subscriberOk{
    position: fixed;
        bottom: 10px;
        width: 80%;
        left: 50%;
        margin-left: -40%;
    background-color: #07e4e1;
    color: #fff;
    text-shadow: 2px 2px 2px #111;
    z-index: 20;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    border-bottom: solid 2px #fff;
    border-radius: 8px;
}

.campIcon {
    zoom: 1;
    transition: all .3s linear;
    position: relative;
    left: 5px;
    top: -1px;
    z-index: 100;
}

.campIconTwo {
    zoom: 1;
    transition: all .3s linear;
    margin: 3px 7px 3px 0px;
    z-index: 100;
}


.lin {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: nowrap;
}
.green-circle {
    height: 13px;
    width: 13px;
    background-color: #00aeff;
    border-radius:  5px;
    padding: 4px;
    margin: 2px 10px 4px 0;
    border: #f5f7fa80 3px solid;
    
}
.social {
    margin: 1rem .5rem ;
}

.linear {
    margin-bottom: 3rem;
    zoom: .90;
}

.linear {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
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

input {
  margin: .5rem auto .5rem -2rem;
  transition: all .4s linear;
  border: solid 1px #07e4e160;
  box-shadow: 0 0px 5px #07e4e110;
  border-radius: 8px;
  text-align: left;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-left: 50px;
  padding-right: 25px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: max-content;

}

.inputs div h4 {
  text-align: left;
}

input:focus {
  background-color: #07e4e110;
  border-color: #07e4e180;
}

input:focus-visible {
  background-color: #07e4e110;
  border: solid 1px #07e4e1;
}

input:active {
  background-color: #07e4e110;
  border-color: #07e4e180;
}

input:hover {
  background-color: #07e4e110;
}

button {
    width: 110px;
    border: solid 3px #07e4e110;
    background: #07e4e1;
    height: 36px;
    transition: all .3s linear;
    border-radius: 9px;
    padding: 0 0 0 10px;
    transform: scale(1);
}

button:hover {
    border: solid 3px #07e4e110;
    background: #07e4e1;
    height: 36px;
    cursor: pointer;
    transform: scale(1.04);
}

button:hover .icon {
    transform: translateX(4px);
}

</style>