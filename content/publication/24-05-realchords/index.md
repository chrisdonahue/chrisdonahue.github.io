---
title: "Adaptive Accompaniment with ReaLchords"
authors:
  - Yusong Wu
  - Tim Cooijmans
  - Kyle Kastner
  - Adam Roberts
  - Ian Simon
  - Alexander Scarlatos
  - chrisdonahue
  - Cassie Tarakajian
  - Shayegan Omidshafiei
  - Aaron Courville
  - Pablo Samuel Castro
  - Natasha Jaques
  - Cheng-Zhi Anna Huang
date: "2024-05-02T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *Proceedings of the 41st International Conference on Machine Learning*"
publication_short: "In *ICML 2024*"

abstract: "Jamming requires coordination, anticipation, and collaborative creativity between musicians. Current generative models of music produce expressive output but are not able to generate in an online manner, meaning simultaneously with other musicians (human or otherwise). We propose ReaLchords, an online generative model for improvising chord accompaniment to user melody. We start with an online model pretrained by maximum likelihood, and use reinforcement learning to finetune the model for online use. The finetuning objective leverages both a novel reward model that provides feedback on both harmonic and temporal coherency between melody and chord, and a divergence term that implements a novel type of distillation from a teacher model that can see the future melody. Through quantitative experiments and listening tests, we demonstrate that the resulting model adapts well to unfamiliar input and produces fitting accompaniment. ReaLchords opens the door to live jamming, as well as simultaneous co-creation in other modalities."

tags:
  - ReaLchords
  - Machine Learning
  - Music Generation
  - ICML 2024
featured: false

url_pdf: "https://raw.githubusercontent.com/mlresearch/v235/main/assets/wu24c/wu24c.pdf"
url_arxiv: "https://proceedings.mlr.press/v235/wu24c.html"
---
