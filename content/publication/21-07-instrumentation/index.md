---
title: "Towards Automatic Instrumentation by Learning to Separate Parts in Symbolic Multitrack Music"
authors:
- Hao-Wen Dong
- chrisdonahue
- Taylor Berg-Kirkpatrick
- Julian McAuley
date: "2021-11-07T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: In the conference of the *International Society of Music Information Retrieval*
publication_short: In *ISMIR*

abstract: Modern keyboards allow a musician to play multiple instruments at the same time by assigning zones -- fixed pitch ranges of the keyboard -- to different instruments. In this paper, we aim to further extend this idea and examine the feasibility of automatic instrumentation -- dynamically assigning instruments to notes in solo music during performance. In addition to the online, real-time-capable setting for performative use cases, automatic instrumentation can also find applications in assistive composing tools in an offline setting. Due to the lack of paired data of original solo music and their full arrangements, we approach automatic instrumentation by learning to separate parts (e.g., voices, instruments and tracks) from their mixture in symbolic multitrack music, assuming that the mixture is to be played on a keyboard. We frame the task of part separation as a sequential multi-class classification problem and adopt machine learning to map sequences of notes into sequences of part labels. To examine the effectiveness of our proposed models, we conduct a comprehensive empirical evaluation over four diverse datasets of different genres and ensembles -- Bach chorales, string quartets, game music and pop music. Our experiments show that the proposed models outperform various baselines. We also demonstrate the potential for our proposed models to produce alternative convincing instrumentations for an existing arrangement by separating its mixture into parts.

tags:
- Automatic Instrumentation
- Music Separation
- Symbolic Music
- ISMIR
featured: false

url_pdf: "https://arxiv.org/pdf/2107.05916.pdf"
url_arxiv: "https://arxiv.org/abs/2107.05916"
url_sound: "https://salu133445.github.io/arranger/"
url_code: "https://github.com/salu133445/arranger"
---
