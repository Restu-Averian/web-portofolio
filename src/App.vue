<template>
  <div
    id="app"
    class="
      select-none
      relative
      h-screen
      overflow-y-scroll
      snap-y snap-mandatory
    "
  >
    <div
      class="
        fixed
        z-10
        left-1/2
        -translate-x-1/2 -translate-y-1/2
        bottom-0
        text-primary
        flex
        space-x-8
      "
    >
      <i
        class="cursor-pointer bx bxl-github bx-md"
        @click="changeWeb('https://github.com/Restu-Averian')"
      ></i>
      <i
        class="cursor-pointer bx bxl-linkedin-square bx-md"
        @click="changeWeb('https://www.linkedin.com/in/restu-averian-putra/')"
      ></i>
    </div>
    <confirm-leave
      :isChangeWeb="isChangeWeb"
      @closeModalConfidence="closeModalConfidence"
      @leaveWeb="leaveWeb"
    />
    <section class="section bg-introduce relative">
      <introducing />
      <button
        @click="scrollDown('skillsSection')"
        class="
          absolute
          bottom-10
          left-0
          flex
          items-center
          space-y-20
          text-white
          flex-col
        "
      >
        <div class="animate-bounce">
          <div class="transform -rotate-90">
            <p class="">Click or Scroll Down</p>
          </div>
        </div>

        <i class="bx bx-down-arrow-alt bx-sm"></i>
      </button>
    </section>

    <section class="section bg-skills relative" id="skillsSection">
      <skills />
      <button
        @click="scrollDown('projectSection')"
        class="
          absolute
          bottom-10
          left-0
          flex
          items-center
          space-y-20
          text-white
          flex-col
        "
      >
        <div class="animate-bounce">
          <div class="transform -rotate-90">
            <p class="">Click or Scroll Down</p>
          </div>
        </div>
        <i class="bx bx-down-arrow-alt bx-sm"></i>
      </button>
    </section>

    <section id="projectSection" class="section bg-projects relative">
      <projects />
      <button
        @click="scrollDown('certificateSection')"
        class="
          absolute
          bottom-10
          flex
          items-center
          space-y-20
          text-white
          left-0
          flex-col
        "
      >
        <div class="animate-bounce">
          <div class="transform -rotate-90">
            <p class="">Click or Scroll Down</p>
          </div>
        </div>
        <i class="bx bx-down-arrow-alt bx-sm"></i>
      </button>
    </section>

    <section class="section bg-certificates relative" id="certificateSection">
      <certificates />
      <button
        @click="scrollDown('projectSection')"
        class="
          absolute
          top-10
          flex
          items-center
          space-y-20
          text-white
          left-0
          flex-col
        "
      >
        <i class="bx bx-down-arrow-alt bx-sm rotate-180"></i>

        <div class="animate-bounce">
          <div class="transform rotate-90">
            <p class="">Click or Scroll Up</p>
          </div>
        </div>
      </button>
    </section>
  </div>
</template>

<script>
import Introducing from "./views/IntroducingViews.vue";
import Skills from "./views/SkillsViews.vue";
import Certificates from "./views/CertificatesViews.vue";
import Projects from "./views/ProjectsViews.vue";
import ConfirmLeave from "./components/ConfirmLeaveWebComp.vue";

export default {
  name: "App",
  components: {
    Introducing,
    Projects,
    Skills,
    ConfirmLeave,
    Certificates,
  },
  data() {
    return {
      pressed: false,
      isChangeWeb: true,
      linkLeaveWeb: "",
    };
  },
  methods: {
    changeWeb(link) {
      this.isChangeWeb = false;
      this.linkLeaveWeb = link;
    },
    closeModalConfidence() {
      this.isChangeWeb = true;
    },
    leaveWeb() {
      window.open(this.linkLeaveWeb, "_blank");
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
@font-face {
  font-family: "Avocados";
  src: url("./font/Avocados.ttf");
}
</style>