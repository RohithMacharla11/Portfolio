document.addEventListener('sectionsLoaded', () => {
    console.log("certificate.js: sectionsLoaded event received, starting rendering");

    // Manually defined static certificate data
    const certificates = [
        {
            Img: '../assets/certificates/InfosySpringBoard.png',
            Title: 'Infosys SpringBoard Internship Certificate'
        },
        {
            Img: '../assets/certificates/GooleDeveloperCertificate.png',
            Title: 'Google Developers Internship Certificate'
        },
        {
            Img: '../assets/certificates/Mictosoft Azure Fundamental.png',
            Title: 'Microsoft Azure Fundamental'
        },
        {
            Img: '../assets/certificates/monosage Internship.png',
            Title: 'Monosage Internship Certificate'
        },
        {
            Img: '../assets/certificates/psycology.png',
            Title: 'Introduction to Psycology'
        },
        {
            Img: '../assets/certificates/12hourshackethon.png',
            Title: '12 Hours Programming Hackathon'
        },
        {
            Img: '../assets/certificates/introductiontoNetworks.png',
            Title: 'Introduction to Networks'
        },
        {
            Img: '../assets/certificates/awsCloud Pipeline.png',
            Title: ' AWS Academy Cloud Data Pipeline Builder'
        },
        {
            Img: '../assets/certificates/AWS Academy Cloud Web Application Builder.png',
            Title: 'AWS Academy Cloud Web Application Builder'
        },
        {
            Img: '../assets/certificates/PythonFullStack.png',
            Title: 'Python FullStack'
        },
        {
            Img: '../assets/certificates/Data Analytics Essentials.png',
            Title: 'Data Analytics Essentials'
        },
        {
            Img: '../assets/certificates/Networking Basics.png',
            Title: 'Networking Basics'
        },
        {
            Img: '../assets/certificates/Wireless Essentials.png',
            Title: 'Switching, Routing, and Wireless Essentials'
        },
        {
            Img: '../assets/certificates/Data Visualisation.png',
            Title: 'Data Visualisation'
        },
        {
            Img: '../assets/certificates/Data Structures and Algorithms.png',
            Title: 'Data Structures and Algorithms'
        },
        {
            Img: '../assets/certificates/Computer Networking.png',
            Title: 'Computer Networking'
        },
        {
            Img: '../assets/certificates/Google Project Management.png',
            Title: 'Google Project Management'
        },
        {
            Img: '../assets/certificates/IBM Machine Learning.png',
            Title: 'IBM Machine Learning'
        },
        {
            Img: '../assets/certificates/java Programming.png',
            Title: 'Java Programming and Software Engineering Fundamentals'
        },
        {
            Img: '../assets/certificates/operatingSystem.png',
            Title: 'Introduction to Operating Systems'
        },
        {
            Img: '../assets/certificates/Meta Back-End Developer.png',
            Title: 'Meta Back-End Developer'
        },
        {
            Img: '../assets/certificates/Meta Front-End Developer.png',
            Title: 'Meta Front-End Developer'
        },
        {
            Img: '../assets/certificates/Software Engineering.png',
            Title: 'Software Engineering: Modeling Software Systems using UML'
        },
        {
            Img: '../assets/certificates/AIML_CLUB_VICECHAIR.png',
            Title: 'AIML_CLUB_VICECHAIR'
        },
        {
            Img: '../assets/certificates/tableTennis.png',
            Title: 'Inter Department Table Tennis Certificate'
        },
        {
            Img: '../assets/certificates/blockchain.png',
            Title: 'BlockChain Workshop'
        },
    ];

    // Responsive initial items
    const isMobile = window.innerWidth < 768;
    const initialItems = isMobile ? 4 : 6;
    let showAllCertificates = false;

    // Render Certificates
    function renderCertificates() {
        const certificateGrid = document.querySelector('#certificates .certificate-grid');
        if (!certificateGrid) {
            console.error("Certificate grid element not found");
            return;
        }
        console.log(`Rendering ${showAllCertificates ? certificates.length : initialItems} certificates`);
        const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);
        certificateGrid.innerHTML = displayedCertificates.map((certificate, index) => {
            console.log(`Rendering certificate: ${certificate.Title}`);
            return `
                <div class="certificate-card" data-aos="${index % 3 === 0 ? 'fade-up-right' : index % 3 === 1 ? 'fade-up' : 'fade-up-left'}" data-aos-duration="${index % 3 === 0 ? '1000' : index % 3 === 1 ? '1200' : '1000'}">
                    <img src="${certificate.Img}" alt="${certificate.Title}">
                    <div class="certificate-overlay">
                        <div class="certificate-overlay-content">
                            <p>${certificate.Title}</p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        renderToggleButton();
        console.log("Certificates rendered successfully");
    }

    // Render Toggle Button
    function renderToggleButton() {
        const seeMoreBtn = document.querySelector('#certificates .see-more-btn');
        if (!seeMoreBtn) {
            console.error("See more button for certificates not found");
            return;
        }
        const shouldShowButton = certificates.length > initialItems;
        if (shouldShowButton) {
            seeMoreBtn.innerHTML = `
                <button class="${showAllCertificates ? 'show-less' : ''}" data-type="certificates">
                    ${showAllCertificates ? 'See Less' : 'See More'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="${showAllCertificates ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}"></polyline>
                    </svg>
                </button>
            `;
            console.log("Toggle button for certificates rendered");
        } else {
            seeMoreBtn.innerHTML = '';
        }
    }

    // Toggle Show More/Less
    document.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('#certificates .see-more-btn button');
        if (toggleBtn) {
            console.log("Certificates toggle button clicked");
            showAllCertificates = !showAllCertificates;
            renderCertificates();
        }
    });

    // Initial Render
    renderCertificates();
});