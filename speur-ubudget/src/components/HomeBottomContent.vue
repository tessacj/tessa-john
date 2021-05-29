<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-img
                    src="@/static/assets/images/nomoney@2x.png"
                    width="230"
                    class="center"
                >
                </v-img>
                <!-- <v-card height="250"> -->
                <div height="250" width="150">
                    <v-card-title primary-title class="justify-center">
                        <h3 class="mb-0">Track Your Spending</h3>
                    </v-card-title>
                    <v-card-text>
                        Where is all your money going? Having difficulties
                        accounting for your spending? Saving becomes difficult
                        when you don't
                        <b>track</b> your spending.
                    </v-card-text>
                </div>
                <!-- </v-card> -->
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-img
                    src="@/static/assets/images/manage@2x.png"
                    width="230"
                    class="center"
                >
                </v-img>
                <div height="250" width="150">
                    <v-card-title primary-title class="justify-center">
                        <h3 class="mb-0">Curb Bad Habits</h3>
                    </v-card-title>
                    <v-card-text>
                        Stop complaining about your financial situation, do
                        something about it! Become invested in gaining financial
                        freedom. Let's help you track and manage your spending.
                    </v-card-text>
                </div>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-img
                    src="@/static/assets/images/moneyfreedom@2x.png"
                    width="230"
                    class="center"
                >
                </v-img>
                <div height="250" width="150">
                    <v-card-title primary-title class="justify-center">
                        <h3 class="mb-0">Gain Financial Freedom</h3>
                    </v-card-title>
                    <v-card-text>
                        It's simple really. Knowledge is the key to saving
                        effectively. Learn how to save money and experience the
                        lifestyle financial freedom affords you!
                    </v-card-text>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "HomeBottomContent",
};
</script>

<style scoped>
div {
    font-family: "Noto Sans";
    color: #3d3d3d;
    text-decoration: none;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
.align-txt {
    text-align: center;
}
</style>
