class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>MT</h1>
                <nav>
                    <a href="/blog/latest-post.html">Latest Post</a>
                    <a href="/index.html">About</a>
                    <div class="dropdown">
                        <div class="blog-button">
                            <button name="Blog" class="dropbtn">Blog</button>
                            <span class="arrow down"></span>
                        </div>
                        <div class="dropdown-content">
                            <span>November</span>
                            <a href="/blog/contact-form.html" class="dropdown-item-border">Contact Form</a>
                            <a href="/blog/server-setup.html" class="dropdown-item-border">Home Server Setup</a>
                            <span>December</span>
                            <a href="/blog/latest-post.html" class="dropdown-item-border">Site Development</a>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('header-component', Header);

// Alternative dropdown menu
{/* <div class="dropdown">
<button name="Blog" class="dropbtn">Blog</button>
<span class="arrow down"></span>
<div class="dropdown-content">
    <button name="November" class="dropbtn">November</button>
    <span class="arrow down"></span>
    <div class="dropdown-content">
        <a href="">-5th</a>
        <a href="">-8th</a>
        <a href="">-Contact Form</a>
        <a href="">-Home Server Setup</a>
    </div>
    <button name="Blog" class="dropbtn">December</button>
    <span class="arrow down"></span>
    <div class="dropdown-content">
        <a href="">-Site Development</a>
    </div>
</div>
</div> */}
{/* <button name="Blog">
<div>
    <span class="arrow down">Blog</span>
</div>
</button> */}