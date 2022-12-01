<script>
    import BlogLayout from "../../BlogLayout.svelte";

   export let data;

   const pageDetails = data.pageDetails;
   const tag = data.tag;
   const posts = data.posts;

   const toTitleCase = ((text) => `${text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()}`);
   const title = toTitleCase(tag);
</script>

<main>
   <BlogLayout {title} description={pageDetails.data.description} {posts}/>
</main>