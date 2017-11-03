# SJTU-Software BiobrickAssist Technology

> This is our [wiki page](http://2017.igem.org/Team:SJTU-Software) at http://2017.igem.org

<img src="http://2017.igem.org/wiki/images/c/cf/Batlogo2.png"></img>


## Background

There are more than 20,000 biobricks in iGEM official standard database and the number mounts every year. With the explosive increase of biobricks, it will be tough for synthetic biologists to manually find suitable biobricks which meet the requirements when they try to create new devices with existing parts. This issue inevitably leads to creations of software and databases related to synthetic biology and these intelligent tools will further promote the rapid development of synthetic biology. Thus, we integrated biobricks data from the iGEM official standard database and then created an online device-designing system for synthetic biology researchers.

Meanwhile, after our project iMAP in 2016, we have surveyed and noticed that the instant messaging function we developed in 2016 could hardly replace existing ones such as QQ/Wechat, LINE and WhatsApp, besides, not everyone got used to sending instant messages for academic communication. Instead, emails, or a platform like Quora was more suitable for knowledge and information exchange. So we developed a new function called Q&A, a Quora in synthetic biology field. 

## Abstract

Our project BAT, is improved on the base of 2015’s project—BASE, but we have surpassed it. First of all, BAT can not only score on ‘parts’ level, but more challenging, it can score on the ‘device’ level.

Moreover, a brand new section of BAT, is the Q&A. It refers to Quora, but only in synthetic biology area. Users can put forward and answer questions about biobricks, synthetic biology and even works in their labs. Besides, they can also search questions by keywords or browse them by categories or tags.

## Overview

Our software named BAT is a search engine for biobricks. It integrates functions of searching, scoring on parts and devices levels, and a Q&A community. With these functions combined together, users now can do evaluations both automatically and manually. 

### Q/A Community

<img src="http://2017.igem.org/wiki/images/c/cf/SJTU-Software_QA_001.jpg"></img>

Our community part is easy to use:

- search questions and answers by keyword and tag
- ask questions about biobrick in 3 sections
- comment at any question you like (Markdown)
- show most frequently answered and starred questions
- recommend similar questions you have searched (in development)
- excitation mechanism for veteran answerers (in development)
- ...


### Tech stacks

<img src="https://raw.githubusercontent.com/eggjs/egg/master/docs/assets/egg-logo.png"></img>

Different from the mainstream MySQL+PHP+Apache (What we used in 2015 and 2016), this year we mainly use JavaScript both in frontend (vue.js, jquery) and backend ([egg.js](https://github.com/eggjs/egg), an enterprise frameworks with Node.js & Koa).

For database, we use both MySQL (for BBK searching and scoring) and NoSQL (for storing and managing data of Q/A Community)
