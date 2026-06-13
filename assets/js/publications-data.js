/*
  Publication data for publications.html.

  To add a new paper, copy this shape into the PUBLICATIONS array:
  {
    topic: "edge-ai", // edge-ai | vision | agri | health | systems
    venue: "Venue name · Journal/Conference",
    title: "Paper title",
    summary: "Two or three sentence short summary shown before Expand.",
    image: "assets/images/example.png", // leave empty when using an icon
    imageAlt: "Graphical abstract for ...",
    icon: "chip", // optional fallback: chip | face | traffic | color | driver | interaction
    links: [
      { label: "Paper", url: "https://...", type: "paper" },
      { label: "PDF", url: "https://...", type: "pdf" },
      { label: "arXiv", url: "https://...", type: "arxiv" },
      { label: "GitHub", url: "https://...", type: "github" }
    ],
    detailsHtml: "" // optional expanded paper details; use <dl>...</dl> when needed
  }
*/

window.PUBLICATIONS = [
  {
    "topic": "edge-ai",
    "venue": "WACV 2026 · IEEE/CVF Conference",
    "title": "One-cycle Structured Pruning with Stability Driven Subnetwork Search",
    "summary": "Introduces a one-cycle structured pruning strategy that searches for stable subnetworks while the model is being compressed. The goal is to make deep vision models lighter and more deployable without relying on a long, multi-stage pruning pipeline.",
    "image": "assets/images/ocspruner.png",
    "imageAlt": "Graphical abstract for OCSPruner",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://openaccess.thecvf.com/content/WACV2026/html/Ghimire_One-Cycle_Structured_Pruning_via_Stability-Driven_Subnetwork_Search_WACV_2026_paper.html",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://openaccess.thecvf.com/content/WACV2026/papers/Ghimire_One-Cycle_Structured_Pruning_via_Stability-Driven_Subnetwork_Search_WACV_2026_paper.pdf",
        "type": "pdf"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2501.13439",
        "type": "arxiv"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/ghimiredhikura/OCSPruner",
        "type": "github"
      }
    ],
    "detailsHtml": "<dl>\n                <div>\n                  <dt>Venue</dt>\n                  <dd>Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2026, pp. 5467-5476.</dd>\n                </div>\n                <div>\n                  <dt>Authors</dt>\n                  <dd class=\"author-list\"><strong>Deepak Ghimire<sup>1</sup></strong>, Dayoung Kil<sup>2</sup>, Seonghwan Jeong<sup>1</sup>, Jaesik Park<sup>3</sup>, Seong-heum Kim<sup>2,*</sup></dd>\n                </div>\n                <div>\n                  <dt>Affiliations</dt>\n                  <dd>\n                    <ol class=\"affiliation-list\">\n                      <li>IT Application Research Center, Korea Electronics Technology Institute</li>\n                      <li>Department of Intelligent Semiconductors, Soongsil University</li>\n                      <li>Department of Computer Science &amp; Engineering, Seoul National University</li>\n                    </ol>\n                    <span class=\"corresponding-note\">* Corresponding author: Seong-heum Kim.</span>\n                  </dd>\n                </div>\n                <div>\n                  <dt>Abstract</dt>\n                  <dd>Existing structured pruning methods typically rely on multi-stage training procedures that incur high computational costs. Pruning at initialization aims to reduce this burden but often suffers from degraded performance. To address these limitations, we propose an efficient one-cycle structured pruning framework that integrates pre-training, pruning, and fine-tuning into a single training cycle without sacrificing accuracy. The key idea is to identify an optimal sub-network during the early stages of training, guided by norm-based group saliency criteria and structured sparsity regularization. We introduce a novel pruning indicator that detects a stable pruning epoch by measuring the similarity between pruning sub-networks across consecutive training epochs. In addition, group sparsity regularization accelerates convergence, further reducing overall training time. Extensive experiments on CIFAR-10, CIFAR-100, and ImageNet using VGG, ResNet, and MobileNet architectures demonstrate that the proposed method achieves state-of-the-art accuracy while being among the most efficient structured pruning frameworks in terms of training cost. Code is available at <a href=\"https://github.com/ghimiredhikura/OCSPruner\" target=\"_blank\" rel=\"noopener\">ghimiredhikura/OCSPruner</a>.</dd>\n                </div>\n              </dl>"
  },
  {
    "topic": "health",
    "venue": "Diagnostics, 2026, Q1 Journal",
    "title": "Precision Biomarker Identification in Gynecological Cancers Using Coexpression Networks and Attention-Based LSTM in Healthcare 4.0",
    "summary": "Background: Cervical cancer (CC) and ovarian cancer (OC) are among the most prevalent and lethal gynecological malignancies in women, necessitating the identification of reliable biomarkers for early diagnosis and prognosis.",
    "image": "assets/images/precision_biomaker_hiot4.0.png",
    "imageAlt": "Graphical abstract for precision biomarker identification",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://www.mdpi.com/2075-4418/16/4/546",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/2075-4418/16/4/546/pdf?version=1771031814",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Diagnostics, 16(4): 546. Published 12 February 2026. DOI: <a href=\"https://doi.org/10.3390/diagnostics16040546\" target=\"_blank\" rel=\"noopener\">10.3390/diagnostics16040546</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Sakib Sarker<sup>1</sup>, Emon Ahammed<sup>2</sup>, Md. Faruk Hosen<sup>3</sup>, Mohammad Badrul Alam Miah<sup>4</sup>, Mohammad Amanul Islam<sup>1</sup>, <strong>Deepak Ghimire<sup>5</sup></strong>, Youngbae Hwang<sup>6</sup>, A. S. M. Sanwar Hosen<sup>7</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Department of Computer Science and Engineering, Uttara University, Dhaka 1230, Bangladesh</li><li>Department of Computer Science and Engineering, Mymensingh Engineering College, Mymensingh 2208, Bangladesh</li><li>Department of Computer Science and Engineering, Netrokona University, Netrokona 2400, Bangladesh</li><li>Department of ICT, Mawlana Bhashani Science and Technology University, Tangail 1902, Bangladesh</li><li>IT Application Research Center, Korea Electronics Technology Institute, Jeonju 54853, Republic of Korea</li><li>Department of Intelligent Systems & Robotics, Chungbuk National University, Cheongju 28644, Republic of Korea</li><li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, Republic of Korea</li></ol></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Background: Cervical cancer (CC) and ovarian cancer (OC) are among the most prevalent and lethal gynecological malignancies in women, necessitating the identification of reliable biomarkers for early diagnosis and prognosis. Methods: This study integrates bioinformatics and Healthcare 4.0 to identify key biomarkers associated with these cancers. Differentially expressed genes (DEGs) were identified from two microarray datasets. mRMR followed by SVM-RFE was applied to the identified DEGs to extract the most significant ML-based DEGs (MDEGs). The predictive ability of the selected gene subsets was further evaluated via multiple classifiers, where attention-based long short-term memory (AttLSTM) consistently achieved the best performance across both datasets. In parallel, WGCNA was conducted to identify coexpression-associated genes (CAGs) from significant modules in each dataset. A PPI network (PPIN) was constructed using the genes common to MDEGs and CAGs and was analyzed via Cytoscape. Results: Four hub genes, MCM3, FOXM1, SH3BP5, and PAPSS2, were identified via the degree method. mRNA expression analysis revealed that FOXM1 and MCM3 were upregulated, whereas SH3BP5 and PAPSS2 were downregulated in cancer tissues compared with normal tissues. ROC curve analysis demonstrated the high prognostic significance of these hub genes, with substantial AUC scores indicating strong discriminatory power. Furthermore, molecular docking analysis with an FDA-approved drug compound confirmed the significant binding affinity between these genes and the drug molecules. Conclusions: These findings suggest that FOXM1, MCM3, SH3BP5, and PAPSS2 could serve as biomarkers for early prognosis, diagnosis, and targeted therapy in patients with cervical and ovarian cancer.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Gynecological cancers; cervical cancer; ovarian cancer; coexpression networks; attention-based LSTM; Healthcare 4.0; biomarkers.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "health",
    "venue": "Diagnostics, 2025, Q1 Journal",
    "title": "Temporal Trends and Machine Learning-Based Risk Prediction of Female Infertility: A Cross-Cohort Analysis Using NHANES Data (2015-2023)",
    "summary": "Background: Female infertility represents a significant global public health concern, yet its evolving trends and data-driven risk prediction remain under examined in nationally representative cohorts. This study investigates temporal changes in infertility prevalence and evaluates Machine Learning (ML) models for infertility risk prediction.",
    "image": "assets/images/temporal_trend_f_infertility.png",
    "imageAlt": "Graphical abstract for Temporal Trends and Machine Learning-Based Risk Prediction of Female Infertility",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://www.mdpi.com/2075-4418/15/17/2250",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/2075-4418/15/17/2250/pdf?version=1757071411",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Diagnostics, 15(17): 2250. Published 5 September 2025. DOI: <a href=\"https://doi.org/10.3390/diagnostics15172250\" target=\"_blank\" rel=\"noopener\">10.3390/diagnostics15172250</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Ismat Ara Begum<sup>1</sup>, <strong>Deepak Ghimire<sup>2,*</sup></strong>, A. S. M. Sanwar Hosen<sup>3,*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Department of Biomedical Sciences and Institute for Medical Science, Jeonbuk National University Medical School, Jeonju 54907, Republic of Korea</li><li>IT Application Research Center, Korea Electronics Technology Institute, Jeonju 54853, Republic of Korea</li><li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, Republic of Korea</li></ol><span class=\"corresponding-note\">* Corresponding authors: Deepak Ghimire and A. S. M. Sanwar Hosen.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Background: Female infertility represents a significant global public health concern, yet its evolving trends and data-driven risk prediction remain under examined in nationally representative cohorts. This study investigates temporal changes in infertility prevalence and evaluates Machine Learning (ML) models for infertility risk prediction using harmonized clinical features from NHANES cycles (2015, 2016, 2017, 2018, 2021, 2022, and 2023). Methods: Women aged 19 to 45 with complete data on infertility-related variables (including reproductive history, menstrual irregularity, Pelvic Infection Disease (PID), hysterectomy, and bilateral oophorectomy) were analyzed. Descriptive statistics and cohort comparisons employed ANOVA and Chi-square tests, while multivariate Logistic Regression (LR) estimated Adjusted Odds Ratios (OR) and informed feature importance. Predictive models (LR, Random Forest, XGBoost, Naive Bayes, SVM, and a Stacking Classifier ensemble) were trained and tuned via GridSearchCV with five-fold cross-validation. Model performance was evaluated using accuracy, precision, recall, F1-score, specificity, and AUC-ROC. Results: We observed a notable increase in infertility prevalence from 14.8% in 2017-2018 to 27.8% in 2021-2023, suggesting potential post-pandemic impacts on reproductive health. In multivariate analysis, prior childbirth emerged as the strongest protective factor (Adjusted OR approximately 0.00), while menstrual irregularity showed a significant positive association with infertility (OR = 0.55, 95% CI 0.40 to 0.77, p &lt; 0.001). Unexpectedly, PID, hysterectomy, and bilateral oophorectomy were not significantly associated with infertility after adjustment (p &gt; 0.05), which may partly reflect the inherent definition of self-reported infertility used in this study. All six ML models demonstrated excellent and comparable predictive ability (AUC &gt; 0.96), reinforcing the effectiveness of even a minimal common predictor set for infertility risk stratification. Conclusions: The rising prevalence of self-reported infertility among U.S. women underscores emerging public health challenges. Despite relying on a streamlined feature set, interpretable and ensemble ML models successfully predicted infertility risk, showcasing their potential applicability in broader surveillance and personalized care strategies. Future models should integrate additional sociodemographic and behavioral factors to enhance precision and support tailored interventions.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Female infertility; NHANES; machine learning; risk prediction; temporal trends; reproductive health.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "health",
    "venue": "Sensors, 2025 · Q2 Journal",
    "title": "FUSE-Net: Multi-Scale CNN for NIR Band Prediction from RGB Using GNDVI-Guided Green Channel Enhancement",
    "summary": "Predicts near-infrared information from ordinary RGB imagery using a multi-scale CNN and GNDVI-guided enhancement. This can reduce reliance on expensive sensors while supporting crop health monitoring and smart vertical farming applications.",
    "image": "assets/images/fusenet.png",
    "imageAlt": "Graphical abstract for FUSE-Net",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.3390/s25134076",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/1424-8220/25/13/4076/pdf",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n                <div>\n                  <dt>Venue</dt>\n                  <dd>Sensors, 2025, 25(13), 4076. Section: Intelligent Sensors. Published 30 June 2025. DOI: <a href=\"https://doi.org/10.3390/s25134076\" target=\"_blank\" rel=\"noopener\">10.3390/s25134076</a>.</dd>\n                </div>\n                <div>\n                  <dt>Authors</dt>\n                  <dd class=\"author-list\">Gwanghyeong Lee, <strong>Deepak Ghimire</strong>, Donghoon Kim, Sewoon Cho, Byoungjun Kim, Sunghwan Jeong<sup>*</sup></dd>\n                </div>\n                <div>\n                  <dt>Affiliation</dt>\n                  <dd>IT Application Research Center, Korea Electronics Technology Institute, Jeonju 54853, Republic of Korea.<span class=\"corresponding-note\">* Corresponding author: Sunghwan Jeong.</span></dd>\n                </div>\n                <div>\n                  <dt>Timeline</dt>\n                  <dd>Received 2 May 2025; revised 18 June 2025; accepted 27 June 2025; published 30 June 2025.</dd>\n                </div>\n                <div>\n                  <dt>Abstract</dt>\n                  <dd>Hyperspectral imaging (HSI) is a powerful tool for precision imaging tasks such as vegetation analysis, but its widespread use remains limited due to the high cost of equipment and challenges in data acquisition. To explore a more accessible alternative, we propose a Green Normalized Difference Vegetation Index (GNDVI)-guided green channel adjustment method, termed G-RGB, which enables the estimation of near-infrared (NIR) reflectance from standard RGB image inputs. The G-RGB method enhances the green channel to encode NIR-like information, generating a spectrally enriched representation. Building on this, we introduce FUSE-Net, a novel deep learning model that combines multi-scale convolutional layers and MLP-Mixer-based channel learning to effectively model spatial and spectral dependencies. For evaluation, we constructed a high-resolution RGB-HSI paired dataset by capturing basil leaves under controlled conditions. Through ablation studies and band combination analysis, we assessed the model's ability to recover spectral information. The experimental results showed that the G-RGB input consistently outperformed unmodified RGB across multiple metrics, including mean squared error (MSE), peak signal-to-noise ratio (PSNR), spectral correlation coefficient (SCC), and structural similarity (SSIM), with the best performance observed when paired with FUSE-Net. While our method does not replace true NIR data, it offers a viable approximation during inference when only RGB images are available, supporting cost-effective analysis in scenarios where HSI systems are inaccessible.</dd>\n                </div>\n                <div>\n                  <dt>Keywords</dt>\n                  <dd>Hyperspectral imaging; GNDVI; NIR prediction; multi-scale CNN; MLP-Mixer; Ocimum basilicum.</dd>\n                </div>\n              </dl>"
  },
  {
    "topic": "health",
    "venue": "Diagnostics, 2025 · Q1 Journal",
    "title": "Association of Polycystic Ovary Syndrome with Clinical, Physical, and Reproductive Factors: A Data-Driven Analysis",
    "summary": "Uses data-driven clinical analysis to examine how PCOS relates to reproductive, physical, and health factors. The work supports more evidence-based interpretation of clinical indicators and risk patterns in women's health data.",
    "image": "assets/images/pcos.png",
    "imageAlt": "Graphical abstract for PCOS",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.3390/diagnostics15060711",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/2075-4418/15/6/711/pdf",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n                <div>\n                  <dt>Venue</dt>\n                  <dd>Diagnostics, 2025, 15(6), 711. Section: Clinical Diagnosis and Prognosis. Published 12 March 2025. DOI: <a href=\"https://doi.org/10.3390/diagnostics15060711\" target=\"_blank\" rel=\"noopener\">10.3390/diagnostics15060711</a>.</dd>\n                </div>\n                <div>\n                  <dt>Authors</dt>\n                  <dd class=\"author-list\">Ismat Ara Begum<sup>1</sup>, A. S. M. Sanwar Hosen<sup>2,*</sup>, <strong>Deepak Ghimire<sup>3</sup></strong>, Mi Jin Park<sup>4,*</sup></dd>\n                </div>\n                <div>\n                  <dt>Affiliations</dt>\n                  <dd>\n                    <ol class=\"affiliation-list\">\n                      <li>Department of Biomedical Sciences and Institute for Medical Science, Jeonbuk National University Medical School, Jeonju 54907, Republic of Korea</li>\n                      <li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, Republic of Korea</li>\n                      <li>IT Application Research Center, Korea Electronics Technology Institute, Jeonju 54853, Republic of Korea</li>\n                      <li>Department of Psychiatry, Seoul St Mary's Hospital, College of Medicine, The Catholic University of Korea, Seoul 03083, Republic of Korea</li>\n                    </ol>\n                    <span class=\"corresponding-note\">* Corresponding authors: A. S. M. Sanwar Hosen and Mi Jin Park.</span>\n                  </dd>\n                </div>\n                <div>\n                  <dt>Timeline</dt>\n                  <dd>Received 17 February 2025; revised 9 March 2025; accepted 10 March 2025; published 12 March 2025.</dd>\n                </div>\n                <div>\n                  <dt>Abstract</dt>\n                  <dd>Background/Objectives: Polycystic Ovary Syndrome (PCOS) is a multifactorial endocrine disorder with significant clinical and reproductive implications. Identifying dose-response relationships between clinical, physical, and reproductive factors and PCOS can enhance diagnostic accuracy and inform treatment strategies. This study utilized a data-driven approach to analyze the associations between key factors, including age, weight, menstrual cycle length, Anti-Mullerian Hormone (AMH) levels, and follicle count, with PCOS prevalence. Methods: A retrospective analysis was conducted on a dataset of 539 participants to determine the optimal ranges of these factors associated with an increased likelihood of PCOS diagnosis. Statistical analyses were conducted using Python, including correlation matrix, univariate and multivariate logistic regression, and dose-response evaluations. Results: Our findings demonstrated that the risk of PCOS increases positively in women under 32 years of age. AMH levels above 4.18 ng/mL were strongly associated with PCOS, suggesting that higher AMH levels may reflect excessive follicular activity rather than enhanced ovarian function. Weight was positively correlated with PCOS, emphasizing the role of metabolic disturbances in its pathophysiology. Additionally, menstrual cycle length exhibited a non-linear association with PCOS, with both shortened and prolonged cycles being indicative of hormonal dysregulation. A higher follicle count was consistently linked to PCOS, reinforcing its diagnostic significance. Conclusions: This study provides evidence of non-linear dose-response relationships between PCOS and clinical, physical, and reproductive factors. The proposed optimal ranges may serve as valuable reference points for clinicians, aiding in early diagnosis and personalized management strategies for women with PCOS.</dd>\n                </div>\n                <div>\n                  <dt>Keywords</dt>\n                  <dd>Polycystic ovary syndrome (PCOS); anti-Mullerian hormone (AMH); ovarian morphology; hormonal imbalance; follicle count; cycle length.</dd>\n                </div>\n              </dl>"
  },
  {
    "topic": "health",
    "venue": "IEEE Access, 2025 · Q2 Open Access",
    "title": "Federated Explainable AI-Based Alzheimer's Disease Prediction With Multimodal Data",
    "summary": "Combines federated learning and explainable AI to predict Alzheimer's disease from multimodal clinical and imaging-related data. The approach targets privacy-aware healthcare AI while keeping model decisions more interpretable for medical analysis.",
    "image": "assets/images/alzimer.png",
    "imageAlt": "Graphical abstract for Alzheimer's Disease",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/ACCESS.2025.3547343",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10909101",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n                <div>\n                  <dt>Venue</dt>\n                  <dd>IEEE Access, 2025. DOI: <a href=\"https://doi.org/10.1109/ACCESS.2025.3547343\" target=\"_blank\" rel=\"noopener\">10.1109/ACCESS.2025.3547343</a>.</dd>\n                </div>\n                <div>\n                  <dt>Authors</dt>\n                  <dd class=\"author-list\">Sobhana Jahan<sup>1</sup>, Md. Rawnak Saif Adib<sup>2</sup>, Syed Mahmudul Huda<sup>3</sup>, Md. Sazzadur Rahman<sup>4</sup>, M. Shamim Kaiser<sup>4</sup>, A. S. M. Sanwar Hosen<sup>5</sup>, <strong>Deepak Ghimire<sup>6</sup></strong>, Mi Jin Park<sup>7</sup></dd>\n                </div>\n                <div>\n                  <dt>Affiliations</dt>\n                  <dd>\n                    <ol class=\"affiliation-list\">\n                      <li>Department of Computer Science and Engineering, Bangladesh University of Professionals, Dhaka 1216, Bangladesh</li>\n                      <li>Department of Computer Science and Engineering, International University of Business Agriculture and Technology, Dhaka 1230, Bangladesh</li>\n                      <li>SuperAnnotate AI, San Francisco, CA 94105, USA</li>\n                      <li>Institute of Information Technology, Jahangirnagar University, Savar, Dhaka 1342, Bangladesh</li>\n                      <li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, South Korea</li>\n                      <li>IT Application Research Center, Korea Electronics Technology Institute, Jeonju-si 54853, Republic of Korea</li>\n                      <li>Department of Psychiatry, Seoul St. Mary's Hospital, College of Medicine, The Catholic University of Korea, Seoul 03083, South Korea</li>\n                    </ol>\n                    <span class=\"corresponding-note\">* Corresponding authors: Md. Sazzadur Rahman and Mi Jin Park.</span>\n                  </dd>\n                </div>\n                <div>\n                  <dt>Timeline</dt>\n                  <dd>Received 1 February 2025; accepted 25 February 2025; published 4 March 2025; current version 14 March 2025.</dd>\n                </div>\n                <div>\n                  <dt>Abstract</dt>\n                  <dd>Alzheimer's Disease (AD) is a progressive neurological disease that severely impairs cognitive function. Early detection is critical for effective treatment and management. Machine Learning (ML) methods are often used to ensure early detection and prediction. However, ML has various issues, including the data island problem. The fragmentation that results from the data island problem makes building reliable, effective ML models more complex, and it is particularly problematic in industries where privacy is a concern, like healthcare. Federated Learning (FL) can help tackle the data island problem by keeping sensitive patient data decentralized and enabling many institutions to work together on model training without exchanging raw data, all while maintaining privacy compliance. As Random Forest (RF) is proven to be the best-performing classifier in this research, an RF classifier is used to create FL. The model incorporates multiple data modalities, such as Magnetic Resonance Imaging (MRI) segmentation and clinical and psychological data, to capture the variety of characteristics influencing the progress of AD. Another concerning issue with ML is its uninterpretable character. We use SHapley Additive exPlanations (SHAP) Explainable Artificial Intelligence (XAI) techniques that emphasize important factors impacting model decisions in order to improve predictability and transparency. This explainability promotes confidence in AI-based diagnoses by enabling researchers and physicians to comprehend the underlying mechanisms guiding the predictions. The combination of XAI, FL, and Open Access Series of Imaging Studies (OASIS-3) multimodal data offers an interpretable, scalable, reliable, and privacy-centered solution for multiple complex issues, such as predicting AD. This approach results in better diagnosis precision, greater security, and increased confidence in AI technologies, making it a novel methodology in medical sciences. With data privacy maintained, our method produces 98.93% accurate predictions, providing a solid detection strategy for AD. The suggested approach's F1-score, Precision, Recall, and AUC are 98.93%, 98.94%, 98.93%, and 99.97%, respectively. This work also shows that a multimodal dataset performs better than a single modal dataset.</dd>\n                </div>\n                <div>\n                  <dt>Index Terms</dt>\n                  <dd>Federated learning; data security; data privacy; clinical data; psychological data; MRI segmentation data; explainable artificial intelligence; dementia; neurodegenerative disease.</dd>\n                </div>\n              </dl>"
  },
  {
    "topic": "vision",
    "venue": "IICC 2025 · Conference / arXiv",
    "title": "Study on Real-Time Road Surface Reconstruction Using Stereo Vision",
    "summary": "Studies stereo-vision-based reconstruction for real-time understanding of road surfaces. The work is relevant to autonomous mobility and field robotics where ground shape, surface quality, and depth cues must be estimated from camera data.",
    "image": "assets/images/roadbev.png",
    "imageAlt": "Graphical abstract for road surface reconstruction",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.48550/arXiv.2504.18112",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://arxiv.org/pdf/2504.18112",
        "type": "pdf"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2504.18112",
        "type": "arxiv"
      }
    ],
    "detailsHtml": "<dl>\n                <div>\n                  <dt>Venue</dt>\n                  <dd>2025 Intelligent Information and Control Conference (IICC 2025), Jeonju, Korea.</dd>\n                </div>\n                <div>\n                  <dt>Authors</dt>\n                  <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Byoungjun Kim, Donghoon Kim, SungHwan Jeong</dd>\n                </div>\n                <div>\n                  <dt>Affiliation</dt>\n                  <dd>All authors: IT Application Research Center, Korea Electronics Technology Institute, Republic of Korea.</dd>\n                </div>\n                <div>\n                  <dt>Abstract</dt>\n                  <dd>Road surface reconstruction plays a crucial role in autonomous driving, providing essential information for safe and smooth navigation. This paper enhances the RoadBEV framework for real-time inference on edge devices by optimizing both efficiency and accuracy. To achieve this, we proposed to apply Isomorphic Global Structured Pruning to the stereo feature extraction backbone, reducing network complexity while maintaining performance. Additionally, the head network is redesigned with an optimized hourglass structure, dynamic attention heads, reduced feature channels, mixed precision inference, and efficient probability volume computation. Our approach improves inference speed while achieving lower reconstruction error, making it well-suited for real-time road surface reconstruction in autonomous driving.</dd>\n                </div>\n              </dl>"
  },
  {
    "topic": "agri",
    "venue": "Smart Media Journal, 2024",
    "title": "Searching Spectrum Band of Crop Area Based on Deep Learning Using Hyper-spectral Image",
    "summary": "Uses deep learning with hyperspectral imagery to search for informative spectral bands in crop regions. The study supports more efficient agricultural sensing by identifying which wavelength ranges are most useful for crop-area analysis.",
    "image": "assets/images/band_selection.png",
    "imageAlt": "Graphical abstract for hyperspectral band selection",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.30693/SMJ.2024.13.8.39",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n                <div>\n                  <dt>Venue</dt>\n                  <dd>Smart Media Journal, Vol. 13, No. 8, pp. 39-48, August 2024. ISSN: 2287-1322. DOI: <a href=\"https://doi.org/10.30693/SMJ.2024.13.8.39\" target=\"_blank\" rel=\"noopener\">10.30693/SMJ.2024.13.8.39</a>.</dd>\n                </div>\n                <div>\n                  <dt>Authors</dt>\n                  <dd class=\"author-list\">Gwanghyeong Lee, Hyunjung Myung, <strong>Deepak Ghimire</strong>, Donghoon Kim, Sewon Cho, Sunghwan Jeong, Byoungjun Kim<sup>*</sup></dd>\n                </div>\n                <div>\n                  <dt>Affiliation</dt>\n                  <dd>IT Application Research Center, Korea Electronics Technology Institute, Republic of Korea.<span class=\"corresponding-note\">* Corresponding author: Byoungjun Kim.</span></dd>\n                </div>\n                <div>\n                  <dt>Timeline</dt>\n                  <dd>Received 31 July 2024; accepted 16 August 2024; published in the August 2024 issue. Revised date is not listed.</dd>\n                </div>\n                <div>\n                  <dt>Abstract</dt>\n                  <dd>Recently, various studies have emerged that utilize hyperspectral imaging for crop growth analysis and early disease diagnosis. However, the challenge of using numerous spectral bands or finding the optimal bands for crop area remains a difficult problem. In this paper, we propose a method of searching the optimized spectral band of crop area based on deep learning using the hyper-spectral image. The proposed method extracts RGB images within hyperspectral images to segment background and foreground area through a Vision Transformer-based Segformer. The segmented results project onto each band of gray-scale converted hyperspectral images. It determines the optimized spectral band of the crop area through the pixel comparison of the projected foreground and background area. The proposed method achieved foreground and background segmentation performance with an average accuracy of 98.47% and a mIoU of 96.48%. In addition, it was confirmed that the proposed method converges to the NIR regions closely related to the crop area compared to the mRMR method.</dd>\n                </div>\n                <div>\n                  <dt>Keywords</dt>\n                  <dd>Hyperspectral image; deep learning; segmentation; spectrum band; vision transformer.</dd>\n                </div>\n              </dl>"
  },
  {
    "topic": "edge-ai",
    "venue": "ICCAS, 2024 · IEEE Conference",
    "title": "A Study of Structured Pruning for Hybrid Neural Networks",
    "summary": "Examines structured pruning strategies for hybrid neural networks, with attention to deployment efficiency. The paper contributes to the broader goal of reducing neural-network complexity while maintaining practical model performance.",
    "image": "assets/images/hybrid_cnn_vit_prune.png",
    "imageAlt": "Graphical abstract for Pruning for Hybrid Neural Networks",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.23919/ICCAS63016.2024.10773379",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Proceedings of the 2024 24th International Conference on Control, Automation and Systems (ICCAS), Jeju, Korea, Republic of Korea, 29 October-1 November 2024. IEEE. DOI: <a href=\"https://doi.org/10.23919/ICCAS63016.2024.10773379\" target=\"_blank\" rel=\"noopener\">10.23919/ICCAS63016.2024.10773379</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire<sup>1</sup></strong>, Dayoung Kil<sup>2</sup>, Seong-heum Kim<sup>2,*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd>\n      <ol class=\"affiliation-list\">\n        <li>Korea Electronics Technology Institute, South Korea</li>\n        <li>Department of Intelligent Semiconductors, Soongsil University, Seoul, South Korea</li>\n      </ol>\n      <span class=\"corresponding-note\">* Corresponding author.</span>\n    </dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This paper investigates the effect of structured pruning on model compression, with a particular focus on reducing mobile stems in CNN-transformer hybrid neural networks. Unlike weight pruning, which removes individual weights regardless of their position, structured pruning eliminates specific model components such as neurons, channels, or convolutional filters. Mobile stems are commonly used to improve the efficiency of transformer-based architectures for deployment on mobile and resource-constrained devices. However, many existing pruning approaches require a multi-stage procedure involving training, pruning, and fine-tuning. In this study, we propose an automatic structured pruning strategy that selects suitable filter pruning criteria from a pool of magnitude-based and similarity-based methods. At each pruning iteration, the target layer is determined based on the overall network loss measured using a small subset of training data. To reduce sudden accuracy degradation, the network is briefly retrained after achieving a predefined reduction in floating-point operations (FLOPs). The proposed approach automatically determines appropriate pruning rates for individual layers in mobile stems, reducing the need for manual pruning-rate design. Experiments using VGGNet, ResNet, and MobileNet models on CIFAR-10 and ImageNet datasets demonstrate the effectiveness of the proposed method. Finally, the paper discusses remaining challenges and future research directions, including structured pruning for advanced hybrid CNN-transformer architectures and its extension to tasks such as object detection and semantic segmentation.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Structured pruning; Hybrid neural networks; Mobile stems.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "health",
    "venue": "IEEE Access, 2024 · Q2 Open Access",
    "title": "Exploring Deep Learning and Machine Learning Approaches for Brain Hemorrhage Detection",
    "summary": "Compares machine learning and deep learning approaches for automated brain hemorrhage detection. The paper helps organize model choices and performance tradeoffs for medical image analysis tasks where rapid and accurate detection is important.",
    "image": "assets/images/brain_hamorrhage.png",
    "imageAlt": "Graphical abstract for Brain Hemorrhage Detection",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/ACCESS.2024.3376438",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10466741",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>IEEE Access, 12: 45060-45093. Published 2024. DOI: <a href=\"https://doi.org/10.1109/access.2024.3376438\" target=\"_blank\" rel=\"noopener\">10.1109/access.2024.3376438</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Samia Ahmed<sup>1</sup>, Jannatul Ferdous Esha<sup>1</sup>, Md. Sazzadur Rahman<sup>2,*</sup>, M. Shamim Kaiser<sup>2</sup>, A. S. M. Sanwar Hosen<sup>3</sup>, <strong>Deepak Ghimire<sup>4</sup></strong>, Mi Jin Park<sup>5,*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Department of Information and Communication Technology (ICT), Bangladesh University of Professionals, Dhaka 1216, Bangladesh</li><li>Institute of Information Technology, Jahangirnagar University, Savar, Dhaka 1342, Bangladesh</li><li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, South Korea</li><li>School of AI Convergence, College of Information Technology, Soongsil University, Seoul 06978, South Korea</li><li>Department of Psychiatry, Seoul St. Mary's Hospital, College of Medicine, The Catholic University of Korea, Seoul 03083, South Korea</li></ol><span class=\"corresponding-note\">* Corresponding authors: Md. Sazzadur Rahman and Mi Jin Park.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Brain hemorrhage refers to a potentially fatal medical disorder that affects millions of individuals. The percentage of patients who survive can be significantly raised with the prompt identification of brain hemorrhages, due to image-guided radiography, which has emerged as the predominant treatment modality in clinical practice. A Computed Tomography Image has frequently been employed for the purpose of identifying and diagnosing neurological disorders. The manual identification of anomalies in the brain region from the Computed Tomography Image demands the radiologist to devote a greater amount of time and dedication. In the most recent studies, a variety of techniques rooted in Deep learning and traditional Machine Learning have been introduced with the purpose of promptly and reliably detecting and classifying brain hemorrhage. This overview provides a comprehensive analysis of the surveys that have been conducted by utilizing Machine Learning and Deep Learning. This research focuses on the main stages of brain hemorrhage, which involve preprocessing, feature extraction, and classification, as well as their findings and limitations. Moreover, this in-depth analysis provides a description of the existing benchmark datasets that are utilized for the analysis of the detection process. A detailed comparison of performances is analyzed. Moreover, this paper addresses some aspects of the above-mentioned technique and provides insights into prospective possibilities for future research.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Artificial intelligence; brain hemorrhage; convolutional neural network; deep learning; intracranial hemorrhage; human health.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "health",
    "venue": "Electronics, 2024 · Q2 Journal",
    "title": "Exploring Machine Learning for Predicting Cerebral Stroke: A Study in Discovery",
    "summary": "Applies machine learning models to discover predictive patterns for cerebral stroke risk. The study explores how clinical and related data can be modeled to support early risk assessment and data-driven discovery.",
    "image": "assets/images/cerebral_stroke.png",
    "imageAlt": "Graphical abstract for Cerebral Stroke Prediction",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.3390/electronics13040686",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/2079-9292/13/4/686/pdf",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Electronics, 13(4): 686. Published 2024-2-7. DOI: <a href=\"https://doi.org/10.3390/electronics13040686\" target=\"_blank\" rel=\"noopener\">10.3390/electronics13040686</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Rajib Mia<sup>1,*</sup>, Shapla Khanam<sup>1</sup>, Amira Mahjabeen<sup>1</sup>, Nazmul Hoque Ovy<sup>1</sup>, <strong>Deepak Ghimire<sup>2</sup></strong>, Mi-Jin Park<sup>3,*</sup>, Mst Ismat Ara Begum<sup>4</sup>, A. S. M. Sanwar Hosen<sup>5</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Department of Software Engineering, Daffodil International University, Dhaka 1216, Bangladesh</li><li>School of AI Convergence, College of Information Technology, Soongsil University, Seoul 06978, Republic of Korea</li><li>Department of Psychiatry, Seoul St. Mary's Hospital, College of Medicine, The Catholic University of Korea, Seoul 03083, Republic of Korea</li><li>Department of Biomedical Sciences, Institute for Medical Science, Jeonbuk National University Medical School, Jeonju 54907, Republic of Korea</li><li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, Republic of Korea</li></ol><span class=\"corresponding-note\">* Corresponding authors: Rajib Mia and Mi-Jin Park.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Cerebral strokes, the abrupt cessation of blood flow to the brain, lead to a cascade of events, resulting in cellular damage due to oxygen and nutrient deprivation. Contemporary lifestyle factors, including high glucose levels, heart disease, obesity, and diabetes, heighten the risk of stroke. This research investigates the application of robust machine learning (ML) algorithms, including logistic regression (LR), random forest (RF), and K-nearest neighbor (KNN), to the prediction of cerebral strokes. Stroke data is collected from Harvard Dataverse Repository. The data includes?봠linical, physiological, behavioral, demographic, and historical data. The Synthetic Minority Oversampling Technique (SMOTE), adaptive synthetic sampling (ADASYN), and the Random Oversampling Technique (ROSE) are used to address class imbalances to improve the accuracy of minority classes. To address the challenge of forecasting strokes from partial and imbalanced physiological data, this study introduces a novel hybrid ML approach by combining a machine learning method with an oversampling technique called ADASYN_RF. ADASYN is an oversampling technique used to resample the imbalanced dataset then RF is implemented on the resampled dataset. Also, other oversampling techniques and ML models are implemented to compare the results. Notably, the RF algorithm paired with ADASYN achieves an exceptional performance of 99% detection accuracy, exhibiting its dominance in stroke prediction. The proposed approach enables cost-effective, precise stroke prediction, providing a valuable tool for clinical diagnosis.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Cerebral stroke; machine learning; prediction; ADASYN; Random Forest; healthcare discovery.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "health",
    "venue": "IEEE Access, 2023 · Q2 Open Access",
    "title": "A Review on the Detection Techniques of Polycystic Ovary Syndrome Using Machine Learning",
    "summary": "Reviews machine-learning methods, datasets, and feature patterns used for PCOS detection. It is useful as a clinical-AI overview for understanding existing approaches, limitations, and opportunities for decision-support systems.",
    "image": "assets/images/pcos_ml_review.png",
    "imageAlt": "Graphical abstract for A Review on Polycystic Ovary Syndrome",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/ACCESS.2023.3304536",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10214584",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>IEEE Access, 11: 86522-86543. Published 2023. DOI: <a href=\"https://doi.org/10.1109/access.2023.3304536\" target=\"_blank\" rel=\"noopener\">10.1109/access.2023.3304536</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Samia Ahmed<sup>1,†</sup>, Md. Sazzadur Rahman<sup>2,†,*</sup>, Ismate Jahan<sup>1</sup>, M. Shamim Kaiser<sup>2</sup>, A. S. M. Sanwar Hosen<sup>3</sup>, <strong>Deepak Ghimire<sup>4</sup></strong>, Seong-Heum Kim<sup>4,*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Department of Information and Communication Technology (ICT), Bangladesh University of Professionals, Dhaka 1216, Bangladesh</li><li>Institute of Information Technology, Jahangirnagar University, Savar, Dhaka 1342, Bangladesh</li><li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, South Korea</li><li>School of AI Convergence, College of Information Technology, Soongsil University, Seoul 06978, South Korea</li></ol><span class=\"corresponding-note\">* Corresponding authors: Md. Sazzadur Rahman and Seong-Heum Kim. † Equal contribution.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Polycystic Ovary Syndrome (PCOS) is a critical hormonal disorder of women that significantly impacts life. Women are increasingly prone to PCOS, which can lead to problems including infertility. Early detection can reduce complexity, making an early and proper detection system essential. This review surveys machine-learning-based detection techniques for PCOS, focusing on feature extraction capability, model performance, available datasets, preprocessing, classification strategies, and limitations that shape future research in automated PCOS diagnosis.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>PCOS; machine learning; detection techniques; women's health; medical diagnosis.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "health",
    "venue": "IEEE Access, 2023 · Q2 Open Access",
    "title": "RNN-CNN Based Cancer Prediction Model for Gene Expression",
    "summary": "Combines recurrent and convolutional neural-network components for cancer prediction using gene-expression data. The architecture is designed to capture both sequential and local patterns in biomedical signals.",
    "image": "assets/images/rnn_cnn_cancer.png",
    "imageAlt": "Graphical abstract for RNN-CNN Based Cancer Prediction Model for Gene Expression",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/ACCESS.2023.3332479",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10316280",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>IEEE Access, 11: 131024-131044. Published 2023. DOI: <a href=\"https://doi.org/10.1109/access.2023.3332479\" target=\"_blank\" rel=\"noopener\">10.1109/access.2023.3332479</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Tanima Thakur<sup>1</sup>, Isha Batra<sup>1</sup>, Arun Malik<sup>1</sup>, <strong>Deepak Ghimire<sup>2</sup></strong>, Seong-Heum Kim<sup>2,*</sup>, A. S. M. Sanwar Hosen<sup>3,*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>School of Computer Science and Engineering, Lovely Professional University, Phagwara, Punjab 144401, India</li><li>School of AI Convergence, College of Information Technology, Soongsil University, Seoul 06978, South Korea</li><li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, South Korea</li></ol><span class=\"corresponding-note\">* Corresponding authors: Seong-Heum Kim and A. S. M. Sanwar Hosen.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>One of those illnesses that is most deadly to people is cancer. The only way to prevent any harm to humanity is by its early discovery and treatment. Various types of tests are conducted in the medical labs for the detection of cancer. Cancer can also be detected at the genetic level. For this distinct machine learning and deep learning methods already exist. This paper proposes a hybrid method based on Recurrent Neural Network (RNN) and Convolution Neural Network (CNN) to predict different types of cancer such as Breast, Lung, Uterine, Kidney, Prostate and colon cancer from gene expression data. The bottleneck features are extracted using the sandwich stacked method based on VGG16 and VGG19 pre-trained models. Afterward, the proposed hybrid classifier based on RNN-CNN has been used to classify the data into various classes. The proposed model performs better than the other existing methods such as VGG16, VGG19, ResNet50, Inception V3 and MobileNet classifier in terms of various performance metrics such as accuracy, Mean Square Error (MSE), precision, recall, and F1 score. RNN-CNN classifier provides the highest accuracy of 0.978 among all the other existing methods for Dataset 1 and the highest accuracy of 0.994 for Dataset 2 at 80% training data. On the other hand, RNN-CNN classifier provides the lowest MSE of 0.101 among all the other existing methods for Dataset 1 and the lowest MSE of 0.006 for Dataset 2 at 80% training data.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Cancer; CNN; deep learning; gene expression; machine learning; RNN.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "edge-ai",
    "venue": "Image and Vision Computing, 2023 · Q1 Journal",
    "title": "Loss-Aware Automatic Selection of Structured Pruning Criteria for Deep Neural Network Acceleration",
    "summary": "Automatically selects structured pruning criteria by observing loss behavior during compression. This helps compressed neural networks retain accuracy while improving inference speed and reducing model complexity.",
    "image": "assets/images/laasp.png",
    "imageAlt": "Graphical abstract for LAASP",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1016/j.imavis.2023.104745",
        "type": "paper"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2506.20152",
        "type": "arxiv"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/ghimiredhikura/laasp-filter-pruning",
        "type": "github"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Image and Vision Computing, 136: 104745. Published 2023-8. DOI: <a href=\"https://doi.org/10.1016/j.imavis.2023.104745\" target=\"_blank\" rel=\"noopener\">10.1016/j.imavis.2023.104745</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Kilho Lee, Seong-heum Kim<sup>*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: School of AI Convergence, College of Information Technology, Soongsil University, Seoul, South Korea.<span class=\"corresponding-note\">* Corresponding author: Seong-heum Kim.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Structured pruning is a well-established technique for compressing neural networks, making it suitable for deployment in resource-limited edge devices. This paper presents an efficient Loss-Aware Automatic Selection of Structured Pruning Criteria (LAASP) for slimming and accelerating deep neural networks. The majority of pruning methodologies employ a sequential process consisting of three stages: 1) training, 2) pruning, and 3) fine-tuning, whereas the proposed pruning technique adopts a pruning-while-training approach that eliminates the first stage and integrates the second and third stages into a single cycle. The automatic selection of magnitude or similarity-based filter pruning criteria from a specified pool of criteria and the specific pruning layer at each pruning iteration is guided by the network's overall loss on a small subset of the training data. To mitigate the abrupt accuracy drop due to pruning, the network is retrained briefly after each reduction of a predefined number of floating-point operations (FLOPs). The optimal pruning rates for each layer in the network are automatically determined, eliminating the need for manual allocation of fixed or variable pruning rates for each layer. Experiments on the VGGNet and ResNet models on the CIFAR-10 and ImageNet benchmark datasets demonstrate the effectiveness of the proposed method. In particular, the ResNet56 and ResNet110 models on the CIFAR-10 dataset significantly improve the top-1 accuracy compared to state-of-the-art methods while reducing the network FLOPs by 52\\%. Furthermore, the ResNet50 model on the ImageNet dataset reduces FLOPs by more than 42\\% with a negligible 0.33\\% drop in top-5 accuracy. The source code of this paper is publicly available online - https://github.com/ghimiredhikura/laasp.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "systems",
    "venue": "Electronics, 2023 · Q2 Journal",
    "title": "Healthcare Internet of Things (H-IoT): Current Trends, Future Prospects, Applications, Challenges, and Security Issues",
    "summary": "Surveys healthcare IoT applications, current trends, security concerns, and future prospects. The paper connects sensing, connected devices, healthcare services, and privacy/security issues in modern H-IoT systems.",
    "image": "assets/images/hiot.png",
    "imageAlt": "Graphical abstract for Healthcare Internet of Things (H-IoT)",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.3390/electronics12092050",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/2079-9292/12/9/2050/pdf",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Electronics, 12(9): 2050. Published 2023-4-28. DOI: <a href=\"https://doi.org/10.3390/electronics12092050\" target=\"_blank\" rel=\"noopener\">10.3390/electronics12092050</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Mohit Kumar<sup>1</sup>, Ashwani Kumar<sup>2</sup>, Sahil Verma<sup>3</sup>, Pronaya Bhattacharya<sup>4</sup>, <strong>Deepak Ghimire<sup>5</sup></strong>, Seong-heum Kim<sup>5,*</sup>, A. S. M. Sanwar Hosen<sup>6,*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Department of IT, MIT Art, Design and Technology University, Pune 412201, India</li><li>Department of Computer Science & Engineering, SRM Institute of Science and Technology, Delhi-NCR Campus, Ghaziabad 201204, India</li><li>Department of Computer Science and Engineering, Uttranchal University, Dehradun 248007, India</li><li>Department of Computer Science and Engineering, Amity School of Engineering and Technology, Research and Innovation Cell, Amity University, Kolkata 700157, India</li><li>School of AI Convergence, College of Information Technology, Soongsil University, Seoul 06978, Republic of Korea</li><li>Department of Artificial Intelligence and Big Data, Woosong University, Daejeon 34606, Republic of Korea</li></ol><span class=\"corresponding-note\">* Corresponding authors: Seong-heum Kim and A. S. M. Sanwar Hosen.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Advancements in Healthcare Internet of Things (H-IoT) systems have created new opportunities and solutions for healthcare services, including the remote treatment and monitoring of patients. In addition, the security and privacy of personal health data must be ensured during data transfer. Security breaches in H-IoT can have serious safety and legal implications. This comprehensive review provides insights about secured data accession by employing cryptographic platforms such as H-IoT in big data, H-IoT in blockchain, H-IoT in machine learning and deep learning, H-IoT in edge computing, and H-IoT in software-defined networks. With this information, this paper reveals solutions to mitigate threats caused by different kinds of attacks. The prevailing challenges in H-IoT systems, including security and scalability challenges, real-time operating challenges, resource constraints, latency, and power consumption challenges are also addressed. We also discuss in detail the current trends in H-IoT, such as remote patient monitoring and predictive analytics. Additionally, we have explored future prospects, such as leveraging health data for informed strategic planning. A critical analysis performed by highlighting the prevailing limitations in H-IoT systems is also presented. This paper will hopefully provide future researchers with in-depth insights into the selection of appropriate cryptographic measures to adopt an energy-efficient and resource-optimized healthcare system.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Healthcare Internet of Things; H-IoT; security; privacy; healthcare applications; remote monitoring.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "edge-ai",
    "venue": "Applied Sciences, 2022 · Q2 Journal",
    "title": "Magnitude and Similarity Based Variable Rate Filter Pruning for Efficient Convolution Neural Networks",
    "summary": "Removes convolutional filters using both magnitude and similarity cues, with variable pruning rates across layers. The method targets efficient CNN inference while trying to preserve representation quality and accuracy.",
    "image": "assets/images/mag_sim_prune.png",
    "imageAlt": "Graphical abstract for Magnitude and Similarity Based Variable Rate Filter Pruning",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.3390/app13010316",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/2076-3417/13/1/316/pdf",
        "type": "pdf"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/ghimiredhikura/msvsp-filter-pruning",
        "type": "github"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Applied Sciences, 13(1): 316. Published 2022-12-27. DOI: <a href=\"https://doi.org/10.3390/app13010316\" target=\"_blank\" rel=\"noopener\">10.3390/app13010316</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Seong-Heum Kim<sup>*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: School of AI Convergence, College of Information Technology, Soongsil University, Seoul 06978, Republic of Korea.<span class=\"corresponding-note\">* Corresponding author: Seong-Heum Kim.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>The superior performance of the recent deep learning models comes at the cost of a significant increase in computational complexity, memory use, and power consumption. Filter pruning is one of the effective neural network compression techniques suitable for model deployment in modern low-power edge devices. In this paper, we propose a loss-aware filter Magnitude and Similarity based Variable rate Filter Pruning (MSVFP) technique. We studied several filter selection criteria based on filter magnitude and similarity among filters within a convolution layer, and based on the assumption that the sensitivity of each layer throughout the network is different, unlike conventional fixed rate pruning methods, our algorithm using loss-aware filter selection criteria automatically finds the suitable pruning rate for each layer throughout the network. In addition, the proposed algorithm adapts two different filter selection criteria to remove weak filters as well as redundant filters based on filter magnitude and filter similarity score respectively. Finally, the iterative filter pruning and retraining approach are used to maintain the accuracy of the network during pruning to its target float point operations (FLOPs) reduction rate. In the proposed algorithm, a small number of retraining steps are sufficient during iterative pruning to prevent an abrupt drop in the accuracy of the network. Experiments with commonly used VGGNet and ResNet models on CIFAR-10 and ImageNet benchmark show the superiority of the proposed method over the existing methods in the literature. Notably, VGG-16, ResNet-56, and ResNet-110 models on the CIFAR-10 dataset even improved the original accuracy with more than 50% reduction in network FLOPs. Additionally, the ResNet-50 model on the ImageNet dataset reduces model FLOPs by more than 42% with a negligible drop in the original accuracy.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Filter pruning; CNN; model compression; efficient deep learning; variable-rate pruning.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "edge-ai",
    "venue": "Electronics, 2022 · Q2 Journal",
    "title": "A Survey on Efficient Convolutional Neural Networks and Hardware Acceleration",
    "summary": "Reviews compact CNN architectures, pruning, quantization, and hardware acceleration strategies. It provides a broad map of techniques for making deep learning practical on constrained and embedded platforms.",
    "image": "assets/images/efficient_cnn_survey.png",
    "imageAlt": "Graphical abstract for A Survey on Efficient Convolutional Neural Networks and Hardware Acceleration",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.3390/electronics11060945",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/2079-9292/11/6/945/pdf",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Electronics, 11(6): 945. Published 2022-3-18. DOI: <a href=\"https://doi.org/10.3390/electronics11060945\" target=\"_blank\" rel=\"noopener\">10.3390/electronics11060945</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Dayoung Kil, Seong-heum Kim<sup>*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: School of AI Convergence, College of Information Technology, Soongsil University, Seoul 06978, Korea.<span class=\"corresponding-note\">* Corresponding author: Seong-heum Kim.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Over the past decade, deep-learning-based representations have demonstrated remarkable performance in academia and industry. The learning capability of convolutional neural networks (CNNs) originates from a combination of various feature extraction layers that fully utilize a large amount of data. However, they often require substantial computation and memory resources while replacing traditional hand-engineered features in existing systems. In this review, to improve the efficiency of deep learning research, we focus on three aspects: quantized/binarized models, optimized architectures, and resource-constrained systems. Recent advances in light-weight deep learning models and network architecture search (NAS) algorithms are reviewed, starting with simplified layers and efficient convolution and including new architectural design and optimization. In addition, several practical applications of efficient CNNs have been investigated using various types of hardware architectures and platforms.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Efficient CNNs; hardware acceleration; neural network compression; edge AI; embedded intelligence.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "ACIVS 2017 · Springer LNCS Conference",
    "title": "Facial Expression Recognition Using Local Region Specific Dense Optical Flow and LBP Features",
    "summary": "Combines dense optical flow and LBP features extracted from local facial regions. The method captures both motion and texture cues, improving expression recognition in image sequences.",
    "image": "assets/images/expression_optical_flow_lbp.png",
    "imageAlt": "Graphical abstract for Facial Expression Recognition Using Local Region Specific Dense Optical Flow and LBP Features",
    "icon": "",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1007/978-3-319-70353-4_3",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Advanced Concepts for Intelligent Vision Systems (ACIVS 2017), Lecture Notes in Computer Science, pp. 28-38. DOI: <a href=\"https://doi.org/10.1007/978-3-319-70353-4_3\" target=\"_blank\" rel=\"noopener\">10.1007/978-3-319-70353-4_3</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Sang Hyun Park, Mi Jin Kim</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Korea Electronics Technology Institute, Bundang-gu, Seongnam-si, Gyeonggi-do 13488, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This paper presents a facial-expression recognition method that combines local-region motion and texture information. Instead of dividing the face into a regular grid, the method defines domain-specific facial regions, estimates mean optical flow in multiple directions for each region, selects key frames using the maximum optical-flow magnitude relative to the neutral frame, and concatenates region-specific LBP descriptors with optical-flow features. A support vector machine classifier is then used for recognition, with validation on the CK+ facial-expression dataset.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Facial expression; local representation; optical flow; local binary pattern; support vector machines.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "IWPR / SPIE, 2016 · Conference",
    "title": "Object Tracking via Background Subtraction for Monitoring Illegal Activity in Crossroad",
    "summary": "Tracks vehicles and pedestrians at intersections using background subtraction. The system is designed to monitor illegal crossing behavior and support automated traffic-surveillance analysis.",
    "image": "",
    "imageAlt": "",
    "icon": "traffic",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1117/12.2242877",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>First International Workshop on Pattern Recognition, SPIE Proceedings 10011, 1001103. Published 11 July 2016. DOI: <a href=\"https://doi.org/10.1117/12.2242877\" target=\"_blank\" rel=\"noopener\">10.1117/12.2242877</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire<sup>1</sup></strong>, Sunghwan Jeong<sup>1</sup>, Sang Hyun Park<sup>1</sup>, Joonwhoan Lee<sup>2</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Center for Automobile Research, Korea Electronics Technology Institute, Jeonju-si, Jeollabuk-do 54853, Republic of Korea</li><li>Department of Computer Engineering, Chonbuk National University, Jeonju-si, Jeollabuk-do 561-756, Republic of Korea</li></ol></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This work develops a vision-based traffic-surveillance system for detecting pedestrians, vehicles, and illegal movements around zebra crossings. The system first identifies pedestrian traffic-light status and monitors vehicle-pedestrian movement, then applies background subtraction for object detection and tracking. Shadow removal, blob segmentation, and trajectory analysis are used to improve detection and classification. Experiments on video sequences captured under daytime, nighttime, sunny, and rainy conditions show that the approach can support efficient accident-prevention monitoring at crossings.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Zebra crossing; background subtraction; object tracking; shadow detection; traffic surveillance.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "Multimedia Tools and Applications, 2016",
    "title": "Facial Expression Recognition Based on Local Region Specific Features and Support Vector Machines",
    "summary": "Improves expression recognition by extracting discriminative features from local facial regions. These features are classified with SVMs to capture expression-related variation more effectively than using global facial appearance alone.",
    "image": "",
    "imageAlt": "",
    "icon": "face",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1007/s11042-016-3418-y",
        "type": "paper"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/1604.04337",
        "type": "arxiv"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Multimedia Tools and Applications, 76(6): 7803-7821. Published 2016-3-16. DOI: <a href=\"https://doi.org/10.1007/s11042-016-3418-y\" target=\"_blank\" rel=\"noopener\">10.1007/s11042-016-3418-y</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire<sup>1</sup></strong>, Sunghwan Jeong<sup>1</sup>, Joonwhoan Lee<sup>2,*</sup>, Sang Hyun Park<sup>1</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Korea Electronics Technology Institute, Jeonju-si, Jeollabuk-do 561-844, Republic of Korea</li><li>Division of Computer Engineering, Jeonbuk National University, Jeonju-si, Jeollabuk-do 561-756, Republic of Korea</li></ol><span class=\"corresponding-note\">* Corresponding author: Joonwhoan Lee.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Facial expressions are one of the most powerful, natural and immediate means for human being to communicate their emotions and intensions. Recognition of facial expression has many applications including human-computer interaction, cognitive science, human emotion analysis, personality development etc. In this paper, we propose a new method for the recognition of facial expressions from single image frame that uses combination of appearance and geometric features with support vector machines classification. In general, appearance features for the recognition of facial expressions are computed by dividing face region into regular grid (holistic representation). But, in this paper we extracted region specific appearance features by dividing the whole face region into domain specific local regions. Geometric features are also extracted from corresponding domain specific regions. In addition, important local regions are determined by using incremental search approach which results in the reduction of feature dimension and improvement in recognition accuracy. The results of facial expressions recognition using features from domain specific regions are also compared with the results obtained using holistic representation. The performance of the proposed facial expression recognition system has been validated on publicly available extended Cohn-Kanade (CK+) facial expression data sets.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "Multimedia Tools and Applications, 2016",
    "title": "Recognition of Facial Expressions Based on Salient Geometric Features and Support Vector Machines",
    "summary": "Uses salient geometric facial features and SVM classification for facial expression recognition. The work focuses on shape and landmark-based cues, complementing appearance-based facial analysis approaches.",
    "image": "",
    "imageAlt": "",
    "icon": "face",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1007/s11042-016-3428-9",
        "type": "paper"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/1604.04334",
        "type": "arxiv"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Multimedia Tools and Applications, 76(6): 7921-7946. Published 2016-3-18. DOI: <a href=\"https://doi.org/10.1007/s11042-016-3428-9\" target=\"_blank\" rel=\"noopener\">10.1007/s11042-016-3428-9</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire<sup>1</sup></strong>, Joonwhoan Lee<sup>2,*</sup>, Ze-Nian Li<sup>3</sup>, Sunghwan Jeong<sup>1</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Korea Electronics Technology Institute, Jeonju-si, Jeollabuk-do 561-844, Republic of Korea</li><li>Division of Computer Engineering, Chonbuk National University, Jeonju-si, Jeollabuk-do 561-756, Republic of Korea</li><li>School of Computing Science, Simon Fraser University, Burnaby, B.C., Canada</li></ol><span class=\"corresponding-note\">* Corresponding author: Joonwhoan Lee.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Facial expressions convey nonverbal cues which play an important role in interpersonal relations, and are widely used in behavior interpretation of emotions, cognitive science, and social interactions. In this paper we analyze different ways of representing geometric feature and present a fully automatic facial expression recognition (FER) system using salient geometric features. In geometric feature-based FER approach, the first important step is to initialize and track dense set of facial points as the expression evolves over time in consecutive frames. In the proposed system, facial points are initialized using elastic bunch graph matching (EBGM) algorithm and tracking is performed using Kanade-Lucas-Tomaci (KLT) tracker. We extract geometric features from point, line and triangle composed of tracking results of facial points. The most discriminative line and triangle features are extracted using feature selective multi-class AdaBoost with the help of extreme learning machine (ELM) classification. Finally the geometric features for FER are extracted from the boosted line, and triangles composed of facial points. The recognition accuracy using features from point, line and triangle are analyzed independently. The performance of the proposed FER system is evaluated on three different data sets: namely CK+, MMI and MUG facial expression data sets.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "Green and Smart Technology, 2015 · Conference / arXiv",
    "title": "Real-Time Sleepiness Detection for Driver State Monitoring System",
    "summary": "Detects driver sleepiness in real time for driver monitoring and ADAS safety applications. The work connects computer vision perception with practical in-vehicle safety systems where fast response is essential.",
    "image": "",
    "imageAlt": "",
    "icon": "driver",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.48550/arXiv.2504.14807",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://arxiv.org/pdf/2504.14807",
        "type": "pdf"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2504.14807",
        "type": "arxiv"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Green and Smart Technology, 2015 · Conference / arXiv. arXiv record 2504.14807v1; posted 2025-04-21.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Sunghwan Jeong, Sunhong Yoon, Sanghyun Park, Juhwan Choi</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: IT Application Research Center, Korea Electronics Technology Institute, Jeonju-si, Jeollabuk-do 561-844, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>A driver face monitoring system can detect driver fatigue, which is a significant factor in many accidents, using computer vision techniques. In this paper, we present a real-time technique for driver eye state detection. First, the face is detected, and the eyes are located within the face region for tracking. A normalized cross-correlation-based online dynamic template matching technique, combined with Kalman filter tracking, is proposed to track the detected eye positions in subsequent image frames. A support vector machine with histogram of oriented gradients (HOG) features is used to classify the state of the eyes as open or closed. If the eyes remain closed for a specified period, the driver is considered to be asleep, and an alarm is triggered.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "ICDIM 2015 · IEEE Conference",
    "title": "Facial Expression Recognition Based on Region Specific Appearance and Geometric Features",
    "summary": "Combines region-specific appearance features with geometric facial cues for expression recognition. The method uses complementary information from facial texture and shape to improve robustness.",
    "image": "",
    "imageAlt": "",
    "icon": "face",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/ICDIM.2015.7381857",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>2015 Tenth International Conference on Digital Information Management (ICDIM), pp. 142-147. DOI: <a href=\"https://doi.org/10.1109/ICDIM.2015.7381857\" target=\"_blank\" rel=\"noopener\">10.1109/ICDIM.2015.7381857</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire<sup>1</sup></strong>, Sunghwan Jeong<sup>1</sup>, Sunhong Yoon<sup>1</sup>, Juhwan Choi<sup>1</sup>, Joonwhoan Lee<sup>2</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>IT Application Research Center, Korea Electronics Technology Institute, Jeonju-si, Jeollabuk-do 561-844, Republic of Korea</li><li>Division of Computer Engineering, Chonbuk National University, Jeonju-si, Jeollabuk-do 561-756, Republic of Korea</li></ol></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>The paper proposes a single-frame facial-expression recognition method that combines region-specific appearance descriptors with geometric facial features. Rather than extracting appearance features from a generic grid, the method divides the face into domain-specific local regions and extracts both appearance and shape cues from corresponding regions. The study compares these region-specific features with holistic grid-based representation and validates the approach on the CK+ and MUG facial-expression datasets using support vector machine classification.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Facial expression recognition; region-specific appearance features; geometric features; support vector machines; CK+; MUG.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "SPIE Medical Imaging, 2014 · Conference",
    "title": "A Local Technique for Contrast Preserving Medical Image Enhancement",
    "summary": "Enhances medical images using a local contrast-preserving technique. The goal is to improve visual interpretability without destroying subtle image details that may matter in medical analysis.",
    "image": "",
    "imageAlt": "",
    "icon": "color",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1117/12.2042299",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>SPIE Medical Imaging 2014: Image Processing, Proceedings of SPIE 9034, 90342H. Event: SPIE Medical Imaging, San Diego, California, United States. DOI: <a href=\"https://doi.org/10.1117/12.2042299\" target=\"_blank\" rel=\"noopener\">10.1117/12.2042299</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\">Suresh Raj Pant, <strong>Deepak Ghimire</strong>, Keunho Park, Joonwhoan Lee</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Chonbuk National University, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This conference paper presents a local medical-image contrast enhancement method designed to improve visibility while preserving diagnostic detail. The method combines contrast-limited adaptive histogram equalization with local image contrast preserving dynamic range compression. Amplification is controlled through a local gain parameter that varies according to neighborhood edge density, reducing over-enhancement and under-enhancement. Experiments with image-quality measures indicate better output quality than standard CLAHE, with improved preservation of local image information relevant to medical diagnosis.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Medical image enhancement; contrast preservation; CLAHE; dynamic range compression; local gain; edge density.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "Sensors, 2013 · Q2 Journal",
    "title": "Geometric Feature-Based Facial Expression Recognition in Image Sequences Using Multi-Class AdaBoost and Support Vector Machines",
    "summary": "Uses geometric facial features with multi-class AdaBoost and SVMs to recognize expressions in image sequences. The work emphasizes temporal facial shape information rather than relying only on static appearance.",
    "image": "",
    "imageAlt": "",
    "icon": "face",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.3390/s130607714",
        "type": "paper"
      },
      {
        "label": "PDF",
        "url": "https://www.mdpi.com/1424-8220/13/6/7714/pdf",
        "type": "pdf"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/1604.03225",
        "type": "arxiv"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Sensors, 13(6): 7714-7734. Published 2013-6-14. DOI: <a href=\"https://doi.org/10.3390/s130607714\" target=\"_blank\" rel=\"noopener\">10.3390/s130607714</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Joonwhoan Lee<sup>*</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Division of Computer Engineering, Chonbuk National University, Jeonju-si, Jeollabuk-do 561-756, Korea.<span class=\"corresponding-note\">* Corresponding author: Joonwhoan Lee.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>Facial expressions are widely used in the behavioral interpretation of emotions, cognitive science, and social interactions. In this paper, we present a novel method for fully automatic facial expression recognition in facial image sequences. As the facial expression evolves over time facial landmarks are automatically tracked in consecutive video frames, using displacements based on elastic bunch graph matching displacement estimation. Feature vectors from individual landmarks, as well as pairs of landmarks tracking results are extracted, and normalized, with respect to the first frame in the sequence. The prototypical expression sequence for each class of facial expression is formed, by taking the median of the landmark tracking results from the training facial expression sequences. Multi-class AdaBoost with dynamic time warping similarity distance between the feature vector of input facial expression and prototypical facial expression, is used as a weak classifier to select the subset of discriminative feature vectors. Finally, two methods for facial expression recognition are presented, either by using multi-class AdaBoost with dynamic time warping, or by using support vector machine on the boosted feature vectors. The results on the Cohn-Kanade (CK+) facial expression database show a recognition accuracy of 95.17% and 97.35% using multi-class AdaBoost and support vector machines, respectively.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Facial expression recognition; geometric features; AdaBoost; support vector machines; image sequences.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "Smart Media Journal, 2012 · Journal / arXiv",
    "title": "Comparison of Two Methods for Stationary Incident Detection Based on Background Image",
    "summary": "Compares two background-image-based methods for detecting stationary incidents in surveillance scenes. The work fits the traffic-monitoring line of research, where reliable background modeling is important for abnormal-event detection.",
    "image": "",
    "imageAlt": "",
    "icon": "traffic",
    "links": [
      {
        "label": "Paper",
        "url": "https://koreascience.kr/article/JAKO201207339092326.page",
        "type": "paper"
      },
      {
        "label": "arXiv",
        "url": "https://arxiv.org/abs/2506.14256",
        "type": "arxiv"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Smart Media Journal, 2012 · Journal / arXiv. arXiv record 2506.14256v1; posted 2025-06-17.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Joonwhoan Lee</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Computer Science and Engineering, Chonbuk National University, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>In general, background subtraction-based methods are used to detect moving objects in visual tracking applications. In this paper, we employed a background subtraction-based scheme to detect the temporarily stationary objects. We proposed two schemes for stationary object detection, and we compare those in terms of detection performance and computational complexity. In the first approach, we used a single background, and in the second approach, we used dual backgrounds, generated with different learning rates, in order to detect temporarily stopped objects. Finally, we used normalized cross correlation (NCC) based image comparison to monitor and track the detected stationary object in a video scene. The proposed method is robust with partial occlusion, short-time fully occlusion, and illumination changes, and it can operate in real time.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "ICGIP / SPIE, 2013 · Conference",
    "title": "Automatic Facial Expression Recognition Based on Features Extracted from Tracking of Landmarks",
    "summary": "Tracks facial landmarks over image sequences and extracts expression-related features from their movement. The paper contributes to automatic expression recognition using dynamic geometric facial information.",
    "image": "",
    "imageAlt": "",
    "icon": "face",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1117/12.2050090",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Fifth International Conference on Graphic and Image Processing (ICGIP 2013), SPIE Proceedings 9069, 90691O. Published 10 January 2014. DOI: <a href=\"https://doi.org/10.1117/12.2050090\" target=\"_blank\" rel=\"noopener\">10.1117/12.2050090</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Joonwhoan Lee</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Division of Computer Engineering, Jeonbuk National University, Jeollabuk-do 561-756, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This paper presents a fully automatic facial-expression recognition system based on geometric features extracted from tracked facial landmarks. Landmark initialization and tracking are performed using elastic bunch graph matching. The recognition stage uses support vector machines and features derived from both individual landmarks and pairs of landmarks, so the descriptor captures time-varying facial graph information as well as individual landmark motion. Experiments on the Extended Cohn-Kanade (CK+) database show that the proposed feature set improves recognition performance.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Facial landmarks; geometric features; Gabor filters; elastic bunch graph matching; support vector machines.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "SCET 2012 · IEEE Conference",
    "title": "A Lighting Insensitive Face Detection Method on Color Images",
    "summary": "Designs a color-image face detector that is more robust to lighting variation. The approach targets practical face-detection conditions where illumination can change significantly across scenes.",
    "image": "",
    "imageAlt": "",
    "icon": "face",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/SCET.2012.6342038",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>2012 Spring Congress on Engineering and Technology (SCET), pp. 1-4. DOI: <a href=\"https://doi.org/10.1109/SCET.2012.6342038\" target=\"_blank\" rel=\"noopener\">10.1109/SCET.2012.6342038</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Joonwhoan Lee</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Department of Computer Engineering, Chonbuk National University, Jeonju-si, Jeonbuk-do 561-756, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>The paper proposes a lighting-insensitive face detection method that combines image enhancement, skin-color segmentation, edge information, and primitive face-shape verification. The input image is first enhanced to handle unconstrained illumination, then skin regions are segmented in YCbCr and RGB color spaces. The skin segmentation result is combined with Canny edge information, and candidate regions are verified using primitive face-shape features. The method is designed to be robust to changes in face size, pose, expression, and lighting conditions.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Image enhancement; skin tone; Canny edge; facial features; face detection; illumination robustness.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "PSIVT 2011 · Springer LNCS Conference",
    "title": "Nonlinear Transfer Function-Based Image Detail Preserving Dynamic Range Compression for Color Image Enhancement",
    "summary": "Compresses image dynamic range while preserving important visual details. The method improves color image enhancement by using nonlinear transfer behavior designed to avoid flattening local structure.",
    "image": "",
    "imageAlt": "",
    "icon": "color",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1007/978-3-642-25367-6_1",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>Advances in Image and Video Technology, Pacific-Rim Symposium on Image and Video Technology (PSIVT 2011), Lecture Notes in Computer Science, pp. 1-12. DOI: <a href=\"https://doi.org/10.1007/978-3-642-25367-6_1\" target=\"_blank\" rel=\"noopener\">10.1007/978-3-642-25367-6_1</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Joonwhoan Lee</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Computer Science and Engineering, Chonbuk National University, Jeonju 561-756, Jeollabuk-do, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This paper presents a color-image enhancement method in HSV space that preserves image detail during dynamic range compression. The RGB image is converted to HSV and enhancement is applied only to the V channel, leaving H and S unchanged to preserve the original color. An image-dependent nonlinear transfer function performs local contrast-preserving dynamic range compression and contrast enhancement simultaneously. The enhanced V channel is then combined with the original H and S channels to reconstruct the RGB image. Subjective and objective evaluations show improved performance compared with conventional methods.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Nonlinear transfer function; dynamic range compression; image local contrast; multiscale enhancement.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "IEEE Transactions on Consumer Electronics, 2011 · Q1",
    "title": "Nonlinear Transfer Function-Based Local Approach for Color Image Enhancement",
    "summary": "Enhances color images through local nonlinear transfer functions while preserving details. The paper addresses common image-enhancement problems where global contrast changes can damage local visual quality.",
    "image": "",
    "imageAlt": "",
    "icon": "color",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/TCE.2011.5955233",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>IEEE Transactions on Consumer Electronics, 57(2): 858-865. Published May 2011. DOI: <a href=\"https://doi.org/10.1109/TCE.2011.5955233\" target=\"_blank\" rel=\"noopener\">10.1109/TCE.2011.5955233</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Joonwhoan Lee</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Chonbuk National University, Jeonju, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This paper proposes a local nonlinear transfer-function method for color-image enhancement with detail preservation. The method converts the image to HSV space and enhances only the V component, keeping hue and saturation unchanged to avoid color distortion. The V image is enhanced in two stages: first, overlapping local blocks are processed with a nonlinear transfer function for luminance enhancement; second, each pixel is further adjusted using the center-pixel value and neighboring pixels to improve local contrast. Subjective and objective evaluations show improved visual quality without changing the original color balance.</dd>\n  </div>\n  <div>\n    <dt>Index Terms</dt>\n    <dd>Luminance enhancement; contrast enhancement; bilinear interpolation; image local contrast.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "International Journal of Contents, 2010",
    "title": "Infrared Sensitive Camera Based Finger-Friendly Interactive Display System",
    "summary": "Builds a touchless interaction system that maps fingertip positions from an infrared-sensitive camera to large-display coordinates. The work demonstrates early practical computer-vision interaction beyond keyboard and mouse input.",
    "image": "",
    "imageAlt": "",
    "icon": "interaction",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.5392/IJoC.2010.6.4.049",
        "type": "paper"
      },
      {
        "label": "PDF / KoreaScience",
        "url": "https://koreascience.or.kr/article/JAKO201007049673321.pdf",
        "type": "pdf"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>International Journal of Contents, 6(4): 49-56. Published 28 December 2010. DOI: <a href=\"https://doi.org/10.5392/IJoC.2010.6.4.049\" target=\"_blank\" rel=\"noopener\">10.5392/IJoC.2010.6.4.049</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire<sup>1</sup></strong>, Jooncheol Kim<sup>2,*</sup>, Kwangjae Lee<sup>2</sup>, Joonwhoan Lee<sup>1</sup></dd>\n  </div>\n  <div>\n    <dt>Affiliations</dt>\n    <dd><ol class=\"affiliation-list\"><li>Computer Engineering Department, Chonbuk National University, Jeonju, Republic of Korea</li><li>Department of Electronics Engineering, Seonam University, Namwon, Republic of Korea</li></ol><span class=\"corresponding-note\">* Corresponding author: Jooncheol Kim.</span></dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This paper presents a touchless interaction system that lets users manipulate a large display without physically touching the screen. Two infrared-sensitive cameras are placed at the lower left and lower right of the display and directed upward. Fingertip positions in each camera view are detected using the vertical intensity profile of a background-subtracted image. The fingertip locations from the two camera images are mapped to screen coordinates using predetermined interpolation matrices built from known sample points. The screen is then controlled according to the estimated fingertip position and depth relative to the display, with experiments demonstrating robust and stable human-computer interaction.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Infrared camera; fingertip tracking; interactive display; touchless interaction; human-computer interaction.</dd>\n  </div>\n</dl>"
  },
  {
    "topic": "vision",
    "venue": "PSIVT 2010 · IEEE Conference",
    "title": "Color Image Enhancement in HSV Space Using Nonlinear Transfer Function and Neighborhood Dependent Approach with Preserving Details",
    "summary": "Enhances color images in HSV space using nonlinear transfer functions and neighborhood-dependent information. The method aims to improve visual quality while preserving fine image details and natural color appearance.",
    "image": "",
    "imageAlt": "",
    "icon": "color",
    "links": [
      {
        "label": "Paper",
        "url": "https://doi.org/10.1109/PSIVT.2010.77",
        "type": "paper"
      }
    ],
    "detailsHtml": "<dl>\n  <div>\n    <dt>Venue</dt>\n    <dd>2010 Fourth Pacific-Rim Symposium on Image and Video Technology (PSIVT), pp. 422-426. DOI: <a href=\"https://doi.org/10.1109/PSIVT.2010.77\" target=\"_blank\" rel=\"noopener\">10.1109/PSIVT.2010.77</a>.</dd>\n  </div>\n  <div>\n    <dt>Authors</dt>\n    <dd class=\"author-list\"><strong>Deepak Ghimire</strong>, Joonwhoan Lee</dd>\n  </div>\n  <div>\n    <dt>Affiliation</dt>\n    <dd>All authors: Computer Engineering Department, Chonbuk National University, Jeonju 561-756, Republic of Korea.</dd>\n  </div>\n  <div>\n    <dt>Abstract</dt>\n    <dd>This paper proposes a detail-preserving color-image enhancement method using HSV color space. The input RGB image is converted to HSV, and only the V component is enhanced so that hue and saturation remain unchanged. Enhancement is performed in two stages: dynamic range compression is first applied to smaller V-channel blocks using a nonlinear transfer function, and then pixel contrast is adjusted according to the center pixel and its neighborhood. The block-based design is intended to preserve details, and experiments show better detail preservation and color stability compared with other enhancement methods.</dd>\n  </div>\n  <div>\n    <dt>Keywords</dt>\n    <dd>Color image enhancement; HSV space; nonlinear transfer function; neighborhood-dependent enhancement; detail preservation.</dd>\n  </div>\n</dl>"
  }
];
