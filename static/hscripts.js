document.addEventListener("DOMContentLoaded", function() {
    const gifElement = document.getElementById("heroGif");
    const ctaButton = document.getElementById("ctaButton");

    // 动图背景显示 5 秒
    const gifDuration = 5000;

    setTimeout(() => {
        // 隐藏动图背景
        gifElement.style.display = "none";

        // 切换为静态背景图片
        document.querySelector(".hero").style.backgroundImage = "url('https://static.igem.wiki/teams/5367/home/hero-bg.png')";

        // 显示 CTA 按钮
        ctaButton.style.display = "block";
    }, gifDuration);
});



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('add-more').addEventListener('click', function() {
    var additionalContent = document.getElementById('additional-content');
    if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
        additionalContent.style.display = 'flex'; // 显示更多内容
        this.innerHTML = '<h3>Show Less...</h3>'; // 更改按钮文字
    } else {
        additionalContent.style.display = 'none'; // 隐藏内容
        this.innerHTML = '<h3>Add More...</h3>'; // 恢复按钮文字
    }
});


// Hover effect for feature cards
const featureCards = document.querySelectorAll('.feature');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.vision-title');
    
    // Scale effect for the title
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
    });
    
    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });
    
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(highlight => {
        highlight.addEventListener('click', () => {
            const newBg = highlight.getAttribute('data-bg');
            document.body.style.backgroundImage = `url('${newBg}')`;
        });
    });
});


// Sticky navbar background change
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlight');

    highlights.forEach(highlight => {
        // Change background image on mouseover
        highlight.addEventListener('mouseover', () => {
            const newBg = highlight.getAttribute('data-bg');
            document.body.style.backgroundImage = `url('${newBg}')`;
        });

        // Revert to default background when the mouse leaves the highlighted text
        highlight.addEventListener('mouseout', () => {
            document.body.style.backgroundImage = "url('default-bg.jpg')";
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dynamicSection = document.querySelector('.dynamic-background-section');
    const highlights = document.querySelectorAll('.highlight');

    highlights.forEach(highlight => {
        // Change background image on mouseover
        highlight.addEventListener('mouseover', () => {
            const newBg = highlight.getAttribute('data-bg');
            dynamicSection.style.backgroundImage = `url('${newBg}')`;
        });

        // Revert to default background when the mouse leaves the highlighted text
        highlight.addEventListener('mouseout', () => {
            dynamicSection.style.backgroundImage = "url('default-bg.jpg')";
        });
    });
});
