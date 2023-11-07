---
title: "Piano Genie"
authors:
- chrisdonahue
- Ian Simon
- Sander Dieleman
date: "2019-03-16T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *Association for Computing Machinery International Conference on Intelligent User Interfaces*"
publication_short: "In *ACM IUI*"

abstract: "We present Piano Genie, an intelligent controller which allows non-musicians to improvise on the piano. With Piano Genie, a user performs on a simple interface with eight buttons, and their performance is decoded into the space of plausible piano music in real time. To learn a suitable mapping procedure for this problem, we train recurrent neural network autoencoders with discrete bottlenecks: an encoder learns an appropriate sequence of buttons corresponding to a piano piece, and a decoder learns to map this sequence back to the original piece. During performance, we substitute a user's input for the encoder output, and play the decoder's prediction each time the user presses a button. To improve the intuitiveness of Piano Genie's performance behavior, we impose musically meaningful constraints over the encoder's outputs."

tags:
- Piano Genie
- Machine Learning
- Music Generation
- ACM IUI
featured: false

links:
  - name: 🕹️ Demo
    url: "https://chrisdonahue.com/piano-genie"
  - name: Video
    url: "https://www.youtube.com/watch?v=YRb0XAnUpIk&list=PLBUMAYA6kvGVOmhAwLRP4i_L15D7AoWDJ"
  - name: Blog
    url: "https://magenta.tensorflow.org/pianogenie"

url_pdf: "https://arxiv.org/pdf/1810.05246.pdf"
url_arxiv: "https://arxiv.org/abs/1810.05246"
url_code: "https://github.com/tensorflow/magenta/tree/master/magenta/models/piano_genie"
---
