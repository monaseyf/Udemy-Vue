<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog {
    position: fixed;
    top: 20vh;
    margin: 0;
    width: 40%;
    background-color: antiquewhite;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
    left: 20%;
}
</style>