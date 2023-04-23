class SocialButtonElement extends HTMLElement {
    constructor() {
        super()
        
        // Body of element - Wrapper
        const container_SocialButton_Type = document.createElement('div')
        container_SocialButton_Type.classList.add("social-icon")
        container_SocialButton_Type.classList.add(this.type)

        // Body of element - Tooltip
        const container_Tooltip = document.createElement('div')
        container_Tooltip.classList.add("tooltip")
        container_Tooltip.textContent = this.tooltip

        container_SocialButton_Type.appendChild(container_Tooltip)

        // Body of element - Anchor
        const anchor_ToSite = document.createElement('a')
        anchor_ToSite.href = this.src
        anchor_ToSite.target = "_blank"
        anchor_ToSite.rel = "noopener noreferrer"
        
        // Body of element - Span
        const container_Text = document.createElement('span')

        // Body of element - Logo
        const container_Logo = document.createElement('i')
        container_Logo.classList.add("fab")

        var logoClass = "fa-" + this.type

        switch (this.type) {
            case "facebook":
                    logoClass += "-f"
                break;
            case "linkedin":
                logoClass += "-in"
                break;
            case "pinterest":
                logoClass += "-p"
                break;
            case "reddit":
                logoClass += "-alien"
                break;
            case "vimeo":
                logoClass += "-v"
                break;
            case "steam":
                logoClass += "-symbol"
                break;
        }

        container_Logo.classList.add(logoClass)

        container_Text.appendChild(container_Logo)
        
        anchor_ToSite.appendChild(container_Text)

        
        container_SocialButton_Type.appendChild(anchor_ToSite)


        this.appendChild(container_SocialButton_Type)
    }

    get tooltip() {
        return this.getAttribute("tooltip")
    }

    get type() {
        return this.getAttribute("type").toLowerCase()
    }

    get src() {
        return this.getAttribute("src")
    }
}

customElements.define("social-button", SocialButtonElement)