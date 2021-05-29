<template>
    <v-app>
        <v-main transition="slide-x-transition">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
@font-face {
    font-family: "Noto Sans";
    src: local("Noto Sans"),
        url(./fonts/NotoSans-Regular.ttf) format("truetype"),
        url(./fonts/NotoSans-Italic.ttf) format("truetype"),
        url(./fonts/NotoSans-Bold.ttf) format("truetype"),
        url(./fonts/NotoSans-BoldItalic.ttf) format("truetype");
}
</style>
