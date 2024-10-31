<template>
  <div id="crew" class="container-fluid">
    <h1 class="text-uppercase mb-1">02 Meet your crew</h1>
    <div class="row">
      <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0 mt-5">
        <img
          :src="currentCrewMember.images.png"
          :alt="currentCrewMember.name"
          class="img-fluid"
        />
      </div>
      <div
        class="col-lg-6 order-lg-1 d-flex flex-column justify-content-center"
      >
        <h3 class="text-uppercase mb-2 opacity-50 mt-5">
          {{ currentCrewMember.role }}
        </h3>
        <h2 class="display-4 text-white mb-4">{{ currentCrewMember.name }}</h2>
        <p class="bio">{{ currentCrewMember.bio }}</p>
        <div class=" btnDiv">
          <button
            v-for="member in crew"
            :key="member.name"
            @click="setCrewMember(member)"
            class="btn btn-outline-light rounded-circle mx-2 mt-5"
            :class="{ active: member.name === currentCrewMember.name }"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crewData from "@/assets/data.json";

export default {
  name: "Crew",
  data() {
    return {
      crew: [],
      currentCrewMember: {},
    };
  },
  created() {
    try {
      this.crew = crewData.crew;
      this.currentCrewMember = this.crew[0];
    } catch (error) {
      console.error("Error loading crew data:", error);
    }
  },
  methods: {
    setCrewMember(member) {
      this.currentCrewMember = member;
    },
  },
};
</script>

<style scoped>
#crew {
  background-image: url("@/assets/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  color: white;
  padding-left: 100px;
}
#crew img {
  width: 400px;
  height: 400px;
}
.bio {
  height: 100px;
}
#crew h1 {
  padding-top: 10px;
  font-size: 28px;
  color: #a6aac1;
}
.btn {
  height: 30px;
}
@media (max-width: 768px) {
  #crew {
    background-image: url("@/assets/crew/background-crew-tablet.jpg");
    height: 100%;
  }
}

@media (max-width: 600px) {
  #crew {
    background-image: url("@/assets/crew/background-crew-mobile.jpg");
    height: 900px;
    padding-left:10px;
  }
  #crew h1 {
    font-size: 18px;
  }
  .btnDiv {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  .row {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
