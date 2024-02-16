<template>
    <div>
        <window windowType="Lematec" />

    </div>
</template>

<script>
import Window from "@/components/Window.vue";
export default {
  components: { Window },
    data() {
        return {
            input1: '',
            input2: '',
            output: ''
        };
    },
    methods: {
        submitForm() {
            // Perform any necessary calculations or operations using input1 and input2
            // For example, concatenate the two inputs
            this.output = this.input1 + ' ' + this.input2;
            
            // Clear the input fields
            this.input1 = '';
            this.input2 = '';
        }
    }
};
</script>
