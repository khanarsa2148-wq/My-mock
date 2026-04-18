const API_URL = "https://script.google.com/macros/s/AKfycbxOhzWN1xs4mwXPSPWMx2qwmDrXfDem5QNSUNxiO1Zsw91Q2I0cVP9hClDz06_pP-F_dA/exec";

const _0xSECRET = "WzMsMSwwLDIsMCwwLDAsMCwwLDEsMiwwLDAsMCwxLDIsMywwLDEsMywyLDAsMSwxLDAsMCwwLDIsMywzLDEsMiwyLDMsMl0=";
const questions = [
    {q: "The five kingdom classification is based on:", a: ["Mode of nutrition", "Complexity in cell structure", "Complexity of organism’s body", "All of these"]},
    {q: "Which is highest in the hierarchy of taxonomic category?", a: ["Genus", "Class", "Family", "Order"]},
    {q: "In the life cycle of moss, which of the following generation is dominant?", a: ["Haploid gametophyte", "Diploid gametophyte", "Haploid sporophyte", "Diploid sporophyte"]},
    {q: "Red rust of tea is caused by:", a: ["A red alga", "A fungus", "A green alga", "A bacterium"]},
    {q: "Spores in Pteridophytes are:", a: ["Haploid", "Diploid", "Triploid", "Tetraploid"]},
    {q: "In plant lateral root initiates from:", a: ["Pericycle", "Cortex", "Endodermis", "Epidermis"]},
    {q: "Collenchymatous hypodermis is a characteristic of:", a: ["Dicot stem", "Monocot stem", "Monocot and Dicot Stem", "Hydrophytes"]},
    {q: "Transpiration is high under:", a: ["Dry Environment", "High Atmospheric Pressure", "Low Temperature", "Humid Environment"]},
    {q: "Method of passive transport which utilizes the special protein called carrier proteins is called:", a: ["Facilitated diffusion", "Simple diffusion", "Active transport", "None of these"]},
    {q: "Where does the Calvin cycle take place?", a: ["Thylakoid membrane", "Stroma of chloroplast", "Cytoplasm", "Intermembrane space of chloroplast"]},
    {q: "The hormone reducing transpiration rate by inducing stomatal closure is:", a: ["Auxin", "Cytokinin", "ABA", "Ethylene"]},
    {q: "Generative nucleus in pollen grain of seed plant divides forming:", a: ["2 male nuclei", "2 female nuclei", "1 male nuclei", "1 male nuclei and 1 tube nucleus"]},
    {q: "If the number of chromosomes in the vegetative tissue of an angiosperm plant is 12, what will be normal number in the endosperm?", a: ["18", "12", "6", "24"]},
    {q: "Transfer of pollen grains from anther to stigma of another flower of the same plant is called:", a: ["Geitonogamy", "Xenogamy", "Autogamy", "Cleistogamy"]},
    {q: "The typical Mendelian dihybrid test cross ratio is:", a: ["9:3:3:1", "1:1:1:1", "9:7", "1:2:1"]},
    {q: "At which end are the new DNA bases added during DNA replication?", a: ["5' triphosphate end", "3' triphosphate end", "3' OH end", "5' OH end"]},
    {q: "A piece of double stranded DNA has 30% A, what will be the % of G?", a: ["30", "40", "70", "20"]},
    {q: "For food, light and space, the greatest competition is between two:", a: ["Closely related species of the same niche", "Closely related species of the different niche", "Unrelated species of the same niche", "Unrelated species of the different niche"]},
    {q: "Final stage in the tissue culture programme before the new plants are taken out for cultivation in the fields is known as:", a: ["Micropropagation", "Hardening", "Embryogenesis", "Explant"]},
    {q: "Biofortification is the idea of breeding crops to:", a: ["make them drought resistant", "make them virus resistant", "increase their economic value", "increase their nutritional value"]},
    {q: "BOD (biological oxygen demand) is primarily used to:", a: ["Estimate the types of microbes", "Estimate the quantity of organic matter in sewage water", "Determine the level of dissolved oxygen", "None of the above"]},
    {q: "Edaphic factors of ecosystem deal with:", a: ["Soil", "Wind", "Rain fall", "Temperature"]},
    {q: "The speciation in which a population splits into two geographically isolated population experience dissimilar selective pressure and genetic drift is known as:", a: ["Sympatric speciation", "Paratric speciation", "Peripatric speciation", "Allopatric speciation"]},
    {q: "Reptiles share the following characters with birds and mammals:", a: ["Amnion", "Diaphragm", "Homocothermic", "None"]},
    {q: "In which form of DNA, the number of base pair per helical turn is 10.5?", a: ["B", "Z", "A", "X"]},
    {q: "Which phase of interphase refers to the synthesis of DNA necessary for division?", a: ["G1", "G2", "S", "G0"]},
    {q: "Golgi apparatus is absent in:", a: ["Higher plants", "Liver cells", "Bacteria and blue-green algae", "Yeast"]},
    {q: "Blood is a specialized:", a: ["Epithelial tissue", "Connective tissue", "Elastic tissue", "Nervous tissue"]},
    {q: "Ligament is a fibrous connective tissue which connects:", a: ["Bone to bone", "Muscle to a bone", "Nerve to a muscle", "Skin to a muscle"]},
    {q: "Sarcomere is an area between two:", a: ["H bands", "Z bands", "A bands", "I bands"]},
    {q: "Heart of man is:", a: ["Myogenic", "Neurogenic", "Cardiogenic", "Digenic"]},
    {q: "Ultrafiltration is the removal of fluid in body which occurs at:", a: ["Glomerulus", "Urinary bladder", "Blood capillary", "Tissue fluid"]},
    {q: "In cockroach alary muscles are associated with:", a: ["Tracheae and spiracles", "Hearts and blood circulation", "Feeding and vision", "Wings and locomotion"]},
    {q: "HCl in human body is secreted by:", a: ["Zymogen cells", "Oxyntic cells", "Kupfer's cells", "Mucous cells"]},
    {q: "What part of the oviduct does the sperm encounter the egg?", a: ["Ampulla", "Isthmus", "Fundus", "Infundibulum"]},
    {q: "What is the stage of the cell cycle at which primary oocytes are arrested in human?", a: ["Prophase I", "Metaphase I", "Prophase II", "Metaphase II"]},
    {q: "Down's syndrome is due to:", a: ["Trisomy of chromosome 21", "Trisomy of chromosome 22", "Trisomy of X chromosome", "Deletion of X chromosome"]},
    {q: "In forensic study, DNA fingerprinting process is used to determine whether or not an individual is the parent of a child by:", a: ["C-DNA analysis", "VNTR analysis", "Microsatellite analysis", "Oligonucleotides assay"]},
    {q: "Aneuploid females with only one X chromosome is a characteristic of individuals with:", a: ["Cri du chat syndrome", "Klinefelter syndrome", "Familial down syndrome", "Turner syndrome"]},
    {q: "First vertebrates originated during:", a: ["Devonian", "Silurian", "Carboniferous", "Ordovician"]},
    {q: "The point at which funiculus touches the ovule is:", a: ["Chalaza", "Hilum", "Raphe", "Endothelium"]},
    {q: "Which of the following is a viral disease?", a: ["Tetanus", "Diphtheria", "Polio", "All of these"]},
    {q: "Which of the following antibodies are first produced during the primary immune response?", a: ["IgG", "IgA", "IgM", "IgE"]},
    {q: "Who discovered and characterized restriction enzymes in the late 1960s:", a: ["Jacob and Monad", "Boyer and Cohen", "Kary Mullis", "Nathan, Arber and Smith"]},
    {q: "Genetically modified Bt Brinjal has been developed for:", a: ["Enhancing shelf life", "Drought resistance", "Insect resistance", "Fungal resistance"]}
];

