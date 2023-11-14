---
title: "Music ControlNet: Multiple Time-varying Controls for Music Generation"
authors:
- Shih-Lun Wu
- chrisdonahue
- Shinji Watanabe
- Nicholas J. Bryan
date: "2023-11-13T00:00:00Z"
doi: ""

publication_types: ["article"]
publication: ""
publication_short: ""

abstract: "Text-to-music generation models are now capable of generating high-quality music audio in broad styles. However, text control is primarily suitable for the manipulation of global musical attributes like genre, mood, and tempo, and is less suitable for precise control over time-varying attributes such as the positions of beats in time or the changing dynamics of the music. We propose Music ControlNet, a diffusion-based music generation model that offers multiple precise, time-varying controls over generated audio. To imbue text-to-music models with time-varying control, we propose an approach analogous to pixel-wise control of the image-domain ControlNet method. Specifically, we extract controls from training audio yielding paired data, and fine-tune a diffusion-based conditional generative model over audio spectrograms given melody, dynamics, and rhythm controls. While the image-domain Uni-ControlNet method already allows generation with any subset of controls, we devise a new strategy to allow creators to input controls that are only partially specified in time. We evaluate both on controls extracted from audio and controls we expect creators to provide, demonstrating that we can generate realistic music that corresponds to control inputs in both settings. While few comparable music generation models exist, we benchmark against MusicGen, a recent model that accepts text and melody input, and show that our model generates music that is 49% more faithful to input melodies despite having 35x fewer parameters, training on 11x less data, and enabling two additional forms of time-varying control. Sound examples can be found at this https URL."

tags:
- Controllable Music Generation
- Generative AI
- Diffusion
featured: false


links:
  - name: Video
    url: "https://www.youtube.com/watch?v=QVr-S-DyccU"

url_pdf: "https://arxiv.org/pdf/2311.07069.pdf"
url_arxiv: "https://arxiv.org/abs/2311.07069"
url_sound: "https://musiccontrolnet.github.io/web/"
---