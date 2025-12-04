// ナビゲーションのスムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            // モバイルメニューを閉じる
            navMenu.classList.remove('active');
        }
    });
});

// ハンバーガーメニューのトグル
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ナビゲーションバーのスクロール効果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// メニュータブの切り替え
const tabButtons = document.querySelectorAll('.tab-btn');
const menuSections = document.querySelectorAll('.menu-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // アクティブなタブとセクションをリセット
        tabButtons.forEach(btn => btn.classList.remove('active'));
        menuSections.forEach(section => section.classList.remove('active'));
        
        // クリックされたタブをアクティブに
        button.classList.add('active');
        
        // 対応するセクションを表示
        const tabId = button.getAttribute('data-tab');
        const targetSection = document.getElementById(tabId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// 予約フォームの処理
const reservationForm = document.getElementById('reservationForm');
const reservationMessage = document.getElementById('reservationMessage');

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(reservationForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            guests: formData.get('guests'),
            date: formData.get('date'),
            time: formData.get('time'),
            message: formData.get('message')
        };
        
        // バリデーション
        if (!data.name || !data.email || !data.phone || !data.guests || !data.date || !data.time) {
            showMessage('すべての必須項目を入力してください。', 'error');
            return;
        }
        
        // 日付のバリデーション（過去の日付は不可）
        const selectedDate = new Date(data.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showMessage('過去の日付は選択できません。', 'error');
            return;
        }
        
        // メールアドレスのバリデーション
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('有効なメールアドレスを入力してください。', 'error');
            return;
        }
        
        // 成功メッセージの表示（実際のアプリケーションではサーバーに送信）
        showMessage('ご予約ありがとうございます。確認のメールを送信いたしました。', 'success');
        
        // フォームをリセット
        reservationForm.reset();
        
        // コンソールにデータを出力（デモ用）
        console.log('予約データ:', data);
    });
}

// メッセージ表示関数
function showMessage(message, type) {
    reservationMessage.textContent = message;
    reservationMessage.className = `reservation-message ${type}`;
    
    // 3秒後にメッセージを非表示にする
    setTimeout(() => {
        reservationMessage.className = 'reservation-message';
    }, 5000);
}

// 日付入力の最小値を今日に設定
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// スクロールアニメーション（Intersection Observer）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-content, .menu-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

