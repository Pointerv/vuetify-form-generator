<template>
    <v-list-item dense class="pa-0">
        <v-list-item-content>
            <v-switch
                v-if="isSwitch"
                v-model="content"
                :label="label"
                :disabled="disabled"
                :true-value="trueValue"
                :false-value="falseValue"
                dense
                inset
                hide-details
                class="mt-0 ml-2 pt-0"
            ></v-switch>
            <v-text-field
                v-else
                v-model="content"
                :label="label"
                :disabled="disabled"
                outlined
                dense
                hide-details
                clearable
                class="ml-1 pr-2"
            ></v-text-field>
        </v-list-item-content>
        <v-list-item-icon class="align-self-center">
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on" @click="isSwitch = !isSwitch">{{
                        isSwitch ? 'mdi-form-textbox' : 'mdi-toggle-switch'
                    }}</v-icon>
                </template>
                <span>{{ isSwitch ? '切换为文本输入' : '切换为滑块输入' }}</span>
            </v-tooltip>
        </v-list-item-icon>
        <h-panel-tooltip :content="tooltip" class="mr-1"></h-panel-tooltip>
    </v-list-item>
</template>

<script>
import HPanelTooltip from './HPanelTooltip.vue';

export default {
    name: 'HPanelSwitchTextField',

    components: {
        HPanelTooltip,
    },

    props: {
        value: [Boolean, String],
        label: String,
        tooltip: String,
        disabled: { type: Boolean, default: false },
        trueValue: {
            type: [String, Boolean, Array, Object],
            default: true,
        },
        falseValue: {
            type: [String, Boolean, Array, Object],
            default: false,
        },
    },

    data: () => ({
        content: null,
        isSwitch: false,
    }),

    watch: {
        value: {
            handler(newValue, oldValue) {
                this.content = newValue;
            },
            immediate: true,
        },
        content: {
            handler(newValue, oldValue) {
                this.$emit('input', newValue);
            },
        },
    },
};
</script>
