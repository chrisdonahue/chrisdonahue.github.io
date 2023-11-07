---
title: "Exploring Speech Enhancement with Generative Adversarial Networks for Robust Speech Recognition"
authors:
- chrisdonahue
- Bo Li
- Rohit Prabhavalkar
date: "2018-04-15T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *International Conference on Acoustics, Speech, and Signal Processing* (**Oral**)"
publication_short: "In *ICASSP* (**Oral**)"

abstract: "We investigate the effectiveness of generative adversarial networks (GANs) for speech enhancement, in the context of improving noise robustness of automatic speech recognition (ASR) systems. Prior work demonstrates that GANs can effectively suppress additive noise in raw waveform speech signals, improving perceptual quality metrics; however this technique was not justified in the context of ASR. In this work, we conduct a detailed study to measure the effectiveness of GANs in enhancing speech contaminated by both additive and reverberant noise. Motivated by recent advances in image processing, we propose operating GANs on log-Mel filterbank spectra instead of waveforms, which requires less computation and is more robust to reverberant noise. While GAN enhancement improves the performance of a clean-trained ASR system on noisy speech, it falls short of the performance achieved by conventional multi-style training (MTR). By appending the GAN-enhanced features to the noisy inputs and retraining, we achieve a 7% WER improvement relative to the MTR system."

tags:
- Speech Enhancement
- Generative Adversarial Networks
- Robust Speech Recognition
- ICASSP
featured: false

url_pdf: "https://arxiv.org/pdf/1711.05747.pdf"
url_arxiv: "https://arxiv.org/abs/1711.05747"
---
