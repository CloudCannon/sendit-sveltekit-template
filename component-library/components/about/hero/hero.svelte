<script>
  // import markdownify from '$lib/utility.js';

  export let title;
  export let description;
  export let hero_images;
  export let link;
</script>

<section class="about-hero-two">
  <div class="container">
    <div class="row">
      <div class="col-xl-5 col-lg-10 mx-auto">
        <div class="about-hero-two-content position-relative">
          <h2>{title}</h2>
          <!-- <p class="mb-20 w-xxl-80">{@html markdownify(description)}</p> -->
          <div class="">
            <a href="{link.url}" class="btn btn-primary btn-lg"> {link.text} </a>
          </div>
        </div>
      </div>
      <div class="col-xl-7 col-lg-12">
        <div class="about-hero-two-banner">
          {#each hero_images as image}
            <div class="rounded-box"
              class:image-one="{image.placer === "back_top_right"}"
              class:image-two="{image.placer === "front_bottom"}"
              class:image-three="{image.placer === "back_top_left"}">
              <img src="{image.image_path}" alt="aboutfeature" loading="lazy"/>
            </div>
          {/each}
          <div class="pattern">
            <img src="/images/about/patterns-two.png" alt="patterns" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
