---
title: "Melody Transcription via Generative Pre-training"
authors:
- chrisdonahue
- John Thickstun
- Percy Liang
date: "2022-12-01T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: International Society of Music Information Retrieval
publication_short: In *ISMIR*

abstract: Despite the central role that melody plays in music perception, it remains an open challenge in music information retrieval to reliably detect the notes of the melody present in an arbitrary music recording. A key challenge in melody transcription is building methods which can handle broad audio containing any number of instrument ensembles and musical styles - existing strategies work well for some melody instruments or styles but not all. To confront this challenge, we leverage representations from Jukebox (Dhariwal et al. 2020), a generative model of broad music audio, thereby improving performance on melody transcription by 20% relative to conventional spectrogram features. Another obstacle in melody transcription is a lack of training data - we derive a new dataset containing 50 hours of melody transcriptions from crowdsourced annotations of broad music. The combination of generative pre-training and a new dataset for this task results in 77% stronger performance on melody transcription relative to the strongest available baseline. By pairing our new melody transcription approach with solutions for beat detection, key estimation, and chord recognition, we build Sheet Sage, a system capable of transcribing human-readable lead sheets directly from music audio.

tags:
- Melody Transcription
- Generative Models
- Pre-training
- Music Information Retrieval
featured: false

links:
  - name: Dataset
    url: "https://github.com/chrisdonahue/sheetsage#hooktheory-dataset"
  - name: Video
    url: "https://ismir2022program.ismir.net/poster_300.html#video"

url_pdf: "https://arxiv.org/pdf/2212.01884.pdf"
url_arxiv: "https://arxiv.org/abs/2212.01884"
url_sound: "https://chrisdonahue.com/sheetsage"
url_code: "https://github.com/chrisdonahue/sheetsage"
---