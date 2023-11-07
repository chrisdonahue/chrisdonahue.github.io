---
title: "GANSynth: Adversarial Neural Audio Synthesis"
authors:
- Jesse Engel
- Kumar Krishna Agrawal
- Shuo Chen
- Ishaan Gulrajani
- chrisdonahue
- Adam Roberts
date: "2019-05-06T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *International Conference on Learning Representations*"
publication_short: "In *ICLR*"

abstract: "Efficient audio synthesis is an inherently difficult machine learning task, as human perception is sensitive to both global structure and fine-scale waveform coherence. Autoregressive models, such as WaveNet, model local structure at the expense of global latent structure and slow iterative sampling, while Generative Adversarial Networks (GANs), have global latent conditioning and efficient parallel sampling, but struggle to generate locally-coherent audio waveforms. Herein, we demonstrate that GANs can in fact generate high-fidelity and locally-coherent audio by modeling log magnitudes and instantaneous frequencies with sufficient frequency resolution in the spectral domain. Through extensive empirical investigations on the NSynth dataset, we demonstrate that GANs are able to outperform strong WaveNet baselines on automated and human evaluation metrics, and efficiently generate audio several orders of magnitude faster than their autoregressive counterparts."

tags:
- GAN
- Audio Synthesis
- Neural Networks
- ICLR
featured: false

links:
  - name: Blog
    url: "https://magenta.tensorflow.org/gansynth"

url_arxiv: "https://arxiv.org/abs/1902.08710"
url_pdf: "https://arxiv.org/pdf/1902.08710.pdf"
url_code: "https://github.com/tensorflow/magenta/tree/master/magenta/models/gansynth"
url_sound: "https://storage.googleapis.com/magentadata/papers/gansynth/index.html"
---
