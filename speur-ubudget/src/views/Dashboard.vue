<template>
    <div>
        <v-row>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="cyan fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 cyan--text">
                            <h5 class="text-truncate text-uppercase">Latest Income</h5>
                            <h1>$4,500</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="primary fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 primary--text">
                            <h5 class="text-truncate text-uppercase">Total Expenses</h5>
                            <h1>$3,200</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
            <v-col lg="4" cols="sm" class="pb-2">
                <v-card>
                    <v-row class="no-gutters">
                        <div class="col-auto">
                            <div class="success fill-height">&nbsp;</div>
                        </div>
                        <div class="col pa-3 py-4 success--text">
                            <h5 class="text-truncate text-uppercase">Total Purchases</h5>
                            <h1>$550</h1>
                        </div>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-carousel
                    cycle
                    height="250"
                    hide-delimiters
                    interval="4000"
                    show-arrows-on-hover>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <v-row class="fill-height" align="center" justify="center" >
                                <div class="display-1" color="white">
                                    {{ slide }}
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="mx-auto text-center">
                    <v-card-title class="primary--text">
                        Analytics
                    </v-card-title>
                    <v-sparkline
                        :fill="fill"
                        :value="sparklineData" 
                        padding="18"
                        label-size="4"
                        :smooth="radius || false"
                        color="cyan"
                        :gradient="['#007bff','cyan']" 
                        :line-width="2"
                        :stroke-linecap="'round'">
                        <template v-slot:label="item">
                            ${{ item.value }}
                        </template>
                    </v-sparkline>
                    <v-card-actions class="py-4 justify-center">
                        <v-btn color="primary" to="/analytics">View Report</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                fill: true,
                radius: 10,
                sparklineData: [
                    423,
                    446,
                    675,
                    510,
                    590,
                    610,
                    423,
                ],
                colors: [
                'red accent-1',
                'pink accent-1',
                'purple accent-1',
                'deep-purple accent-1',
                'deep-purple accent-4',
                'indigo accent-1',
                'blue accent-1',
                'light-blue accent-1',
                'light-blue accent-1',
                'teal accent-1',
                ],
                slides: [
                'Create your budget before the month begins.',
                'Practice budgeting to zero.',
                'Use the right tools (like this website).',
                'Establish needs versus wants.',
                'Keep bills and receipts organized.',
                'Use separate accounts.',
                'Prioritize debt repayment.',
                'Don’t forget to factor in fun!',
                'Save first, then spend.',
                'Start contributing to retirement now!',
                ],
            }
        }
    }
</script>
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>