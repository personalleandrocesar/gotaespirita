<template>

    <div class='logo'>
        <Icon name='ic:round-water-drop' />
    </div>

    <div class="head-hello">
        <div class="hello">
            Gota Espírita
        </div>
        <p>
            Gotas de sabedoria, alimentando o espírito com a doutrina espírita.        </p>
    </div>

</template>

<style scoped>
.logo {
    display: flex;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    flex-wrap: wrap;
}

.logo .icon {
      color: #02d1d8;
      margin: 2rem auto .5rem auto;
      height: 60px;                   
      width: 60px;
      transform: scaleX(-1);
}

.head-hello {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
}

.hello {
    font-size: 1.5rem;
    margin: .2rem 1.5rem;
    line-height: 1.5rem;
    font-weight: 900;
    letter-spacing: 1.5px;
    color: #02d1d8;
}   

.head-hello p {
    margin: .5rem 5%;
    font-size: 1.1rem;
}

</style>