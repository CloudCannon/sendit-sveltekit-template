<script>
   export let data;

   const toTitleCase = ((text) => `${text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()}`);

   const pageDetails = data.pageDetails;
   const tag = data.tag;
   const posts = data.posts;
</script>

<main>
   <section class="blog-hero pt-xl-22 pt-sm-20 pt-18 pb-xxl-25 pb-xl-23 pb-22 position-relative">
      <div class="container">
         <div class="row">
            <div class="col-xl-8 col-lg-10 mx-auto">
               <div class="blog-hero-content">
                  <h1 class="blog-hero-title">{toTitleCase(tag)}</h1>
                  <p>{pageDetails.data.description}</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="blog @@padding @@blog-two pb-10 pb-xl-15">
      <div class="container">
         <div class="row">
         {#each posts as post}
				{@const firstTwoTags = post.data.tags.slice(0, 2)}
            <div class="col-lg-4 col-md-6">
               <article class="blog-post">
                  <div class="blog-post-thumb">
                     <a href="{`/blog/${post.slug}`}" target="_self">
                        <img src="{post.data.thumbImg.image}" alt="{post.data.thumbImg.image_alt}" loading="lazy" />
                     </a>
                  </div>
                  <div class="blog-post-content">
                     <div class="blog-post-tag @@category">
                     {#each firstTwoTags as postTag}
                        <a href="/tags/{ postTag }/" target="_self">{ postTag }</a>
                     {/each}
                     </div>
                     <div class="blog-post-title">
                        <a href="{`/blog/${post.slug}`}" class="" target="_self">{post.data.title}</a>
                     </div>
                  </div>
               </article>
            </div>
         {/each}
         </div>
      </div>
   </section>
</main>