<template>
    <div>
        <ul>
            <li v-for="goal in goals" :key="goal"></li>
            <slot :item="goal" another-prop="helps me to complete it"></slot>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goals:['finish the course', 'learn vue mastry']
        }
    },
}
</script>