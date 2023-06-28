"use strict";

class ImageGallery {

  constructor(inject, images, focus_gallery = false) {
    this.index = 0;

    this.root = document.createElement("div");
    this.root.classList.add("gallery-root");
    document.getElementById(inject).appendChild(this.root);

    this.full = document.createElement("img");
    this.full.src = images[0][0];
    this.full.classList.add("img-full");

    this.full_root = document.createElement("div");
    this.full_root.classList.add("fullroot");
    this.full_root.appendChild(this.full);

    this.root.appendChild(this.full_root);

    this.thumbs = document.createElement("div");
    this.thumbs.classList.add("thumbs");
    this.root.appendChild(this.thumbs);

    for (let i = 0; i < images.length; i++) {
      let img = document.createElement("img");
      img.src = images[i][1];
      img.classList.add("thumb");
      img.dataset.fullSrc = images[i][0];
      img.dataset.index = i;
      img.onclick = this.onThumbClick.bind(this);
      this.thumbs.appendChild(img);
    }
    /*
    this.l_button = document.createElement("button");
    this.r_button = document.createElement("button");
    this.l_button.textContent = "<="
    this.r_button.textContent = "=>"
    this.l_button.onclick = this.onLeftClick.bind(this);
    this.r_button.onclick = this.onRightClick.bind(this);

    this.root.appendChild(this.l_button);
    this.root.appendChild(this.r_button);
    */
  }

  onLeftClick(evt) {
    let len = this.thumbs.childNodes.length;
    this.index = (this.index > 0) ? this.index - 1 : len - 1;
  }

  onRightClick(evt) {
    let len = this.thumbs.childNodes.length;
    this.index = (this.index < len - 2) ? this.index + 1 : 0;
  }

  onThumbClick(evt) {
    this.full.src = evt.target.getAttribute("data-full-src")
    this.index = parseInt(evt.target.getAttribute("data-index"));
  }
}


function on_active(evt) {
  console.log(evt)
}

function make_gallery(inject_elem, imgs) {
  let gal = new ImageGallery(inject_elem, imgs);
}