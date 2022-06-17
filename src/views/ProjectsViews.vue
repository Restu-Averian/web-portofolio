<template>
  <div class="flex h-screen overflow-x-scroll snap-x snap-mandatory">
    <section id="projectList1" class="project-list relative">
      <h1 class="font-Avocados text-primary text-4xl">My Projects</h1>
      <button
        @click="slideRight('projectList2')"
        class="absolute top-1/2 right-10"
      >
        <button-slide :rotate="rotateEmptyClass" />
      </button>
    </section>

    <section
      id="projectList2"
      class="snap-start w-screen flex-none h-screen relative"
    >
      <button
        @click="slideLeft('projectList1')"
        class="absolute top-1/2 left-10"
      >
        <button-slide :rotate="rotateClass" />
      </button>
      <vuejs-proj />
      <button
        @click="slideRight('projectList3')"
        class="absolute top-1/2 right-10"
      >
        <button-slide :rotate="rotateEmptyClass" />
      </button>
    </section>

    <section id="projectList3" class="project-list relative">
      <button
        @click="slideLeft('projectList2')"
        class="absolute top-1/2 left-10"
      >
        <button-slide :rotate="rotateClass" />
      </button>

      <nuxtjs-proj />

      <!-- <button
        @click="slideRight('projectList4')"
        class="absolute top-1/2 right-10"
      >
        <button-slide :rotate="rotateEmptyClass" />
      </button> -->
    </section>

    <!-- <section id="projectList4" class="project-list relative">
      <button
        @click="slideLeft('projectList3')"
        class="absolute top-1/2 left-10"
      >
        <button-slide :rotate="rotateClass" />
      </button>

      <h1 class="text-3xl">Project VanillaJS</h1>
      <button
        @click="slideRight('projectList5')"
        class="absolute top-1/2 right-10"
      >
        <button-slide :rotate="rotateEmptyClass" />
      </button>
    </section>
    <section id="projectList5" class="project-list relative">
      <button
        @click="slideLeft('projectList4')"
        class="absolute top-1/2 left-10"
      >
        <button-slide :rotate="rotateClass" />
      </button>

      <h1 class="text-3xl">UI/UX</h1>
    </section> -->
  </div>
</template>

<script>
import VuejsProj from "../components/ProjectComp/VuejsProjectComp.vue";
import NuxtjsProj from "../components/ProjectComp/NuxtjsProjectComp.vue";
import buttonSlide from "../components/buttonSlideComp.vue";
export default {
  components: {
    VuejsProj,
    buttonSlide,
    NuxtjsProj,
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

