<template>
    <v-expansion-panels focusable mandatory class="mb-4">
        <h-expansion-panel index="appearance" header="外观">
            <h-panel-switch
                v-model="properties.chips"
                label="Chips : 纸片显示"
                tooltip="改变一个已选择项为小纸片（chips）的显示方式"
            ></h-panel-switch>
            <h-panel-icon
                v-model="properties[constants.tags.DeletableChips]"
                label="Deletable Chips"
                tooltip="添加一个去除图标的到选定的小纸片（chips）"
            ></h-panel-icon>
            <h-panel-switch
                v-model="properties[constants.tags.SmallChips]"
                label="Small Chips : 标题不移动"
                tooltip="标签在 focus/dirty 上不移动"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.dense" label="Dense : 紧凑显示"> </h-panel-switch>
            <h-panel-switch
                v-model="properties.filled"
                label="Filled : 使用填充样式"
                :disabled="properties.outlined || properties.solo"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.flat"
                label="Flat : 移除阴影"
                tooltip="当使用solo或者solo-inverted属性时，移除添加到元素的标高（阴影）"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.FullWidth]"
                label="Full Width : 全宽度"
                tooltip="指定输入类型为全宽度"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.HideDetails]"
                label="Hide Details : 隐藏细节区域"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.HideSelected]"
                label="Hide Selected"
                tooltip="不要在选择菜单中显示已选择的项"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.outlined" label="Outlined : 显示轮廓"></h-panel-switch>
            <h-panel-switch
                v-model="properties.rounded"
                label="Rounded : 椭圆边框"
                :disabled="!properties.filled && !properties.outlined && !properties.solo"
                dense
                :class="constants.class.switch"
                tooltip="向输入添加边框半径, 需要配合设置Filled、Outlined、或Solo任意一项"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.shaped"
                label="Shaped : 圆角边框"
                tooltip="如果Outlined则为圆形，如果Filled则增加border-radius。必须与Outlined 或Filled 一起使用"
                :disabled="!properties.outlined && !properties.filled && !properties.solo"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.SingleLine]"
                label="Single Line : 标题不移动"
                tooltip="标签在 focus/dirty 上不移动"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.solo" label="Solo : 凸起样式" :disabled="properties.filled">
            </h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.SoloInverted]"
                label="Solo Inverted : 单反"
                tooltip="减少元素的不透明度，知道获得焦点"
            ></h-panel-switch>
            <h-panel-number v-model="properties.height" label="Height : 设置高度" min="1"></h-panel-number>
            <h-panel-text-field
                v-model="properties[constants.tags.NoDataText]"
                label="No Data Text"
                tooltip="当没有数据时显示的文本"
            ></h-panel-text-field>
        </h-expansion-panel>

        <h-expansion-panel index="control" header="控制">
            <h-panel-switch v-model="properties.autofocus" label="Auto Focus : 启用自动聚焦"></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.CacheItems]"
                label="Cache Items"
                tooltip="保留已经通过 items 属性的项在本地的唯一副本"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.DisableLookup]"
                label="Disable Lookup"
                tooltip="禁用键盘查询"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.disabled" label="Disabled : 禁用输入"></h-panel-switch>
            <h-panel-switch
                v-model="properties.eager"
                label="Eager"
                tooltip="将强制组件内容在加载时呈现。如果存在内容的话，则不会在 DOM 中渲染，如果你想优化 SEO，这是非常有用的。"
            ></h-panel-switch>
            <h-panel-switch
                v-model="properties.loading"
                label="Loading : 加载状态"
                tooltip="显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何 material 色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值 color（由色彩属性设置——如果它被组件支持的话）还可以是原色。"
            ></h-panel-switch>
            <h-panel-number
                v-model="properties[constants.tags.LoaderHeight]"
                label="Loader Height : 加载器高度"
                min="1"
                :disabled="!properties.loading"
            ></h-panel-number>
            <h-panel-switch
                v-model="properties.multiple"
                label="Multiple : 多选"
                tooltip="将预期模型更改为数组"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.readonly" label="Readonly : 只读状态"></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.ReturnObject]"
                label="Return Object"
                tooltip="将选择器的行为更改为直接返回对象，而不是 item-value 指定的值"
            ></h-panel-switch>
            <h-panel-switch v-model="properties.reverse" label="Reverse : 反转输入方向"></h-panel-switch>
            <h-panel-switch
                v-model="properties[constants.tags.ValidateOnBlur]"
                label="Validate On Blur : 延迟验证"
                tooltip="延迟验证直到失去焦点的事件被触发"
            ></h-panel-switch>
            <h-panel-color
                v-model="properties[constants.tags.ItemColor]"
                label="Item Color : Item颜色"
                tooltip="设置选中项目的颜色"
            ></h-panel-color>
            <h-panel-text-field
                v-model="properties[constants.tags.ItemDisabled]"
                label="Item Disabled"
                tooltip="禁用 items 的属性值"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.ItemText]"
                label="Item Text"
                tooltip="设置items'属性的文本值"
            ></h-panel-text-field>
            <h-panel-text-field
                v-model="properties[constants.tags.ItemValue]"
                label="Item Value"
                tooltip="设置 items 的值的属性 - 必须是 primitive。支持点符号。注意： 目前不支持 v-combobox GitHub问题"
            ></h-panel-text-field>
        </h-expansion-panel>

        <h-expansion-panel index="icon" header="图标">
            <h-panel-icon
                v-model="properties[constants.tags.AppendIcon]"
                label="Append Icon"
                tooltip="在组件上附加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.AppendOuterIcon]"
                label="Append Outer Icon"
                tooltip="在组件的外部添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.PrependIcon]"
                label="Prepend Icon"
                tooltip="在组件前添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-icon
                v-model="properties[constants.tags.PrependInnerIcon]"
                label="Prepend Inner Icon"
                tooltip="在组件的输入中添加一个图标，使用与 v-icon 相同的语法"
            ></h-panel-icon>
            <h-panel-switch v-model="properties.clearable" label="Clearable : 显示清除按钮"> </h-panel-switch>
            <h-panel-icon
                v-model="properties[constants.tags.ClearIcon]"
                label="Clear Icon"
                tooltip="当使用 clearable 且有输入值时应用"
                :disabled="!properties.clearable"
            ></h-panel-icon>
            <h-panel-switch
                v-model="properties[constants.tags.OpenOnClear]"
                label="Open On Clear"
                tooltip="当使用 clearable 属性, 一旦清除，选择菜单将打开或保持打开，这个取决于当前状态"
                :disabled="!properties.clearable"
            ></h-panel-switch>
        </h-expansion-panel>

        <h-expansion-panel index="content" header="内容">
            <h-panel-switch
                v-model="properties[constants.tags.PersistentHint]"
                label="Persistent Hint : 强制显示提示"
                tooltip="强制提示总是可见的"
            ></h-panel-switch>
            <h-panel-text-field v-model="properties.hint" label="Hint : 提示文本"></h-panel-text-field>
            <h-panel-text-field v-model="properties.placeHolder" label="PlaceHolder : 占位符文本"></h-panel-text-field>
            <h-panel-text-field v-model="properties.prefix" label="Prefix : 前缀文本"></h-panel-text-field>
            <h-panel-text-field v-model="properties.suffix" label="Suffix : 后缀文本"></h-panel-text-field>
            <h-panel-select
                v-model="properties.type"
                label="Type: 输入类型"
                tooltip="设置不同的输入类型"
                :items="constants.items.inputType"
            ></h-panel-select>
            <h-panel-number
                v-model="properties.min"
                label="Min : 数字类型最小值"
                min="0"
                :disabled="!isNumberType"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
            <h-panel-number
                v-model="properties.max"
                label="Max : 数字类型最大值"
                min="1"
                :disabled="!isNumberType"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
            <h-panel-number
                v-model="properties.step"
                label="Step : 数字类型步长"
                min="1"
                :disabled="!isNumberType"
                tooltip="当Type属性为‘数字类型’时可用"
            ></h-panel-number>
        </h-expansion-panel>

        <h-expansion-panel index="color" header="色彩">
            <h-panel-color
                v-model="properties[constants.tags.BackgroundColor]"
                label="Background Color : 背景颜色"
                tooltip="输入框背景颜色"
            ></h-panel-color>
            <h-panel-color
                v-model="properties.color"
                label="Color : 颜色"
                tooltip="将指定的颜色应用于控件 - 它可以是 material color 的名称（例如 success 或者 purple）或 css 颜色。 你可以在 colors page 中找到内置类的列表"
            ></h-panel-color>
            <h-panel-switch v-model="properties.dark" label="Dark : 使用深色主题"> </h-panel-switch>
            <h-panel-switch v-model="properties.light" label="Light : 使用浅色主题"></h-panel-switch>
        </h-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import { HExpansionPanel } from '../layouts';
import { HPanelColor, HPanelIcon, HPanelNumber, HPanelSelect, HPanelSwitch, HPanelTextField } from '../controls';

import { constants } from '../../../lib/modeler/configurations';

export default {
    name: 'HSingleSelectPanel',

    components: {
        HExpansionPanel,
        HPanelColor,
        HPanelIcon,
        HPanelNumber,
        HPanelSelect,
        HPanelSwitch,
        HPanelTextField
    },

    props: {
        element: {
            type: Object,
            default: () => {}
        }
    },

    data: () => ({
        constants,
        dataObject: {}
    }),

    computed: {
        properties() {
            return this.dataObject[this.constants.annotations.xprops];
        },
        isNumberType() {
            return this.properties.type === 'number';
        }
    },

    watch: {
        element: {
            handler(newValue, oldValue) {
                this.dataObject = newValue;
            },
            immediate: true
        }
    }
};
</script>
