<template>
    <v-container fill-height fluid class="signup-background">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md8>
                <v-card class="elevation-5">
                    <v-toolbar flat class="ma-3">
                        <v-toolbar-title class="display-2 mt-5"
                            >Sign In</v-toolbar-title
                        >
                        <v-spacer></v-spacer>
                        <div class="my-2 mt-5">
                            <v-btn color="#e3ba46" to="/" fab small flat>
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </div>
                    </v-toolbar>
                    <v-card-text class="ml-5">
                        New user?
                        <router-link to="/signup"
                            >Create an account.</router-link
                        >
                    </v-card-text>
                    <v-card-text class="ml-2">
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-container>
                                <v-row dense>
                                    <v-col cols="12" md="6">
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="email"
                                                    :rules="emailRules"
                                                    label="E-mail"
                                                    outlined
                                                    filled
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    name="password"
                                                    label="Password"
                                                    id="password"
                                                    type="password"
                                                    outlined
                                                    filled
                                                    required
                                                    v-model="password"
                                                    :rules="passwordRules"
                                                >
                                                </v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row dense>
                                            <v-col cols="12" md="12">
                                                <v-btn
                                                    @click="submit"
                                                    width="inherit"
                                                    color="#e3ba46"
                                                    >Sign In</v-btn
                                                >
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <v-divider></v-divider>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <div class="center">
                                                    <v-btn
                                                        v-for="icon in icons"
                                                        :key="icon"
                                                        class="mx-4 center"
                                                        fab
                                                        outlined
                                                        dark
                                                        color="#e3ba46"
                                                        icon
                                                    >
                                                        <v-icon size="24px">
                                                            {{ icon }}
                                                        </v-icon>
                                                    </v-btn>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col cols="12" md="4">
                                        <v-img
                                            src="@/static/assets/images/signup-img@2x.png"
                                            class="center mr-15"
                                        >
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </v-card-text>
                    <div>
                        <v-spacer></v-spacer>
                        <v-card-text>uBudget</v-card-text>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import * as myAPI from "../scripts/API.js";

console.log(myAPI.postLogin());
export default {
    name: "Signup",
    data() {
        return {
            icons: [
                "mdi-facebook",
                "mdi-twitter",
                "mdi-linkedin",
                "mdi-instagram",
            ],
            valid: false,
            email: "",
            password: "",
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+/.test(v) || "E-mail must be valid",
            ],
            passwordRules: [(v) => !!v || "Password is required"],
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                console.log(
                    "Success! Got response:/n ",
                    myAPI.postLogin(this.email, this.password)
                );
                this.$router.push({ path: 'dashboard' })
            }
        },
    },
};
</script>
<style scoped>
.signup-background {
    background-color: #abe7ca;
    background-size: cover;
    width: 100%;
    height: 100%;
}
a {
    font-family: "Noto Sans";
    color: #e3ba46;
    text-decoration: none;
}
.v-text-field {
    margin: 0;
    padding: 0;
}
.center {
    text-align: center;
}
</style>
