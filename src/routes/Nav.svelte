<script>
   import * as nav from '@data/nav.json';
   import { page } from '$app/stores';

</script>

<header>
   <nav
      class="navbar navbar-expand-lg position-fixed w-100 zindex-dropdown"
      id="mainnavigationBar"
   >
      <div class="container-fluid">
         <a class="navbar-brand" href="/">
            <img src="{ nav.logo }" alt="Nav-Logo" />
         </a>
         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span class="navbar-toggler-default">
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <line
                     x1="3.5"
                     y1="5.5"
                     x2="21.5"
                     y2="5.5"
                     stroke="#292D32"
                     stroke-width="3"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <line
                     x1="4.5"
                     y1="12.5"
                     x2="21.5"
                     y2="12.5"
                     stroke="#292D32"
                     stroke-width="3"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <line
                     x1="11.5"
                     y1="19.5"
                     x2="21.5"
                     y2="19.5"
                     stroke="#292D32"
                     stroke-width="3"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </span>
            <span class="navbar-toggler-toggled">
               <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M21.5 6.5L6.5 21.5"
                     stroke="#404152"
                     stroke-width="3"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M21.5 21.5L6.5 6.5"
                     stroke="#404152"
                     stroke-width="3"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-20 mb-lg-0">
               {#each nav.items as item}
               {@const url = item.link === "/" ? item.link : `${item.link}/`}
                  <li class="nav-item">
                     <a
                        class="nav-link"
                        class:active="{page.path === url}"
                        href="{ item.link }"
                        target="_self"
                        >{ item.text }</a
                     >
                  </li>
               {/each}
            </ul>
         </div>
         <div class="d-none d-lg-block">
            <div class="nav-item">
               <a href="{ nav.button.link }" class="btn btn-sm btn-links">{
                  nav.button.text
               }</a>
            </div>
         </div>
      </div>
   </nav>
</header>

<style lang="scss">
   .navbar {
   position: relative;
   display: flex;
   flex-wrap: wrap; // allow us to do the line break for collapsing content
   align-items: center;
   justify-content: space-between; // space out brand from logo
   padding-top: 1.5rem;
   padding-right: 5.4rem; // default: null
   padding-bottom: 1.5rem;
   padding-left: 5.4rem; // default: null
   background-color: none;
   z-index: 1000;
   transition: all 0.3s cubic-bezier(0.36, 0.03, 0, 0.91);

   @include media-breakpoint-down-xxl {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
   }
   @include media-breakpoint-only-lg {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      .btn-links {
         padding: 0.75rem 1rem;
      }
   }

   // Navbar button position fixing
   .nav-item {
      list-style: none;
   }
}
@include media-breakpoint-down-lg {
   .navbar {
      margin: $base-margin * 0;
      padding: 1.5rem;
      border-radius: 0;
      width: 100%;
      // width: calc(100% - 32px) !important;
      background: $color-white;
   }
}
@include media-breakpoint-down-sm {
   .navbar {
      padding: 1rem 0;
   }
}

.navbar-brand {
   padding-top: 0;
   padding-bottom: 0;
   margin-right: 0;
   font-size: 1.25rem;
   width: 155px;
}

@include media-breakpoint-down-sm {
   .navbar-brand {
      flex: 1;
   }
}

// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).

.navbar-nav {
   display: flex;
   padding-left: 0;
   margin-bottom: 0;
   list-style: none;
   justify-content: center;
   align-items: center;
   @include media-breakpoint-down-lg {
      margin-top: $base-margin * 4.5 !important;
      justify-content: start;
      align-items: start;
      // height: calc(100vh - 76px);
   }
   .nav-link {
      padding-right: $base-padding !important;
      padding-left: $base-padding !important;
      display: flex;
      align-items: center;
      font-weight: $regular-font-weight;
      font-size: $base-font-size * 1.1;
      line-height: 18px;
      z-index: 9;
      &.active {
         color: $color-primary;
      }
      &:hover {
         color: $color-primary;
      }
      @include media-breakpoint-only-lg {
         padding-right: 0.75rem !important;
         padding-left: 0.75rem !important;
      }
   }

   /* Dropdown Menu for Small screen */

   @include media-breakpoint-down-lg {
      .nav-link {
         margin-bottom: 1.9rem;
         padding: 0;
         font-size: $base-font-size * 1.6;
         position: relative;
         display: flex;
         justify-content: start;
         color: $color-text;
         font-weight: 600;
         font-family: $font-primary;
      }
   }
}

// Button for toggling the navbar when in its collapsed state
.navbar-toggler {
   background-color: transparent; // remove default button style
   border: none; // remove default button style
   &:focus {
      box-shadow: none;
   }
}

.navbar-toggler .navbar-toggler-default {
   display: -ms-flexbox;
   display: flex;
}
.navbar-toggler .navbar-toggler-toggled {
   display: none;
}
</style>