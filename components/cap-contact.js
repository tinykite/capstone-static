import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-decorated-header.js";
import "./cap-social-group.js";
import "./cap-email-signup.js";

export class CapContact extends LitElement {
	static properties = {};

	static styles = [
		baseStyles,
		css`
			.contact {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-gap: var(--spacing-350);
				justify-content: center;
				justify-items: center;
				background: var(--color-yellow);
				color: var(--color-gray-600);
				padding-block: var(--spacing-350);
				padding-inline: var(--spacing-550);
				font-family: var(--font-sans-text);

				@media (min-width: 65rem) {
					padding-inline: calc(var(--spacing-500) * 2);
				}
			}

			.contact__socialText {
				font-size: var(--font-size-100);
				font-family: var(--font-serif);
				margin-block: var(--spacing-200);
			}

			.contact__supplementalText {
				font-size: var(--font-size-100);
				font-family: var(--font-sans);
			}
		`,
	];

	constructor() {
		super();
	}
	render() {
		return html`
			<div class="contact">
				<div class="contact__cta">
					<cap-decorated-header
						icon="none"
						theme="black"
						heading="Contact"
					></cap-decorated-header>

					<p class="contact__socialText">
						Follow our progress, contribute code, or just say hi!
					</p>

					<cap-social-group theme="light"></cap-social-group>
				</div>

				<div class="contact__main">
					<cap-email-signup></cap-email-signup>
				</div>

				<p class="contact__supplementalText">
					We promise we won't spam you, though we might invite you to a
					hackathon.
				</p>
			</div>
		`;
	}
}

customElements.define("cap-contact", CapContact);