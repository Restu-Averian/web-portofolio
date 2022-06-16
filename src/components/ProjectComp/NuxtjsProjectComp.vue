<template>
  <div class="flex flex-col items-center p-10">
    <h1 class="text-4xl font-Avocados text-primary">Vue.js</h1>
    <div class="p-24">
      <div class="grid grid-cols-3 gap-3">
        <div
          class="group overflow-hidden"
          v-for="project in projectList"
          :key="project.idproject"
        >
          <div
            class="
              transition-all
              opacity-60
              duration-300
              group-hover:opacity-100
              overflow-hidden
              relative
            "
          >
            <img
              @click="expandItems(project.idproject)"
              :src="project.photo"
              alt=""
              class="
                cursor-pointer
                group-hover:scale-125
                transition-all
                duration-300
                -z-10
                opacity-75
              "
            />
          </div>
          <div class="bg-[#4D5C60] px-4 py-4 rounded-b-xl">
            <p class="text-xl text-primary mb-3 font-Avocados">
              {{ project.name }}
            </p>
            <div
              class="max-h-0 group-hover:max-h-72 duration-300 transition-all"
            >
              <button
                @click="expandItems(project.idproject)"
                class="
                  px-4
                  scale-0
                  group-hover:scale-100
                  transition-all
                  duration-300
                  py-2
                  border border-primary
                  text-primary
                "
              >
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="isHidden ? 'scale-0' : 'scale-100'"
        class="
          fixed
          flex
          p-28
          justify-center
          items-center
          transition-all
          duration-300
          inset-0
          bg-black bg-opacity-50
          z-10
        "
      >
        <div
          :class="isHidden ? 'scale-0 ' : 'scale-100 delay-300'"
          class="bg-certificates p-5 transition-all duration-300"
        >
          <div class="mb-5 flex justify-between items-center">
            <h1 class="text-white text-3xl font-Avocados">
              {{ infoProject.name }}
            </h1>
            <button
              class="rounded-full p-2 border-2 border-primary"
              @click="isHidden = true"
            >
              <i class="bx bx-x text-primary bx-sm"></i>
            </button>
          </div>

          <div class="w-[1050px] h-[480px] overflow-hidden">
            <iframe
              class="w-[1080px] h-[480px]"
              :src="infoProject.linkWeb"
            ></iframe>
          </div>

          <div class="mt-5 flex justify-between items-center">
            <div class="flex space-x-4 flex-wrap">
              <div
                class=""
                v-for="(tools, index) in infoProject.tools"
                :key="index"
              >
                <p
                  class="
                    text-xl
                    font-Avocados
                    rounded-full
                    px-4
                    py-1
                    text-primary
                    bg-[#44666F]
                  "
                >
                  {{ tools }}
                </p>
              </div>
            </div>
            <div class="flex space-x-4">
              <i
                @click="changeWeb(infoProject.linkWeb)"
                class="cursor-pointer bx bx-link-external bx-sm text-primary"
              ></i>
              <i
                @click="changeWeb(infoProject.linkGithub)"
                class="cursor-pointer bx bxl-github bx-sm text-primary"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <confirm-leave
        :isChangeWeb="isChangeWeb"
        @closeModalConfidence="closeModalConfidence"
        @leaveWeb="leaveWeb"
      />
    </div>
  </div>
</template>

<script>
import ConfirmLeave from "../ConfirmLeaveWebComp.vue";

export default {
  components: {
    ConfirmLeave,
  },
  data() {
    return {
      infoProject: {
        name: "",
        linkWeb: "",
        linkGithub: "",
        tools: "",
      },
      isHidden: true,
      isChangeWeb: true,
      confidenceChangeWeb: true,
      linkLeaveWeb: "",
      projectList: [
        {
          idproject: 0,
          name: "News App",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655378730/Project-Screenshot/Nuxt/news_app-nuxtjs_ccqdh2.png",
          linkWeb: "https://nuxt-news-app.netlify.app/",
          linkGithub: "https://github.com/Restu-Averian/nuxt-news-app",
          tools: ["Vue.js", "Axios", "Nuxt.js", "Vuex", "Vue-router", "PWA"],
        },
      ],
    };
  },

  methods: {
    closeModalConfidence() {
      this.isChangeWeb = true;
    },
    changeWeb(link) {
      this.isChangeWeb = false;
      this.linkLeaveWeb = link;
    },
    leaveWeb() {
      window.open(this.linkLeaveWeb, "_blank");
    },

    expandItems(index) {
      let hasil = this.projectList.filter((project) => {
        return project.idproject == index;
      });
      this.isHidden = false;
      this.infoProject.name = hasil[0].name;
      this.infoProject.linkWeb = hasil[0].linkWeb;
      this.infoProject.linkGithub = hasil[0].linkGithub;
      this.infoProject.tools = hasil[0].tools;
    },
  },
};
</script>

<style>
</style>