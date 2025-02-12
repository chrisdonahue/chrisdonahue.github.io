---
title: "Anticipatory Music Transformer"
authors:
  - John Thickstun
  - David Hall
  - chrisdonahue
  - Percy Liang
date: "2023-06-14T00:00:00Z"
doi: ""

publication_types: ["article"]
publication: "In *TMLR 2024*"
publication_short: "In *TMLR 2024*"

abstract: "We introduce anticipation: a method for constructing a controllable generative model of a temporal point process (the event process) conditioned asynchronously on realizations of a second, correlated process (the control process). We achieve this by interleaving sequences of events and controls, such that controls appear following stopping times in the event sequence. This work is motivated by problems arising in the control of symbolic music generation. We focus on infilling control tasks, whereby the controls are a subset of the events themselves, and conditional generation completes a sequence of events given the fixed control events. We train anticipatory infilling models using the large and diverse Lakh MIDI music dataset. These models match the performance of autoregressive models for prompted music generation, with the additional capability to perform infilling control tasks, including accompaniment. Human evaluators report that an anticipatory model produces accompaniments with similar musicality to even music composed by humans over a 20-second clip."

tags:
  - Music Transformer
  - Anticipation in Music
  - Machine Learning
  - Artificial Intelligence
featured: false

url_pdf: "https://arxiv.org/pdf/2306.08620.pdf"
url_arxiv: "https://arxiv.org/abs/2306.08620"
url_sound: "https://crfm.stanford.edu/2023/06/16/anticipatory-music-transformer.html"
url_code: "https://github.com/jthickstun/anticipation"
---
