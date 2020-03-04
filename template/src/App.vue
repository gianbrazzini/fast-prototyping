<template>
    <div id="app">
        <h1>
            Fast Prototyping
        </h1>
        <PrototypeComponent />
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import PrototypeComponent from './components/PrototypeComponent'


@Component({
   components: {
       PrototypeComponent
   }
})
export default class App extends Vue {}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
