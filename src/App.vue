<template>
  <router-view class="q-pb-xl" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
::-webkit-scrollbar {
  height: 12px;
  width: 14px;
  background: transparent;
  z-index: 12;
  overflow: visible;
}

::-webkit-scrollbar-thumb {
  width: 10px;
  background-color: #c1c1c1;
  border-radius: 10px;
  z-index: 12;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  transition: background-color 0.32s ease-in-out;
  margin: 4px;
  min-height: 32px;
  min-width: 32px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c1c1c1;
}
</style>
