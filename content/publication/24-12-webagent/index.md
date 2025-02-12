---
title: "The Impact of Element Ordering on LM Agent Performance"
authors:
  - Wayne Chi
  - Ameet Talwalkar
  - chrisdonahue
date: "2024-09-26T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *Open World Agents Workshop at NeurIPS 2024*"
publication_short: "In *NeurIPS Workshops 2024*"

abstract: "There has been a surge of interest in language model agents that can navigate virtual environments such as the web or desktop. To navigate such environments, agents benefit from information on the various elements (e.g., buttons, text, or images) present. However, it remains unclear which element attributes have the greatest impact on agent performance, especially in environments that only provide a graphical representation (i.e., pixels). Here we find that the ordering in which elements are presented to the language model is surprisingly impactful—randomizing element ordering in webpages compromises average agent performance to a degree comparable to removing all visible text from webpages. While web agents benefit from the semantic hierarchical ordering of elements available via the browser, agents that parse elements directly from pixels do not have access to any such ordering. Here we endeavor to derive effective orderings and investigate the impact of various element ordering methods in web and desktop environments. We find that dimensionality reduction provides a viable ordering for pixel-only environments. We train a UI element detection model to derive elements from pixels and apply our findings to an agent benchmark—OmniACT—where we only have access to pixels. Our method completes more than two times as many tasks on average relative to the previous state-of-the-art."

tags:
  - Language Model Agents
  - Virtual Environments
  - Element Ordering
  - ICLR 2024
featured: false

url_arxiv: "https://arxiv.org/abs/2409.12089"
url_pdf: "https://arxiv.org/pdf/2409.12089"
---
