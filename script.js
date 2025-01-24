// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}
// Function to toggle the visibility of a subsection
function toggleSubSection(sectionId) {
    const subsection = document.getElementById(sectionId);
    if (subsection.style.display === 'none' || subsection.style.display === '') {
        subsection.style.display = 'block'; // Show the subsection
    } else {
        subsection.style.display = 'none'; // Hide the subsection
    }
}

// Function to toggle the visibility of subtopics
function toggleSubTopics(topicsId) {
    const subtopics = document.getElementById(topicsId);
    if (subtopics.style.display === 'none' || subtopics.style.display === '') {
        subtopics.style.display = 'block'; // Show the subtopics
    } else {
        subtopics.style.display = 'none'; // Hide the subtopics
    }
}

// Function to toggle the visibility of subtopic details
function toggleSubtopicDetail(detailId) {
    const detail = document.getElementById(detailId);
    if (detail.style.display === 'none' || detail.style.display === '') {
        detail.style.display = 'block'; // Show the detail
    } else {
        detail.style.display = 'none'; // Hide the detail
    }
}

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block'; // Show the details
    } else {
        details.style.display = 'none'; // Hide the details
    }
}
function showExplanation(id) {
    var explanation = document.getElementById(id);
    if (explanation.style.display === "none") {
        explanation.style.display = "block";
    } else {
        explanation.style.display = "none";
    }
}
function toggleSubtopicDetail(id) {
    const subtopic = document.getElementById(id);
    if (subtopic.style.display === "none" || subtopic.style.display === "") {
        subtopic.style.display = "block";
    } else {
        subtopic.style.display = "none";
    }
}

function toggleDetails(id) {
    const detail = document.getElementById(id);
    if (detail) {
        if (detail.style.display === "none" || detail.style.display === "") {
            detail.style.display = "block";
        } else {
            detail.style.display = "none";
        }
    }
}
function showSection(sectionId) {
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.style.display = 'none'; // Hide all sections
            });
            document.getElementById(sectionId).style.display = 'block'; // Show the selected section
        }

        // Function to toggle the visibility of a subsection
        function toggleSubSection(sectionId) {
            const subsection = document.getElementById(sectionId);
            if (subsection.style.display === 'none' || subsection.style.display === '') {
                subsection.style.display = 'block'; // Show the subsection
            } else {
                subsection.style.display = 'none'; // Hide the subsection
            }
        }

        // Show home section by default
        window.onload = function() {
            showSection('home');
        };
        // Function to toggle the visibility of a subtopic detail
function toggleSubtopicDetail(subtopicId) {
    // Get the subtopic detail element by its ID
    var subtopicDetail = document.getElementById(subtopicId);
    
    // Check if the element exists
    if (subtopicDetail) {
        // Toggle the display style between 'none' and 'block'
        if (subtopicDetail.style.display === "none" || subtopicDetail.style.display === "") {
            subtopicDetail.style.display = "block"; // Show the subtopic detail
        } else {
            subtopicDetail.style.display = "none"; // Hide the subtopic detail
        }
    }
}

// Function to toggle the visibility of translation details
function toggleDetails(detailsId) {
    // Get the details element by its ID
    var details = document.getElementById(detailsId);
    
    // Check if the element exists
    if (details) {
        // Toggle the display style between 'none' and 'block'
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block"; // Show the details
        } else {
            details.style.display = "none"; // Hide the details
        }
        
    }
}







