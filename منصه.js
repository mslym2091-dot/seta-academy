// ================================
// Seta Academy - Main JavaScript
// ================================

let currentTrack = "engineering";

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    } else {
        console.error("Page not found:", pageId);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goHome() {
    showPage("home");
}

function openTrack(track) {

    if (track === "engineering") {
        currentTrack = "engineering";
        showPage("engineering");
        return;
    }

    if (track === "computer") {
        currentTrack = "computer";
        showPage("computer");
        return;
    }

    console.error("Unknown track:", track);
}


// ================================
// Subjects
// ================================

const subjects = {

    math1: {
        title: "التفاضل والتكامل",
        icon: "📈",
        description: "شرح التفاضل والتكامل والمراجعات وحل الأسئلة."
    },

    algebra: {
        title: "الجبر والهندسة الفراغية",
        icon: "📐",
        description: "الجبر والهندسة الفراغية في مادة واحدة."
    },

    mechanics: {
        title: "الميكانيكا",
        icon: "⚙️",
        description: "استاتيكا وديناميكا."
    },

    physics: {
        title: "الفيزياء",
        icon: "⚛️",
        description: "شرح ومراجعات وحل أسئلة الفيزياء."
    },

    chemistry: {
        title: "الكيمياء",
        icon: "🧪",
        description: "شرح ومراجعات وحل أسئلة الكيمياء."
    },

    english: {
        title: "English",
        icon: "🇬🇧",
        description: "شرح ومراجعة اللغة الإنجليزية."
    }

};


// ================================
// Open Subject
// ================================

function openSubject(subjectKey) {

    const subject = subjects[subjectKey];

    if (!subject) {
        console.error("Subject not found:", subjectKey);
        return;
    }

    renderSubject(subjectKey);

    showPage("subject");
}


// ================================
// Render Subject
// ================================

function renderSubject(subjectKey) {

    const subject = subjects[subjectKey];

    const header =
        document.getElementById("subjectHeader");

    const content =
        document.getElementById("subjectContent");

    if (!header || !content) {

        console.error(
            "subjectHeader or subjectContent not found"
        );

        return;
    }

    header.innerHTML = `
        <div class="subject-page-title">

            <span class="subject-title-icon">
                ${subject.icon}
            </span>

            <div>

                <h2>
                    ${subject.title}
                </h2>

                <p>
                    ${subject.description}
                </p>

            </div>

        </div>
    `;

    content.innerHTML = "";


    if (subjectKey === "math1") {
        return renderMath1(content);
    }

    if (subjectKey === "algebra") {
        return renderAlgebra(content);
    }

    if (subjectKey === "mechanics") {
        return renderMechanics(content);
    }

    if (subjectKey === "physics") {
        return renderPhysics(content);
    }

    if (subjectKey === "chemistry") {
        return renderChemistry(content);
    }


    if (subjectKey === "english") {

        content.innerHTML = `

            <div class="book-box">

                <div class="book-icon">
                    🇬🇧
                </div>

                <h3>
                    English
                </h3>

                <p>
                    محتوى اللغة الإنجليزية سيتم إضافته هنا.
                </p>

            </div>

        `;
    }
}


// ================================
// Back From Subject
// ================================

function goBackFromSubject() {

    if (currentTrack === "computer") {
        showPage("computer");
    } else {
        showPage("engineering");
    }
}


// ================================
// Math
// ================================

function renderMath1(content) {

    content.innerHTML = `

        <div class="book-box">

            <div class="book-icon">
                📈
            </div>

            <h3>
                التفاضل والتكامل
            </h3>

            <p>
                سيتم إضافة محاضرات التفاضل والتكامل هنا.
            </p>

        </div>

    `;
}


// ================================
// Algebra
// ================================

function renderAlgebra(content) {

    content.innerHTML = "";

    addVideoSection(
        content,
        "📐 الهندسة الفراغية",
        [
            { title: "محاضرة 1", id: "bmX6EhZYKpE" },
            { title: "محاضرة 2", id: "uTulYC_e8U8" },
            { title: "محاضرة 3", id: "mTH1uJ4tomM" },
            { title: "محاضرة 4", id: "-389I5ELU9I" },
            { title: "محاضرة 5", id: "XrU_0ToUxTs" },
            { title: "مراجعة الهندسة الفراغية", id: "3CkIvHwsv58" }
        ]
    );

    addVideoSection(
        content,
        "📐 الجبر",
        [
            { title: "محاضرة 1", id: "jfr9O1BKFbc" },
            { title: "محاضرة 2", id: "kAdt1v4iyi4" },
            { title: "محاضرة 3", id: "JVBAPJup0IU" },
            { title: "محاضرة 4", id: "U7nc1Xe_AOI" },
            { title: "محاضرة 5", id: "fu_8RenjEBI" },
            { title: "محاضرة 6", id: "dK_neB5vOXE" },
            { title: "محاضرة 7", id: "S5JJrKdSXWo" },
            { title: "محاضرة 8", id: "NdkxVv3ueak" },
            { title: "مراجعة الجبر", id: "76IKwNar6GY" }
        ]
    );
}


// ================================
// Mechanics
// ================================

function renderMechanics(content) {

    content.innerHTML = "";

    addVideoSection(
        content,
        "⚙️ الاستاتيكا",
        [
            { title: "استاتيكا 1", id: "dPQYXyRqIKo" },
            { title: "استاتيكا 2", id: "_LmxNT0BGBs" },
            { title: "استاتيكا 3", id: "RuWqelSmc_0" },
            { title: "استاتيكا 4", id: "5o6_NQeBph8" },
            { title: "استاتيكا 5", id: "lCVqNx0SOzQ" },
            { title: "استاتيكا 6", id: "Yip6MBDOfzU" },
            { title: "استاتيكا 7", id: "OTt0-1vRrcg" },
            { title: "استاتيكا 8", id: "qWiuL-3qmNA" },
            { title: "استاتيكا 9", id: "jvO8lFL8eJU" },
            { title: "استاتيكا 10", id: "bjtOitEWe6w" },
            { title: "استاتيكا 11", id: "u3LiLDXadcQ" },
            { title: "استاتيكا 12", id: "ppFu3EahtfU" },
            { title: "استاتيكا 13", id: "Q8KeBUNWIkc" },
            { title: "استاتيكا 14", id: "SAw4IkNeHX8" },
            { title: "استاتيكا 15", id: "mayiI8jhzjg" },
            { title: "استاتيكا 16", id: "1eHjl0VlaUU" }
        ]
    );

    addVideoSection(
        content,
        "⚙️ الديناميكا",
        [
            { title: "ديناميكا 1", id: "v8U39hOVhoc" },
            { title: "ديناميكا 2", id: "3MVG5aCJqfs" },
            { title: "ديناميكا 3", id: "ZA6jfjDsJGE" },
            { title: "ديناميكا 4", id: "3wY-b-mqnDQ" },
            { title: "ديناميكا 5", id: "XJ6_VsS8hWs" },
            { title: "ديناميكا 6", id: "F7DuzfPKTk0" },
            { title: "ديناميكا 7", id: "QCZL3Boj5ns" },
            { title: "ديناميكا 8", id: "lQdda2KChvQ" },
            { title: "ديناميكا 9", id: "0_A65W1-_gY" },
            { title: "ديناميكا 10", id: "qdB5qlaEHC4" },
            { title: "ديناميكا 11", id: "gpljcKXn7l0" },
            { title: "ديناميكا 12", id: "TKYrD7Pwgno" },
            { title: "ديناميكا 13", id: "oVcC7-579lM" },
            { title: "ديناميكا 14", id: "saCMfXps1u4" },
            { title: "ديناميكا 15", id: "hM_3a7OpSbc" },
            { title: "ديناميكا 16", id: "Hef6-jdKZKk" },
            { title: "ديناميكا 17", id: "yjacW_M9e-s" },
            { title: "ديناميكا 18", id: null }
        ]
    );
}


// ================================
// Physics
// ================================

function renderPhysics(content) {

    content.innerHTML = "";

    addVideoSection(
        content,
        "📘 أساسيات الفيزياء",
        [
            { title: "أساسيات الفيزياء", id: "M-3F1TcJFEQ" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب الأول",
        [
            { title: "محاضرة 1", id: "408Q1oT7fyc" },
            { title: "محاضرة 2", id: "2SdLB5UN4so" },
            { title: "محاضرة 3", id: "2qyfiYajHCs" },
            { title: "محاضرة 4", id: "hzl_UnUbaMM" },
            { title: "محاضرة 5", id: "1NhtgLRECGI" },
            { title: "محاضرة 6", id: "QVTi8dbJrGA" },
            { title: "محاضرة 7", id: "R8_Ha3rv-xY" },
            { title: "محاضرة 8", id: "bdJhFpMf3GI" },
            { title: "محاضرة 9", id: "L1h1AoqPcPU" },
            { title: "ورشة الباب الأول", id: "RSkf0nQUg7c" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب الثاني",
        [
            { title: "محاضرة 1", id: "2fKEliKTJKU" },
            { title: "محاضرة 2", id: "EF_bo6kv4IQ" },
            { title: "محاضرة 3", id: "ztpzHVejufQ" },
            { title: "محاضرة 4", id: "gHO7UdGS_M8" },
            { title: "محاضرة 5", id: "nIKY5_CBPuw" },
            { title: "محاضرة 6", id: "DuX5JmxQOJ0" },
            { title: "محاضرة 7", id: "ca5vA_oPMLQ" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب الثالث",
        [
            { title: "محاضرة 1", id: "LHVjnkPyg_s" },
            { title: "محاضرة 2", id: "c9SMxKNgrKk" },
            { title: "محاضرة 3", id: "b_OW8hlgBUk" },
            { title: "محاضرة 4", id: "_Z6hnSgmI8M" },
            { title: "محاضرة 5", id: "-VTM0aEPrEU" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب الرابع",
        [
            { title: "محاضرة 1", id: "tpdKddC1qUs" },
            { title: "محاضرة 2", id: "gc1xSqxoy8g" },
            { title: "محاضرة 3", id: "MEkZDIDM_9k" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب الخامس",
        [
            { title: "محاضرة 1", id: "IxHPqaEiIuA" },
            { title: "محاضرة 2", id: "JNoJwb5HGmA" },
            { title: "محاضرة 3", id: "pUAnIU6ePDo" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب السادس",
        [
            { title: "محاضرة 1", id: "FIk_YQjsW-Y" },
            { title: "محاضرة 2", id: "zUWfgygS_RI" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب السابع",
        [
            { title: "محاضرة 1", id: "Oh7kMch7MTs" }
        ]
    );

    addVideoSection(
        content,
        "📕 الباب الثامن",
        [
            { title: "محاضرة 1", id: "qymXl470Hdo" },
            { title: "محاضرة 2", id: "CEYhZ-3sAP8" },
            { title: "محاضرة 3", id: "tsjiu8ICoYY" }
        ]
    );

    content.insertAdjacentHTML(
        "beforeend",
        `
        <div class="book-box">

            <div class="book-icon">
                📚
            </div>

            <h3>
                حل أسئلة الكتاب
            </h3>

            <p>
                حل أسئلة الكتاب بعد المحاضرات.
            </p>

            <a
                href="https://youtube.com/playlist?list=PLsXhAbS_auy6D9EgSUBXIYY-Gg3UrO9O-&si=R32EOzvvcQNR47_n"
                target="_blank"
                class="video-button">

                ▶ فتح قائمة حل أسئلة الكتاب

            </a>

        </div>
        `
    );
}


// ================================
// Chemistry
// ================================

function renderChemistry(content) {

    content.innerHTML = "";

    addVideoSection(
        content,
        "🧪 أساسيات الكيمياء",
        [
            { title: "أساسيات الكيمياء", id: "9qcJuuw2ZIY" }
        ]
    );

    addVideoSection(
        content,
        "🧪 الباب الأول",
        [
            { title: "محاضرة 1", id: "ckF3-geer-o" },
            { title: "محاضرة 2", id: "mR_-JHbY-ZY" },
            { title: "محاضرة 3", id: "D2nY6Fd4_H8" },
            { title: "محاضرة 4", id: "XhurYGNdv8E" }
        ]
    );

    addVideoSection(
        content,
        "🧪 الباب الثاني",
        [
            { title: "محاضرة 1", id: "7zR_ynfzXQQ" },
            { title: "محاضرة 2", id: "GS7DGoTp5L0" },
            { title: "محاضرة 3", id: "20O4sfQzQN4" },
            { title: "محاضرة 4", id: "jouVsb6LNYk" },
            { title: "محاضرة 5", id: "Pqtgf33XDXk" },
            { title: "محاضرة 6", id: "tWJOVn0alSk" }
        ]
    );

    addVideoSection(
        content,
        "🧪 الباب الثالث",
        [
            { title: "محاضرة 1", id: "Q0zpaCZIITI" },
            { title: "محاضرة 2", id: "ASvI7131sy4" },
            { title: "محاضرة 3", id: "nveJ1XeK-gw" },
            { title: "محاضرة 4", id: "hNFzICcamc8" },
            { title: "محاضرة 5", id: "7Tq8Unw5GU8" }
        ]
    );

    addVideoSection(
        content,
        "🧪 الباب الرابع",
        [
            { title: "محاضرة 1", id: "V_UcGzY8LDA" },
            { title: "محاضرة 2", id: "PNvxixNjNqI" },
            { title: "محاضرة 3", id: "pIWDicBzyvg" },
            { title: "محاضرة 4", id: "ViUl7B8T838" },
            { title: "محاضرة 5", id: "HNqWUuOrpcM" },
            { title: "محاضرة 6", id: "fZfJ1Ot870U" }
        ]
    );

    addVideoSection(
        content,
        "⚡ مراجعة الكهرباء",
        [
            { title: "مراجعة الكهرباء", id: "ydVucqUWdKo" }
        ]
    );

    addVideoSection(
        content,
        "🧪 الباب الخامس - الكيمياء العضوية",
        [
            { title: "محاضرة 1", id: "c96eiGrjUKI" },
            { title: "محاضرة 2", id: "eo5PQBHy0SM" },
            { title: "محاضرة 3", id: "rfx1yMmKRUs" },
            { title: "محاضرة 4", id: "LuN2vMuN9yA" },
            { title: "محاضرة 5", id: "opgCYhOtsXA" },
            { title: "محاضرة 6", id: "LxS1un7CDbA" },
            { title: "محاضرة 7", id: "MWCP_0WLSqI" },
            { title: "محاضرة 8", id: "reLOnUHOujQ" },
            { title: "محاضرة 9", id: "mtbtrUehX_A" },
            { title: "محاضرة 10", id: "XB_R8Sjl6ec" }
        ]
    );

    addVideoSection(
        content,
        "🧪 مراجعة الكيمياء العضوية",
        [
            { title: "مراجعة الكيمياء العضوية", id: "oCwOEQDOvnI" }
        ]
    );
}


// ================================
// Add Video Section
// ================================

function addVideoSection(
    container,
    sectionTitle,
    videos
) {

    const section =
        document.createElement("section");

    section.className =
        "video-section";


    const title =
        document.createElement("h3");

    title.className =
        "video-section-title";

    title.textContent =
        sectionTitle;


    const grid =
        document.createElement("div");

    grid.className =
        "video-grid";


    videos.forEach(function(video, index) {

        const card =
            document.createElement("div");

        card.className =
            "video-card";


        if (video.id) {

            card.innerHTML = `

                <div class="video-visual">

                    <span class="video-number">
                        ${index + 1}
                    </span>

                    <span class="play-icon">
                        ▶
                    </span>

                </div>

                <div class="video-info">

                    <h4>
                        ${video.title}
                    </h4>

                    <button
                        type="button"
                        class="video-button"
                        onclick="watchVideo('${video.id}', '${escapeForAttribute(video.title)}')">

                        ▶ مشاهدة المحاضرة

                    </button>

                </div>
            `;

        } else {

            card.innerHTML = `

                <div class="video-visual">

                    <span class="video-number">
                        ${index + 1}
                    </span>

                    <span class="play-icon">
                        ⏳
                    </span>

                </div>

                <div class="video-info">

                    <h4>
                        ${video.title}
                    </h4>

                    <p>
                        الرابط غير متوفر حاليًا.
                    </p>

                </div>

            `;
        }


        grid.appendChild(card);

    });


    section.appendChild(title);

    section.appendChild(grid);

    container.appendChild(section);
}


// ================================
// Escape Attribute
// ================================

function escapeForAttribute(text) {

    return String(text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/\r?\n/g, " ");

}


// ================================
// Watch Video
// ================================

function watchVideo(
    videoId,
    title = "الفيديو"
) {

    const modal =
        document.getElementById("videoModal");

    const frame =
        document.getElementById("youtubeFrame");

    const videoTitle =
        document.getElementById("videoTitle");


    if (!modal || !frame) {

        console.error(
            "Video modal or iframe not found"
        );

        return;
    }


    frame.src =
        "https://www.youtube.com/embed/" +
        videoId +
        "?autoplay=1";


    if (videoTitle) {
        videoTitle.textContent = title;
    }


    modal.style.display = "flex";
}


// ================================
// Close Video
// ================================

function closeVideo() {

    const modal =
        document.getElementById("videoModal");

    const frame =
        document.getElementById("youtubeFrame");


    if (!modal || !frame) {
        return;
    }


    frame.src = "";

    modal.style.display = "none";
}


// ================================
// Close by clicking outside
// ================================

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("videoModal");

        if (
            modal &&
            event.target === modal
        ) {

            closeVideo();

        }

    }
);


// ================================
// Escape Key
// ================================

window.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeVideo();
        }

    }
);


// ================================
// IMPORTANT: Track Buttons Fix
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showPage("home");


        const engineeringButton =
            document.getElementById(
                "engineeringTrackBtn"
            );


        const computerButton =
            document.getElementById(
                "computerTrackBtn"
            );


        if (engineeringButton) {

            engineeringButton.addEventListener(
                "click",
                function() {

                    openTrack("engineering");

                }
            );

        }


        if (computerButton) {

            computerButton.addEventListener(
                "click",
                function() {

                    openTrack("computer");

                }
            );

        }

    }
);


// ================================
// Make Functions Available
// ================================

window.showPage = showPage;

window.goHome = goHome;

window.openTrack = openTrack;

window.openSubject = openSubject;

window.goBackFromSubject =
    goBackFromSubject;

window.watchVideo = watchVideo;

window.closeVideo = closeVideo;