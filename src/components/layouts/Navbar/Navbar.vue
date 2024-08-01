<script setup>
// import { ref, watch } from "vue";
// import {useI18n} from "vue-i18n";
// const i18n = useI18n();
// const burger = ref(false)
// const lenginput = ref("EN");
// function lenginputed (item){
//     lenginput.value = item
// }


// watch( lenginput,()=>{
//    if( lenginput.value == "uz"){
//     i18n.locale.value= 'uz'
//    } else if( lenginput.value == "ru"){
//      i18n.locale.value = 'ru' 
//    }
// })

</script>


<template>
<nav class="nav">
    <div class="container">
        <div class="nav__content">

        <div class="nav__left">
            <img src="@/assets/img/logo1.png" alt="">
            <h5 class="nav__left-text">Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</h5>
        </div>

<!-- 
        <div class="nav__list-burger-navigation"
 :class="{'activeburger': burger }">
  <button class="btn__list-burger-exit" @click="burger = false">X</button>
            <ul class="nav__center-list">
                <a href="" class="nav__center-link">Nega biz</a>
                <a href="" class="nav__center-link">Natijalar</a>
                <a href="" class="nav__center-link">Kurslar</a>
                <a href="" class="nav__center-link">Ko’p beriladigan savollar</a>
            </ul>
</div> -->




        <div class="nav__center">
            <ul class="nav__center-list">
                <a href="" class="nav__center-link">Nega biz</a>
                <a href="" class="nav__center-link">Natijalar</a>
                <a href="" class="nav__center-link">Kurslar</a>
                <a href="" class="nav__center-link">Ko’p beriladigan savollar</a>
            </ul>
        </div>

      
<!-- <button class="btn__active-burger" @click="burger = true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button> -->


        <div class="nav__right">
            <h4 class="nav__right-num">+998 (33) 306 0098</h4>
            <p class="nav__right-text">Hoziroq bog’laning</p>
        </div>
    </div>
</div>
</nav>
</template>



<style >

</style>