// Function to change the language of the website
// Function to change the language of the website
function changeLanguage() {
    const language = document.getElementById('language-selector').value;
    const translations = {
        en: {
            title: 'An Inductory Workbook on Translation',
            homeHeading: 'Welcome to Inductory Workbook On Translation',
            homeParagraph: 'The Inductory Workbook on Translation is a thorough reference for aspiring and professional translators, with an emphasis on improving their abilities and technical knowledge. Chapter 1 discusses the fundamental concepts and scope of translation, emphasizing its significance in bridging cultural and language divides. The second chapter goes into the fundamentals of translating and interpreting, offering insights into efficient cross-linguistic communication. Chapter 3 stresses linguistic correctness and technical skill, providing learners with the tools they need to produce exact and high-quality translations. Finally, Chapter 4 delves into advanced procedures and editing processes, honing the art of translation to produce more subtle and compelling outcomes. This workbook is a must-have for anybody aspiring to be a successful translator.',
            aboutHeading: 'About Us',
            aboutParagraph: 'We provide resources and support for translation students.',
            chapterTitle: 'Chapter',
            chapterIntro: 'Welcome to the Chapters section! Here you ll discover materials to help you improve your translation abilities. Chapter 1 addresses the fundamentals of translation, while Chapter 2 discusses key interpretation tactics. Chapter 3 covers linguistic correctness and technical abilities, while Chapter 4 discusses advanced procedures and editing practices. Dive in and hone your skills!',
           
            introTitle: 'Chapter 1: Introduction to Translation',
            introDescription: 'This chapter introduces the fundamental concepts of translation and interpretation. It explores the meaning, purpose, and importance of translation as a bridge between languages and cultures.',
            introcontent: 'Translation is the process of converting text from one language to another.',
            //baru punya script//
            definitiontitle:'Definition of Translation',
            definitioncontent:' Translation, much like powerful patent translation, as you might have heard, is the art of converting written words from one language to another. It consists of two types of languages, viz. source language and target language(s). The former is the language of the original documents, while the latter is the language in which the documents need to be translated. So, when you approach a translation vendor, you will be asked about the source and target languages. Upon translation, you will receive a similar copy of the original files in a different language (target languages).You can use this translated copy to reach a global audience, communicate, and achieve your end objective. ',
            definitiontitle2:'Translation Exactly Meaning',
            definitioncontent2:'Translation is the transfer of written text from one language -the source- to another language -the target. Although translation and interpretation mostly used interchangeably, by actual definition, translation refers to the written language, and interpretation refers to the spoken language. The purpose of translation is to convey the intent of a message and the original tone, keeping in mind regional and cultural differences between the target and source languages. Nowadays, translation is a sector in which a lot of activity is happening; all this is due to the increasing globalization of companies. A large number of people live in a country who cant speak their local language fluently.Of course, all this bodes well for the translation industry. There are different types of translation that may be required, and each of them is unique in its own way with its own set of requirements and processes. In case you are doing businesses at the international level, it would be handy to hire translation services near me that understand your specific needs and can cater to those. The seasoned translation service professionals who work either as a part of some company or as an individual can provide the exact translation service one has expected from them.',
            definitiontitle3:'Interpretation Meaning',
            definitioncontent3: 'Interpretation is the oral rendition in a target language of spoken or signed communication in another language that maintains conveys the meaning, tone, and intent of the message accurately and appropriately for an audience. Unlike translation, which deals with written text, interpretation is done more or less simultaneously and thus usually occurs in the presence of the speaker—usually in real-time during a conference, meeting, courtroom, or medical appointment setting. ',
            definitiontitle4:'Type of Interpretation',
            definitioncontent4: 'There are 14 types of interpretations, each of which will be explained along with examples to provide better understanding',
            
            explanation1:'The interpreter listens to a speaker while interpreting the message into a target language almost simultaneously in order to be in tune with the speaker. Typical situations where this type of interpretation is used include:\br\<br• Conference settings\n• Multilingual meetings\n• Broadcast settings\n\nRequires special equipment: headphones and microphones.',
            explanationtitle:'Simultaneous Interpretation',
            explanationtitle2:'Consecutive Interpretation',
            explanation2:'The speaker allows pauses between utterances, generally one complete sentence or segment at a time, to allow time for the interpreter to produce his own spoken rendition. Typical situations are bilateral meetings, legal settings-for example, court interpretations-and medical appointments-with a doctor and his/her patients.\n\nMost often requires the taking of notes to ensure accuracy. ',
            explanationtitle3:'Whispered Interpretation',
            explanation3:'The interpreter is whispering the translation right into the ear of one or two listeners. \n\n\n\n\nApplicable to small groups where one or two persons require interpretation. No equipment is required but this practice is physically tiring for the interpreter.',

            marytitle2:' MARY SNELL-HORNBY’S INTEGRATED APPROACH',
















            //baru punya script//
            typesTitle: 'Chapter 2: Foundations of Translation and Interpreting',
            typesDescription: 'This chapter will provide an overview of basic concepts in translation and community interpreting, along with an introduction to translation ethics.',
           

            //baru punya script//
            techniquesTitle: 'Chapter 3: Language Accuracy and Technical Skills in Translation',
            techniquesDescription: 'This chapter focuses on the linguistic aspects of translation, including grammar, terminology, and the importance of accuracy.',
           
            
            //baru punya script//
            challengesTitle: 'Chapter 4: Advanced Translation Techniques and Editing Practices',
            challengesDescription: 'This chapter covers the refinement of translation skills through editing and advanced techniques, including the use of machine translation.'
        },
        ms: {
            title: 'Modul Bantuan Terjemahan: Buku Pengenalan tentang Terjemahan',
            homeHeading: 'Modul Bantuan Terjemahan: Buku Pengenalan tentang Terjemahan',
            homeParagraph: 'Buku Kerja Pengenalan dalam Terjemahan adalah rujukan yang komprehensif untuk penterjemah baharu dan profesional, dengan penekanan pada peningkatan kemahiran serta pengetahuan teknikal mereka. Bab 1 membincangkan konsep asas dan skop terjemahan, menekankan kepentingannya dalam merapatkan jurang budaya dan bahasa. Bab 2 mengupas asas-asas penterjemahan dan pentafsiran, memberikan panduan tentang komunikasi rentas bahasa yang berkesan. Bab 3 menitikberatkan ketepatan linguistik dan kemahiran teknikal, membekalkan pelajar dengan alat yang diperlukan untuk menghasilkan terjemahan yang tepat dan berkualiti tinggi. Akhir sekali, Bab 4 meneroka teknik lanjutan serta proses penyuntingan, memperhalusi seni terjemahan untuk menghasilkan hasil yang lebih halus dan meyakinkan. Buku kerja ini merupakan sumber yang penting bagi sesiapa sahaja yang bercita-cita menjadi penterjemah yang berjaya.',
            aboutHeading: 'Tentang Kami',
            aboutParagraph: 'Kami menyediakan sumber dan sokongan untuk pelajar terjemahan.',
            chapterTitle: 'Bab',
            chapterIntro: 'Selamat datang ke bahagian Bab! Di sini, anda akan menemui bahan-bahan yang dapat membantu anda meningkatkan kemahiran terjemahan anda. Bab 1 membincangkan asas-asas terjemahan, manakala Bab 2 mengupas taktik utama dalam pentafsiran. Bab 3 merangkumi ketepatan linguistik dan kemahiran teknikal, sementara Bab 4 membahas teknik lanjutan serta amalan penyuntingan. Terokailah dan asah kemahiran anda!',
           
            introTitle: 'Bab 1: Pengenalan kepada Terjemahan',
            introDescription: 'Bab ini memperkenalkan konsep asas terjemahan dan tafsiran. Ia meneroka makna, tujuan, dan kepentingan terjemahan sebagai jambatan antara bahasa dan budaya.',
            introcontent: 'Terjemahan adalah proses menukarkan teks dari satu bahasa ke bahasa yang lain.',
           //Baru punya script//
           definitiontitle:'Apakah Terjemahan',
           definitioncontent:'Terjemahan, sama seperti terjemahan paten yang berkuasa, seperti yang anda mungkin pernah dengar, ialah seni menukar perkataan bertulis daripada satu bahasa ke bahasa lain. Ia terdiri daripada dua jenis bahasa, iaitu. Bahasa sumber dan bahasa sasaran. Yang pertama adalah bahasa dokumen asal, manakala yang kedua adalah bahasa yang digunakan untuk terjemahan dokumen. Jadi, apabila anda mendekati vendor terjemahan, anda akan ditanya tentang bahasa sumber dan sasaran. Selepas terjemahan, anda akan menerima salinan fail asal yang serupa dalam bahasa yang berbeza (bahasa sasaran). Anda boleh menggunakan salinan terjemahan ini untuk menjangkau khalayak global, berkomunikasi dan mencapai objektif akhir anda.',
           definitiontitle2:'Apa Maksud yang lebih jelas tentang Terjemahan?',
           definitioncontent2:'Terjemahan ialah pemindahan teks bertulis daripada satu bahasa sumber kepada bahasa lain (sasaran). Walaupun terjemahan dan tafsiran kebanyakannya digunakan secara bergantian, menurut definisi sebenar, terjemahan merujuk kepada bahasa bertulis, dan tafsiran merujuk kepada bahasa lisan. Tujuan terjemahan adalah untuk menyampaikan maksud mesej dan nada asal, dengan mengingati perbezaan serantau dan budaya antara bahasa sasaran dan sumber. Pada masa kini, penterjemahan adalah sektor di mana banyak aktiviti berlaku; semua ini disebabkan oleh peningkatan globalisasi syarikat. Sebilangan besar orang tinggal di negara yang tidak boleh bercakap bahasa tempatan mereka dengan fasih. Sudah tentu, semua ini memberi petanda baik untuk industri terjemahan. Terdapat pelbagai jenis terjemahan yang mungkin diperlukan, dan setiap daripadanya adalah unik dengan cara tersendiri dengan set keperluan dan prosesnya sendiri. Sekiranya anda menjalankan perniagaan di peringkat antarabangsa, adalah berguna untuk mengupah perkhidmatan terjemahan berhampiran yang memahami keperluan khusus anda dan boleh memenuhi keperluan tersebut. Profesional perkhidmatan terjemahan berpengalaman yang bekerja sama ada sebagai sebahagian daripada beberapa syarikat atau sebagai individu boleh menyediakan perkhidmatan terjemahan tepat yang diharapkan daripada mereka.',
           definitiontitle3:'Apakah Tafsiran?',
           definitioncontent3:'Tafsiran ialah penyampaian lisan dalam bahasa sasaran komunikasi yang dituturkan atau ditandatangani dalam bahasa lain yang mengekalkan maksud, nada dan maksud mesej dengan tepat dan sesuai untuk khalayak. Tidak seperti terjemahan, yang berkaitan dengan teks bertulis, tafsiran dilakukan lebih kurang serentak dan oleh itu biasanya berlaku dengan kehadiran penceramah biasanya dalam masa nyata semasa persidangan, mesyuarat, bilik mahkamah atau tetapan temu janji perubatan.',
           definitiontitle4:'Jenis-Jenis Tafsiran',
           definitioncontent4:'Terdapat 14 jenis tafsiran, dan setiap satunya akan dijelaskan bersama contoh untuk memberikan pemahaman yang lebih baik.',
           
           explanation1:'Jurubahasa mendengar penutur sambil mentafsir mesej ke dalam bahasa sasaran hampir serentak untuk selaras dengan penutur. Situasi biasa di mana jenis tafsiran ini digunakan termasuk:\n\n• Tetapan persidangan\n• Mesyuarat berbilang bahasa\n• Tetapan siaran',
           explanationtitle:'Tafsiran Serentak',
           explanationtitle2:'Tafsiran Berturut-turut',
           explanation2:'Penceramah membenarkan jeda antara ujaran, secara amnya satu ayat atau segmen lengkap pada satu masa, untuk memberi masa kepada jurubahasa menghasilkan tafsiran lisannya sendiri. Situasi biasa ialah mesyuarat dua hala, tetapan undang-undang-contohnya, tafsiran mahkamah-dan temu janji perubatan-dengan doktor dan pesakitnya.- Selalunya memerlukan pengambilan nota untuk memastikan ketepatan.',
           explanationtitle3:'Tafsiran Berbisik',
           explanation3:'- Jurubahasa membisikkan terjemahan tepat ke telinga seorang atau dua pendengar.\n\n\n\n\n\n\n- Berkenaan dengan kumpulan kecil di mana satu atau dua orang memerlukan tafsiran. \n\n\n\n\n\nn\- Tiada peralatan diperlukan tetapi latihan ini secara fizikal memenatkan jurubahasa.',

           marytitle2:' MARY SNELL-HORNBY’S INTEGRATED APPROACH',




            typesTitle: 'Bab 2: Asas Terjemahan dan Tafsiran',
            typesDescription: 'Bab ini akan memberikan gambaran keseluruhan tentang konsep asas dalam terjemahan dan tafsiran komuniti, bersama dengan pengenalan kepada etika terjemahan.',
           
            techniquesTitle: 'Bab 3: Ketepatan Bahasa dan Kemahiran Teknikal dalam Terjemahan',
            techniquesDescription: 'Bab ini memberi tumpuan kepada aspek linguistik terjemahan, termasuk tatabahasa, terminologi, dan kepentingan ketepatan.',
           
            challengesTitle: 'Bab 4: Teknik Terjemahan Lanjutan dan Amalan Penyuntingan',
            challengesDescription: 'Bab ini membincangkan penambahbaikan kemahiran terjemahan melalui penyuntingan dan teknik lanjutan, termasuk penggunaan terjemahan mesin.'
        }
    };

    // Update the content based on the selected language
    const selectedLanguage = translations[language];
    document.getElementById('site-title').textContent = selectedLanguage.title;
    document.querySelector('#home h2').textContent = selectedLanguage.homeHeading;
    document.querySelector('#home p').textContent = selectedLanguage.homeParagraph;
    document.querySelector('#about h2').textContent = selectedLanguage.aboutHeading;
    document.querySelector('#about p').textContent = selectedLanguage.aboutParagraph;
    document.getElementById('chapter-title').textContent = selectedLanguage.chapterTitle;
    document.getElementById('chapter-intro').textContent = selectedLanguage.chapterIntro;
    document.getElementById('intro-title').textContent = selectedLanguage.introTitle;
    document.getElementById('intro-description').textContent = selectedLanguage.introDescription;
    document.getElementById('types-title').textContent = selectedLanguage.typesTitle;
    document.getElementById('types-description').textContent = selectedLanguage.typesDescription;
    document.getElementById('techniques-title').textContent = selectedLanguage.techniquesTitle;
    document.getElementById('techniques-description').textContent = selectedLanguage.techniquesDescription;
    document.getElementById('challenges-title').textContent = selectedLanguage.challengesTitle;
    document.getElementById('challenges-description').textContent = selectedLanguage.challengesDescription;
    document.getElementById('intro-content').textContent = selectedLanguage.challengesDescription;
    
    //chapter 1 content//
    document.getElementById('definition-title').textContent = selectedLanguage.definitiontitle;
    document.getElementById('definition-content').textContent = selectedLanguage.definitioncontent;
    document.getElementById('definition-title2').textContent = selectedLanguage.definitiontitle2;
    document.getElementById('definition-content2').textContent = selectedLanguage.definitioncontent2;
    document.getElementById('definition-title3').textContent = selectedLanguage.definitiontitle3;
    document.getElementById('definition-content3').textContent = selectedLanguage.definitioncontent3
    document.getElementById('definition-title4').textContent = selectedLanguage.definitiontitle4;
    document.getElementById('definition-content4').textContent = selectedLanguage.definitioncontent4;
   
    document.getElementById('explanation1').textContent = selectedLanguage.explanation1;
    document.getElementById('explanation-title').textContent = selectedLanguage.explanationtitle;
    document.getElementById('explanationtitle2').textContent = selectedLanguage.explanationtitle2;
    document.getElementById('explanation2').textContent = selectedLanguage.explanation2;
    document.getElementById('explanationtitle3').textContent = selectedLanguage.explanationtitle3;
    document.getElementById('explanation3').textContent = selectedLanguage.explanation3;







}


    function toggleSubtopicDetail(id) {
        var detail = document.getElementById(id);
        if (detail.style.display === "none" || detail.style.display === "") {
            detail.style.display = "block";
        } else {
            detail.style.display = "none";
        }
    }

    function toggleImages(imageClass) {
        const englishImages = document.getElementById('english-images');
        const malayImages = document.getElementById('malay-images');

        if (imageClass === 'english-images') {
            englishImages.style.display = englishImages.style.display === "none" ? "block" : "none";
            malayImages.style.display = "none"; // Hide Malay images
        } else {
            malayImages.style.display = malayImages.style.display === "none" ? "block" : "none";
            englishImages.style.display = "none"; // Hide English images
        }
    }




// Show home section by default
showSection('home');