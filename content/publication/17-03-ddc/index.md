---
title: "Dance Dance Convolution"
authors:
- chrisdonahue
- Zachary C. Lipton
- Julian McAuley
date: "2017-08-06T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *International Conference on Machine Learning*"
publication_short: "In *ICML*"

abstract: "Dance Dance Revolution (DDR) is a popular rhythm-based video game. Players perform steps on a dance platform in synchronization with music as directed by on-screen step charts. While many step charts are available in standardized packs, players may grow tired of existing charts, or wish to dance to a song for which no chart exists. We introduce the task of learning to choreograph. Given a raw audio track, the goal is to produce a new step chart. This task decomposes naturally into two subtasks: deciding when to place steps and deciding which steps to select. For the step placement task, we combine recurrent and convolutional neural networks to ingest spectrograms of low-level audio features to predict steps, conditioned on chart difficulty. For step selection, we present a conditional LSTM generative model that substantially outperforms n-gram and fixed-window approaches."

tags:
- Dance
- Convolution
- Machine Learning
- ICML
featured: false


links:
  - name: 🕹️ Demo
    url: "https://ddc.chrisdonahue.com"

url_pdf: "https://arxiv.org/pdf/1703.06891.pdf"
url_arxiv: "https://arxiv.org/abs/1703.06891"
url_dataset: "https://github.com/chrisdonahue/ddc#building-dataset"
url_code: "https://github.com/chrisdonahue/ddc"
---
