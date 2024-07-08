<template>
  <div id="main">
    <div class="star-group" v-for="(group, groupIndex) in starGroups" :key="groupIndex" :style="{ top: group.top + 'px', '--translateY': '-' + innerHeight + 'px' }">
      <div class="star big-star" v-for="(star, starIndex) in group.stars" :key="starIndex" :style="{ top: star.top + 'px', right: star.right + 'px' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starGroups: [],
      innerHeight: window.innerHeight, // Initialize innerHeight
    };
  },
  methods: {
    generateStars() {
      this.addStarGroup(20);
      this.addStarGroup(90);
      this.addStarGroup(180);
    },
    addStarGroup(col) {
      const group = {
        top: 0,
        stars: [],
      };

      group.top = this.returnRandomInt(this.innerHeight); // Use innerHeight for top

      for (let i = 0; i < col; i++) {
        group.stars.push({
          top: this.returnRandomInt(this.innerHeight), // Use innerHeight for star position
          right: this.returnRandomInt(window.innerWidth),
        });
      }

      this.starGroups.push(group);
    },
    returnRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    updateInnerHeight() {
      this.innerHeight = window.innerHeight;
    },
  },
  mounted() {
    this.generateStars();

    // Add a window resize event listener to update innerHeight when the window is resized
    window.addEventListener('resize', this.updateInnerHeight);
  },
  beforeUnmount() {
    // Remove the event listener to prevent memory leaks
    window.removeEventListener('resize', this.updateInnerHeight);
  },
};
</script>
