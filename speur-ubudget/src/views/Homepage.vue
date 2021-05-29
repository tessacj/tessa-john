<template>
    <span>
        <app-navigation></app-navigation>
        <home-main-content></home-main-content>
        <spacer></spacer>
        <home-footer></home-footer>
    </span>
</template>

<script>
import Spacer from "../components/Spacer";
import AppNavigation from "../components/AppNavigation";
import HomeMainContent from "../components/HomeMainContent";
import HomeFooter from "../components/HomeFooter";

export default {
    name: "homepage",
    components: {
        AppNavigation,
        HomeMainContent,
        Spacer,
        HomeFooter,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
