<template>
  <v-card>
    <v-tabs v-model="tabs" centered>
        <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
        </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-data-table
            :headers="budgetHeaders"
            :items="budgets"
            sort-by="date"
            class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>My Budgets</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            New Budget
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItemB.name" label="Budget Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItemB.income" label="Income" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
    </v-tab-item>
    <v-tab-item>
        <v-data-table
            :headers="expenseHeaders"
            :items="expenses"
            sort-by="date"
            class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>My Expenses</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            New Expense
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItemE.name" label="Expense Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItemE.income" label="Allocation" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
      </v-tab-item>
      <v-tab-item>
        <v-data-table
            :headers="purchaseHeaders"
            :items="purchases"
            sort-by="date"
            class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>My Purchases</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            New Purchase
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItemP.name" label="Purchase Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItemP.income" label="Cost" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false,
                dialogDelete: false,
                budgetHeaders: [
                    {
                    text: 'Budget Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                    },
                    { text: 'Income'},
                    { text: 'Expenses'},
                    { text: 'Date Created'},
                ],
                budgets: [],
                expenseHeaders: [
                    {
                    text: 'Expense Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                    },
                    { text: 'Allocation', value: 'allocation' },
                    { text: 'Purchases', value: 'purchases' },
                    { text: 'Date Created', value: 'date' },
                ],
                purchaseHeaders: [
                    {
                    text: 'Purchase Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                    },
                    { text: 'Cost', value: 'cost' },
                    { text: 'Date Created', value: 'date' },
                ],
                expenses: [],
                purchases: [],
                editedIndexB: -1,
                editedItemB: {
                    name: '',
                    income: 0,
                    expense: 0,
                    date: 0
                },
                defaultItemB: {
                    name: '',
                    income: 0,
                    expense: 0,
                    date: 0
                },
                editedIndexP: -1,
                editedItemP: {
                    name: '',
                    cost: 0,
                    date: 0
                },
                defaultItemP: {
                    name: '',
                    cost: 0,
                    date: 0
                },
                editedIndexE: -1,
                editedItemE: {
                    name: '',
                    allocation: 0,
                    date: 0
                },
                defaultItemE: {
                    name: '',
                    allocation: 0,
                    date: 0
                },
                tabs: null,
                items: [
                { tab: 'Create New Budget', content: 'Tab 1 Content' },
                { tab: 'Add Expense', content: 'Tab 2 Content' },
                { tab: 'Add Purchases', content: 'Tab 3 Content' },
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'New Budget' : 'Edit Budget'
            },
        },

        watch: {
            dialog (val) {
                val || this.close()
            },
            dialogDelete (val) {
                val || this.closeDelete()
            },
        },

        created () {
            this.initialize()
        },

        methods: {
                initialize () {
                    this.purchases = [
                        {
                            name: 'Frozen Yogurt',
                            cost: 7,
                            date: 0
                        }
                    ],
                    this.expenses = [
                        {
                            name: 'Lunch',
                            allocation: 20,
                            purchases: 0,
                            date: 0
                        },
                        {
                            name: 'Snacks',
                            allocation: 25,
                            purchases: 7,
                            date: 0
                        },
                        {
                            name: 'Trip fee',
                            allocation: 60,
                            purchases: 0,
                            date: 0
                        }
                    ],
                    this.budgets = [
                    {
                        name: "Children's Field Trip",
                        income: 150,
                        expense: 105,
                        date: 0
                    },
                    ]
                },

                editItem (item) {
                    this.editedIndex = this.budgets.indexOf(item)
                    this.editedItem = Object.assign({}, item)
                    this.dialog = true
                },

                deleteItem (item) {
                    this.editedIndex = this.budgets.indexOf(item)
                    this.editedItem = Object.assign({}, item)
                    this.dialogDelete = true
                },

                deleteItemConfirm () {
                    this.budgets.splice(this.editedIndex, 1)
                    this.closeDelete()
                },

                close () {
                    this.dialog = false
                    this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                    })
                },

                closeDelete () {
                    this.dialogDelete = false
                    this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                    })
                },

                save () {
                    if (this.editedIndex > -1) {
                    Object.assign(this.budgets[this.editedIndex], this.editedItem)
                    } else {
                    this.budgets.push(this.editedItem)
                    }
                    this.close()
                },
                },
        
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