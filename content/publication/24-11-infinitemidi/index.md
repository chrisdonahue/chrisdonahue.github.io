---
title: "Local Deployment of Large-Scale Music AI Models on Commodity Hardware"
authors:
  - Xun Zhou
  - Charlie Ruan
  - Zihe Zhao
  - Tianqi Chen
  - chrisdonahue
date: "2024-11-14T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *Extended Abstracts for the Late-Breaking Demo Session of the 25th International Society for Music Information Retrieval Conference*"
publication_short: "In *ISMIR LBD 2024*"

abstract: "We present the MIDInfinite, a web application capable of generating symbolic music using a large-scale generative AI model locally on commodity hardware. Creating this demo involved porting the Anticipatory Music Transformer, a large language model (LLM) pre-trained on the Lakh MIDI dataset, to the Machine Learning Compilation (MLC) framework. Once the model is ported, MLC facilitates inference on a variety of runtimes including C++, mobile, and the browser. We envision that MLC has the potential to bridge the gap between the landscape of increasingly capable music AI models and technology more familiar to music software developers. As a proof of concept, we build a web application that allows users to generate endless streams of multi-instrumental MIDI in the browser, either from scratch or conditioned on a prompt. On commodity hardware (an M3 Macbook Pro), our demo can generate 51 notes per second, which is faster than real-time playback for 72.9% of generations, and increases to 86.3% with 2 seconds of upfront buffering."

tags:
  - Music AI
  - Machine Learning
  - Symbolic Music Generation
  - ISMIR 2024
featured: false

links:
  - name: 🕹️ Demo
    url: "https://rickzx.github.io/inf-music"

url_pdf: "https://arxiv.org/pdf/2411.09625.pdf"
url_arxiv: "https://arxiv.org/abs/2411.09625"
---
