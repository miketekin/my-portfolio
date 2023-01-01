class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div>
                    <span style="font-size:large">Recent Posts:</span><br />
                    <a href="/blog/latest-post.html">Self-Hosted Site</a><br/>
                    <a href="/blog/server-setup.html">Server Setup</a><br />
                    <a href="/blog/contact-form.html">Serverless Contact Form</a><br />
                    <br />
                </div>
                <div>
                    <span style="font-size:large">Project Links:</span><br />
                        <a href="https://miketekin.dev">MikeTekin.dev</a><br/>
                        <a href="https://miketekin.gatsbyjs.io">Contact Form Example</a><br />
                        <br />
                </div>
                <div>
                    <span style="font-size:large">
                        Have any questions or <br />
                        suggestions for me?
                    </span>
                    <br />
                    <a href="https://www.miketekin.com/about">Send a quick message!</a> :)
                    <br />
                    <br />
                    <a href="https://www.linkedin.com/in/miketekin/" aria-label="linkedin profile">
                        <img src="/images/linkedin_white_44dp.png" class="social-links"></a>
                    <a href="https://github.com/miketekin" aria-label="github profile">
                        <img src="/images/github_white_44dp.png" class="social-links"></a>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);