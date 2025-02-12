---
title: "Just Label the Repeats for In-The-Wild Audio-to-Score Alignment"
authors:
  - Irmak Bukey
  - Michael Feffer
  - Chris Donahue
date: "2024-11-11T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *Proceedings of the 25th International Society for Music Information Retrieval Conference*"
publication_short: "In *ISMIR 2024*"

abstract: "We propose an efficient workflow for high-quality offline alignment of in-the-wild performance audio and corresponding sheet music scans (images). Recent work on audio-to-score alignment extends dynamic time warping (DTW) to be theoretically able to handle jumps in sheet music induced by repeat signs—this method requires no human annotations, but we show that it often yields low-quality alignments. As an alternative, we propose a workflow and interface that allows users to quickly annotate jumps (by clicking on repeat signs), requiring a small amount of human supervision but yielding much higher quality alignments on average. Additionally, we refine audio and score feature representations to improve alignment quality by: (1) integrating measure detection into the score feature representation, and (2) using raw onset prediction probabilities from a music transcription model instead of piano roll. We propose an evaluation protocol for audio-to-score alignment that computes the distance between the estimated and ground truth alignment in units of measures. Under this evaluation, we find that our proposed jump annotation workflow and improved feature representations together improve alignment accuracy by 150% relative to prior work (33% to 82%)."

tags:
  - Audio-to-Score Alignment
  - Music Information Retrieval
  - ISMIR 2024
featured: false

links:
  - name: Video Examples
    url: "https://bit.ly/jltr-ismir2024"

url_pdf: "https://arxiv.org/pdf/2411.07428.pdf"
url_arxiv: "https://arxiv.org/abs/2411.07428"
url_code: "https://github.com/irmakbky/jltr-alignment"
---
