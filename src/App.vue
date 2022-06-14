<template>
  <div
    id="app"
    class="select-none h-screen overflow-y-scroll snap-y snap-mandatory"
  >
    <section class="section bg-blue-400 relative">
      <page-one />
      <button
        @click="scrollDown('projectSection')"
        class="absolute bottom-10 animate-bounce"
      >
        scrollDown
      </button>
    </section>
    <section id="projectSection" class="section bg-gray-500 relative">
      <div class="flex h-screen overflow-x-scroll snap-x snap-mandatory">
        <section id="projectList1" class="project-list bg-yellow-500">
          <h1 class="text-3xl">My Project</h1>
          <button @click="slideRight('projectList2')">></button>
        </section>
        <section id="projectList2" class="project-list bg-purple-300">
          <button @click="slideLeft('projectList1')">back</button>

          <h1 class="text-3xl">Project VueJS</h1>
          <button @click="slideRight('projectList3')">></button>
        </section>
        <section id="projectList3" class="project-list bg-purple-400">
          <button @click="slideLeft('projectList2')">back</button>

          <h1 class="text-3xl">Project Nuxt</h1>
          <button @click="slideRight('projectList4')">></button>
        </section>
        <section id="projectList4" class="project-list bg-purple-500">
          <button @click="slideLeft('projectList3')">back</button>

          <h1 class="text-3xl">Project VanillaJS</h1>
          <button @click="slideRight('projectList5')">></button>
        </section>
        <section id="projectList5" class="project-list bg-purple-500">
          <button @click="slideLeft('projectList4')">back</button>

          <h1 class="text-3xl">UI/UX</h1>
        </section>
      </div>
      <button
        @click="scrollDown('pageThree')"
        class="absolute bottom-10 animate-bounce"
      >
        scrollDown
      </button>
    </section>
    <section class="section bg-lime-500" id="pageThree">
      <h1 class="text-3xl">Page Three</h1>
    </section>
  </div>
</template>

<script>
import PageOne from "./components/PageOne/PageOneComp.vue";
export default {
  name: "App",
  components: {
    PageOne,
  },
  data() {
    return {
      pressed: false,
    };
  },
  methods: {
    slideRight(idListProject) {
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
    scrollDown(idListProject) {
      let projectSection = document.getElementById(idListProject);
      projectSection.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
</style>
