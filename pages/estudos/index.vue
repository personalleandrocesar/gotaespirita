<script setup>
 const grid = ref(true)
 const contentGrid = ref(true)
 const switLayout = () => {
  grid.value = !grid.value
  contentGrid.value = !contentGrid.value
 }


</script>
<template>
  <NavTop />
  <div class='anima'>
  <Blog/>
  </div>
  <NavBottomTwo />
</template>
<style scoped>
a {
    text-decoration: none;
    color: #fff;
}

i {
    color: #fff;
    font-size: .9em;
    margin: auto;
}

code {
    border-left: 3px solid #ff1900;
      margin: 0 5px 0 0px;
      padding: 0 0 0 10px;
      font-size: 1rem;
}

.divider {
    height: 15px;
    background-color: #f0ece489;
}

.divider-ultimate {
    height: 30px;
    background-color: #f0ece4;
}


.main-one {
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    margin: 0px 10px 0 0;
    padding-bottom: 5px;
    color: #efc289;
    background: #f0ece4;
    overflow-x: auto;
    position: sticky;
    top: 35px;
    height: 35px;
    width: 100%;
    box-shadow: 0px 1px 0px 0px #ff190020;
    border-radius: 0% 0% 10% 10%;

}

.main-one i {
    font-size: 1.2em;
    color: #fff;
    margin-left: 15px;
}

.main-one h5 {
    margin: 10px 10px 22px 10px;
}

.main-two {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #fff;
    background: #f0ece4;
    overflow-x: auto;


}

.main-two i {
    font-size: 1.2em;
    color: #555;
}

.main-two h5 {
    margin: 0 auto 20px auto;
}

.main-two-card {
    margin: -10px 0 10px 10px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;

}

.main-two-card a {
    border: solid .1px #dddddd54;
    padding: 2px 6px;
    margin: 10px 4px;
    border-radius: 0% 10% 10% 10%;

    padding: 4px;
    font-size: 14px;
    color: #efc289;
    border: solid .5px #d8d8d840;
    border-radius: 7px;
    transition: all .3s linear;
    background-color: #d8d8d840;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.main-two-card a:hover {
    color: #efc289;
    border: solid 0.5px #ff1900;
    text-shadow: -1px 1px 10px #efc289;
}

.main-two-card span {
    position: relative;
    top: -6px;
    left: -14px;
}

.main-two-card h4 {
    margin: 0 0 0 15px;
    background: #92929240;
    padding: 0px 10px 0px 10px;
    border-radius: 12% 12% 12% 0%;


}

.main-two-card p {
    margin: 0 0 0 10px;
    font-size: .9em;
}


.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  padding: 0 0 15px 0;
  color: #fff;
  background-color: #f0ece4;
  box-shadow: 0px 10px 5px #ff1900;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
}

.main-four img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.main-four i {
  font-size: 1em;
  color: #fff;
}

.main-four h4 {
  margin: 10px 0 0 10px;
  color: #fff;
}

.main-four h5:nth-child(1) {
  margin: 15px auto 5px auto;
  color: #fff;
}

.main-four h5 {
  margin: 0px 10px 0px 10px;
  color: green;
}

.main-four div {
  border-radius: 3% 3% 3% 3%;
}

.main-four-card {
  margin: 0px 10px 20px 10px;
  border: solid .1px #dddddd54;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four p {
  padding: 0px;
  margin: 10px 0 10px 10px;
  font-size: .9em;
}

.main-four .mini-profile {
  height: 6em;
  border-radius: 50%;
  margin: 10px 10px 0 10px;
  padding: 0 15px 0 0;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #fff;
  background-color: #f0ece4;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.main-five a p {
  color: #fff;
}

.main-five img {
  height: 80px;
  margin: 10px 10px;
}

.main-five i {
  font-size: 1em;
  color: #fff;
}

.main-five h4 {
  margin: 10px 0 0 0px;
  color: #efc289;
  text-shadow: -1px 1px 10px #efc289;
}

.main-five h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #fff;
}

.main-five h5 {
  margin: 0px 10px 0px 10px;
  color: #4fe708;
}

.main-five div {
  border-radius: 3% 3% 3% 3%;
}

.main-five-card {
  margin: 7px 1% 0 1%;
  font-size: 14px;
  color: #ddd;
  border: solid .5px #d8d8d840;
  border-radius: 7px;
  transition: all .3s linear;
  background-color: #d8d8d820;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  flex-direction: row;
}

.main-five-card:hover {
  color: #efc289;
    border: solid 0.5px #ff1900;
    text-shadow: -1px 1px 10px #efc289;
}

.main-five p {
  padding: 0px;
  margin:0px 10px 5px 0px;
  font-size: .9em;
}
.main-six{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  color: #fff;
  background-color: #f0ece4;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -10px 0 0 0;
}

.main-six div{
  margin: 7px 1% 0 1%;
  width: 48%;
}
.main-six img {
  height: 75px;
  margin: 10px 10px;
}

.main-six i {
  font-size: 1em;
  color: #fff;
}

.main-six h4 {
  margin: 0px 0 0 0px;
  color: #efc289;
  text-shadow: -1px 1px 10px #efc289;
}

.main-six h5:nth-child(1) {
  margin: 0px auto 5px auto;
  color: #fff;
}
  
  .main-six h5 {
    margin: 0px 10px 0px 10px;
    color: #4fe708;
  }
  .main-six-card {
    font-size: 14px;
    color: #ddd;
    border: solid .5px #d8d8d840;
    border-radius: 7px;
    transition: all .3s linear;
    background-color: #d8d8d820;
    height: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
  }

    @media only screen and (max-width: 350px) {
      .main-six-card {
          font-size: 14px;
          color: #ddd;
          border: solid .5px #d8d8d840;
          border-radius: 7px;
          transition: all .3s linear;
          background-color: #d8d8d820;
          height: 220px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: row;
          flex-wrap: wrap
        }

    }
    @media only screen and (max-width: 410px) {
      .main-six-card {
          font-size: 14px;
          color: #ddd;
          border: solid .5px #d8d8d840;
          border-radius: 7px;
          transition: all .3s linear;
          background-color: #d8d8d820;
          height: 220px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: row;
          flex-wrap: wrap
        }

    }
  .main-six-card div {
    width: 100%;
  }
  .main-six-card:hover {
    color: #efc289;
    border: solid 0.5px #ff1900;
    text-shadow: -1px 1px 10px #efc289;
}

.main-six p {
  padding: 0px;
  margin: 0px 5px ;
  font-size: .9em;
}

.dateYear {
  color: #ccc;
  padding: 0 10px 0 10px;
}

.dateYearHover {
  color: #000;
  border-bottom: solid .2px #000;
  padding: 0 10px 0 10px;
}

@media only screen and (max-width: 369px) {}
</style>