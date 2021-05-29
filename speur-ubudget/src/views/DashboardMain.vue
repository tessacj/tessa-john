<template>
    <v-app id="dashboard">
        <v-app-bar app color="white" dark elevation="0">
            <v-app-bar-nav-icon color="#336C91" @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <!-- <v-btn @click="toggleTheme" color="#336C91" class="mr-2">{{buttonText}}</v-btn> -->
            <v-icon color="#336C91">mdi-account</v-icon>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="sidebarMenu" 
            app
            color="#336C91"
            floating
            :permanent="sidebarMenu"
            :mini-variant.sync="mini"
            >
            <v-list dense dark>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="sidebarMenu = !sidebarMenu">mdi-chevron-left</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            <h3 class="font-weight-thin">uBudget</h3>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list-item class="px-2"  @click="toggleMini = !toggleMini">
                <v-list-item-avatar>
                    <v-icon color="white">mdi-account-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="text-truncate white--text">
                    Welcome, Username
                </v-list-item-content>
                <v-btn icon small>
                    <v-icon color="white">mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon color="white">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-content class="pa-5">
            <v-container class="px-4 py-0 fill-height" fluid>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer class="py-3">
            <span class="ml-auto overline">uBudget &copy;2021</span>
        </v-footer>
    </v-app>
</template>


<script>
    export default {
        data () {
            return {
                sidebarMenu: true,
                toggleMini: false,
                items: [
                    { title:"Dashboard", href:"/dashboard", icon:"mdi-view-dashboard-outline" },
                    { title:"Budget Management", href:"/budgets", icon:"mdi-cash-multiple" },
                    { title:"Analytics", href:"/analytics", icon:"mdi-google-analytics" },
                    { title:"Profile", href:"/profile", icon:"mdi-account" },
                    { title:"Settings", href:"/settings", icon:"mdi-cog-outline" },
                    { title:"Logout", href:"/login", icon:"mdi-logout-variant" },
                ],
            }
        },
        computed: {
            mini() {
                return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
            },
            buttonText() {
                return !this.$vuetify.theme.dark ? 'Go Dark' : 'Go Light'
            }
        },
        methods: {
            toggleTheme() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;      
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.theme--light.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--light.v-application ::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.theme--light.v-application ::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.theme--light.v-application ::-webkit-scrollbar-thumb:hover {
  background: black;
}

.theme--dark.v-application ::-webkit-scrollbar {
  width: 13px;
}

.theme--dark.v-application ::-webkit-scrollbar-track {
  background: #202020;
  border-left: 1px solid #2c2c2c;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb {
  background: #3e3e3e;
  border: solid 3px #202020;
  border-radius: 7px;
}

.theme--dark.v-application ::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>