<template>
    <main>
      <NavTop/>
      <div class='anima'>
      <NavTopTree/>
      <ContentDoc/>
      </div>
    </main>
    
    
    
    
    
    
</template>

<style scoped>
.content-main {
  margin: 10px;
}


h1 {
  margin-left: 0px;
}

iframe {
  margin-left: 10px;
}

a {
  text-decoration: none;
}

i {
  color: var(--color-text);
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
  background-color: #dddddd54;
}

.nav-one {
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

.nav-one a {
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one i {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 0 5px 0;
  color: black;
}

.profile a {
  text-decoration: none;
  color: #aaa;
  font-size: .9em;
}

.profile img {
  height: 70px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 0 0 -10px;
  font-size: 1.5em;
}

.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: #aaa;
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: black;
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) i,
.main-one a:nth-child(2) i {
  padding-right: 4px;
  margin: 0 0 0 3px;
}

.main-one a:nth-child(3) i {
  padding-right: 2px;
  margin: 0 0 0 2px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: #555;
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 15px 0 15px 0;
  color: black;
  box-shadow: 4px 4px 10px #bbb;
}

.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -20px 0 0 0;
  color: var(--color-text);
  overflow-x: auto;
}

.main-tree i {
  font-size: 1.2em;
  color: #555;
}

.main-tree h5 {
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-four i {
  font-size: 1.2em;
  color: #555;
}

.main-four h5 {
  margin-left: 10px;
}

.main-four-card {
  height: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card i:nth-child(9),
i:nth-child(11),
i:nth-child(15) {
  color: #aaa;
}

.main-four-card a {
  border: solid .1px #dddddd;
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 10px;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-five i {
  font-size: 1.2em;
  color: #555;
}

.main-five h5 {
  margin-left: 10px;
}

.main-five h4 {
  margin-left: 10px;
}

.main-five-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 7px;
}

.main-five-card a {
  margin: 0px 5px 20px 10px;
  border-radius: 3% 3% 3% 3%;
  color: #aaa;
}

.main-five-card a:hover {
  color: #fadb41;
}

.main-five-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-five-card h4 {
  margin: 0 5px 0 10px;
}

.main-five-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

@media only screen and (min-width: 610px) {
  .main-six {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: -10px 0 0 0;
    color: #555;
    overflow-x: auto;
  }

}

.main-six i {
  font-size: 1.2em;
  color: var(--color-text);
}

.main-six h5 {
  margin-left: 10px;
}

.main-six h5 {
  margin: 10px;
}

.main-six-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.main-six-card a {
  border: solid 1px #fadb4170;
  box-shadow: 0 0px 5px #fadb4170;
  margin: 0px 5px 20px 10px;
  border-radius: 3% 3% 3% 3%;
  transform: translateY(1em);
  transition: all .4s linear;
}

.main-six-card a:hover {
  transform: translateY(0.8em);
  box-shadow: 0 5px 5px #fadb4180;
  background-color: #fadb4120;
}

.main-six-card a:hover img {
  opacity: 1;

}

img {
  border-radius: 3%;
  height: 150px;
  opacity: .6;
  width: 100%;
  transition: all .4s linear;
}

.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h3 {
  margin: 15px 7px;
  color: var(--color-text);
}

.main-six-card h4 {
  margin: 15px 7px;
  color: var(--color-text);
}

.main-six-card p {
  margin: 0 0 10px 10px;
  font-size: .8em;
}

.main-seven {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: #555;
  overflow-x: auto;
}

.main-seven i {
  font-size: 1.2em;
  color: var(--color-text);
}

.main-seven h5 {
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto 20px auto;
  width: 60%;
}

.main-seven-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-seven-card h4 {
  margin: 0 5px 0 10px;
}

.main-seven-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
  padding: 0 15px 0 0;
}

a.NuxtLink-exact-active {
  color: #fadb41;
  font-weight: bold;
}

.dateYear {
  color: #ccc;
}

.dateYearHover {
  color: #000;
}

.main-five a.router-link-exact-active {
  color: #000;
}
</style>