let currentIdx = 0, userAnswers = [], timerInterval, timeLeft = 60, studentData = {};

function showModal(title, text, icon = "⚠️") {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    document.getElementById('modalIcon').innerText = icon;
    document.getElementById('modalOverlay').style.display = 'flex';
    setTimeout(() => document.getElementById('modalCard').classList.add('active'), 10);
}

function closeModal() {
    document.getElementById('modalCard').classList.remove('active');
    setTimeout(() => document.getElementById('modalOverlay').style.display = 'none', 300);
}

function validateUser() {
    const email = document.getElementById('email').value.toLowerCase().trim();
    const btn = document.getElementById('startBtn');
    btn.disabled = true; btn.innerText = "AUTHORIZING...";

    // Simplified auth: using JSONP style callback to bypass CORS entirely
    const script = document.createElement('script');
    script.src = `${API_URL}?action=checkAuth&email=${encodeURIComponent(email)}&callback=authCallback`;
    document.body.appendChild(script);
    
    // Safety timeout
    setTimeout(() => {
        if (btn.disabled && btn.innerText === "AUTHORIZING...") {
            showModal("Timeout", "Server taking too long. Check your internet.");
            btn.disabled = false; btn.innerText = "START EXAMINATION";
        }
    }, 8000);
}

// Global callback for the Google Script to call
window.authCallback = function(result) {
    if (result.auth) {
        startExam();
    } else {
        showModal("Not Eligible", "Email not authorized. Contact JK PAPERS.", "🚫");
        document.getElementById('startBtn').disabled = false;
        document.getElementById('startBtn').innerText = "START EXAMINATION";
    }
};

