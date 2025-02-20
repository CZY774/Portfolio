interface Tool {
    name: string;
    icon: string;
}

interface WorkItems {
    type: 'web' | 'photo' | 'video';
    title: string;
    image: string;
    link?: string;
    description: string;
    videoUrl?: string;
}

declare const feather: any;
declare const AOS: any;

feather.replace();

AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom'
});

const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
const html = document.documentElement;

const getPreferredTheme = (): 'dark' | 'light' => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme: 'dark' | 'light'): void => {
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
};

setTheme(getPreferredTheme());

themeToggle?.addEventListener('click', () => {
    const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
    setTheme(newTheme);
});

// const menuToggle = document.getElementById('menu-toggle');
// const mobileMenu = document.getElementById('mobile-menu');

function initializeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('menu-toggle');
    
    if (!menu || !toggle) return;

    const menuLinks = menu.querySelectorAll('a');
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!menu.contains(target) && !toggle.contains(target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

const toolsData: Tool[] = [
    { name: 'Visual Studio Code', icon: 'code' },
    { name: 'Adobe Illustrator', icon: 'pen-tool' },
    { name: 'Adobe Premiere Pro', icon: 'film' },
    { name: 'Adobe After Effects', icon: 'video' },
    { name: 'Adobe Photoshop', icon: 'image' },
    { name: 'Adobe Lightroom', icon: 'sliders' },
    { name: 'Adobe Audition', icon: 'mic' },
    { name: 'Figma', icon: 'layout' }
];

const toolsGrid = document.querySelector('.tools-grid');
toolsData.forEach(tool => {
    const toolDiv = document.createElement('div');
    toolDiv.className = 'tool-item dark:bg-gray-700 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300';
    toolDiv.innerHTML = `
        <i data-feather="${tool.icon}" class="w-6 h-6 mb-2"></i>
        <p class="text-sm font-medium text-center">${tool.name}</p>
    `;
    toolsGrid?.appendChild(toolDiv);
});

const themeToggleMobile = document.getElementById('theme-toggle-mobile');
if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', () => {
        const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

/* 
* Declare current version
* @version 1.0.0 - Initial version (19th Feb 2025 1.55 am)
* Change the version when there is a new update */
const imageVersion = '1.0.0';

const workItems: WorkItems[] = [
    {
        type: 'web',
        title: 'Muncul River Tubing',
        image: `img/website-1.png?v=${imageVersion}`,
        link: 'https://munculrivertubing.com',
        description: 'Bussiness website built with Laravel & Bootstrap'
    },
    {
        type: 'web',
        title: 'Kapita Selekta Alfamart',
        image: `img/website-2.png?v=${imageVersion}`,
        link: 'https://yoga-672022204-service-975615093796.asia-southeast2.run.app/',
        description: 'VMS platform using Python, Flask, Redis, MongoDB, & deployed on GCP'
    },
    {
        type: 'web',
        title: 'Bubble Laundry',
        image: `img/website-3.png?v=${imageVersion}`,
        link: 'https://czy774.github.io/bubble_laundry/',
        description: 'Self-service laundry website built with Bootstrap'
    },
    {
        type: 'web',
        title: 'Point of Sale',
        image: `img/website-4.png?v=${imageVersion}`,
        link: 'https://github.com/CZY774/learn-cpp/blob/a678cc23e28c124a1a726b96893a884758426f00/tts.cpp',
        description: 'Implementing struct and file handling with C++'
    },
    {
        type: 'web',
        title: 'Clothes Shopping App',
        image: `img/website-5.png?v=${imageVersion}`,
        link: 'https://github.com/CZY774/C-program/blob/main/tugas-rancang.c',
        description: 'Clothes shopping app built with C that implements struct, file handling, sorting, and searching algorithms.'
    },
    {
        type: 'web',
        title: 'Supermarket & Warehouse Management System',
        image: `img/website-6.png?v=${imageVersion}`,
        link: 'https://github.com/CZY774/gudang-supermarket-java-netbeans',
        description: 'A system built in Java using NetBeans IDE and MySQL, featuring OOP principles and real-time time tracking.'
    },
    {
        type: 'photo',
        title: 'Shutter Bliss',
        image: `img/photo-1.jpg?v=${imageVersion}`,
        description: 'Photography series exploring nature'
    },
    {
        type: 'photo',
        title: 'Street Snapshot',
        image: `img/photo-2.jpg?v=${imageVersion}`,
        description: 'Photography series capturing street scenes'
    },
    {
        type: 'photo',
        title: 'Step Up',
        image: `img/photo-3.png?v=${imageVersion}`,
        description: 'Metanoia Youth 45th Anniversary 2022 Poster'
    },
    {
        type: 'photo',
        title: 'Menghayati Keimaman Kristus',
        image: `img/photo-6.jpg?v=${imageVersion}`,
        description: 'Good Friday Service at GKMI Kudus Cabang Muria Indah'
    },
    {
        type: 'photo',
        title: 'Idea To Profit | Be A Smart Entrepreneur',
        image: `img/photo-7.png?v=${imageVersion}`,
        description: 'FIT Competition 2023 Timeline'
    },
    {
        type: 'photo',
        title: 'Blue Sky, Blue Sea',
        image: `img/photo-5.jpg?v=${imageVersion}`,
        description: 'Beautiful landscape photography'
    },
    {
        type: 'photo',
        title: 'Night Drive',
        image: `img/photo-8.jpg?v=${imageVersion}`,
        description: 'Capturing night scenes'
    },
    {
        type: 'video',
        title: 'SMASA MMXXII Last Ceremony',
        image: `img/video-1.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/TXQzKo2j-ok',
        description: 'Senior High School 1 Kudus Batch 2022 Last Ceremony'
    },
    {
        type: 'video',
        title: 'Kita Satu Rumah',
        image: `img/video-2.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/qjXdFmMGn84',
        description: 'Youth Leadership Camp 2022 Shortmovie'
    },
    {
        type: 'video',
        title: 'Company Visit 2024 Aftermovie',
        image: `img/video-4.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/BAlP_WjAJGc',
        description: 'Informatics Engineering goes to Jakarta'
    },
    {
        type: 'video',
        title: 'FIT Competition 2023 Aftermovie',
        image: `img/video-6.png?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/28RYBWVHs1I',
        description: '12 hours live coding competition recap'
    },
    {
        type: 'video',
        title: 'Youthful Enthusiasm in Pandemic',
        image: `img/video-5.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/Iqdgfxyt6Nw',
        description: 'Smasa Euforia 2021 Aftermovie'
    },
    {
        type: 'video',
        title: 'Berbalik',
        image: `img/video-3.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/PKvTvR8fGYA',
        description: 'Metanoia Youth 43rd Anniversary 2020 Shortmovie'
    },
    {
        type: 'video',
        title: 'Please Him',
        image: `img/video-7.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/PcezxGYzLS8',
        description: 'Metanoia Youth 42nd Anniversary 2019 Shortmovie'
    },
    {
        type: 'video',
        title: 'Step Up',
        image: `img/video-8.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/8gnwVo94eoo',
        description: 'Metanoia Youth 45th Anniversary 2022 Shortmovie'
    },
    {
        type: 'video',
        title: 'Step Up Aftermovie',
        image: `img/video-11.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/sADc8-UGbxo',
        description: 'Metanoia Youth 45th Anniversary 2022 Aftermovie'
    },
    {
        type: 'video',
        title: 'Recall',
        image: `img/video-9.jpg?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/LmP06VfOcHo',
        description: 'Youth Leadership Camp 2019 Shortmovie'
    },
    {
        type: 'video',
        title: 'School From Home',
        image: `img/video-10.png?v=${imageVersion}`,
        videoUrl: 'https://www.youtube.com/embed/67zLTv-aCM8',
        description: 'Won the 2nd Place in High School shortmovie competition'
    }
];

const workGrid = document.querySelector('.grid-cols-1');
function populateWorks(category: string = 'all'): void {
    if (!workGrid) return;
    
    workGrid.innerHTML = '';
    workItems
        .filter(item => category === 'all' || item.type === category)
        .forEach(item => {
            const workDiv = document.createElement('div');
            workDiv.className = 'group relative overflow-hidden rounded-lg shadow-lg';
            workDiv.setAttribute('data-aos', 'fade-up');
            
            const lookCloserButton = item.type === 'photo' ? 
                `<button class="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 look-closer" data-image="${item.image}">
                    Look Closer <i data-feather="maximize-2" class="ml-2 w-4 h-4"></i>
                </button>` : '';
            
            const videoButton = item.videoUrl ? 
                `<button class="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 play-video" data-url="${item.videoUrl}">
                    Play Video <i data-feather="play" class="ml-2 w-4 h-4"></i>
                </button>` : '';
            
            workDiv.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 class="text-white text-xl font-bold">${item.title}</h3>
                    <p class="text-gray-200 mt-2">${item.description}</p>
                    ${item.link ? `<a href="${item.link}" target="_blank" class="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300">
                        View Project <i data-feather="arrow-right" class="ml-2 w-4 h-4"></i>
                    </a>` : ''}
                    ${lookCloserButton}
                    ${videoButton}
                </div>
            `;
            
            workGrid.appendChild(workDiv);
        });
        feather.replace();
}

function createImageModal(): HTMLDivElement {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center hidden';
    modal.innerHTML = `
        <div class="relative w-full h-full p-4 flex items-center justify-center">
            <button class="absolute top-4 right-4 text-white hover:text-blue-400" id="close-image-modal">
                <i data-feather="x" class="w-8 h-8"></i>
            </button>
            <img class="max-w-full max-h-full object-contain" src="" alt="Full size image">
        </div>
    `;
    document.body.appendChild(modal);
    feather.replace();
    
    return modal;
}

const imageModal = createImageModal();

document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const lookCloserButton = target.closest('.look-closer');

    if (lookCloserButton) {
        const imgSrc = lookCloserButton.getAttribute('data-image');
        const modalImg = imageModal.querySelector('img');
        // const button = e.target.closest('.look-closer');
        if (modalImg && imgSrc) {
            modalImg.src = imgSrc;
            imageModal.classList.remove('hidden');
        }
        // imageModal.querySelector('img').src = imgSrc;
        // imageModal.classList.remove('hidden');
    }
    
    if (target.closest('#close-image-modal')) {
        imageModal.classList.add('hidden');
    }
});

populateWorks();

const filterButtons = document.querySelectorAll('.work-filter');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-blue-500', 'text-white');
            btn.classList.add('dark:bg-gray-700', 'bg-gray-200');
        });
        
        button.classList.remove('dark:bg-gray-700', 'bg-gray-200');
        button.classList.add('active', 'bg-blue-500', 'text-white');
        
        const category = button.getAttribute('data-category') || 'all';
        populateWorks(category);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            const mobileMenu = document.getElementById('mobile-menu');
            const menuToggle = document.getElementById('menu-toggle');
            if (mobileMenu?.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuToggle?.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
});

function createVideoModal(): HTMLDivElement {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center hidden';
    modal.innerHTML = `
        <div class="relative w-full max-w-[90%] mx-4">
            <button class="absolute -top-10 right-0 text-white hover:text-blue-400" id="close-modal">
                <i data-feather="x" class="w-8 h-8"></i>
            </button>
            <div class="aspect-w-16 aspect-h-9">
                <iframe class="w-full h-[80vh]" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    feather.replace();

    return modal;
}

const videoModal = createVideoModal();
const closeModal = document.getElementById('close-modal');
closeModal?.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    const iframe = videoModal.querySelector('iframe');
    if (iframe) iframe.src = '';
});

document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const playButton = target.closest('.play-video');
    if (playButton) {
        // const button = e.target.closest('.play-video');
        const videoUrl = playButton.getAttribute('data-url');
        const iframe = videoModal.querySelector('iframe');
        if (iframe && videoUrl) {
            iframe.src = videoUrl;
            videoModal.classList.remove('hidden');
        }
        // videoModal.querySelector('iframe').src = videoUrl;
        // videoModal.classList.remove('hidden');
    }
});

const nav = document.querySelector('nav');
const observer = new IntersectionObserver(
    ([entry]) => {
        nav?.classList.toggle('shadow-lg', !entry.isIntersecting);
    },
    { threshold: 0.9 }
);

const firstSection = document.querySelector('section');
if (firstSection) observer.observe(firstSection);


document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
    initializeMobileMenu();
    populateWorks('all');
});