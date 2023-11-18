---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: About
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: chrisdonahue
  - block: markdown
    id: news
    content:
      title: News
      text: |-
        - 📜 (Nov 2023) Work presented at [HCMIR Workshop](https://ceur-ws.org/Vol-3528/paper3.pdf) by [Michael Feffer](https://acmilab.org/people/michael-feffer/).
        - 📜 (Nov 2023) New [preprint on controllable music gen](https://arxiv.org/abs/2311.07069) led by [Shih-Lun Wu](https://slseanwu.github.io/) (applying to PhD positions!)
        - 🗞️ (Oct 2023) Interviewed for [Pitchfork article about MusicLM](https://pitchfork.com/features/overtones/google-text-to-music)
        - 🎤 (Oct 2023) Invited talk at [Stanford HAI Conference](https://hai.stanford.edu/events/new-horizons-generative-ai-science-creativity-and-society) ([recording](https://www.youtube.com/watch?v=RlSkLc38hL4&t=10457s), [slides](https://docs.google.com/presentation/d/1pAe-AB2f6g2dqM0vCj3ktIcrqYv_rXtR9YlwaHAWQhI/edit))
        - 🧑‍🏫 (Oct 2023) Guest lecture for [CMU LLM Course](https://cmu-llms.org/) ([slides](https://docs.google.com/presentation/d/1AS10aoPDCNjDAaHFYi2yHDm41HF7NyP5r5Vvr7nzp5k/edit))
        - 👋 (Oct 2023) New PhD students: Irmak Bukey and Wayne Chi
        - 🧑‍🏫 (Sep 2023) Started as Assistant Professor at CMU
        - ❤️ (Jul 2023) **Got married to [Maggie Henderson](https://www.maggie-henderson.com/)!**
        - 📜 (Jun 2023) New preprint led by [John Thickstun](https://johnthickstun.com/): [Anticipatory Music Transformer](https://arxiv.org/abs/2306.08620)
        - 🎤 (Apr 2023) Invited talk at CMU Music Technology Seminar ([slides](https://docs.google.com/presentation/d/19tz0oUQf9fD1VRKFG_NPJWHQZ-OXZzp889bgLxKyu_s/edit#slide=id.p))
        - 🧑‍🏫 (Apr 2023) Guest lecture for CMU Electronic Music course ([slides](https://docs.google.com/presentation/d/1nGHcqDFx6ahhTzOSjAFpmn_1symIIoJ1pN4zaMw2uEk/edit#slide=id.p))
        - 🎤 (Feb 2023) Invited talk at AAAI Workshop on Creative AI Generation ([slides](https://docs.google.com/presentation/d/1DO4BcFu64abcS-l5F34fe_4g2U4AkZtpUnY8ifNLzN8/edit#slide=id.p))
        - 📜 (Jan 2023) New preprint (first author): [SingSong](https://arxiv.org/abs/2301.12662)
        - 📜 (Dec 2022) Presentation at [ISMIR Late Breaking Demo](https://ismir2022program.ismir.net/lbd_399.html) led by [Michael Feffer](https://acmilab.org/people/michael-feffer/)
        - 📢 (Nov 2022) [Announced](https://twitter.com/chrisdonahuey/status/1589620034887786496) job search outcome: research scientist at Magenta, faculty at CMU (F23)
    design:
      columns: '2'
  - block: markdown
    id: group
    content:
      title: G-CLef
      subtitle: |-
        {{< figure src="gclef-logo.png" lightbox="false" max_width="250px" theme="light" alt="Our group's logo, a mashup of a treble clef (G-Clef) and CMU's mascot Scotty created with DALL-E 2." >}}
      text: |-
        I lead the **Generative Creativity Lab** (G-CLef) at CMU. Our research focuses on the development and deployment of generative AI towards augmenting human creativity. We primarily focus on musical creativity as an application domain but also explore other areas such as gaming.

        ## PhD students
        {{< figure class="student-avi" src="group/irmak.jpeg" lightbox="false" max_width="200px" caption="<b>Irmak Bukey</b> <br/>CSD PhD student" >}}
        {{< figure class="student-avi" src="group/wayne.jpeg" lightbox="false" max_width="200px" caption="<b>Wayne Chi</b> <br/> CSD PhD student" >}}

        ## Affiliates
        {{< figure class="student-avi" src="group/shih-lun.jpeg" lightbox="false" max_width="200px" caption="<b>Shih-Lun Wu</b> <br/> LTI Masters student" link="https://slseanwu.github.io/" >}}
        {{< figure class="student-avi" src="group/michael.jpeg" lightbox="false" max_width="200px" caption="<b>Michael Feffer</b> <br/> S3D PhD student" link="https://mfeffer.github.io">}}
        
    design:
      columns: '2'

  # - block: collection
  #   id: featured
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     columns: '2'
  #     view: card

  - block: collection
    id: papers
    content:
      title: Recent Papers
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation

  # - block: hero
  #   demo: true # Only display this section in the Wowchemy demo site
  #   content:
  #     title: Chris Donahue
  #     image:
  #       filename: hero-academic.png
  #     cta:
  #       label: '**Get Started**'
  #       url: https://wowchemy.com/templates/
  #     cta_alt:
  #       label: Ask a question
  #       url: https://discord.gg/z8wNYzb
  #     cta_note:
  #       label: >-
  #         <div style="text-shadow: none;"><a class="github-button" href="https://github.com/wowchemy/wowchemy-hugo-themes" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Wowchemy Website Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/wowchemy/starter-hugo-academic" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div>
  #     text: |-
  #       **Generated by Wowchemy - the FREE, Hugo-based open source website builder trusted by 500,000+ sites.**

  #       **Easily build anything with blocks - no-code required!**

  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.

  #       <!--Custom spacing-->
  #       <div class="mb-3"></div>
  #       <!--GitHub Button JS-->
  #       <script async defer src="https://buttons.github.io/buttons.js"></script>
  #   design:
  #     background:
  #       gradient_end: '#1976d2'
  #       gradient_start: '#004ba0'
  #       text_color_light: true


  # - block: skills
  #   content:
  #     title: Skills
  #     text: ''
  #     # Choose a user to display skills from (a folder name within `content/authors/`)
  #     username: admin
  #   design:
  #     columns: '1'

  # - block: experience
  #   content:
  #     title: Experience
  #     # Date format for experience
  #     #   Refer to https://wowchemy.com/docs/customization/#date-format
  #     date_format: Jan 2006
  #     # Experiences.
  #     #   Add/remove as many `experience` items below as you like.
  #     #   Required fields are `title`, `company`, and `date_start`.
  #     #   Leave `date_end` empty if it's your current employer.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - title: CEO
  #         company: GenCoin
  #         company_url: ''
  #         company_logo: org-gc
  #         location: California
  #         date_start: '2021-01-01'
  #         date_end: ''
  #         description: |2-
  #             Responsibilities include:

  #             * Analysing
  #             * Modelling
  #             * Deploying
  #       - title: Professor of Semiconductor Physics
  #         company: University X
  #         company_url: ''
  #         company_logo: org-x
  #         location: California
  #         date_start: '2016-01-01'
  #         date_end: '2020-12-31'
  #         description: Taught electronic engineering and researched semiconductor physics.
  #   design:
  #     columns: '2'

  # - block: accomplishments
  #   content:
  #     # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
  #     title: 'Accomplish&shy;ments'
  #     subtitle:
  #     # Date format: https://wowchemy.com/docs/customization/#date-format
  #     date_format: Jan 2006
  #     # Accomplishments.
  #     #   Add/remove as many `item` blocks below as you like.
  #     #   `title`, `organization`, and `date_start` are the required parameters.
  #     #   Leave other parameters empty if not required.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - certificate_url: https://www.coursera.org
  #         date_end: ''
  #         date_start: '2021-01-25'
  #         description: ''
  #         icon: coursera
  #         organization: Coursera
  #         organization_url: https://www.coursera.org
  #         title: Neural Networks and Deep Learning
  #         url: ''
  #       - certificate_url: https://www.edx.org
  #         date_end: ''
  #         date_start: '2021-01-01'
  #         description: Formulated informed blockchain models, hypotheses, and use cases.
  #         icon: edx
  #         organization: edX
  #         organization_url: https://www.edx.org
  #         title: Blockchain Fundamentals
  #         url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
  #       - certificate_url: https://www.datacamp.com
  #         date_end: '2020-12-21'
  #         date_start: '2020-07-01'
  #         description: ''
  #         icon: datacamp
  #         organization: DataCamp
  #         organization_url: https://www.datacamp.com
  #         title: 'Object-Oriented Programming in R'
  #         url: ''
  #   design:
  #     columns: '2'

  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'

  # - block: portfolio
  #   id: projects
  #   content:
  #     title: Projects
  #     filters:
  #       folders:
  #         - project
  #     # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  #     default_button_index: 0
  #     # Filter toolbar (optional).
  #     # Add or remove as many filters (`filter_button` instances) as you like.
  #     # To show all items, set `tag` to "*".
  #     # To filter by a specific tag, set `tag` to an existing tag name.
  #     # To remove the toolbar, delete the entire `filter_button` block.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       - name: Deep Learning
  #         tag: Deep Learning
  #       - name: Other
  #         tag: Demo
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     view: showcase
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: false

  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'

  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     columns: '2'
  #     view: compact

  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'

  # - block: contact
  #   id: contact
  #   content:
  #     title: Contact
  #     subtitle:
  #     text: |-
  #       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
  #     # Contact (add or remove contact options as necessary)
  #     email: test@example.org
  #     phone: 888 888 88 88
  #     appointment_url: 'https://calendly.com'
  #     address:
  #       street: 450 Serra Mall
  #       city: Stanford
  #       region: CA
  #       postcode: '94305'
  #       country: United States
  #       country_code: US
  #     directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
  #     office_hours:
  #       - 'Monday 10:00 to 13:00'
  #       - 'Wednesday 09:00 to 10:00'
  #     # Choose a map provider in `params.yaml` to show a map from these coordinates
  #     coordinates:
  #       latitude: '37.4275'
  #       longitude: '-122.1697'  
  #     contact_links:
  #       - icon: twitter
  #         icon_pack: fab
  #         name: DM Me
  #         link: 'https://twitter.com/Twitter'
  #       - icon: skype
  #         icon_pack: fab
  #         name: Skype Me
  #         link: 'skype:echo123?call'
  #       - icon: video
  #         icon_pack: fas
  #         name: Zoom Me
  #         link: 'https://zoom.com'
  #     # Automatically link email and phone or display as text?
  #     autolink: true
  #     # Email form provider
  #     form:
  #       provider: netlify
  #       formspree:
  #         id:
  #       netlify:
  #         # Enable CAPTCHA challenge to reduce spam?
  #         captcha: false
  #   design:
  #     columns: '2'
---
