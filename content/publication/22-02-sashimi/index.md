---
title: "It's Raw! Audio Generation with State-Space Models"
authors:
- Karan Goel
- Albert Gu
- chrisdonahue
- Christopher Ré
date: "2022-02-01T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *International Conference on Machine Learning* (**Long Talk**; Top 2%)"
publication_short: "In *ICML* (**Long Talk**; Top 2%)"

abstract: Developing architectures suitable for modeling raw audio is a challenging problem due to the high sampling rates of audio waveforms. Standard sequence modeling approaches like RNNs and CNNs have previously been tailored to fit the demands of audio, but the resultant architectures make undesirable computational tradeoffs and struggle to model waveforms effectively. We propose SaShiMi, a new multi-scale architecture for waveform modeling built around the recently introduced S4 model for long sequence modeling. We identify that S4 can be unstable during autoregressive generation, and provide a simple improvement to its parameterization by drawing connections to Hurwitz matrices. SaShiMi yields state-of-the-art performance for unconditional waveform generation in the autoregressive setting. Additionally, SaShiMi improves non-autoregressive generation performance when used as the backbone architecture for a diffusion model. Compared to prior architectures in the autoregressive generation setting, SaShiMi generates piano and speech waveforms which humans find more musical and coherent respectively, e.g. 2x better mean opinion scores than WaveNet on an unconditional speech generation task. On a music generation task, SaShiMi outperforms WaveNet on density estimation and speed at both training and inference even when using 3x fewer parameters. 

tags:
- Audio Generation
- State-Space Models
- Machine Learning
- ICML
featured: false

url_pdf: "https://arxiv.org/pdf/2202.09729.pdf"
url_arxiv: "https://arxiv.org/abs/2202.09729"
url_sound: "https://hazyresearch.stanford.edu/sashimi-examples/"
url_code: "https://github.com/HazyResearch/state-spaces"
---
