<template>
  <div id="technology" class="container-fluid">
    <h1 class="text-uppercase mb-5">03 Space launch 101</h1>
    <div class="row">
      <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0">
        <img
          :src="currentTechnology.images.portrait"
          :alt="currentTechnology.name"
          class="img-fluid"
        />
      </div>
      <div
        class="col-lg-6 order-lg-1 d-flex justify-content-center mt-5 floss"
      >
        <div class="my-5 btnDiv mx-5">
          <button
            v-for="(tech, index) in technology"
            :key="tech.name"
            @click="setTechnology(tech)"
            class="btn btn-outline-light rounded-circle me-3"
            :class="{ active: tech.name === currentTechnology.name }"
          >
            {{ index + 1 }}
          </button>
        </div>
        <div class="content">
          <h3 class="text-uppercase mb-2">The terminology...</h3>
          <h2 class="display-4 text-white mb-4">
            {{ currentTechnology.name }}
          </h2>
          <p>{{ currentTechnology.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import technologyData from "@/assets/data.json";

export default {
  name: "Technology",
  data() {
    return {
      technology: [],
      currentTechnology: {},
    };
  },
  created() {
     try {
      this.technology = technologyData.technology;
      this.currentTechnology = this.technology[0];
    } catch (error) {
      console.error("Error loading technology data:", error);
    }
  },
  methods: {
    setTechnology(tech) {
      this.currentTechnology = tech;
    },
  },
};
</script>

<style scoped>
#technology {
  background-image: url("/images/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  color: white;
  padding-left: 100px;
}
#technology img {
  height: 400px;
  width: 400px;
}
#technology h1 {
  padding-top: 10px;
  font-size: 28px;
  color: #a6aac1;
}

.btnDiv {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-bottom: 20px;
  height: 70px;
  width: 70px;
}

@media (max-width: 768px) {
  #technology {
    background-image: url("/images/technology/background-technology-tablet.jpg");
    height: 100%;
  }
}

@media (max-width: 600px) {
  #technology {
    background-image: url("/images/technology/background-technology-mobile.jpg");
    height: 1000px;
    padding:10px;
  }
  
  #technology h1 {
    font-size: 18px;
  }

  .btnDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  }

  .btn {
    margin-top: -100px;
    height: 50px;
    width: 50px;
  }

  .floss {
    flex-direction: column;    
  }

  .content {
    margin-top: -70px;
  }

  .content h2, h3, p{
    display: flex;
    justify-content: center;
  }
}
</style>
