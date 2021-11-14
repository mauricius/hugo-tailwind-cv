# Hugo Tailwind CV

**Hugo Tailwind CV** is a responsive, clean and simple [Hugo](https://gohugo.io/) theme for CV/Resume, which provides out of the box best practices like performance and SEO readiness. Using [hugo-best-practices](https://github.com/spech66/hugo-best-practices), [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) and the [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist).

[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)

**Features:**

+ TailwindCSS v3 responsive design
+ Light and Dark theme
+ Configurable theme settings (sidebar position, accent color) via `config.toml`
+ Multilingual and i18n support
+ Hugo internal templates (Open Graph, Schema, Twitter Cards)
+ Print CSS media
+ SEO best practices

## Installation

*Before starting, please make sure that you have [installed Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo) and
[created a new site](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site).

In your Hugo site `themes` directory, run:

```
git clone https://github.com/mauricius/hugo-tailwind-cv
```

Or, if you don't plan to make any significant changes, but want to track and update the theme, you can add it as a git submodule via the following command:

```
git submodule add https://github.com/mauricius/hugo-tailwind-cv
```

You can also get a zip of the latest version of the theme from the [home page](https://github.com/mauricius/hugo-tailwind-cv) and extract it to the `themes` folder.

Next, open `config.toml` in the base of the Hugo site and ensure the theme option is set to `hugo-tailwind-cv`:

```
theme = "hugo-tailwind-cv"
```

For more information read the official [setup guide](https://gohugo.io/themes/installing-and-using-themes/) of Hugo.

## Configuration

### config.toml example

```toml
baseurl = "/"
languageCode = "en-us"
theme = "hugo-tailwind-cv"

[Author]
    name = "John Doe"

[Languages.en]
        languageName = "EN"
        weight = 1

        [Languages.en.params]
            title = "John Doe CV"
            description = "John Doe Resume/CV"

    [Languages.it]
        languageName = "IT"
        weight = 2

        [Languages.it.params]
            title = "John Doe CV"
            description = "CV John Doe"

[Params]

    [Params.style]
        color = "indigo" # Tailwind accent color

    [Params.logo]
        image = "assets/images/logo.png" # Logo image. Path relative to "static"
        title = "Logo"

# Sidebar section

    [Params.sidebar]
        inverse = false # Moves sidebar on the right
    
    [Params.profile]
        name = "John Doe"
        tagline = "Full Stack Developer"
        image = "assets/images/avatar.jpg" # Profile image. Path relative to "static"

    [Params.personal] 

        [[Params.personal.list]]
        icon = "user-add"
        title = "01/01/2000" 

    [Params.contact]

        [[Params.contact.list]]
        icon = "mail"
        type = "Email"
        url = "mailto:john.doe@acme.com"
        title = "john.doe@acme.com"

        [[Params.contact.list]]
        icon = "phone"
        type = "Phone"
        url = "tel:555 555 555"
        title = "555 555 555"

        [[Params.contact.list]]
        icon = "globe"
        type = "Web Site"
        url = "https://google.com"
        title = "google.com"

        [[Params.contact.list]]
        icon = "pencil"
        type = "Blog"
        url = "https://dev.to"
        title = "dev.to"

        [[Params.contact.list]]
        icon = "linkedin"
        type = "LinkedIn"
        url = "https://linkedin.com/"
        title = "linkedin.com/"

        [[Params.contact.list]]
        icon = "github"
        type = "GitHub"
        url = "//github.com/mauricius"
        title = "github.com/mauricius"

        [[Params.contact.list]]
        icon = "twitter"
        type = "Twitter"
        url = "//twitter.com/"
        title = "@JohnDoe"

# Main body sections

    # Summary section
    [Params.summary]
        enable = true

    # Experiences section
    [Params.experiences]
        enable = true

    # Education section
    [Params.education]
        enable = true

    # Projects section
    [Params.projects]
        enable = true
       
    # Skills section
    [Params.skills]
        enable = true
```

For more information about all available standard configuration settings, you can read [All Hugo Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings).

## Credits

All icons by [Remixicon](https://remixicon.com/).

## Contributing

Did you found a bug or do you got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/mauricius/hugo-tailwind-cv/issues) to let me know. Or make directly a [pull request](https://github.com/mauricius/hugo-tailwind-cv/pulls).

## License

This theme is inspired by the [Hugo Orbit Theme](https://github.com/aerohub/hugo-orbit-theme), which itself is based on the wonderful [Orbit Theme](https://github.com/xriley/Orbit-Theme) designed by Xiaoying Riley.

The original template is released under the Creative Commons Attribution 3.0 License. Please keep the original attribution link when using for your own project. If you'd like to use the template without the attribution, you can check out other license options via template author's website: [themes.3rdwavemedia.com](https://themes.3rdwavemedia.com/).