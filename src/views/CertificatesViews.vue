<template>
  <div class="flex h-screen overflow-x-scroll snap-x snap-mandatory">
    <section id="certificate1" class="project-list relative">
      <h1 class="font-Avocados text-primary text-4xl">Certificates</h1>
      <button
        @click="slideRight('certificate2')"
        class="absolute top-1/2 right-10"
      >
        <button-slide :rotate="rotateEmptyClass" />
      </button>
    </section>

    <section
      id="certificate2"
      class="snap-start w-screen flex-none h-screen relative"
    >
      <button
        @click="slideLeft('certificate1')"
        class="absolute top-1/2 left-10"
      >
        <button-slide :rotate="rotateClass" />
      </button>
      <certif-comp />
    </section>
  </div>
</template>

<script>
import CertifComp from "../components/CertificateComp/CertifComp.vue";
import buttonSlide from "../components/buttonSlideComp.vue";
export default {
  components: {
    CertifComp,
    buttonSlide,
  },
  data() {
    return {
      rotateClass: "rotate-180",
      rotateEmptyClass: "",
    };
  },
  methods: {
    slideRight(idListProject) {
      console.log(idListProject);
      let projectListId = document.getElementById(`${idListProject}`);
      projectListId.scrollIntoView({
        behavior: "smooth",
      });
    },
    slideLeft(idListProject) {
      let projectList = document.getElementById(idListProject);
      projectList.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

