---
title: "LakhNES: Improving Multi-instrumental Music Generation with Cross-domain Pre-training"
authors:
- chrisdonahue
- Huanru Henry Mao
- Yiting Ethan Li
- Garrison W. Cottrell
- Julian McAuley
date: "2019-07-01T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: In the conference of the *International Society of Music Information Retrieval*
publication_short: In *ISMIR*

abstract: We are interested in the task of generating multi-instrumental music scores. The Transformer architecture has recently shown great promise for the task of piano score generation; here we adapt it to the multi-instrumental setting. Transformers are complex, high-dimensional language models which are capable of capturing long-term structure in sequence data, but require large amounts of data to fit. Their success on piano score generation is partially explained by the large volumes of symbolic data readily available for that domain. We leverage the recently-introduced NES-MDB dataset of four-instrument scores from an early video game sound synthesis chip (the NES), which we find to be well-suited to training with the Transformer architecture. To further improve the performance of our model, we propose a pre-training technique to leverage the information in a large collection of heterogeneous music, namely the Lakh MIDI dataset. Despite differences between the two corpora, we find that this transfer learning procedure improves both quantitative and qualitative performance for our primary task.

tags:
- Multi-instrumental Music Generation
- Pre-training
- ISMIR
featured: false

url_pdf: "https://arxiv.org/pdf/1907.04868.pdf"
url_arxiv: "https://arxiv.org/abs/1907.04868"
url_code: "https://github.com/chrisdonahue/LakhNES"
url_sound: "https://chrisdonahue.com/LakhNES/"
---
