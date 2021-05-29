<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            color="#abe7ca"
            disable-resize-watcher
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item :key="index" :to="item.url">
                        <v-list-item-content>
                            {{ item.title }}
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app flat color="#abe7ca" class="pa-5">
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <div>
                    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
                </div>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn
                color="#4DB382"
                large
                width="120"
                class="hidden-sm-and-down btn-home"
                to="/login"
                >LOGIN</v-btn
            >
            <v-btn
                color="#4C82A5"
                large
                width="120"
                class="hidden-sm-and-down btn-home"
                to="/signup"
                >SIGN UP</v-btn
            >
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: "AppNavigation",
    data() {
        return {
            appTitle: "uBudget",
            drawer: false,
            items: [
                { title: "Login", url: "/login" },
                { title: "Sign Up", url: "/signup" },
            ],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    font-family: "Noto Sans";
    color: #3d3d3d;
    text-decoration: none;
}
a {
    font-family: "Noto Sans";
    color: #3d3d3d;
    text-decoration: none;
}
.btn-home {
    font-family: "Noto Sans", sans-serif;
    color: white;
}
</style>
