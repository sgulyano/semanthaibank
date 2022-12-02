# Semanthai Bank: Thai Corpus and Benchmarks on Automated Semantic Role Annotation

### [Project Page](https://sgulyano.github.io/semanthaibank) | [Paper]() | [Verb Class Dataset](https://sgulyano.github.io/semanthaibank/data/verb_class.json)


## Abstract

Lexical resources have played a key role in advancing natural language processing research. One particular resource is VerbNet, which contains both syntactic and semantic information of verbs. However, the construction of lexical resources, especially for Thai VerbNet, are infeasible without a suitable tool to support the construction due to the complexity and laboriousness of the labeling task. In this work, we introduce the system for annotation and managing lexical resources, especially for FrameNet and VerbNet, to help facilitate the construction of lexical resources. This work presents an attempt to construct the first version of a Thai VerbNet corpus via data enrichment of the existing lexical resource. The algorithms for semantic role labeling are surveyed and the algorithm for verb classification is invented to facilitate the construction of the lexical resources. In our experiments, we achieved the prototype of the Thai VerbNet corpus and along with our method, they provide the baseline and benchmark for future work.


## Table of contents
-----
  * [Getting Started](#getting-started)
  * [Dataset](#verb-class-dataset)
  * [Citation](#citation)
------


## Getting started

Code consists of two parts: front-end (in `semantic_update` folder) and back-end (through API in `SemanticRole` folder). First, setup the back-end using the provided docker container.

```shell
docker-compose up --build
```

Finish the back-end setup by initialize the database.

```shell
docker-compose exec web python manage.py migrate
```

To temporarily turn off the back-end, use: 

```shell
docker-compose stop
```

To completely remove the back-end, use: 

```shell
docker-compose down -v
```

Then, to use the front-end, open `./semantic_update/article_list.html` in web browser.


## Verb Class Dataset

**Download:**  [Verb Class Dataset](https://sgulyano.github.io/semanthaibank/data/verb_class.json). 


## Citation

```
```
