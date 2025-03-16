<script lang="ts" src="./loader.ts" />

<template>
    <div class="contLoader" :class="{ active: onShow }">
        <img :src="pokeballImg" class="w-75 mb-5"/>
    </div>
</template>

<style lang="scss" src="./loader.scss" scoped />
