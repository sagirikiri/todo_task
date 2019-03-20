<template>
    <v-app>
        <div>
            <v-dialog
                v-model="dialog">
                <template v-slot:activator="{ on }">
                    <v-btn
                    v-on="on">
                        新規登録
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <v-input></v-input>
                    </v-card-title>
                    <v-card-text>

                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </v-app>    
</template>

<script>
export default {
    data(){
        return {
            dialog: false
        }
    }
}
</script>
