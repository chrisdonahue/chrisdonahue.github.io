---
title: "Adversarial Audio Synthesis"
authors:
- chrisdonahue
- Julian McAuley
- Miller Puckette
date: "2018-02-01T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *International Conference on Learning Representations*"
publication_short: "In *ICLR*"

abstract: "Audio signals are sampled at high temporal resolutions, and learning to synthesize audio requires capturing structure across a range of timescales. Generative adversarial networks (GANs) have seen wide success at generating images that are both locally and globally coherent, but they have seen little application to audio generation. In this paper we introduce WaveGAN, a first attempt at applying GANs to unsupervised synthesis of raw-waveform audio. WaveGAN is capable of synthesizing one second slices of audio waveforms with global coherence, suitable for sound effect generation. Our experiments demonstrate that, without labels, WaveGAN learns to produce intelligible words when trained on a small-vocabulary speech dataset, and can also synthesize audio from other domains such as drums, bird vocalizations, and piano. We compare WaveGAN to a method which applies GANs designed for image generation on image-like audio feature representations, finding both approaches to be promising."

tags:
- Audio Synthesis
- Generative Adversarial Networks
- Machine Learning
- ICLR
featured: false

links:
  - name: 🕹️ Demo
    url: "https://chrisdonahue.com/wavegan"
  - name: Notebook
    url: "https://colab.research.google.com/drive/1e9o2NB2GDDjadptGr3rwQwTcw-IrFOnm"

url_pdf: "https://arxiv.org/pdf/1802.04208.pdf"
url_arxiv: "https://arxiv.org/abs/1802.04208"
url_code: "https://github.com/chrisdonahue/wavegan"
url_sound: "http://wavegan-v1.s3-website-us-east-1.amazonaws.com"

---
