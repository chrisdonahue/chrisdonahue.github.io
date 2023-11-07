---
title: "Semantically Decomposing the Latent Spaces of Generative Adversarial Networks"
authors:
- chrisdonahue
- Zachary C. Lipton
- Akshay Balsubramani
- Julian McAuley
date: "2018-04-30T00:00:00Z"
doi: ""

publication_types: ["paper-conference"]
publication: "In the *International Conference on Learning Representations*"
publication_short: "In *ICLR*"

abstract: "We propose a new algorithm for training generative adversarial networks that jointly learns latent codes for both identities (e.g. individual humans) and observations (e.g. specific photographs). By fixing the identity portion of the latent codes, we can generate diverse images of the same subject, and by fixing the observation portion, we can traverse the manifold of subjects while maintaining contingent aspects such as lighting and pose. Our algorithm features a pairwise training scheme in which each sample from the generator consists of two images with a common identity code. Corresponding samples from the real dataset consist of two distinct photographs of the same subject. In order to fool the discriminator, the generator must produce pairs that are photorealistic, distinct, and appear to depict the same individual. We augment both the DCGAN and BEGAN approaches with Siamese discriminators to facilitate pairwise training. Experiments with human judges and an off-the-shelf face verification system demonstrate our algorithm's ability to generate convincing, identity-matched photographs."

tags:
- Generative Adversarial Networks
- Latent Space
- Machine Learning
- ICLR
featured: false


links:
  - name: 🕹️ Demo
    url: "https://chrisdonahue.com/sdgan"

url_pdf: "https://arxiv.org/pdf/1705.07904.pdf"
url_arxiv: "https://arxiv.org/abs/1705.07904"
url_code: "https://github.com/chrisdonahue/sdgan"
---
