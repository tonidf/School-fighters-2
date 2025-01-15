<template>
    <section class=" h-screen flex justify-center flex-col landscape:bg-[url('../assets/img/fondo-personajes.png')] bg-no-repeat bg-cover bg-center">
        <h1 class="text-center text-white text-5xl p-5 font-bold">SCHOOL FIGHTER 2</h1>
        <p class="w-[100%] text-center text-white p-5">El mejor juego de lucha entre alumnos. Selecciona los alumnos el escenario que más te guste.
        </p>
        <!-- <div class="flex justify-center w-full items-center gap-6">
            <select v-model="personaje2" class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">
                <option v-for="(personaje, index) in personajes" :key="index" :value="index">{{ personaje.nombre }}</option>
            </select>
            <select v-model="personaje1" class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-1/3 p-2.5" name="" id="">
                <option v-for="(personaje, index) in personajes" :key="index" :value="index">{{ personaje.nombre }}</option>
            </select>
        </div>
        <div class=" flex justify-center my-5">
            <button class="bg-[#3dbc1e] text-white px-4 py-2 rounded font-bold">Continuar</button>
        </div> -->
    </section>
</template>

<script>
export default {
    name: "VistaEscenarios",
    data(){
        return{
            escenario: escenario,
            escenario: 'Selecciona escenario'
        }
    }
}
</script>

<style>

</style>