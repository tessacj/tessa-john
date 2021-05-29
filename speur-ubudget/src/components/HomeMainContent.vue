<template>
    <v-container fluid fill-height class="home-background">
        <v-layout align-center column ma-15>
            <div class="display-3 font-weight-bold ma-3 text-center">
                Budget: A mathematical confirmation of your suspicions.
            </div>
            <div class="display-1 ma-3 text-center">
                Let's help you with that.
            </div>
            <v-btn
                flat
                color="#4DB382"
                class="ma-10 btn-home"
                large
                width="150"
                to="/login"
                >Get Started</v-btn
            >
            <home-bottom-content></home-bottom-content>
        </v-layout>
    </v-container>
</template>

<script>
import HomeBottomContent from "./HomeBottomContent";

export default {
    name: "HomeMainContent",
    components: {
        HomeBottomContent,
    },
};
</script>

<style scoped>
.home-background {
    background-color: #abe7ca;
    background-size: cover;
    width: 100%;
    height: 55%;
}
div {
    font-family: "Noto Sans", sans-serif;
    color: #3c3c3c;
}
.btn-home {
    font-family: "Noto Sans", sans-serif;
    color: white;
}
</style>