function startExam() {
    studentData = {
        name: document.getElementById('name').value,
        parentage: document.getElementById('parent').value,
        ro: document.getElementById('ro').value,
        email: document.getElementById('email').value,
        attempt: document.getElementById('attempt').value
    };
    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'flex';
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= questions.length) return endExam();
    const q = questions[currentIdx];
    let html = `<div class="question">Q${currentIdx + 91}. ${q.q}</div>`;
    q.a.forEach((opt, i) => html += `<div class="option" onclick="selectOption(${i})" id="opt${i}">${opt}</div>`);
    document.getElementById('questionBox').innerHTML = html;
    updateProgress(); startTimer();
}

function selectOption(i) {
    document.querySelectorAll('.option').forEach(el => el.classList.remove('active'));
    document.getElementById('opt' + i).classList.add('active');
    userAnswers[currentIdx] = i;
}

function startTimer() {
    clearInterval(timerInterval); timeLeft = 60;
    document.getElementById('timer').innerText = `TIME: ${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--; document.getElementById('timer').innerText = `TIME: ${timeLeft}s`;
        if (timeLeft <= 0) handleNext(true);
    }, 1000);
}

function handleNext(isSkip) {
    if (!isSkip && userAnswers[currentIdx] === undefined) return showModal("Note", "Select an answer.");
    if (isSkip && userAnswers[currentIdx] === undefined) userAnswers[currentIdx] = -1;
    currentIdx++; showQuestion();
}

function updateProgress() {
    document.getElementById('progress').style.width = (currentIdx / questions.length) * 100 + "%";
}

function endExam() {
    clearInterval(timerInterval);
    document.getElementById('screen2').style.display = 'none';
    document.getElementById('screen3').style.display = 'flex';
    const key = JSON.parse(atob(_0xSECRET));
    let score = 0, reviewHtml = "";
    
    questions.forEach((q, i) => {
        const u = userAnswers[i], c = key[i];
        if (u === c) score += 1; else if (u !== -1 && u !== undefined) score -= 0.25;
        const col = u === c ? 'var(--success)' : 'var(--danger)';
        reviewHtml += `<div class="history-item"><div class="history-q">Q${i+91}. ${q.q}</div><div style="color:${col}">Your Answer: ${u === -1 || u === undefined ? 'Skipped' : q.a[u]}</div></div>`;
    });
    
    studentData.score = score.toFixed(2);
    document.getElementById('finalScore').innerText = studentData.score;
    document.getElementById('review').innerHTML = reviewHtml;

    // Final submission using img beacon (100% CORS-proof)
    const finalUrl = `${API_URL}?action=submit&studentData=${encodeURIComponent(JSON.stringify(studentData))}`;
    const img = new Image();
    img.src = finalUrl;
}
