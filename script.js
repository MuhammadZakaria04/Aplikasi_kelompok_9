const terms = {
    umum: ["Petroleum", "Hydrocarbon", "Reservoir", "Exploration", "Seismic Survey"],
    geologi: ["Source Rock", "Cap Rock", "Trap", "Porosity", "Permeability"],
    pengeboran: ["Drill Bit", "Mud", "Casing", "Blowout", "Kick"],
    produksi: ["Wellhead", "Artificial Lift", "Separator", "Flowline", "Enhanced Oil Recovery (EOR)"],
    teknik: ["BOP (Blowout Preventer)", "PVT Analysis", "Completion", "Production Logging", "Shut-in Pressure"],
    ekonomi: ["Reserves", "Recovery Factor", "CapEx (Capital Expenditure)", "OpEx (Operating Expenditure)", "Decline Curve"]
};

const definitions = {
    "Petroleum": "Minyak bumi yang ditemukan di reservoir alami.",
    "Hydrocarbon": "Senyawa kimia yang terdiri dari hidrogen dan karbon, komponen utama minyak dan gas.",
    "Reservoir": "Lapisan batuan tempat hidrokarbon terperangkap.",
    "Exploration": "Proses mencari minyak dan gas bumi.",
    "Seismic Survey": "Metode eksplorasi menggunakan gelombang seismik untuk memetakan bawah permukaan.",
    "Source Rock": "Batuan yang menghasilkan hidrokarbon.",
    "Cap Rock": "Batuan penutup yang mencegah migrasi hidrokarbon.",
    "Trap": "Struktur geologi yang menjebak hidrokarbon.",
    "Porosity": "Ruang pori dalam batuan yang menyimpan hidrokarbon.",
    "Permeability": "Kemampuan batuan untuk mengalirkan fluida.",
    "Drill Bit": "Alat pemotong pada ujung pipa pengeboran.",
    "Mud": "Lumpur pengeboran untuk pendinginan dan stabilisasi lubang bor.",
    "Casing": "Pipa baja yang melapisi lubang bor untuk memperkuat dindingnya.",
    "Blowout": "Pelepasan fluida tak terkendali dari sumur.",
    "Kick": "Tekanan fluida reservoir masuk ke dalam lubang bor.",
    "Wellhead": "Peralatan di atas sumur untuk mengontrol aliran fluida.",
    "Artificial Lift": "Teknik meningkatkan produksi seperti pompa atau gas lift.",
    "Separator": "Alat pemisah minyak, gas, dan air di permukaan.",
    "Flowline": "Pipa yang membawa fluida dari sumur ke fasilitas produksi.",
    "Enhanced Oil Recovery (EOR)": "Teknik untuk meningkatkan perolehan minyak.",
    "BOP (Blowout Preventer)": "Alat untuk mencegah blowout.",
    "PVT Analysis": "Analisis tekanan, volume, dan temperatur fluida reservoir.",
    "Completion": "Proses penyelesaian sumur agar siap berproduksi.",
    "Production Logging": "Logging untuk memonitor performa sumur.",
    "Shut-in Pressure": "Tekanan sumur saat aliran fluida dihentikan.",
    "Reserves": "Jumlah hidrokarbon yang dapat diproduksi secara ekonomis.",
    "Recovery Factor": "Persentase hidrokarbon yang berhasil diproduksi.",
    "CapEx (Capital Expenditure)": "Biaya modal untuk eksplorasi dan produksi.",
    "OpEx (Operating Expenditure)": "Biaya operasional sehari-hari.",
    "Decline Curve": "Grafik yang menunjukkan penurunan produksi sumur."
};

let isTermsVisible = false;

function toggleTerms() {
    const modal = document.getElementById('termsModal');
    const categoryTermsList = document.getElementById('categoryTermsList');
    isTermsVisible = !isTermsVisible;
    modal.style.display = isTermsVisible ? 'block' : 'none';
    categoryTermsList.style.display = 'none';
    showMainCategories();
}

function showMainCategories() {
    const categoryList = document.querySelector('.category-list');
    const categoryTermsList = document.getElementById('categoryTermsList');
    categoryList.style.display = 'block';
    categoryTermsList.style.display = 'none';
}

function showCategoryTerms(category) {
    const categoryTermsList = document.getElementById('categoryTermsList');
    const categoryList = document.querySelector('.category-list');
    
    categoryTermsList.innerHTML = '';
    categoryTermsList.style.display = 'block';
    categoryList.style.display = 'none';

    const backButton = document.createElement('button');
    backButton.className = 'back-button';
    backButton.textContent = '← Kembali';
    backButton.onclick = showMainCategories;
    categoryTermsList.appendChild(backButton);

    terms[category].forEach(term => {
        const termDiv = document.createElement('div');
        termDiv.className = 'term-item';
        termDiv.textContent = term;
        categoryTermsList.appendChild(termDiv);
    });
}

function searchTerm() {
    const searchInput = document.getElementById('searchInput');
    const term = searchInput.value.trim();
    
    if (term === '') {
        alert('Silakan masukkan istilah yang ingin dicari!');
        return;
    }

    const definition = definitions[term];
    if (definition) {
        alert(`${term}:\n\n${definition}`);
    } else {
        const termLower = term.toLowerCase();
        const foundTerm = Object.keys(definitions).find(key => 
            key.toLowerCase() === termLower
        );
        
        if (foundTerm) {
            alert(`${foundTerm}:\n\n${definitions[foundTerm]}`);
        } else {
            alert('Istilah tidak ditemukan dalam kamus.');
        }
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchTerm();
    }
});