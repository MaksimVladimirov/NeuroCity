class Slider {
  constructor(images) {
    this.images = images;
    this.index = 0;
    this.render();
  }

  render() {
    const slider = document.createElement("div");
    slider.classList.add("slider");
    slider.innerHTML = `
      <img src="${this.images[this.index]}" alt="Slider image">
        <div class="container-button">
          <span class="prev-btn"> </span>
          <span class="next-btn"> </span>
      </div>
    `;

    slider.querySelector(".prev-btn").addEventListener("click", this.prev.bind(this));
    slider.querySelector(".next-btn").addEventListener("click", this.next.bind(this));

    document.body.appendChild(slider);
  }

  prev() {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.update();
  }

  next() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.update();
  }

  update() {
    const img = document.querySelector(".slider img");
    img.src = this.images[this.index];
  }
}

const slider = new Slider([
  "https://picsum.photos/400/300",
  "https://picsum.photos/400/301",
  "https://picsum.photos/400/302",
  "https://picsum.photos/400/303",
]);
