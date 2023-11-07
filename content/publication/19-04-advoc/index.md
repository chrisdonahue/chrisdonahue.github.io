---
title: "Expediting TTS Synthesis with Adversarial Vocoding"
authors:
- Paarth Neekhara
- chrisdonahue
- Miller Puckette
- Shlomo Dubnov
- Julian McAuley
author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2019-09-15T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *International Conference on the Spoken Language Processing* (**Oral**)"
publication_short: "In *INTERSPEECH* (**Oral**)"

abstract: "Recent approaches in text-to-speech (TTS) synthesis employ neural network strategies to vocode perceptually-informed spectrogram representations directly into listenable waveforms. Such vocoding procedures create a computational bottleneck in modern TTS pipelines. We propose an alternative approach which utilizes generative adversarial networks (GANs) to learn mappings from perceptually-informed spectrograms to simple magnitude spectrograms which can be heuristically vocoded. Through a user study, we show that our approach significantly outperforms naïve vocoding strategies while being hundreds of times faster than neural network vocoders used in state-of-the-art TTS systems. We also show that our method can be used to achieve state-of-the-art results in unsupervised synthesis of individual words of speech."

tags:
- Text-to-Speech
- Adversarial Vocoding
- Speech Synthesis
- INTERSPEECH
featured: false

url_pdf: "https://arxiv.org/pdf/1904.07944.pdf"
url_arxiv: "https://arxiv.org/abs/1904.07944"
url_code: "https://github.com/paarthneekhara/advoc"
url_sound: "https://chrisdonahue.com/advoc_examples"
---