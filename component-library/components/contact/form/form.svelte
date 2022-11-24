<script>
	export let address = {};
	export let phone = {};
	export let email = {};
	export let form = {};
</script>

<section class="contact">
	<div class="container">
	   <div class="row">
		  <div class="col-lg-5 me-auto order-2 order-lg-1">
			 <div class="contact-form-Information">
				<div class="address">
				   <h3>{address.heading}</h3>
				   <p>{address.address}</p>
				   <div class="item mb-4">
					  <h3>{phone.heading}</h3>
					  <a href="tel:{phone.cell}"
						 >{phone.cell}
						 <span>
							<img
							   src="{ phone.image }"
							   alt="{ phone.image_alt }"
							   loading="lazy" />
						 </span>
					  </a>
				   </div>
				   <div class="item">
					  <h3>{email.heading}</h3>
					  <a href="mailto:{email.email}"
						 >{email.email}
						 <span>
							<img
							   src="{ email.image }"
							   alt="{ email.image_alt }"
							   loading="lazy"
							/>
						 </span>
					  </a>
				   </div>
				</div>
			 </div>
		  </div>
		  <div class="col-lg-6 order-1 order-lg-2">
			 <div class="contact-form">
				<form method="post">
				   <h3>{form.heading}</h3>
				   <div class="col-md-12">
					  <label for="Name" class="label">{form.fullname.heading}</label>
					  <input
						 type="text"
						 class="form-control"
						 id="Name"
						 name="name"
						 placeholder="{form.fullname.placeholder}"
						 required=""
					  />
				   </div>
				   <div class="col-md-12">
					  <label for="Name" class="label">{form.phone_number.heading}</label>
					  <input
						 type="tel"
						 class="form-control"
						 id="Name"
						 name="phone-number"
						 placeholder="{form.phone_number.placeholder}"
						 required=""
					  />
				   </div>
				   <div class="col-md-12">
					  <label for="email" class="label">{form.email.heading}</label>
					  <input
						 type="email"
						 class="form-control mb-6"
						 id="email"
						 name="_replyto"
						 placeholder="{form.email.placeholder}"
						 required=""
					  />
				   </div>
				   <div class="col-12">
					  <label for="email" class="label">{form.message.heading}</label>
					  <textarea
						 class="form-control mb-4"
						 id="floatingTextarea2"
						 name="message"
						 placeholder="{form.message.placeholder}"
						 rows="8"
						 spellcheck="false"
					  ></textarea>
				   </div>
				   <input type="text" name="_gotcha" style="display: none" />
				   <div class="col-12">
					  <button type="submit" class="btn btn-primary btn-lg mt-7">
						 <span class="position-relative">{form.submit_button.text}</span>
					  </button>
				   </div>
				</form>
				<div class="effect">
				   <img src="/images/contact/effects.png" alt="effects" loading="lazy" />
				</div>
			 </div>
		  </div>
	   </div>
	</div>
 </section>

 <style lang="scss">
	.contact {
		padding-bottom: $base-padding * 9.4;
		@include media-breakpoint-down-xl {
		padding-bottom: $base-padding * 5;
		}
		&-form-Information {
		.address {
			padding-top: $base-padding * 5;
			@include media-breakpoint-down-md {
			padding-top: $base-padding * 3.1;
			}
			h3 {
			font-size: $base-font-size * 1.6;
			font-weight: 600;
			margin-bottom: $base-margin * 0.8;
			}
			p {
			font-size: $base-font-size * 1.25;
			color: $color-text-light;
			margin-bottom: $base-margin * 2.6;
			@include media-breakpoint-down-md {
				margin-bottom: $base-margin * 1.5;
			}
			}
			.item {
			background: $color-secondary-dark;
			border-radius: 10px;
			padding: $base-padding * 0.9 $base-padding * 1.25;
			h3 {
				font-size: $base-font-size * 0.8;
				font-weight: 300;
				color: $color-text-light;
				margin-bottom: $base-margin * 0.3;
			}
			a {
				display: flex;
				justify-content: space-between;
				font-size: $base-font-size * 1.25;
				color: $color-header;
				font-family: $font-secondary;
				font-weight: 700;
				span {
				margin-bottom: $base-margin * 0.7;
				}
			}
			}
		}
		}
		&-form {
		position: relative;
		z-index: 1;
		form {
			border: 1px solid $color-secondary-dark;
			box-shadow: 0px 0px 80px rgba(150, 0, 0, 0.06);
			border-radius: 20px;
			z-index: 1;
			margin-top: -$base-margin * 28.2;
			padding: $base-padding * 4.2 $base-padding * 3.3 $base-padding * 3.1;
			background: $color-white;
			@include media-breakpoint-down-xl {
			margin-top: -$base-margin * 22;
			}
			@include media-breakpoint-down-lg {
			margin-top: -$base-margin * 17;
			}
			@include media-breakpoint-down-md {
			margin-top: -$base-margin * 64;
			padding: $base-padding * 2.5 $base-padding * 1.25 $base-padding * 1.25;
			}
			@include media-breakpoint-down-sm {
			margin-top: -$base-margin * 63;
			}
			h3 {
			font-size: $base-font-size * 1.9;
			margin-bottom: $base-margin * 3;
			}
			.label {
			margin-bottom: $base-margin * 0.8;
			font-weight: 600;
			color: $color-text;
			}
			.form-control {
			padding: 19px 20px;
			font-size: $base-font-size * 0.9;
			font-weight: 600;
			color: $color-header;
			background: $color-secondary-dark;
			border: 1px solid $color-text-dark;
			border-radius: 10px;
			margin-bottom: $base-margin * 1.9;

			&:focus {
				background: $color-header-dark;
				border: 1px solid $color-anchor;
				outline: 0;
				box-shadow: none;
			}
			}
			textarea {
			resize: none;
			}
			::placeholder {
			color: $color-cyan;
			}
		}
		.effect {
			position: absolute;
			top: -10%;
			left: -14%;
			z-index: -1;
			img {
			max-width: 100%;
			}
		}
		}
	}
</style>