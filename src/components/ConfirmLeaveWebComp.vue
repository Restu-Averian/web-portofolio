<template>
  <div
    :class="isChangeWeb ? 'scale-0 ' : 'scale-100'"
    class="
      inset-0
      fixed
      bg-[rgba(0,0,0,0.6)]
      transition-all
      duration-300
      h-screen
      z-50
      flex
      justify-center
      items-center
    "
  >
    <div
      class="bg-[#4D5C60] p-10 transition-all duration-300 rounded-xl delay-300"
      :class="isChangeWeb ? 'scale-0' : 'scale-100'"
    >
      <div
        class="flex text-white items-center space-y-5 justify-center flex-col"
      >
        <i class="bx bxs-sad bx-tada bx-lg text-primary"></i>
        <div class="text-center">
          <h1 class="text-3xl">You will leave this website</h1>
          <p>Do you want to continue ?</p>
        </div>
        <div class="w-full flex justify-around items-center">
          <button
            @click="closeModalConfidence"
            class="
              px-4
              rounded-lg
              text-xl
              py-2
              border border-primary
              text-primary
            "
          >
            Cancel
          </button>
          <button
            @click="leaveWeb"
            class="px-4 rounded-lg text-xl py-2 bg-primary text-white"
          >
            Yes, I do
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isChangeWeb"],
  methods: {
    closeModalConfidence() {
      this.$emit("closeModalConfidence");
    },
    leaveWeb() {
      this.$emit("leaveWeb");
    },
  },
};
</script>

<style>
</style>