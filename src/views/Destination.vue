<template>
  <div id="destination" class="container-fluid">
    <h1 class="text-uppercase mb-5">01 Pick your destination</h1>
    <div class="row">
      <div class="col image">
        <img
          :src="currentDestination.images.png"
          :alt="currentDestination.name"
          class="img-fluid mb-4"
        />
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-tabs mb-4">
          <li class="nav-item" v-for="dest in destinations" :key="dest.name">
            <a
              class="nav-link"
              :class="{ active: dest.name === currentDestination.name }"
              href="#"
              @click.prevent="setDestination(dest)"
            >
              {{ dest.name }}
            </a>
          </li>
        </ul>
        <h2 class="display-2 text-white mb-4">{{ currentDestination.name }}</h2>
        <p class="mb-5">{{ currentDestination.description }}</p>
        <div class="row">
          <div class="col-6">
            <h3 class="text-uppercase mb-2">Avg. distance</h3>
            <p class="fs-4 text-white">{{ currentDestination.distance }}</p>
          </div>
          <div class="col-6">
            <h3 class="text-uppercase mb-2">Est. travel time</h3>
            <p class="fs-4 text-white">{{ currentDestination.travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import destinationData from "@/assets/data.json";

export default {
  name: "Destination",
  data() {
    return {
      destinations: [],
      currentDestination: {},
    };
  },
  created() {
    try {
      this.destinations = destinationData.destinations;
      this.currentDestination = this.destinations[0];
    } catch (error) {
      console.error("Error loading destination data:", error);
    }
  },
  methods: {
    setDestination(destination) {
      this.currentDestination = destination;
    },
  },
};
</script>

<style scoped>
#destination {
  background-image: url("@/assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 600px;
  color: white;
  padding-left: 100px;
}
#destination img {
  height: 400px;
  width: 400px;
}
#destination h1 {
  padding-top: 10px;
  font-size: 28px;
  color: #a6aac1;
}
.nav-link {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-tablet.jpg");
    height: 100%;
  }
}

@media (max-width: 600px) {
  #destination {
    background-image: url("@/assets/destination/background-destination-mobile.jpg");
    height: 900px;
    padding-left: 5px;
  }
  #destination img {
    height: 300px;
    width: 300px;
  }
  .image {
    padding-left: 40px;
  }
  .nav-link {
    font-size: 14px;
    padding: 0 0.4rem;
  }
  .col-lg-6 > p {
    font-size: 15px;
  }
  .col-lg-6 > h3 {
    font-size: 16px;
  }
  #destination h1 {
    font-size: 18px;
  }
}
</style>
