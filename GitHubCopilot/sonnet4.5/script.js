// ===================================
// スムーズスクロール
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// ナビゲーションバーのスクロール効果
// ===================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// モバイルメニュートグル
// ===================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'rgba(26, 26, 26, 0.98)';
    navLinks.style.padding = '20px';
    navLinks.style.gap = '20px';
});

// ナビゲーションリンククリックでメニューを閉じる
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            navLinks.style.display = 'none';
        }
    });
});

// ===================================
// スクロールアニメーション
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素
const animatedElements = document.querySelectorAll(
    '.menu-card, .gallery-item, .about-text, .about-image, .contact-info, .contact-form'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// 予約フォームの処理
// ===================================
const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // フォームデータの取得
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value,
        course: document.getElementById('course').value,
        message: document.getElementById('message').value
    };
    
    // 日付のバリデーション（過去の日付は選択不可）
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('過去の日付は選択できません。');
        return;
    }
    
    // 確認メッセージ
    const confirmMessage = `
以下の内容でご予約を承りますか？

お名前: ${formData.name}
メールアドレス: ${formData.email}
電話番号: ${formData.phone}
ご希望日: ${formData.date}
ご希望時間: ${formData.time}
人数: ${formData.guests}
コース: ${getCourseName(formData.course)}
${formData.message ? '\nメッセージ: ' + formData.message : ''}

※この予約は仮予約です。
後ほど、お店からご連絡させていただきます。
    `;
    
    if (confirm(confirmMessage)) {
        // 実際の実装では、ここでサーバーにデータを送信します
        console.log('予約データ:', formData);
        
        // 成功メッセージ
        alert('ご予約を承りました。\n確認のメールをお送りいたしますので、しばらくお待ちください。');
        
        // フォームのリセット
        reservationForm.reset();
    }
});

// コース名を取得する関数
function getCourseName(courseValue) {
    const courseNames = {
        'lunch': 'ランチコース (¥18,000)',
        'dinner': 'ディナーコース (¥35,000)',
        'prestige': 'プレステージュコース (¥55,000)'
    };
    return courseNames[courseValue] || courseValue;
}

// ===================================
// 日付入力の最小値を今日に設定
// ===================================
const dateInput = document.getElementById('date');
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const minDate = tomorrow.toISOString().split('T')[0];
dateInput.setAttribute('min', minDate);

// ===================================
// ギャラリー画像のモーダル表示（オプション）
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // モーダル表示の実装（簡易版）
        const itemClone = item.cloneNode(true);
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0, 0, 0, 0.9)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '10000';
        modal.style.cursor = 'pointer';
        
        itemClone.style.maxWidth = '90%';
        itemClone.style.maxHeight = '90%';
        itemClone.style.cursor = 'default';
        
        modal.appendChild(itemClone);
        document.body.appendChild(modal);
        
        // クリックでモーダルを閉じる
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // ESCキーでモーダルを閉じる
        const closeOnEsc = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', closeOnEsc);
            }
        };
        document.addEventListener('keydown', closeOnEsc);
    });
});

// ===================================
// ページロード時のアニメーション
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// スタッツカウンターアニメーション
// ===================================
const stats = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            // 数字の場合のみアニメーション
            const text = entry.target.textContent;
            if (text.includes('+')) {
                const num = parseInt(text);
                animateCounter(entry.target, 0, num, 2000);
            }
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}
