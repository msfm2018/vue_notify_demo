<template class="border">
    <div>
        <p>name: {{ name}}</p>
        <p>childCom1的$attrs: {{ $attrs }}</p>
        <ui3_b v-bind="$attrs"></ui3_b>
    </div>
</template>
<script>
    import ui3_b from "@/components/ui3_b.vue"; // 导入A组件
    export default {
        components: {
            ui3_b
        },
        // inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
        props: {
            name: String// name作为props属性绑定
        },
        created() {
            console.log(this.$attrs);
            // { "age": "18", "gender": "女", "height": "158", "title": "程序员成长" }
        }
    };
</script>
